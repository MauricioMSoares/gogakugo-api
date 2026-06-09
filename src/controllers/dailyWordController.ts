import { Request, Response } from "express";
import { DailyWord } from "../models/DailyWord";

class DailyWordController {
  static async getDailyWord(req: Request, res: Response) {
    try {
      const dailyWord = "Test"; //TODO
      res.status(200).json(dailyWord);
    } catch (error) {
      res.status(500).json({ message: `Failed to fetch daily word: ${error}` });
    }
  }
}

export default DailyWordController;
