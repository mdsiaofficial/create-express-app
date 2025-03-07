const projectStructure = {
	src: {
		app: {
			'app.ts': `
  import express from "express";
  import { router } from "../routes/index";
  import { errorHandler } from "../middlewares/errorHandler";
  
  const app = express();
  const PORT = process.env.PORT || 3000;
  
  app.use(express.json());
  app.use("/", router);
  app.use(errorHandler);
  
  app.listen(PORT, () => {
    console.log(\`Server running on http://localhost:\${PORT}\`);
  });
  
  export default app;
        `,
		},
		config: {
			'config.ts': `
  export const config = {
    port: process.env.PORT || 3000,
    dbUrl: process.env.DB_URL || "mongodb://localhost:27017/example",
  };
        `,
			'database.ts': `
  import mongoose from "mongoose";
  import { config } from "./config";
  
  export const connectDatabase = async () => {
    try {
      await mongoose.connect(config.dbUrl);
      console.log("Database connected successfully");
    } catch (error) {
      console.error("Database connection failed", error);
      process.exit(1);
    }
  };
        `,
		},
		constants: {
			'.gitkeep': '',
		},
		controllers: {
			'index.ts': `
  import { Request, Response } from "express";
  
  export const homeController = (req: Request, res: Response): void => {
    res.send("Welcome to your Express.js TypeScript app!");
  };
        `,
		},
		middlewares: {
			'errorHandler.ts': `
  import { Request, Response, NextFunction } from "express";
  
  export const errorHandler = (
    err: Error,
    req: Request,
    res: Response,
    next: NextFunction
  ): void => {
    console.error(err.stack);
    res.status(500).json({ error: "Something went wrong!" });
  };
        `,
		},
		routes: {
			'index.ts': `
  import express from "express";
  import { homeController } from "../controllers/index";
  
  export const router = express.Router();
  
  router.get("/", homeController);
        `,
		},
	},
	'.gitignore': `
  node_modules
  .env
  dist
    `,
	'package.json': `
  {
    "name": "express-typescript-app",
    "version": "1.0.0",
    "description": "A basic Express.js application with TypeScript",
    "main": "dist/app.js",
    "scripts": {
      "start": "node dist/app.js",
      "dev": "ts-node-dev src/app/app.ts",
      "build": "tsc"
    },
    "dependencies": {
      "express": "^4.18.2"
    },
    "devDependencies": {
      "@types/express": "^4.17.17",
      "@types/node": "^18.15.11",
      "ts-node-dev": "^2.0.0",
      "typescript": "^4.9.5"
    }
  }
    `,
	'tsconfig.json': `
  {
    "compilerOptions": {
      "target": "ES6",
      "module": "CommonJS",
      "rootDir": "src",
      "outDir": "dist",
      "strict": true,
      "esModuleInterop": true,
      "skipLibCheck": true
    },
    "include": ["src"],
    "exclude": ["node_modules"]
  }
    `,
};
