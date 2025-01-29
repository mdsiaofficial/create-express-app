import inquirer from 'inquirer';
import chalk from 'chalk';
import fs from 'fs-extra';
import path from 'path';
import { fileURLToPath } from 'url';
import { execSync } from 'child_process';

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

    // Step 1: Choose Language
    const { language } = await inquirer.prompt([
        {
            type: 'list',
            name: 'language',
            message: 'Choose the project language:',
            choices: ['JavaScript', 'TypeScript'],
        },
    ]);

    // Step 2: Choose Database (Optional)
    const { database } = await inquirer.prompt([
        {
            type: 'list',
            name: 'database',
            message: 'Choose a database for your project:',
            choices: [
                { name: 'NoSQL (MongoDB with Mongoose)', value: 'mongoose' },
                {
                    name: 'SQL (PostgreSQL with Sequelize/TypeORM)',
                    value: 'sql',
                },
                { name: 'No database', value: 'none' },
            ],
        },
    ]);

    // Determine the correct template folder
    let templateFolder = language.toLowerCase(); // "javascript" or "typescript"
    if (database === 'mongoose') {
        templateFolder += '-mongoose';
    } else if (database === 'sql') {
        templateFolder += language === 'JavaScript' ? '-sequelize' : '-typeorm';
    }

    // Define the source template directory based on user choice
    const templateDir = path.join(__dirname, 'templates', templateFolder);

    if (!fs.existsSync(templateDir)) {
        console.log(
            chalk.red(
                `Template for ${language} with ${database} does not exist.`,
            ),
        );
        return;
    }

    try {
        // Copy all files and folders from the selected template directory
        fs.copySync(templateDir, targetDir);

        console.log(chalk.green(`Project created at ${targetDir}`));

        // Step 3: Initialize Git (Optional)
        const { initGit } = await inquirer.prompt([
            {
                type: 'confirm',
                name: 'initGit',
                message: 'Initialize a git repository?',
                default: false,
            },
        ]);

        if (initGit) {
            execSync('git init', { cwd: targetDir, stdio: 'inherit' });
            console.log(chalk.green('Git repository initialized.'));
        }

        console.log(chalk.green.bold(`\nProject Setup Complete! 🎉\n`));

        console.log(chalk.yellowBright(`Next Steps:`));
        console.log(chalk.blue(`1. Navigate to your project folder:`));
        console.log(chalk.cyan(`   cd ${isCurrentDir ? '.' : projectName}`));

        console.log(chalk.blue(`2. Install dependencies:`));
        console.log(chalk.cyan(`   npm install`));

        console.log(chalk.blue(`3. Start the development server:`));
        console.log(chalk.cyan(`   npm run dev\n`));

        console.log(chalk.magenta.bold(`Happy Coding! 🚀`));
    } catch (error) {
        console.error(chalk.red('Error copying template files:'), error);
    }
}
