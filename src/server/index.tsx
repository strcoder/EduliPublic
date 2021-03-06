import React from 'react';
import helmet from 'helmet';
import express from 'express';
import passport from 'passport';
import cookieParser from 'cookie-parser';
import { StaticRouter } from 'react-router-dom';
import { renderToString } from 'react-dom/server';
import { ENV, PORT } from './config';
import { Provider } from '../frontend/Context';
import { preloadState } from './model/preloadState';
import ServerApp from '../frontend/routes/ServerApp';

const app = express();

app.use(express.json());
app.use(cookieParser());
app.use(passport.initialize());
app.use(passport.session());

app.use(helmet());
app.use(helmet.permittedCrossDomainPolicies());
app.disable('x-powered-by');

const setResponse = (html: string, preloadedState: preloadState) => {
  return (
    `<!DOCTYPE html>
    <html lang="es">
      <head>
        <base href="/" />
        <meta charset="utf-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link rel="preconnect" href="https://fonts.gstatic.com">
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;500;600;700;800;900&family=Nunito:wght@200;300;400;600;700;800;900&display=swap" rel="stylesheet">
        <link rel="stylesheet" type="text/css" href="app.css" />
        <title>Eduli</title>
      </head>
      <body class=${JSON.stringify(preloadedState.theme).replace(/</g, '\\u003c')}>
        <div id="app">${html}</div>
        <div id="modal"></div>
        <script type="text/javascript" id="preloadedState">
          window.__PRELOADED_STATE__ = ${JSON.stringify(preloadedState).replace(/</g, '\\u003c')};
        </script>
        <script type="text/javascript" src="app.js"></script>
      </body>
    </html>`
  );
};

const renderApp = async (req: express.Request, res: express.Response) => {
  const { theme, role } = req.cookies;
  const initialState: preloadState = {
    theme: theme || 'light',
  };

  const html = renderToString(
    <Provider initialState={initialState}>
      <StaticRouter location={req.url} context={{}}>
        <ServerApp role={role} />
      </StaticRouter>
    </Provider>,
  );
  res
    .set('Content-Security-Policy', "default-src *; style-src 'self' http://* 'unsafe-inline'; script-src 'self' http://* 'unsafe-inline' 'unsafe-eval'")
    .send(setResponse(html, initialState));
};

app.use(express.static(`${__dirname}/public`));
app.use(express.static(`${__dirname}/assets`));
app.get('*', renderApp);

app.listen(PORT, () => {
  console.log(`${ENV} server running on Port ${PORT}`);
});
