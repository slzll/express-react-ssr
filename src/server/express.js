import express from "express";
import proxy from "express-http-proxy";
import { render } from "./utils";

const app = express();
app.use(express.static("public"));

app.use(
  "/api",
  proxy("test10.jy365.net", {
    proxyReqPathResolver: req => {
      console.log(`:: proxy :: => ${req.path}`);
      return "/api" + req.path;
    },
    proxyErrorHandler: (err, res, next) => {
      console.log(err);
      next(err);
    }
  })
);

app.get("*", (req, res) => {
  res.send(render(req));
});

app.listen(9000, () => {
  console.log("listen:9000");
});
