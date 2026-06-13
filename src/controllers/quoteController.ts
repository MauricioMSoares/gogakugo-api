import { Request, Response } from "express";
import { Quote } from "../models/Quote";

class QuoteController {
  static async getDailyQuote(req: Request, res: Response) {
    try {
      // API to be changed
      const response = await fetch(
        "https://api.api-ninjas.com/v2/quoteoftheday",
        {
          method: "GET",
          headers: {
            "X-Api-Key": `${process.env.QUOTES_API_KEY}`,
          },
        },
      );

      const data = await response.json();
      const quoteObj = new Quote(data.quote, data.author, data.work);
      res.status(200).json({ quoteObj });
    } catch (error) {
      res
        .status(500)
        .json({ message: `Failed to fetch daily quote: ${error}` });
    }
  }
}

export default QuoteController;
