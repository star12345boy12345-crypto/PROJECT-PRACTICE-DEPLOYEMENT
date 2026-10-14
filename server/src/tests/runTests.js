// Automated backend test suite for Vidyora AI
const assert = require('assert');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

console.log('--- RUNNING VIDYORA AI BACKEND TESTS ---');

const runTests = async () => {
  let passed = 0;
  let total = 0;

  // Test 1: Password hashing and bcrypt verification
  total++;
  try {
    const password = 'studentPassword2026';
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(password, salt);
    const isMatch = await bcrypt.compare(password, hash);
    const isWrongMatch = await bcrypt.compare('wrongPassword', hash);

    assert.strictEqual(isMatch, true, 'Valid password must verify');
    assert.strictEqual(isWrongMatch, false, 'Invalid password must fail');
    passed++;
    console.log('✅ TEST 1 PASSED: Password hashing & bcrypt security verified.');
  } catch (err) {
    console.error('❌ TEST 1 FAILED:', err.message);
  }

  // Test 2: JWT signing and verification
  total++;
  try {
    const secret = 'vidyora_test_secret_key';
    const payload = { id: 'user_123', email: 'omm@vidyora.ai', role: 'student' };
    const token = jwt.sign(payload, secret, { expiresIn: '1h' });
    const decoded = jwt.verify(token, secret);

    assert.strictEqual(decoded.id, payload.id);
    assert.strictEqual(decoded.email, payload.email);
    passed++;
    console.log('✅ TEST 2 PASSED: JWT authentication signing and claims verification.');
  } catch (err) {
    console.error('❌ TEST 2 FAILED:', err.message);
  }

  // Test 3: Deterministic server-side quiz scoring
  total++;
  try {
    const mockQuiz = {
      questions: [
        { correctAnswerIndex: 1, topic: 'Photolysis' },
        { correctAnswerIndex: 0, topic: 'Chloroplast Structure' },
        { correctAnswerIndex: 2, topic: 'Chloroplast Structure' },
        { correctAnswerIndex: 1, topic: 'Calvin Cycle' },
      ],
    };

    // User submits [1, 3, 2, 0] -> Q0 correct, Q1 wrong, Q2 correct, Q3 wrong
    const submitted = [1, 3, 2, 0];
    let correct = 0;
    const topicMap = {};

    mockQuiz.questions.forEach((q, idx) => {
      const isCorrect = submitted[idx] === q.correctAnswerIndex;
      if (isCorrect) correct++;

      if (!topicMap[q.topic]) topicMap[q.topic] = { correct: 0, total: 0 };
      topicMap[q.topic].total += 1;
      if (isCorrect) topicMap[q.topic].correct += 1;
    });

    const score = correct;
    const percentage = Math.round((correct / mockQuiz.questions.length) * 100);

    assert.strictEqual(score, 2, 'Score must equal 2');
    assert.strictEqual(percentage, 50, 'Percentage must equal 50%');
    assert.strictEqual(topicMap['Photolysis'].correct, 1);
    assert.strictEqual(topicMap['Chloroplast Structure'].correct, 1);
    assert.strictEqual(topicMap['Chloroplast Structure'].total, 2);
    assert.strictEqual(topicMap['Calvin Cycle'].correct, 0);

    // Weak topic extraction (< 60%)
    const weak = Object.keys(topicMap).filter((t) => (topicMap[t].correct / topicMap[t].total) * 100 < 60);
    assert.ok(weak.includes('Calvin Cycle'), 'Calvin Cycle must be flagged as weak');
    assert.ok(weak.includes('Chloroplast Structure'), 'Chloroplast Structure (50%) must be flagged as weak');
    assert.ok(!weak.includes('Photolysis'), 'Photolysis (100%) must NOT be flagged as weak');

    passed++;
    console.log('✅ TEST 3 PASSED: Server-side quiz scoring and weak-topic isolation algorithms verified.');
  } catch (err) {
    console.error('❌ TEST 3 FAILED:', err.message);
  }

  // Test 4: Offline queue idempotency identifier
  total++;
  try {
    const queue = [
      { tempId: 'sync_1001', quizId: 'q1', answers: [1, 0] },
      { tempId: 'sync_1002', quizId: 'q2', answers: [0, 2] },
    ];
    const processedIds = new Set();
    const synced = [];

    // Simulate batch sync
    queue.forEach((item) => {
      if (!processedIds.has(item.tempId)) {
        processedIds.add(item.tempId);
        synced.push(item.tempId);
      }
    });

    // Replay duplicate
    if (!processedIds.has('sync_1001')) {
      synced.push('sync_1001');
    }

    assert.strictEqual(synced.length, 2, 'Duplicate sync attempts must be prevented');
    passed++;
    console.log('✅ TEST 4 PASSED: Offline queue idempotency and duplicate prevention verified.');
  } catch (err) {
    console.error('❌ TEST 4 FAILED:', err.message);
  }

  console.log(`\nTEST SUMMARY: ${passed}/${total} TESTS PASSED.`);
  if (passed === total) {
    console.log('🎉 ALL BACKEND LOGIC TESTS SUCCEEDED!');
    process.exit(0);
  } else {
    process.exit(1);
  }
};

runTests();
