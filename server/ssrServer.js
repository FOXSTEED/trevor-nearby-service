import express from 'express';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import Nearby from './components/App';
import Loadable from 'react-loadable';
import { getBundles } from 'react-loadable/webpack'
import stats from './dist/react-loadable.json';



app.get('/', (req, res) => {
  res.send(`
    <!doctype html>
    <html lang="en">
      <head>...</head>
      <body>
        <div id="app">${ReactDOMServer.renderToString(<Nearby/>)}</div>
        <script src="/public/build/bundle.js"></script>
      </body>
    </html>
  `);
});

app.listen(8080, () => {
  console.log('Running on http://localhost:8080/');
});