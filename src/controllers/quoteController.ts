import { Request, Response } from "express";
import { Quote } from "../models/Quote";
// @ts-ignore
import quote from "inspirational-quotes";

class QuoteController {
  static async getDailyQuote(req: Request, res: Response) {
    try {
      const data = await quote.getQuote();
      const response = new Quote(data.text, data.author);
      res.status(200).json({ response });
    } catch (error) {
      res
        .status(500)
        .json({ message: `Failed to fetch daily quote: ${error}` });
    }
  }
}

export default QuoteController;
