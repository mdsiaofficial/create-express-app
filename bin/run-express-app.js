#!/usr/bin/env node

import { program } from "commander";
import { run } from "../index.js";

program
  .name("run-express-app")
  .description(
    "CLI to generate Express.js projects in JavaScript or TypeScript"
  )
  .version("1.0.1");

program
  .argument("<name>", "Project name or '.' for current directory")
  .action(async (name) => {
    await run(name);
  });

program.parse(process.argv);
