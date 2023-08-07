# To-Do List Application with Authentication

This is a To-Do List application that allows users to manage their tasks for the day. The application provides authentication functionality, ensuring that only registered users can access the day task page. The project is built using the MERN stack, which stands for MongoDB, Express.js, React.js, and Node.js.

## Features

- User Registration: New users can sign up and create an account to access the application.
- User Login: Registered users can log in with their credentials.
- Day Task Page: Once logged in, users can view and manage their daily tasks.
- Add Tasks: Users can add new tasks to their day task list.
- Edit Tasks: Users can edit existing tasks, update details, or mark tasks as complete.
- Delete Tasks: Users can remove tasks from their day task list.
- User Authentication: Only authenticated users can access the day task page.

## Technologies Used

- MongoDB: A NoSQL database used to store user information and task data.
- Express.js: A backend web application framework for Node.js used to build the server-side logic.
- React.js: A frontend JavaScript library used to build the user interface and components.
- Node.js: A JavaScript runtime used for server-side development.
- Mongoose: A MongoDB object modeling tool for Node.js, used to interact with the MongoDB database.

## Prerequisites

Before running the application, ensure you have the following software installed on your system:

1. Node.js: You can download Node.js from the official website: https://nodejs.org/
2. MongoDB: Install MongoDB Community Edition: https://www.mongodb.com/try/download/community

## Installation

1. Clone this repository to your local machine:

```bash
git clone <repository_url.git>
```

2. Navigate to the project directory:

```bash
cd to-do-list-application
```

3. Install server-side dependencies:

```bash
cd server
npm install
```

4. Install client-side dependencies:

```bash
cd client
npm install
```

5. Create a `.env` file in the server directory and add the following environment variables:

```
MONGODB_URI=<your_mongodb_connection_string>
SESSION_SECRET=<your_session_secret_key>
```

Replace `<your_mongodb_connection_string>` with your MongoDB database connection string, and `<your_session_secret_key>` with a secret key for session management.

## Running the Application

1. Start the server:

```bash
cd server
npm start
```

This will start the server on `http://localhost:5000`.

2. Start the client:

```bash
cd client
npm start
```

This will start the React development server on `http://localhost:3000`.

3. Open your web browser and go to `http://localhost:3000` to access the application.

## Usage

1. Create an account by clicking on the "Sign Up" link and filling out the registration form.
2. Log in with your registered credentials on the "Log In" page.
3. Once logged in, you will be redirected to the "Day Task" page.
4. Here you can view, add, edit, and delete your daily tasks.

## Contributing

If you want to contribute to this project, you are welcome to submit pull requests. Please ensure that your changes are well-documented and tested.


## Acknowledgments

- Thanks to the MERN stack community for providing excellent tools and resources.
- Thanks to all the contributors who helped make this project better.