# Access Control UI

This project is a React-based application that implements an access control system with user authentication and task management features.

## Project Structure

```
access-control-ui
├── package.json          # Configuration file for npm
├── vite.config.js       # Vite configuration settings
├── index.html           # Main HTML entry point
└── src
    ├── api
    │   └── axios.js     # Backend connection setup using Axios
    ├── auth
    │   └── auth.js      # Token management helpers
    ├── pages
    │   ├── Login.jsx     # Login page component
    │   ├── Register.jsx  # Registration page component
    │   └── Dashboard.jsx  # Protected dashboard page component
    ├── components
    │   └── TaskList.jsx  # Task management UI component
    ├── App.jsx           # Main application routing and protection
    ├── main.jsx          # React entry point
    └── styles.css        # Optional global styles
```

## Installation

1. Clone the repository:
   ```
   git clone <repository-url>
   ```
2. Navigate to the project directory:
   ```
   cd access-control-ui
   ```
3. Install the dependencies:
   ```
   npm install
   ```

## Usage

To start the development server, run:
```
npm run dev
```

Open your browser and go to `http://localhost:3000` to view the application.

## Features

- User authentication with JWT
- Task management (CRUD operations)
- Protected routes for authenticated users

## Contributing

Feel free to submit issues or pull requests for any improvements or bug fixes.

## License

This project is licensed under the MIT License.