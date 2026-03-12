# 🚀 How to Start Your AgroWasteX Server

## Quick Start (3 Steps)

### Step 1: Install Dependencies (First Time Only)
Open terminal in your project folder and run:
```bash
npm install
```
Wait for installation to complete (1-2 minutes)

### Step 2: Setup MongoDB Connection

**Option A: Use MongoDB Atlas (Recommended for deployment)**
1. Get your MongoDB Atlas connection string
2. Open `.env` file
3. Replace the MONGODB_URI with your Atlas connection string:
```env
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/agrowastex?retryWrites=true&w=majority
```

**Option B: Use Local MongoDB (For local testing only)**
1. Make sure MongoDB is installed and running
2. Keep `.env` as:
```env
MONGODB_URI=mongodb://localhost:27017/agrowastex
```

### Step 3: Start the Server
```bash
npm start
```

You should see:
```
✓ Server running on http://localhost:3000
✓ Connected to MongoDB successfully
```

## ✅ Now Open Your Website

In your browser, go to:
```
http://localhost:3000/farmer.html
```

## ⚠️ Important Notes

1. **Keep the terminal open** - Don't close it while using the website
2. **Server must be running** - The website won't work without the server
3. **Port 3000** - Make sure nothing else is using port 3000

## 🛑 To Stop the Server

Press `Ctrl + C` in the terminal

## 🔧 Troubleshooting

### Error: "Cannot find module"
**Solution:** Run `npm install` again

### Error: "Port 3000 is already in use"
**Solution:** 
- Close other apps using port 3000
- Or change port in `.env`:
```env
PORT=3001
```

### Error: "MongoDB connection error"
**Solution:**
- Check your MONGODB_URI in `.env`
- For Atlas: Verify IP whitelist (0.0.0.0/0)
- For Local: Make sure MongoDB service is running

### Error: "Failed to connect to server" in browser
**Solution:** Make sure you ran `npm start` and server is running

## 📝 Development Workflow

1. Start server: `npm start`
2. Make code changes
3. Restart server (Ctrl+C, then `npm start` again)
4. Refresh browser

## 🔄 Auto-Restart on Changes (Optional)

Install nodemon for auto-restart:
```bash
npm install -g nodemon
```

Then use:
```bash
npm run dev
```

Now server restarts automatically when you change code!

## 🌐 For Deployment

When deploying to Vercel/Render/Heroku:
- You don't need to run `npm start` manually
- The platform runs it automatically
- Just make sure environment variables are set

## ✨ Quick Commands Reference

```bash
# Install dependencies
npm install

# Start server
npm start

# Start with auto-restart
npm run dev

# Check if server is running
# Open browser: http://localhost:3000
```

---

**Need Help?** Check the error message in terminal for clues!
