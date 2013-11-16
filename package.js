Package.describe({
  summary: "Ease integration with Drupal over DDP"
});

Package.on_use(function (api) {
  if (typeof api.export !== 'undefined') {
    api.use('webapp', 'server');
  };

  api.use('livedata', 'server');

  api.use('accounts-base', 'server', { weak: true });
  api.use('accounts-password', 'server', { weak: true });

  api.add_files('drupal-server.js', 'server');
});
