# Laser Technology Quiz

A web-based application for testing knowledge on laser technology with interactive UI and multiple-choice questions.

## Features

- User authentication (login/registration)
- User profile with personal details
- Interactive MCQ quiz on laser technology
- Timer for each question (60 seconds)
- Support for both single and multiple correct answers
- Real-time scoring
- Animated and responsive UI
- Category-based questions
- End quiz results with feedback based on score

## Technologies Use

- **Frontend**: HTML, CSS, JavaScript, Tailwind CSS
- **Backend**: Node.js, Express.js
- **Template Engine**: EJS
- **Database**: Session-based storage (for demo purposes)
- **Other Libraries**: Font Awesome, Confetti-js

## Installation and Setup

1. Clone the repository:
   ```
   git clone <repository-url>
   cd laser-tech-quiz
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Start the application:
   ```
   node server.js
   ```

4. Access the application in your browser:
   ```
   http://localhost:3000
   ```

## Demo Account

Use the following credentials to test the application:
- **Email**: demo@example.com
- **Password**: password

## Quiz Structure

The quiz consists of 28 multiple-choice questions across 5 categories:
1. Basic Laser Concepts and Properties
2. Types of Lasers
3. Laser Classifications and Safety
4. Laser Applications and Uses
5. Laser Properties and Performance

Each question has a 60-second time limit. Some questions may have multiple correct answers.

## Project Structure

```
laser-tech-quiz/
├── controllers/   # Application controllers
├── models/        # Data models
├── public/        # Static assets
│   ├── css/       # CSS files
│   ├── js/        # JavaScript files
│   └── images/    # Image files
├── routes/        # Route definitions
├── views/         # EJS templates
│   └── partials/  # Reusable template parts
├── server.js      # Main application file
└── package.json   # Project dependencies
```

## Extending the Project

To extend this project for real-world use:

1. Implement a proper database (e.g., MongoDB, MySQL) for user and quiz data
2. Add user authentication with password hashing and JWT
3. Implement user statistics and history
4. Add more quiz questions and categories
5. Implement a user dashboard with progress tracking

## License

MIT License # quiz-platform
--------------------
