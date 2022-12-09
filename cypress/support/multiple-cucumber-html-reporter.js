const report = require("multiple-cucumber-html-reporter");

var today = new Date();
var date =
  today.getDate() + "-" + (today.getMonth() + 1) + "-" + today.getFullYear();
var time =
  today.getHours() + "h" + today.getMinutes() + "m" + today.getSeconds() + "s";
var dateTime = date + "_" + time;

report.generate({
  jsonDir: "cypress/cucumber-json/",
  reportPath: "cypress/reports/MultipleReport_" + dateTime + ".html",
  metadata: {
    browser: {
      name: "Chrome",
      version: "86.0.4240.75",
    },
    device: "Local test machine",
    platform: {
      name: "Ubuntu",
      version: "22",
    },
  },
  customData: {
    title: "Run info",
    data: [
      { label: "Project", value: "Cypress Login Page" },
      { label: "Release", value: "1.0.0" },
    ],
  },
});
