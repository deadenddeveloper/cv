const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "4jbons",
  e2e: {
    baseUrl: "http://localhost:3000",
    setupNodeEvents(on, config) {
      //
    },
  },

  component: {
    devServer: {
      framework: "nuxt",
      bundler: "webpack",
    },
  },
});
