import express from "express";
import router from "./routes/index.js";
import "dotenv/config";
import { response } from "./helpers/response.js";
import { errorMiddleware } from "./middleware/error-middleware.js";

const app = express();

app.use(express.json());
app.use(response);
app.use(router);
app.use(errorMiddleware);

export default app;
