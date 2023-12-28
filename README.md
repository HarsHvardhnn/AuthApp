Authentication App with MongoDB
Introduction
This is a simple authentication app built using Node.js, Express, and MongoDB. The app allows users to register, login, and send emails for account-related actions.

Features
User Registration: Users can create a new account by providing their email and password.
User Login: Registered users can log in using their credentials.
Email Sending: Users can request certain account-related actions via email.
Technologies Used
Node.js
Express.js
MongoDB (with Mongoose)
Nodemailer (for sending emails)
Getting Started
Follow these steps to get the app up and running on your local machine.

Prerequisites
Node.js and npm installed.
MongoDB installed and running.
Installation
Clone the repository:

bash
Copy code
git clone https://github.com/HarsHvardhnn/AuthApp
Navigate to the project directory:

bash

cd auth-app
Install dependencies:

bash

npm install
Set up your MongoDB connection by editing the .env file with your MongoDB URI:

env

MONGODB_URI=your_mongodb_uri
Configure your email service in the .env file (for Nodemailer):

env

EMAIL_SERVICE=your_email_service
EMAIL_USER=your_email_username
EMAIL_PASS=your_email_password
Start the application:

bash

npm start
The app should now be running on http://localhost:9999.

Usage
Open your browser and navigate to http://localhost:9999.
Register a new account.
Log in using your registered credentials.
Use the provided functionalities for account-related actions.
API Endpoints
POST /register: Register a new user.
POST /login: Log in with existing credentials.
POST /send-email: Send an email for account-related actions.
Contributions
Contributions are welcome! If you find any issues or have suggestions, please open an issue or submit a pull request.

License
This project is licensed under the MIT License.
