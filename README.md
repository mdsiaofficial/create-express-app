# Run Express App

`run-express-app` is a CLI tool that simplifies the creation of Express.js applications. It generates a ready-to-use project structure with pre-configured templates for JavaScript (and optionally TypeScript) applications. Perfect for developers who want to quickly scaffold an Express.js project and start coding right away.

## Features

- **Quick Setup**: Generate a fully functional Express.js application in seconds.
- **Customizable Templates**: Includes pre-built templates for JavaScript applications.
- **Middleware & Controllers**: Pre-configured structure with examples of middleware, controllers, and routes.
- **Extensible**: Add your own templates or modify the existing ones.
- **Command-Line Simplicity**: Easy-to-use CLI commands.

---

## Installation

### Using `npm`

Install the package globally:

```bash
npm install -g run-express-app
```

Or use it directly with `npx` (no installation required):

```bash
npx run-express-app
```

---

## Usage

### 1. Generate a New Express.js Application

To scaffold a new Express.js project, run:

```bash
npx run-express-app generate my-app
```

This will create a directory `my-app` with the following structure:

```
my-app/
├── src/
│   ├── routes/
│   │   └── index.js
│   ├── controllers/
│   │   └── indexController.js
│   ├── middlewares/
│   │   └── logger.js
│   ├── models/
│   │   └── exampleModel.js
│   └── app.js
├── .gitignore
├── package.json
└── app.js
```

### 2. Start the Application

Navigate to the newly created project directory and install dependencies:

```bash
cd my-app
npm install
```

Start the server:

```bash
npm start
```

Your application will be running at `http://localhost:3000` by default.

---

## Commands

### `generate <project-name>`

Scaffold a new Express.js application in the specified directory.

Example:

```bash
npx run-express-app generate my-app
```

### `--help`

Display help information for the CLI.

```bash
npx run-express-app --help
```

---

## Project Structure

Here is the generated project structure:

```
my-app/
├── src/
│   ├── routes/
│   │   └── index.js         # Route definitions
│   ├── controllers/
│   │   └── indexController.js # Example controller
│   ├── middlewares/
│   │   └── logger.js        # Example middleware
│   ├── models/
│   │   └── exampleModel.js  # Example model
│   └── app.js               # Application entry point
├── .gitignore               # Ignored files
├── package.json             # Node.js project metadata
└── app.js                   # Server entry point
```

---

## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository.
2. Create a new branch for your feature or bug fix.
3. Commit your changes and push them to your fork.
4. Submit a pull request.

### Development Setup

Clone the repository:

```bash
git clone https://github.com/your-username/run-express-app.git
```

Install dependencies:

```bash
npm install
```

Run tests:

```bash
npm test
```

---

## License

This project is licensed under the MIT License. See the [LICENSE](./LICENSE) file for details.

---

## Feedback

If you encounter any issues or have suggestions for improvement, feel free to open an issue on [GitHub](https://github.com/your-username/run-express-app/issues).
