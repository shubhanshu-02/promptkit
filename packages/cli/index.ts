import { Command } from 'commander';
import { init } from './commands/init';

const program = new Command;

program
  .name('my-ui-lib')
  .description('CLI for custom UI library with AI-powered theming')
  .version('0.1.0');

program
  .command('init')
  .description('Initialize a new project with the UI library')
  .action(init);
