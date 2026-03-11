const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(express.static('.')); // Serve static HTML files

// MongoDB Connection
mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log('✓ Connected to MongoDB successfully'))
.catch(err => console.error('✗ MongoDB connection error:', err));

// User Schema
const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    createdAt: { type: Date, default: Date.now }
});

const User = mongoose.model('User', userSchema);

// Waste Entry Schema
const wasteEntrySchema = new mongoose.Schema({
    userEmail: { type: String, required: true },
    type: { type: String, required: true },
    amount: { type: Number, required: true },
    compostTime: { type: Number, required: true },
    entryDate: { type: Date, default: Date.now },
    completionDate: { type: Date, required: true }
});

const WasteEntry = mongoose.model('WasteEntry', wasteEntrySchema);

// Routes

// User Registration/Login
app.post('/api/login', async (req, res) => {
    try {
        const { name, email, password } = req.body;
        
        let user = await User.findOne({ email });
        
        if (!user) {
            user = new User({ name, email, password });
            await user.save();
        }
        
        res.json({ 
            success: true, 
            user: { name: user.name, email: user.email }
        });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
});

// Create Waste Entry
app.post('/api/waste-entries', async (req, res) => {
    try {
        const wasteEntry = new WasteEntry(req.body);
        await wasteEntry.save();
        res.json({ success: true, entry: wasteEntry });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
});

// Get Waste Entries by User
app.get('/api/waste-entries/:email', async (req, res) => {
    try {
        const entries = await WasteEntry.find({ userEmail: req.params.email });
        res.json({ success: true, entries });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
});

// Delete All Waste Entries by User
app.delete('/api/waste-entries/:email', async (req, res) => {
    try {
        await WasteEntry.deleteMany({ userEmail: req.params.email });
        res.json({ success: true, message: 'All entries deleted' });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
});

app.listen(PORT, () => {
    console.log(`✓ Server running on http://localhost:${PORT}`);
});
