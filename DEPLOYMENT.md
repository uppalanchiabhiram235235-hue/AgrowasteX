# AgroWasteX Deployment Guide

## Part 1: Push to GitHub

### Step 1: Initialize Git Repository
```bash
# Initialize git in your project folder
git init

# Add all files
git add .

# Commit files
git commit -m "Initial commit: AgroWasteX project"
```

### Step 2: Create GitHub Repository
1. Go to https://github.com
2. Click "New Repository" (+ icon in top right)
3. Name it: `agrowastex`
4. Don't initialize with README (we already have files)
5. Click "Create Repository"

### Step 3: Connect and Push
```bash
# Add GitHub repository as remote
git remote add origin https://github.com/YOUR_USERNAME/agrowastex.git

# Push to GitHub
git branch -M main
git push -u origin main
```

---

## Part 2: Deploy the Website

### Option A: Deploy to Render (Recommended - Free)

**Step 1: Setup MongoDB Atlas (Cloud Database)**
1. Go to https://www.mongodb.com/cloud/atlas
2. Create free account
3. Create a free cluster (M0)
4. Click "Connect" → "Connect your application"
5. Copy connection string
6. Replace `<password>` with your database password

**Step 2: Deploy to Render**
1. Go to https://render.com
2. Sign up with GitHub
3. Click "New +" → "Web Service"
4. Connect your GitHub repository
5. Configure:
   - **Name**: agrowastex
   - **Environment**: Node
   - **Build Command**: `npm install`
   - **Start Command**: `npm start`
6. Add Environment Variables:
   - Key: `MONGODB_URI`
   - Value: Your MongoDB Atlas connection string
   - Key: `PORT`
   - Value: `3000`
7. Click "Create Web Service"

**Step 3: Update Frontend URLs**
After deployment, Render gives you a URL like: `https://agrowastex.onrender.com`

Update `config.js`:
```javascript
const API_BASE_URL = 'https://agrowastex.onrender.com/api';
```

Push changes:
```bash
git add config.js
git commit -m "Update API URL for production"
git push
```

---

### Option B: Deploy to Heroku

**Step 1: Install Heroku CLI**
Download from: https://devcenter.heroku.com/articles/heroku-cli

**Step 2: Login and Create App**
```bash
heroku login
heroku create agrowastex
```

**Step 3: Add MongoDB Atlas**
Set environment variable:
```bash
heroku config:set MONGODB_URI="your_mongodb_atlas_connection_string"
```

**Step 4: Deploy**
```bash
git push heroku main
```

**Step 5: Open App**
```bash
heroku open
```

---

### Option C: Deploy to Vercel (Frontend + Serverless)

**Step 1: Install Vercel CLI**
```bash
npm install -g vercel
```

**Step 2: Create vercel.json**
Already created in your project

**Step 3: Deploy**
```bash
vercel
```

Follow prompts and add MongoDB URI as environment variable

---

### Option D: Deploy to Railway

**Step 1: Setup**
1. Go to https://railway.app
2. Sign up with GitHub
3. Click "New Project" → "Deploy from GitHub repo"
4. Select your repository

**Step 2: Add Environment Variables**
- `MONGODB_URI`: Your MongoDB Atlas connection string
- `PORT`: 3000

**Step 3: Deploy**
Railway automatically deploys on push

---

## Part 3: Update Frontend for Production

After deployment, update these files with your production URL:

**config.js**
```javascript
// Replace localhost with your deployed URL
const API_BASE_URL = 'https://your-app-name.onrender.com/api';
```

**Commit and push:**
```bash
git add config.js
git commit -m "Update production URL"
git push
```

---

## Quick Deployment Comparison

| Platform | Free Tier | Database | Difficulty |
|----------|-----------|----------|------------|
| Render | ✅ Yes | Need Atlas | Easy |
| Heroku | ✅ Limited | Need Atlas | Medium |
| Vercel | ✅ Yes | Need Atlas | Easy |
| Railway | ✅ Limited | Need Atlas | Easy |

**Recommended: Render + MongoDB Atlas** (Both have generous free tiers)

---

## Troubleshooting

### Issue: "Cannot connect to database"
- Check MongoDB Atlas IP whitelist (allow 0.0.0.0/0 for all IPs)
- Verify connection string is correct
- Check environment variables are set

### Issue: "CORS errors"
- Already handled in server.js with `cors` middleware

### Issue: "App not loading"
- Check server logs on your platform
- Verify all environment variables are set
- Make sure `npm install` completed successfully

---

## Maintenance

### Update Code
```bash
git add .
git commit -m "Your update message"
git push
```

Most platforms auto-deploy on push to main branch.

### View Logs
- **Render**: Dashboard → Logs tab
- **Heroku**: `heroku logs --tail`
- **Vercel**: Dashboard → Deployments → View logs
- **Railway**: Dashboard → Deployments → Logs
