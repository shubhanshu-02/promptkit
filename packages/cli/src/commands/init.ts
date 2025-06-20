import chalk from "chalk";
import inquirer from "inquirer";
import fs from 'fs-extra';
import path from "path";


export async function initCommand() {
    console.log(chalk.cyan("Welcome to UI Library"));
    const answers = await inquirer.prompt([
        { type: 'input', name: 'projectName', message: 'Project name:', default: 'my-ui-project' },
        { type: 'list', name: 'framework', message: 'Framework:', choices: ['Next.js', 'Vite + React'], default: 'Next.js' },
        { type: 'confirm', name: 'typescript', message: 'Use TypeScript?', default: true },
        { type: 'confirm', name: 'tailwind', message: 'Use Tailwind CSS?', default: true }
    ]);

    const projectDir = path.resolve(process.cwd(), answers.projectName);
    await fs.ensureDir(projectDir);

    await fs.ensureDir(path.join(projectDir, 'components'));
    await fs.writeJSON(path.join(projectDir, 'my-ui-lib.json'), {
        framework: answers.framework,
        typescript: answers.typescript,
        tailwind: answers.tailwind
    }, { spaces: 2 });

    console.log(chalk.green(`Project ${answers.projectName} initialized!`));
    console.log(chalk.gray(`cd ${answers.projectName} to get started.`));
}