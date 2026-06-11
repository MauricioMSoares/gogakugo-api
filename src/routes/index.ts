import express, { Request, Response } from "express";
import wordsRoutes from "./wordsRoutes";

const routes = (app: any) => {
  app.get("/", (req: Request, res: Response) => {
    res.status(200).send("This is a test");
  });

  app.use(express.json(), wordsRoutes);
};

export default routes;
