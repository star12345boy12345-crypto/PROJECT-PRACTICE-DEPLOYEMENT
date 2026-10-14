import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { studyTasksAPI } from '../services/api';
import { useLanguage } from '../contexts/LanguageContext';
import {
  CalendarCheck,
  Plus,
  Trash2,
  CheckCircle2,
  Circle,
  AlertCircle,
  Sparkles,
  Clock,
  Loader2,
  ChevronLeft
} from 'lucide-react';

export default function StudyPlannerPage() {
  const navigate = useNavigate();
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState('all');
  const [loading, setLoading] = useState(true);

  // Form
  const [title, setTitle] = useState('');
  const [subject, setSubject] = useState('Science');
  const [topic, setTopic] = useState('');
  const [priority, setPriority] = useState('Medium');
  const { lang, t } = useLanguage();

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    try {
      setLoading(true);
      const res = await studyTasksAPI.getTasks();
      setTasks(res.data.tasks || []);
    } catch (err) {
      console.error('Failed to load study tasks:', err);
    } finally {
      setLoading(false);
    }
  };

  const handleCreateTask = async (e) => {
    e.preventDefault();
    if (!title.trim()) return;

    try {
      const res = await studyTasksAPI.createTask({
        title: title.trim(),
        subject,
        topic: topic.trim(),
        priority,
      });
      setTasks([res.data.task, ...tasks]);
      setTitle('');
      setTopic('');
    } catch (err) {
      console.error('Failed to create task:', err);
    }
  };

  const handleToggle = async (id, currentCompleted) => {
    try {
      await studyTasksAPI.updateTask(id, { completed: !currentCompleted });
      setTasks(tasks.map((t) => (t._id === id ? { ...t, completed: !currentCompleted } : t)));
    } catch (err) {
      console.error('Failed to toggle task:', err);
    }
  };

  const handleDelete = async (id) => {
    try {
      await studyTasksAPI.deleteTask(id);
      setTasks(tasks.filter((t) => t._id !== id));
    } catch (err) {
      console.error('Failed to delete task:', err);
    }
  };

  const filteredTasks = tasks.filter((t) => {
    if (filter === 'pending') return !t.completed;
    if (filter === 'completed') return t.completed;
    return true;
  });

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-6">
      
      {/* Back Button */}
      <div>
        <button
          onClick={() => {
            if (window.history.length > 1) {
              navigate(-1);
            } else {
              navigate('/dashboard');
            }
          }}
          className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-white border border-slate-200 text-xs font-bold text-brand-navy hover:bg-slate-50 transition-all shadow-2xs group cursor-pointer"
        >
          <ChevronLeft className="w-4 h-4 text-brand-teal group-hover:-translate-x-0.5 transition-transform" />
          <span>{lang === 'or' ? '← ପଛକୁ ଫେରନ୍ତୁ (Back)' : '← Back to Dashboard'}</span>
        </button>
      </div>

      {/* Header */}
      <div>
        <h1 className="text-2xl sm:text-3xl font-extrabold text-brand-navy">
          {t('nav.studyPlanner')}
        </h1>
        <p className="text-xs sm:text-sm text-slate-500">
          {lang === 'or' ? 'ପରୀକ୍ଷା ପ୍ରସ୍ତୁତି ଓ ପୁନରାବୃତ୍ତି ପାଇଁ ଆପଣଙ୍କ ବ୍ୟକ୍ତିଗତ ଯୋଜନା' : 'Personalized revision scheduler integrating weak topic recommendations'}
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
        
        {/* Create Task Form */}
        <div className="glass-panel p-6 rounded-3xl border border-slate-200/90 shadow-sm space-y-4">
          <h3 className="text-sm font-extrabold text-brand-navy flex items-center gap-2">
            <Plus className="w-4 h-4 text-brand-teal" />
            <span>Schedule New Revision Task</span>
          </h3>

          <form onSubmit={handleCreateTask} className="space-y-3">
            <div className="space-y-1">
              <label className="text-xs font-bold text-slate-600">Task Title</label>
              <input
                type="text"
                required
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="e.g. Revise Photosynthesis formulas"
                className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-slate-200 text-xs font-medium focus:ring-2 focus:ring-brand-teal/40 outline-none"
              />
            </div>

            <div className="space-y-1">
              <label className="text-xs font-bold text-slate-600">Subject</label>
              <select
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                className="w-full px-3 py-2 rounded-xl bg-white border border-slate-200 text-xs font-bold text-brand-navy outline-none"
              >
                <option value="Science">Science (ବିଜ୍ଞାନ)</option>
                <option value="Mathematics">Mathematics (ଗଣିତ)</option>
                <option value="English">English</option>
                <option value="Social Science">Social Science</option>
                <option value="Computer Science">Computer Science</option>
              </select>
            </div>

            <div className="space-y-1">
              <label className="text-xs font-bold text-slate-600">Specific Topic</label>
              <input
                type="text"
                value={topic}
                onChange={(e) => setTopic(e.target.value)}
                placeholder="e.g. Light Reaction"
                className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-slate-200 text-xs font-medium focus:ring-2 focus:ring-brand-teal/40 outline-none"
              />
            </div>

            <div className="space-y-1">
              <label className="text-xs font-bold text-slate-600">Priority Level</label>
              <select
                value={priority}
                onChange={(e) => setPriority(e.target.value)}
                className="w-full px-3 py-2 rounded-xl bg-white border border-slate-200 text-xs font-bold text-brand-navy outline-none"
              >
                <option value="High">High Priority</option>
                <option value="Medium">Medium Priority</option>
                <option value="Low">Low Priority</option>
              </select>
            </div>

            <button
              type="submit"
              className="w-full mt-2 py-3 rounded-xl bg-brand-navy text-white text-xs font-extrabold hover:bg-brand-navyLight shadow-md btn-3d"
            >
              Add to Study Schedule
            </button>
          </form>
        </div>

        {/* Task List & Filter */}
        <div className="lg:col-span-2 space-y-4">
          
          {/* Filters */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-1 bg-white p-1 rounded-2xl border border-slate-200 shadow-2xs">
              <button
                onClick={() => setFilter('all')}
                className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${
                  filter === 'all' ? 'bg-brand-navy text-white' : 'text-slate-600'
                }`}
              >
                All ({tasks.length})
              </button>
              <button
                onClick={() => setFilter('pending')}
                className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${
                  filter === 'pending' ? 'bg-brand-navy text-white' : 'text-slate-600'
                }`}
              >
                Pending ({tasks.filter((t) => !t.completed).length})
              </button>
              <button
                onClick={() => setFilter('completed')}
                className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${
                  filter === 'completed' ? 'bg-brand-navy text-white' : 'text-slate-600'
                }`}
              >
                Completed ({tasks.filter((t) => t.completed).length})
              </button>
            </div>
          </div>

          {/* List */}
          {loading ? (
            <div className="py-16 flex justify-center">
              <Loader2 className="w-8 h-8 text-brand-teal animate-spin" />
            </div>
          ) : filteredTasks.length > 0 ? (
            <div className="space-y-3">
              {filteredTasks.map((t) => (
                <div
                  key={t._id}
                  className={`p-4 rounded-2xl border transition-all flex items-start justify-between gap-3 ${
                    t.completed
                      ? 'bg-slate-50 border-slate-200 opacity-60'
                      : 'bg-white border-slate-200/90 shadow-2xs hover:border-brand-teal/50'
                  }`}
                >
                  <div
                    onClick={() => handleToggle(t._id, t.completed)}
                    className="flex items-start gap-3 cursor-pointer flex-1"
                  >
                    {t.completed ? (
                      <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                    ) : (
                      <Circle className="w-5 h-5 text-slate-300 shrink-0 mt-0.5" />
                    )}
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <span className={`text-[10px] font-bold px-2 py-0.5 rounded-md ${
                          t.priority === 'High' ? 'bg-rose-100 text-rose-700' : 'bg-slate-100 text-slate-600'
                        }`}>
                          {t.priority}
                        </span>
                        <h4 className={`text-sm font-bold text-brand-navy ${t.completed ? 'line-through text-slate-400' : ''}`}>
                          {t.title}
                        </h4>
                      </div>
                      <p className="text-xs text-slate-500">
                        {t.subject} {t.topic ? `• ${t.topic}` : ''}
                      </p>
                      {t.isAiRecommended && (
                        <span className="text-[10px] font-semibold text-brand-teal flex items-center gap-1">
                          <Sparkles className="w-3 h-3" />
                          <span>Generated from weak topic quiz evaluation</span>
                        </span>
                      )}
                    </div>
                  </div>

                  <button
                    onClick={() => handleDelete(t._id)}
                    className="text-slate-300 hover:text-rose-500 p-1 transition-colors"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              ))}
            </div>
          ) : (
            <div className="glass-panel p-8 rounded-3xl text-center text-slate-400 text-xs font-semibold">
              No tasks in this view.
            </div>
          )}

        </div>

      </div>

    </div>
  );
}
