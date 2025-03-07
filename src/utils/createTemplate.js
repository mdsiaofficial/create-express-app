import fs from 'fs-extra';
import path from 'path';

export const createJavaScriptTemplate = (baseDir) => {
	const structure = [
		{
			file: 'src/routes/index.js',
			content: `import express from "express";
  import { homeController } from "../controllers/indexController.js";

  export const router = express.Router();

  router.get("/", homeController);
  `,
		},
		{
			file: 'src/controllers/indexController.js',
			content: `export const homeController = (req, res) => {
    res.send("Welcome to your Express.js app!");
  };
  `,
		},
		{
			file: 'src/middlewares/logger.js',
			content: `export const logger = (req, res, next) => {
    console.log(\`\${req.method} \${req.url}\`);
    next();
  };
  `,
		},
		{
			file: 'src/models/exampleModel.js',
			content: `export const exampleModel = {
    message: "This is a placeholder model",
  };
  `,
		},
		{
			file: '.gitignore',
			content: `node_modules
  .env
  `,
		},
		{
			file: 'package.json',
			content: `{
    "name": "express-app",
    "version": "1.0.0",
    "description": "A basic Express.js application",
    "main": "app.js",
    "scripts": {
      "start": "node app.js",
      "dev": "nodemon app.js"
    },
    "dependencies": {
      "express": "^4.18.2"
    },
    "devDependencies": {
      "nodemon": "^2.0.22"
    }
  }
  `,
		},
		{
			file: 'app.js',
			content: `import express from "express";
  import { router } from "./src/routes/index.js";

  const app = express();
  const PORT = process.env.PORT || 3000;

  // Middleware
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  // Routes
  app.use("/", router);

  app.listen(PORT, () => {
    console.log(\`Server is running on http://localhost:\${PORT}\`);
  });
  `,
		},
	];

	structure.forEach(({ file, content }) => {
		const fullPath = path.join(baseDir, file);
		fs.ensureFileSync(fullPath);
		fs.writeFileSync(fullPath, content, 'utf8');
	});

	console.log(`JavaScript template created at ${baseDir}`);
};
