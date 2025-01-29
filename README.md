<h1 align="center">Create Express App</h1>

<p align="center"><img src="./public/images/create-ex-app.svg" width="160"/></p>

<p align="center"> Create Express App is a CLI tool that simplifies the creation of Express.js applications. It generates a ready-to-use project structure with pre-configured templates for JavaScript and TypeScript applications. Perfect for developers who want to quickly scaffold an Express.js project and start coding right away.</p>

---

## Installation

### Using `npm`

```bash
npx create-ex-app
```

Install the package globally:

```bash
npm install -g create-ex-app
```

---

## Usage

### Create a New Express.js Application

To scaffold a new Express.js project, run:

```bash
npx create-ex-app  my-app
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

### Start the Application

Navigate to the newly created project directory and install dependencies:

```bash
cd my-app
npm install
```

Start the server:

```bash
npm run dev
```

Your application will be running at `http://localhost:4000` by default.

---

## Commands

Scaffold a new Express.js application in the specified directory.

Example:

```bash
npx create-ex-app my-app
```

### `--help`

Display help information for the CLI.

```bash
npx create-ex-app --help
```

---

<!-- ## Features -->

<!-- - **Quick Setup**: Generate a fully functional Express.js application in seconds.
- **Customizable Templates**: Includes pre-built templates for JavaScript applications.
- **Middleware & Controllers**: Pre-configured structure with examples of middleware, controllers, and routes.
- **Extensible**: Add your own templates or modify the existing ones.
- **Command-Line Simplicity**: Easy-to-use CLI commands. -->

## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository.
2. Create a new branch for your feature or bug fix.
3. Commit your changes and push them to your fork.
4. Submit a pull request.

### Development Setup

Clone the repository:

```bash
git clone https://github.com/gausalmunirtushar/create-express-app.git
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

If you encounter any issues or have suggestions for improvement, feel free to open an issue on [GitHub](https://github.com/gausalmunirtushar/create-express-app/issues).
