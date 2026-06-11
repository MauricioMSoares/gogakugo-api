import express from "express";
import WordController from "../controllers/wordController";

const routes = express.Router();
const path = "/words";

routes.get(`${path}/daily-word`, WordController.getDailyWord);
routes.get(`${path}/:word`, WordController.getWord);

export default routes;
