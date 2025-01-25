const inquirer = require("inquirer");
const chalk = require("chalk");
const fs = require("fs-extra");
const path = require("path");

async function run(projectName) {
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

  const templateDir = path.join(__dirname, "templates", language.toLowerCase());
  console.log(chalk.green(`Creating a ${language} project...`));

  if (!isCurrentDir) fs.mkdirSync(targetDir);
  fs.copySync(templateDir, targetDir);

  console.log(chalk.green(`Project created at ${targetDir}`));
  console.log(chalk.blue(`cd ${projectName}`));
  console.log(chalk.blue("npm install"));
  console.log(chalk.blue("npm run dev"));
}

module.exports = { run };
