# AgroWasteX - Agricultural Waste Management System

## MongoDB Setup Instructions

### Prerequisites
- Node.js installed
- MongoDB installed (local) OR MongoDB Atlas account (cloud)

### Installation Steps

1. **Install Dependencies**
```bash
npm install
```

2. **Setup MongoDB**

**Option A: Local MongoDB**
- Install MongoDB from https://www.mongodb.com/try/download/community
- Start MongoDB service:
```bash
# Windows
net start MongoDB

# Or use MongoDB Compass GUI
```

**Option B: MongoDB Atlas (Cloud)**
- Create account at https://www.mongodb.com/cloud/atlas
- Create a cluster
- Get connection string
- Update `.env` file with your connection string:
```
MONGODB_URI=mongodb+srv://<username>:<password>@cluster.mongodb.net/agrowastex?retryWrites=true&w=majority
```

3. **Start the Server**
```bash
npm start
```

Server will run on http://localhost:3000

4. **Access the Application**
Open your browser and go to:
```
http://localhost:3000/farmer.html
```

### Project Structure
```
agrowastex/
├── server.js           # Express server with MongoDB connection
├── config.js           # API configuration
├── package.json        # Dependencies
├── .env               # Environment variables
├── farmer.html        # Home page
├── farmerlogin.html   # Login page
├── wasteEntry.html    # Waste entry form
├── reports.html       # Reports dashboard
└── farmer.css         # Styles
```

### API Endpoints

- `POST /api/login` - User login/registration
- `POST /api/waste-entries` - Create waste entry
- `GET /api/waste-entries/:email` - Get user's waste entries
- `DELETE /api/waste-entries/:email` - Delete user's waste entries

### Features
- User authentication
- Waste type and amount tracking
- Automatic composting time calculation
- User-specific reports
- MongoDB database storage
