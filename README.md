Application-2
Weather monitoring application
Real-Time Weather Monitoring
System
A comprehensive MERN stack application that provides real-time weather
monitoring for major Indian cities. The system includes features like daily weather
summaries, temperature trends, and automated weather alerts. Features
 Real-time Weather Data: Monitors weather conditions for six major Indian cities (Delhi, Mumbai, Chennai, Bangalore, Kolkata, Hyderabad)  Daily Summaries: Provides aggregated daily weather data including:
o Average temperature
o Maximum temperature
o Minimum temperature
o Dominant weather condition
 Automated Alerts: Configurable alert system for:
o High temperature (triggers when temperature exceeds 35°C for two consecutive
updates)
o Rain alerts (triggers when rain is detected for two consecutive updates)  Data Visualization: Interactive charts showing 7-day temperature trends  Auto-refresh: Automatically updates weather data every 5 minutes
Prerequisites
Before running this project, make sure you have the following installed:  Node.js (v14 or higher)  MongoDB (v4.4 or higher)  npm (Node Package Manager)  Git
Application video -
https://drive.google.com/file/d/1bxQlAc20iCrmSaonZ91e1kNiUinGCpkH/view?usp=sha
ring
Installation & Setup
1. Clone the Repository
git clone https://github.com/Purvisolanki/Weather-Monitoring￾Application
cd Weather-Monitoring-Application
2. Backend Setup
# Navigate to backend directory
cd backend
# Install dependencies
npm install
For database - I used MongoDb, so you have to sign up at mongodb
atlas and generate your url from cluster.you can see stored data at
mongodb compass.
Replace with this my MONGODB_URL. 3. Frontend Setup
# Navigate to frontend directory
cd ../frontend
# Install dependencies
npm install
Running the Application-
1. Start Backend Server
# In the backend directory
cd backend
npm node server.js
The backend server will start on port 5000.
Your terminal will look like-
2. Start Frontend Application
# In the frontend
cd frontend
npm start
The frontend application will start on port 3000. Your terminal will look like
3. Access the Application
Open your browser and navigate to:
http://localhost:3000
Thank you
