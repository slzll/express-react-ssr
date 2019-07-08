import React from "react";
import routes from "../client/routes";
import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "../client/store";

export const render = req => {
  const content = renderToString(
    <Provider store={store}>
      <StaticRouter location={req.path}>{routes}</StaticRouter>
    </Provider>
  );
  return `
    <!DOCTYPE html>
    <html>
        <head>
            <title>SSR</title>
        </head>
        <body>
            <div id="root">${content}</div> 
            <script src="index.js"></script>
        </body>
    </html>
  `;
};
