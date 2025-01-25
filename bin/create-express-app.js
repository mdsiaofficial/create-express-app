#!/usr/bin/env node

const { program } = require("commander");
const main = require("../index");

program
  .name("create-express-app")
  .description(
    "CLI to generate Express.js projects in JavaScript or TypeScript"
  )
  .version("1.0.0");

program
  .argument("<name>", "Project name or '.' for current directory")
  .action(async (name) => {
    await main.run(name);
  });

program.parse(process.argv);
