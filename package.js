Package.describe({
  name: "corsica:meteor-lodash",
  summary: "Wrapper for Lo-Dash v4.6.1",
  version: "4.6.1",
  git: "https://github.com/corsica/meteor-lodash.git"
});

Package.onUse(function(api) {
  api.versionsFrom('METEOR@0.9.0');

  api.addFiles('lodash/lodash.js');
  api.addFiles('export.js');

  api.export('lodash');
  api.export('_');
});

