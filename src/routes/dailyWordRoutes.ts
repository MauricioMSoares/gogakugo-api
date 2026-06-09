import express from "express";
import DailyWordController from "../controllers/dailyWordController";

const routes = express.Router();

routes.get("/daily-word", DailyWordController.getDailyWord);

export default routes;
