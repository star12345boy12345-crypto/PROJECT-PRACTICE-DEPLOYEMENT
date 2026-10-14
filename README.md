# Vidyora AI — An Agentic AI-Powered Personalized Learning Platform

> **"Learn in Your Language. Learn at Your Pace."**  
> **Hackathon:** NEXTECH 2.0 | NMIET | NIRMIT 2026  
> **Team Name:** AgniX  
> **Team Members & Core Roles:**  
> 1. [Omm Pritam Jena](https://github.com/ommpritamjena5-star) — Team Lead, Backend & AI API Integrator  
> 2. [Pritam Mallik](https://github.com/Ouroboros37) — Backend & API Integrator  
> 3. [Sarbajit Sahoo](https://github.com/sarbajitsahoo64-star) — Frontend Development & UI/UX  
> 4. [Gouranga Sundar](https://github.com/gouranga52) — Frontend Development & UI/UX  
> 5. Amaresh Pal — Database Architect & Models  

---

## 1. Project Overview & Identity
**Vidyora AI** is India’s first agentic AI-powered, bilingual (Odia + English), offline-first personalized education platform built specifically for school students in rural and semi-urban communities. It bridges critical language barriers, provides round-the-clock academic tutoring, detects micro-topic weaknesses through deterministic server scoring, and enables continuous learning even with zero internet connectivity.

---

## 2. Problem Statement
Over 78% of school students across rural and semi-urban Odisha face severe learning hurdles:
- **Language Exclusion:** Quality digital STEM content is almost exclusively in English or Hindi, alienating Odia-medium students.
- **Guidance Deficit:** Limited access to personalized after-school doubt solving or individual tutor attention.
- **Unreliable Connectivity:** Frequent 2G/3G network drops disrupt cloud-dependent learning tools.
- **Blind Practice:** Generic tests fail to isolate specific weak sub-concepts, leading to repetitive mistakes in board exams.
- **Parental Disconnect:** Parents lack visibility into their children's actual academic progress and focus areas.

---

## 3. The Agentic AI Solution
Vidyora AI addresses these challenges with a multi-layered, cognitive learning engine:
1. **Agentic AI Tutor:** Deconstructs student queries through a visible multi-step reasoning pipeline:  
   `Question` ➔ `Understand Intent & Grade` ➔ `Retrieve Curriculum Concepts` ➔ `Synthesize Localized Odia Explanation` ➔ `Formulate Adaptive Practice Challenge`.
2. **True Odia (ଓଡ଼ିଆ) & English Localization:** Complete Unicode Odia interface with one-click translation on every lesson, formula, and quiz explanation.
3. **Smart Quiz Engine & Deterministic Scoring:** Server-validated grading with automatic weak topic isolation (< 60% accuracy).
4. **100% Offline IndexedDB Vault & PWA:** Download entire curriculum lessons and take practice quizzes without internet. Queues offline results and synchronizes automatically upon reconnecting.
5. **Textbook Lens & Solver:** Upload or capture textbook diagrams/problems for AI-driven visual step-by-step breakdown.
6. **Adaptive Study Planner & Parent Reports:** Translates test weaknesses into scheduled revision tasks and generates transparent parent report cards.

---

## 4. Technology Stack

### Frontend
- **Framework:** React 19 + Vite
- **Styling:** Tailwind CSS + Glassmorphism + 3D interactive shadows
- **Routing:** React Router v7
- **Data Visualizations:** Recharts (AreaChart, BarChart)
- **Icons:** Lucide React
- **Celebration Effects:** Canvas Confetti
- **Offline / PWA:** Service Worker (`sw.js`), Web App Manifest, Browser Cache API, IndexedDB

### Backend
- **Runtime:** Node.js (v22+)
- **Server:** Express.js REST API
- **Database:** MongoDB & Mongoose
- **Authentication:** JWT (JSON Web Tokens) & bcryptjs password hashing
- **Security & Reliability:** express-rate-limit, cors, input validation
- **File Upload:** Multer (Memory Storage)

### AI & Regional Reasoning
- **Primary Cloud Provider:** Google Gemini API (`@google/generative-ai` 1.5 Flash & Vision)
- **Fallback Engine:** Vidyora Regional Curriculum Knowledge Engine (curated state board syllabus in Odia & English)

---

## 5. Application Architecture

```
                               STUDENT
                                  │
                                  ▼
                    REACT FRONTEND (PWA + Vite)
                                  │
                   ┌──────────────┴──────────────┐
                   ▼                             ▼
       OFFLINE INDEXEDDB VAULT         REST API CALLS (Bearer Token)
       - Downloaded Lessons                      │
       - Queued Quiz Attempts                    ▼
       - Auto-Sync on Reconnect       NODE.JS + EXPRESS BACKEND
                                                 │
                   ┌─────────────────────────────┼─────────────────────────────┐
                   ▼                             ▼                             ▼
         AUTHENTICATION API            AGENTIC TUTOR SERVICE         DETERMINISTIC QUIZ ENGINE
         - bcrypt + JWT tokens         - Gemini 1.5 / Vision         - Server-side scoring
         - Student & Parent Auth       - Regional Odia Synthesis     - Weak topic isolation
                   │                             │                             │
                   └─────────────────────────────┼─────────────────────────────┘
                                                 │
                                                 ▼
                                        MONGODB DATABASE
                     (Users, Subjects, Chapters, Lessons, Quizzes, Progress, Tasks)
```

---

## 6. Project Folder Structure

```
vidyora-ai/
├── client/
│   ├── public/
│   │   ├── manifest.webmanifest      # PWA App Manifest
│   │   └── sw.js                     # Service Worker for offline asset caching
│   ├── src/
│   │   ├── components/               # Navbar, Footer, SearchBar, OfflineBanner, ProtectedRoute
│   │   ├── contexts/                 # AuthContext (offline sync), LanguageContext (Odia/En)
│   │   ├── i18n/                     # en.json, or.json (Authentic Unicode Odia translations)
│   │   ├── pages/
│   │   │   ├── LandingPage.jsx       # 3D Hero, preview, features, how it works, AgniX
│   │   │   ├── LoginPage.jsx         # Sign in with One-Click Demo Student fill
│   │   │   ├── RegisterPage.jsx      # Student registration (grade, school, parent details)
│   │   │   ├── DashboardPage.jsx     # Global search, streak, weak topics, subjects, tasks
│   │   │   ├── AiTutorPage.jsx       # Agentic AI chat with reasoning pipeline & TTS
│   │   │   ├── ScannerPage.jsx       # Textbook Lens photo & equation solver
│   │   │   ├── SubjectsPage.jsx      # Class 6-10 subject browser
│   │   │   ├── SubjectDetailsPage.jsx# Chapter & lesson index
│   │   │   ├── LessonPage.jsx        # 1-click Odia translation, download to vault, audio
│   │   │   ├── QuizPage.jsx          # Interactive test, confetti, solution explanations
│   │   │   ├── ProgressPage.jsx      # Recharts score trends & topic analytics
│   │   │   ├── StudyPlannerPage.jsx  # Task scheduler with AI recommendations
│   │   │   ├── OfflineVaultPage.jsx  # IndexedDB manager & offline village simulator
│   │   │   └── ParentReportPage.jsx  # Parent progress report card & email dispatcher
│   │   ├── services/                 # api.js (Axios), offlineStorage.js (IndexedDB)
│   │   ├── App.jsx                   # React Router routing configuration
│   │   └── index.css                 # Glassmorphism, 3D button design tokens
│   ├── tailwind.config.js
│   └── package.json
│
├── server/
│   ├── src/
│   │   ├── config/db.js              # MongoDB connection
│   │   ├── controllers/              # Auth, Subjects, Lessons, Quizzes, AI, Progress, etc.
│   │   ├── middleware/auth.js        # JWT token verification
│   │   ├── models/                   # Mongoose models (User, Subject, Lesson, Quiz, Progress, etc.)
│   │   ├── routes/                   # REST API routes
│   │   ├── seed/                     # seed.js, runSeed.js, seedData.js
│   │   ├── services/                 # aiTutoringService, quizEvaluationService, etc.
│   │   ├── tests/runTests.js         # Automated backend test suite
│   │   ├── app.js                    # Express configuration & security
│   │   └── server.js                 # Server entry point
│   ├── .env                          # Local environment variables
│   ├── .env.example
│   └── package.json
│
├── package.json                      # Root workspace orchestrator (concurrently)
└── README.md
```

---

## 7. Prerequisites
- **Node.js:** v18.0.0 or higher (Tested on Node v22.20.0)
- **npm:** v9.0.0 or higher
- **MongoDB:** Local MongoDB instance running on `mongodb://127.0.0.1:27017` or MongoDB Atlas URI

---

## 8. Installation & Setup

1. **Clone the repository:**
   ```bash
   git clone https://github.com/your-username/vidyora-ai.git
   cd vidyora-ai
   ```

2. **Install all dependencies:**
   ```bash
   npm run install:all
   ```

3. **Configure Environment Variables:**
   Create `server/.env` (a template is provided in `server/.env.example`):
   ```ini
   PORT=5000
   NODE_ENV=development
   MONGODB_URI=mongodb://127.0.0.1:27017/vidyora_ai
   JWT_SECRET=vidyora_hackathon_nextech_secret_key_2026
   CLIENT_URL=http://localhost:5173
   GEMINI_API_KEY=your_gemini_api_key_here  # Optional: platform includes offline regional engine
   ```

4. **Seed Curriculum Data:**
   ```bash
   npm run seed
   ```

---

## 9. Development Commands

- **Run both Backend and Frontend concurrently:**
  ```bash
  npm run dev
  ```
- **Run Backend only:**
  ```bash
  npm run server
  ```
- **Run Frontend only:**
  ```bash
  npm run client
  ```
- **Run Automated Backend Test Suite:**
  ```bash
  npm test
  ```
- **Build Frontend for Production:**
  ```bash
  npm run build
  ```

---

## 10. Demo Student Credentials
For instant demonstration during hackathon judging, use the preloaded account or click **"One-Click Login"** on `/login`:
- **Email:** `demo.student@vidyora.ai`
- **Password:** `vidyora123`
- **Class:** Class 8 (ଅଷ୍ଟମ ଶ୍ରେଣୀ)
- **School:** Govt. High School, Balasore
- **Preferred Language:** Odia (`or`)

---

## 11. Verified End-to-End User Journeys
The following flows were verified and tested in the live environment:
- ✅ **Bilingual Odia & English Switcher:** Real-time UI and content translation using Unicode Odia script.
- ✅ **Global Topic Search Bar:** Debounced search against `/api/lessons/search` with auto-suggest dropdown.
- ✅ **Agentic AI Tutor:** Multi-step cognitive reasoning pipeline tested on Odia queries with real-world analogies.
- ✅ **Deterministic Quiz Engine:** Server-evaluated scoring with 100% accurate results, confetti celebration, and per-topic analysis.
- ✅ **Weak Topic Detection:** Automatic isolation of difficult concepts with 1-click revision task generation.
- ✅ **Offline IndexedDB Vault:** Local storage of lessons, simulated village mode, and idempotent sync queue.
- ✅ **Parent Progress Portal:** Comprehensive academic report card with student metrics and parent notifications.

---

## 12. Team AgniX — Contributors & Roles
This project was designed, developed, and deployed collaboratively for **NEXTECH 2.0**:

| Contributor | Hackathon Role | Focus Areas | GitHub Profile |
| :--- | :--- | :--- | :--- |
| **Omm Pritam Jena** | **Team Lead, Backend & AI API Integrator** | System Architecture, Multilingual Reasoning, Agentic AI Engine & REST APIs | [@ommpritamjena5-star](https://github.com/ommpritamjena5-star) |
| **Pritam Mallik** | **Backend & API Integrator** | REST API Endpoints, Controller Services, AI API Routing & Data Integration | [@Ouroboros37](https://github.com/Ouroboros37) |
| **Sarbajit Sahoo** | **Frontend & UI/UX** | React Components, Responsive Layouts, Client State & Offline Storage | [@sarbajitsahoo64-star](https://github.com/sarbajitsahoo64-star) |
| **Gouranga Sundar** | **Frontend & UI/UX** | Interactive UI Design, Floating Chatbot Studio & Visual Assets | [@gouranga52](https://github.com/gouranga52) |
| **Amaresh Pal** | **Database Architect** | MongoDB Schemas, Data Modeling, Progress Tracking | Team AgniX |

---

## 13. License & Acknowledgements
Built with precision by **Team AgniX** for **NEXTECH 2.0 | NMIET | NIRMIT 2026**.
