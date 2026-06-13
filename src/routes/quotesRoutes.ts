import express from "express";
import QuoteController from "../controllers/quoteController";

const routes = express.Router();
const path = "/quotes";

routes.get(`${path}/daily-quote`, QuoteController.getDailyQuote);

export default routes;
