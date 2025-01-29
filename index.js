import inquirer from 'inquirer';
import chalk from 'chalk';
import fs from 'fs-extra';
import path from 'path';
import { fileURLToPath } from 'url';

// Use fileURLToPath for `__dirname` equivalent in ES Modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export async function run(projectName) {
    const isCurrentDir = projectName === '.';
    const targetDir = isCurrentDir
        ? process.cwd()
        : path.join(process.cwd(), projectName);

    if (!isCurrentDir && fs.existsSync(targetDir)) {
        console.log(chalk.red(`Folder "${projectName}" already exists.`));
        return;
    }

    const { language } = await inquirer.prompt([
        {
            type: 'list',
            name: 'language',
            message: 'Choose the project language:',
            choices: ['JavaScript', 'TypeScript'],
        },
    ]);

    // Define the source template directory based on user choice
    const templateDir = path.join(
        __dirname,
        'templates',
        language.toLowerCase(),
    );

    if (!fs.existsSync(templateDir)) {
        console.log(chalk.red(`Template for ${language} does not exist.`));
        return;
    }

    try {
        // Copy all files and folders from the selected template directory
        fs.copySync(templateDir, targetDir);

        console.log(chalk.green(`Project created at ${targetDir}`));

        console.log(chalk.blue(`cd ${isCurrentDir ? '.' : projectName}`));
        console.log(chalk.blue('npm install'));
        console.log(chalk.blue('npm run dev'));
    } catch (error) {
        console.error(chalk.red('Error copying template files:'), error);
    }
}
