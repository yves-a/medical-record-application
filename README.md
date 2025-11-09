# Medical Record Application — Full‑Stack Demo (React + TypeScript + Express)

[![React](https://img.shields.io/badge/Frontend-React%20%2B%20TypeScript-61DAFB?logo=react)]()
[![Express](https://img.shields.io/badge/Backend-Express%20%2B%20TypeScript-000?logo=express)]()
![API](https://img.shields.io/badge/API-REST-informational)

A minimal **electronic medical record (EMR‑style)** app to demonstrate full‑stack patterns with a React front end and a TypeScript/Express API. The backend uses an **in‑memory data store** (no database) to keep the example easy to read and extend.

> ⚠️ Education/demo only. Do **not** use real patient data.

---

## ✨ Features

- **Patients CRUD** — create/read/update/delete patient charts
- **Visits/Entries** — attach encounters with vitals & notes
- **Medications** — simple list per patient
- **Search & filters** — by name/DOB
- **Form validation** — basic client‑side checks
- **Clean UI** — small, readable React components

---

## 🧱 Tech Stack

- **Frontend:** React + TypeScript (`frontend/`)
- **Backend:** Express + TypeScript (`backend/`), in‑memory store
- **Tooling:** ESLint/Prettier, Jest + ts‑jest, ts‑node‑dev

---

## 🗂️ Repository Layout

```
medical-record-application/
├─ frontend/                 # React app (TypeScript)
│  ├─ src/
│  │  ├─ components/         # Tables, Forms, Inputs
│  │  ├─ pages/              # Patients, PatientDetail, VisitForm
│  │  ├─ api/                # fetch wrappers
│  │  └─ main.tsx|index.tsx
│  └─ package.json
├─ backend/                  # Express API (TypeScript)
│  ├─ src/
│  │  ├─ index.ts            # app entry
│  │  ├─ routes/             # patients.ts, visits.ts, meds.ts
│  │  ├─ services/           # business logic, in‑memory store
│  │  └─ types/              # DTOs, validators
│  ├─ tsconfig.json          # outDir -> build/
│  ├─ .env.example
│  └─ package.json
└─ README.md
```

---

## ⚙️ Backend (Express + TS)

**`backend/package.json` (provided):**
```json
{
  "name": "patientor-backend",
  "version": "1.0.0",
  "main": "index.js",
  "scripts": {
    "test": "jest",
    "tsc": "tsc",
    "dev": "ts-node-dev src/index.ts",
    "lint": "eslint --ext .ts .",
    "start": "node build/index.js"
  },
  "author": "yves",
  "license": "ISC",
  "devDependencies": {
    "@types/cors": "^2.8.12",
    "@types/express": "^4.17.13",
    "@types/jest": "^29.5.2",
    "@types/uuid": "^8.3.4",
    "@typescript-eslint/eslint-plugin": "^5.27.0",
    "@typescript-eslint/parser": "^5.27.0",
    "eslint": "^8.17.0",
    "jest": "^29.5.0",
    "ts-jest": "^29.1.0",
    "ts-node-dev": "^2.0.0",
    "typescript": "^4.7.3"
  },
  "dependencies": {
    "cors": "^2.8.5",
    "express": "^4.18.1",
    "react-dropdown": "^1.10.0",
    "uuid": "^8.3.2"
  }
}
```

### Environment
Create `backend/.env` (or export these in your shell):
```bash
PORT=3001
CORS_ORIGIN=http://localhost:5173   # or 3000 for CRA
```

> If `PORT` is unset, the server will default to **3001** (adjust your frontend’s API base URL).

### Run in development
```bash
cd backend
npm install
npm run dev      # ts-node-dev src/index.ts (hot reload)
```
Server starts on `http://localhost:3001`.

### Build & start (production)
```bash
cd backend
npm run tsc      # compiles TS -> build/
npm start        # node build/index.js
```

### Lint, test
```bash
npm run lint
npm test         # jest + ts-jest
```

---

## 🖥️ Frontend (React + TS)

From `frontend/`, install and run using the scripts in **your** `frontend/package.json`:

```bash
cd frontend
npm install

# If Vite:
npm run dev      # opens http://localhost:5173

# If CRA:
# npm start      # opens http://localhost:3000
```

Set the frontend API base URL to match the backend port (e.g., `http://localhost:3001/api`).

---

## 🔌 REST API (example)

Base URL: `http://localhost:3001/api`

### Patients
```
GET    /patients                 # list (search: ?q=...)
GET    /patients/:id             # details (with visits + meds)
POST   /patients                 # create (name, dob, allergies)
PUT    /patients/:id             # update
DELETE /patients/:id             # delete
```

**Patient JSON**
```json
{
  "id": "p_123",
  "name": "Ava Gomez",
  "dob": "1993-07-12",
  "allergies": ["penicillin"],
  "createdAt": "2025-01-01T12:00:00Z"
}
```

### Visits (per patient)
```
POST   /patients/:id/visits
DELETE /patients/:id/visits/:vid
```
**Visit JSON**
```json
{
  "id": "v_456",
  "date": "2025-10-09",
  "reason": "Follow-up",
  "notes": "Recovery progressing",
  "vitals": { "bp": "118/76", "hr": 72, "spo2": 98 }
}
```

### Medications (per patient)
```
POST   /patients/:id/meds
DELETE /patients/:id/meds/:mid
```
**Medication JSON**
```json
{ "id": "m_789", "name": "Amoxicillin", "dose": "500 mg", "frequency": "2x/day" }
```

---

## 🧪 Quality

```bash
# Backend
cd backend
npm run lint
npm test

# Frontend
cd ../frontend
npm run lint   # if configured
npm test       # if tests present
```

---

## 🛡️ Data & Privacy

- Do **not** use real patient data.  
- Keep `.env` files out of version control.  
- This app is for demos and learning only.

---

## 🧭 Roadmap (nice‑to‑haves)

- [ ] Auth (JWT) + role‑based routes
- [ ] Server‑side validation + better error payloads
- [ ] Pagination & optimistic UI updates
- [ ] CI workflow (lint + typecheck + tests)
- [ ] Docker Compose (reverse proxy + frontend + backend)

---

## 📄 License

MIT

---

## 👤 Maintainer

**Yves Alikalfic** — [LinkedIn](https://www.linkedin.com/in/yves-alikalfic/) • [GitHub](https://github.com/yves-a)
