import express from 'express';
import helmet from 'helmet';
import cookieParser from 'cookie-parser';
import passport from 'passport';
import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';
import Layout from '../frontend/container/Layout';
import serverRoutes from '../frontend/routes/serverRoutes';
import { ENV, PORT } from './config';

const app = express();

app.use(express.json());
app.use(cookieParser());
app.use(passport.initialize());
app.use(passport.session());
app.use(helmet());
app.use(helmet.permittedCrossDomainPolicies());
app.disable('x-powered-by');

const setResponse = (html: string) => {
  return `<!DOCTYPE html>
    <html lang="es">
      <head>
        <base href="/">
        <meta charset="utf-8" />
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="preconnect" href="https://fonts.gstatic.com">
        <link href="https://fonts.googleapis.com/css2?family=Montserrat&family=Mulish&display=swap" rel="stylesheet">
        <link rel="stylesheet" type="text/css" href="app.css" />
        <title>Eduli</title>
      </head>
      <body>
        <div id="app">${html}</div>
        <div id="modal"></div>
        <script type="text/javascript" src="app.js"></script>
      </body>
    </html>`;
};

const renderApp = async (req: express.Request, res: express.Response) => {
  const html = renderToString(
    <StaticRouter location={req.url} context={{}}>
      <Layout>{renderRoutes(serverRoutes())}</Layout>
    </StaticRouter>,
  );
  res.send(setResponse(html));
};

app.use(express.static(`${__dirname}/public`));
app.use(express.static(`${__dirname}/assets`));
app.get('*', renderApp);

app.listen(PORT, () => {
  console.log(`${ENV} server running on Port ${PORT}`);
});
