# EmptyCup - Design Studio Listing Platform

A web application that connects users with design studios by showcasing studio profiles, projects, and facilitating easy discovery.

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Running Locally](#running-locally)
- [Deployment](#deployment)
- [Project Structure](#project-structure)
- [API Documentation](#api-documentation)
- [Contributing](#contributing)

## Overview

EmptyCup is a platform where design studios can showcase their portfolio and users can discover and connect with studios that match their needs. The application features a clean, responsive interface built with React on the frontend and a Python-based API backend.

## Features

- Browse and search design studio listings
- Filter studios by expertise, location, and pricing
- View detailed studio profiles with project showcases
- Contact studios directly through the platform
- Shortlist favorite studios for later reference
- Responsive design that works on all devices

## Tech Stack

### Frontend
- React
- React Router
- Tailwind CSS
- Axios for API requests

### Backend
- Python
- Flask/FastAPI
- SQLite/PostgreSQL

## Prerequisites

- Node.js (v16.0 or higher)
- npm or yarn
- Python 3.9+
- pip (Python package manager)
- Git

## Installation

```bash
# Clone the repository
git clone https://github.com/pavan953/emptycup.git
cd EmptyCup

# Install backend dependencies
cd server
pip install -r requirements.txt
cd ..

# Install frontend dependencies
cd client
npm install
cd ..

# From the project root
cd server

# Run the development server
python index.py
# From the project root
cd client

# Start the development server
npm run dev

# Set up a production WSGI server
pip install gunicorn
gunicorn -w 4 -b 0.0.0.0:5000 app:app
# Build and run with Docker
docker build -t emptycup-backend ./server
docker run -p 5000:5000 emptycup-backend
# Build the frontend
cd client
npm run build

# The build output will be in the dist/ directory
# Upload this directory to your static hosting provider
# Build and run with Docker
docker build -t emptycup-frontend ./client
docker run -p 80:80 emptycup-frontend
# From the project root
docker-compose up -d
EmptyCup/
├── client/             # React frontend
│   ├── public/         # Static assets
│   ├── src/            # Source code
│   │   ├── components/ # React components
│   │   ├── pages/      # Page components
│   │   ├── services/   # API services
│   │   └── App.jsx     # Main application component
│   ├── package.json    # Frontend dependencies
│   └── vite.config.js  # Vite configuration
├── server/             # Python backend
│   ├── api/            # API endpoints
│   ├── models/         # Data models
│   ├── utils/          # Utility functions
│   ├── requirements.txt # Backend dependencies
│   └── run.py          # Entry point
└── docker-compose.yml  # Docker configuration