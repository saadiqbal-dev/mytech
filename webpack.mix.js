let mix = require("laravel-mix");

mix.webpackConfig({
  resolve: {
    extensions: [".js", ".css"],
  },
});

mix.disableNotifications();

// Compile all CSS files into one minified file
mix
  .styles(
    [
      "src/assets/css/fonts.css",
      "src/assets/css/base.css",
      "src/assets/css/header.css",
      "src/assets/css/hero.css",
      "src/assets/css/company.css",
      "src/assets/css/industry.css",
      "src/assets/css/services.css",
      "src/assets/css/partners.css",
      "src/assets/css/join.css",
      "src/assets/css/testimonials.css",
      "src/assets/css/footer.css",
      "src/assets/css/utilities.css",
      "src/assets/css/responsive-768.css",
      "src/assets/css/template.css",
      "src/assets/css/activecamp-form.css",
    ],
    "dist/css/app.min.css",
  )
  .sourceMaps();

// Compile all JS files into one minified file
mix
  .js(
    [
      "src/assets/js/main.js",
      "src/assets/js/header.js",
      "src/assets/js/carousel.js",
    ],
    "dist/js/app.min.js",
  )
  .sourceMaps();

// Copy fonts and images to dist
mix.copyDirectory("src/assets/fonts", "dist/fonts");
mix.copyDirectory("src/assets/img", "dist/img");

// Set public path
mix.setPublicPath("dist");

// Add versioning for cache busting (only in production)
if (mix.inProduction()) {
  mix.version();
}
