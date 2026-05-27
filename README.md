# EditFlow AI - Video Editing Platform

## Files Structure
```
editflow-v2/
├── index.html              # Homepage
├── vercel.json             # Vercel routing config
├── shared/
│   ├── styles.css          # Global styles (dark theme)
│   └── app.js              # Shared JavaScript
├── tutorials/
│   └── index.html          # Tutorials page with filters
├── ai-assistant/
│   └── index.html          # AI Chat with 5 modes
├── resources/
│   └── index.html          # Downloadable resources with filters
├── troubleshooting/
│   └── index.html          # Issue fixes (accordion)
├── community/
│   └── index.html          # Community & creators
├── admin/
│   └── index.html          # Admin dashboard
└── login/
    └── index.html          # Login/Signup page
```

## How to Deploy on Vercel

### Step 1: Create GitHub Repository
1. Go to github.com/new
2. Name: `editflow`
3. Make it Public
4. Check "Add a README file"
5. Click "Create repository"

### Step 2: Upload Files
1. In your repo, click "Add file" > "Upload files"
2. Drag and drop ALL files from the `editflow-v2` folder
3. Make sure the folder structure is preserved:
   - `index.html` in root
   - `vercel.json` in root
   - `shared/` folder with styles.css and app.js
   - `tutorials/`, `ai-assistant/`, etc. folders
4. Click "Commit changes"

### Step 3: Deploy on Vercel
1. Go to vercel.com
2. Click "Add New..." > "Project"
3. Import your `editflow` GitHub repo
4. Framework Preset: `Other`
5. Click "Deploy"
6. Your site will be live at `https://editflow.vercel.app`

## Features
- 7 pages: Home, Tutorials, AI Assistant, Resources, Troubleshooting, Community, Admin, Login
- Responsive design (mobile + desktop)
- Dark modern theme
- Mobile bottom navigation
- Global search (Ctrl+K)
- AI Chat with 5 modes (Mentor, Ideas, Optimize, Color, Export)
- Tutorial filtering by category
- Resource filtering by type
- Issue accordion (expand/collapse)
- Admin dashboard with stats
- Login with demo account (demo@editflow.ai / demo123)
- Toast notifications
- Smooth animations

## Demo Account
- Email: `demo@editflow.ai`
- Password: `demo123`

## Free Tech Stack Used
- **Hosting**: Vercel (free)
- **No backend needed** - static HTML/CSS/JS
- **No database needed** - demo mode with localStorage
- **AI**: Simulated responses (can connect to Google Gemini API later)
- **Analytics**: Can add Google Analytics 4 (free)
- **Monetization**: Ready for Google AdSense, Amazon Associates

## Next Steps (Optional)
1. Connect Supabase for real database
2. Connect Google Gemini API for real AI
3. Add Google Analytics 4
4. Apply for Google AdSense
5. Add Amazon Associates affiliate links
