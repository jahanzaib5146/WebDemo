# Vercel + Render Test App (WebDemo)

Full-Stack application ready for deployment on **Render** (Backend) and **Vercel** (Frontend).

## Project Structure

```text
├── backend/
│   ├── index.js
│   ├── package.json
│   └── package-lock.json
├── frontend/
│   └── index.html
├── .gitignore
└── README.md
```

---

## 1. Local Testing

### Backend Start:
```bash
cd backend
npm install
npm start
```
Server will run on `http://localhost:5000`.

### Frontend:
Open `frontend/index.html` in your browser directly or via Live Server.

---

## 2. Deployment Instructions

### A. Render (Backend)
1. Push this project to GitHub.
2. In Render dashboard: **New +** -> **Web Service**.
3. Connect your GitHub repository (`WebDemo`).
4. Set:
   - **Root Directory**: `backend`
   - **Build Command**: `npm install`
   - **Start Command**: `npm start`
5. Click **Create Web Service**.
6. Copy your live Render URL (e.g. `https://your-app-name.onrender.com`).

### B. Update Frontend API URL
In `frontend/index.html`, update:
```javascript
const API_URL = "https://your-app-name.onrender.com/api/messages";
```
Commit and push the change to GitHub.

### C. Vercel (Frontend)
1. In Vercel dashboard: **Add New Project**.
2. Import the same repository (`WebDemo`).
3. In **Root Directory**, choose `frontend`.
4. Click **Deploy**.
