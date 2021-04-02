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
  }

  writing() {
    this.fs.copyTpl(this.templatePath("src"), this.destinationPath("src"), {
      title: "Templating with Yeoman"
    });
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
};
