"use strict";
const Generator = require("yeoman-generator");
const chalk = require("chalk");
const yosay = require("yosay");

module.exports = class extends Generator {
  constructor(args, opts) {
    super(args, opts);
    this.option("yarn", {
      description: "Use Yarn as the package manager"
    });

    this.useYarn = this.options.yarn;
  }

  async prompting() {
    // Have Yeoman greet the user.
    this.log(
      yosay(
        `Welcome to the top-notch ${chalk.red(
          "generator-glip-chatbot"
        )} generator!`
      )
    );
  }

  // Prompting() {
  //   // Have Yeoman greet the user.
  //   this.log(
  //     yosay(
  //       `Welcome to the peachy ${chalk.red("generator-glip-bot")} generator!`
  //     )
  //   );

  //   const prompts = [
  //     {
  //       type: "confirm",
  //       name: "someAnswer",
  //       message: "Would you like to enable this option?",
  //       default: true
  //     }
  //   ];

  //   return this.prompt(prompts).then(props => {
  //     // To access props later use this.props.someAnswer;
  //     this.props = props;
  //   });
  // }

  // writing() {
  //   this.fs.copy(
  //     this.templatePath("dummyfile.txt"),
  //     this.destinationPath("dummyfile.txt")
  //   );
  // }

  install() {
    if (this.useYarn) {
      this.log("Yarn flag set");
      this.spawnCommandSync("yarn");
    } else {
      this.spawnCommandSync("npm", ["run", "lint:fix"]);
    }
  }
  // }
};
