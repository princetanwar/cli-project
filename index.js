#! /usr/bin/env node

// const { argv } = require("yargs")(process.argv);
import inquirer from "inquirer";
import chalk from "chalk";
import fs from 'fs'
import fetch from "node-fetch";
import path  from "path";
import cliProgress from "cli-progress";

console.log("starting process");

const getFile = async (url) => {
	
	return new Promise((rej) =>{

// create a new progress bar instance and use shades_classic theme
const bar1 = new cliProgress.SingleBar({}, cliProgress.Presets.shades_classic);

// start the progress bar with a total value of 200 and start value of 0
bar1.start(200, 0);

let prog = 100

setInterval(() => {

	bar1.update(prog +10);
	prog = prog +10
	if(prog === 200){
		bar1.stop();
		rej('')
	}
	
}, 1000);


// stop the progress bar





	})

//   console.log({ resJson: { id: resJson.id, name: resJson.name } });
};
const main = async () => {
//   const answers = await inquirer.prompt([
//     {
//       type: "input",
//       name: "name",
//       message: "enter your name",
//     },
//   ]);

await getFile()

//   console.log(chalk.red(`your name is  ${answers.name}`));

  // console.log({answers})
  //   await getUser(argv.id);
  console.log("done");
};

main();
