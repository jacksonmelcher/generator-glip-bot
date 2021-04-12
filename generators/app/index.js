"use strict";
const Generator = require("yeoman-generator");
const chalk = require("chalk");
const yosay = require("yosay");

module.exports = class extends Generator {
  async prompting() {
    // Have Yeoman greet the user.
    this.log(
      yosay(
        `Welcome to the top-notch ${chalk.red(
          "generator-glip-chatbot"
        )} generator!`
      )
    );

    this.answers = await this.prompt([
      {
        type: "input",
        name: "title",
        message: "Your project title"
      }
    ]);
  }

  writing() {
    this.log(this.templatePath("src/eventHandler"));

    this.fs.copyTpl(
      this.templatePath("src/eventHandler.js"),
      this.destinationPath("src/eventHandler.js")
    );
    this.fs.copyTpl(
      this.templatePath("src/express.js"),
      this.destinationPath("src/express.js")
      // { title: this.answers.title } // user answer `title` used
    );

    this.fs.copyTpl(
      this.templatePath("package.json"),
      this.destinationPath("package.json"),
      {
        title: "Templating with Yeoman"
      }
    );
    this.fs.copyTpl(
      this.templatePath("LICENSE"),
      this.destinationPath("LICENSE"),
      {
        title: "Templating with Yeoman"
      }
    );
    this.fs.copyTpl(
      this.templatePath("README.md"),
      this.destinationPath("README.md"),
      {
        title: "Templating with Yeoman"
      }
    );
  }

  install() {
    this.yarnInstall();
  }
};
