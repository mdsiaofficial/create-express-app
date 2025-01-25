import inquirer from "inquirer";
import chalk from "chalk";
import fs from "fs-extra";
import path from "path";
import { fileURLToPath } from "url";
import { createJavaScriptTemplate } from "./src/utils/createTemplate.js";

// Use fileURLToPath for `__dirname` equivalent in ES Modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export async function run(projectName) {
  const isCurrentDir = projectName === ".";
  const targetDir = isCurrentDir
    ? process.cwd()
    : path.join(process.cwd(), projectName);

  if (!isCurrentDir && fs.existsSync(targetDir)) {
    console.log(chalk.red(`Folder "${projectName}" already exists.`));
    return;
  }

  const { language } = await inquirer.prompt([
    {
      type: "list",
      name: "language",
      message: "Choose the project language:",
      choices: ["JavaScript", "TypeScript"],
    },
  ]);

  if (language === "JavaScript") {
    createJavaScriptTemplate(targetDir);
  } else {
    console.log(
      chalk.yellow("TypeScript template creation is not implemented yet.")
    );
  }

  console.log(chalk.green(`Project created at ${targetDir}`));
  console.log(chalk.blue(`cd ${projectName}`));
  console.log(chalk.blue("npm install"));
  console.log(chalk.blue("npm run dev"));
}
