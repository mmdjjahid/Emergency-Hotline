## Project Overview  
This project is a web‑based platform for emergency contact services where users can quickly access, call or view emergency hotlines (e.g., police, ambulance, fire) relevant to their region. It aims to provide a simple, responsive interface (including light/dark mode) designed for rapid access in urgent situations.

## Main Technology  
- **Frontend:** React (Vite)  
- **Routing:** React Router  
- **Styling:** Tailwind CSS + daisyUI  
- **HTTP/Data Fetching:** Axios  
- **Toast Notifications:** React Toastify  
- **Animations:** Framer Motion  
- **Backend:** Node.js + Express.js  
- **Database:** MongoDB  
- **Middleware:** CORS, dotenv

## Main Features  
- **Emergency Hotline Listing:** View a list of emergency services with phone numbers by category (e.g., police, ambulance, fire)  
- **Region/Location Filtering:** Narrow down hotlines by region or location (if implemented)  
- **Call or Copy Functionality:** Tap to call or copy the hotline number for convenience  
- **Search Functionality:** Search by service type or location  
- **Responsive Design:** Works across mobile and desktop, supports light & dark theme  
- **Custom 404 Page:** User‑friendly fallback for undefined routes

## Dependencies (Frontend)  
```json
{
  "dependencies": {
    "react": "...",
    "react-dom": "...",
    "react-router-dom": "...",
    "axios": "...",
    "react-toastify": "...",
    "framer-motion": "...",
    "daisyui": "...",
    "tailwindcss": "...",
    ...
  },
  "devDependencies": {
    "vite": "...",
    "eslint": "...",
    ...
  }
}
```
## Local Setup Guide

Follow these steps to set up the project on your local machine:

## Clone the repository:

git clone https://github.com/mmdjjahid/Emergency-Hotline

Navigate to the project folder and install dependencies using npm or yarn:

cd Emergency-Hotline
npm install


## Set up environment variables:
If the project requires any environment variables (such as API endpoints), create a .env file and set the necessary variables. For example:

API_BASE_URL=http://localhost:3010


## Run the development server:

npm run dev


Open the app in your browser at http://localhost:5173 (or the appropriate Vite server address).
