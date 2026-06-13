import express, { Request, Response } from "express";
import wordsRoutes from "./wordsRoutes";
import quotesRoutes from "./quotesRoutes";

const routes = (app: any) => {
  app.get("/", (req: Request, res: Response) => {
    res.status(200).send("This is a test");
  });

  app.use(express.json(), wordsRoutes, quotesRoutes);
};

export default routes;
