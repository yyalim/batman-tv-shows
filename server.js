const express = require('express');
const next = require('next');
const routes = require('./routes')
const path = require('path');
const url = require('url');
const cluster = require('cluster');
const numCPUs = require('os').cpus().length;

const dev = process.env.NODE_ENV !== 'production';
const port = process.env.PORT || 3000;

// Multi-process to utilize all CPU cores.
if (!dev && cluster.isMaster) {
  console.log(`Node cluster master ${process.pid} is running`);

  // Fork workers.
  for (let i = 0; i < numCPUs; i++) {
    cluster.fork();
  }

  cluster.on('exit', (worker, code, signal) => {
    console.error(`Node cluster worker ${worker.process.pid} exited: code ${code}, signal ${signal}`);
  });

} else {
  const nextApp = next({ dir: '.', dev });
  const nextHandler = routes.getRequestHandler(nextApp);

  nextApp.prepare()
    .then(() => {
      const server = express();

      if (!dev) {
        // Enforce SSL & HSTS in production
        server.use(function(req, res, next) {
          var proto = req.headers["x-forwarded-proto"];
          if (proto === "https") {
            res.set({
              'Strict-Transport-Security': 'max-age=31557600' // one-year
            });
            return next();
          }
          res.redirect("https://" + req.headers.host + req.url);
        });
      }

      // server.get('/details/:id', (req, res) => {
      //   const actualPage = '/details'
      //   const queryParams = { id: req.params.id }
      //   nextApp.render(req, res, actualPage, queryParams)
      // })

      // // Default catch-all renders Next app
      // server.get('*', (req, res) => {
      //   const parsedUrl = url.parse(req.url, true);
      //   nextHandler(req, res, parsedUrl);
      // });

      server.use(nextHandler).listen(port, (err) => {
        if (err) throw err;
        console.log(`Listening on http://localhost:${port}`);
      });
    });
}