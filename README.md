Backend API for Activity Booking App
A simple REST API backend for managing user registration, login, activity listings, and bookings.

Installation
Clone the repository:

bash
Copy
Edit
git clone https://github.com/your-username/activity-booking-api.git
cd activity-booking-api
Install dependencies:

bash
Copy
Edit
npm install
Set up the .env file with your MongoDB URI and JWT secret:

plaintext
Copy
Edit
MONGO_URI=your-mongodb-uri
JWT_SECRET=your-jwt-secret
Start the server:

bash
Copy
Edit
npm start
API Endpoints
POST /api/users/register: Register a new user.

POST /api/users/login: Log in and receive a JWT token.

GET /api/activities: List available activities (public).

POST /api/activities/book: Book an activity (requires JWT).

GET /api/activities/my-bookings: Get user's booked activities (requires JWT).

Technologies Used
Node.js with Express.js

MongoDB

JWT authentication

bcrypt for password hashing

Testing with Postman
A Postman collection is included for testing the API.

