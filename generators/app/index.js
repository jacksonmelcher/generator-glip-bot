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
    const answers = await this.prompt([
      {
        type: "input",
        name: "name",
        message: "What's the project name?",
        default: _.startCase(this.appname)
      }
    ]);
  }
  writing() {
    this.fs.copyTpl(
      this.templatePath("src/express.html"),
      this.destinationPath("public/index.html"),
      { title: "Templating with Yeoman" }
    );
  }

  // prompting() {
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
    const appDir = path.join(process.cwd(), this.name);
    if (this.useYarn) {
      this.log("Yarn flag set");
      this.spawnCommandSync("yarn");
    } else {
      this.spawnCommandSync("npm", ["run", "lint:fix"]);
    }
  }
  // }
};
