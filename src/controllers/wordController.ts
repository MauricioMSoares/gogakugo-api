import { Request, Response } from "express";
import { Word } from "../models/Word";

class WordController {
  static async getWord(req: Request, res: Response) {
    try {
      const word = req.params.word;
      const result = await fetch(
        `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`,
      );

      if (result) {
        const data = await result.json();
        const allDefinitions = data.flatMap((entry: { meanings: any[] }) =>
          entry.meanings.flatMap((meaning) => meaning.definitions),
        );

        const wordObj = new Word(
          data[0].word,
          data[0].phonetics[0].audio,
          allDefinitions,
        );
        res.status(200).json({wordObj});
      } else {
        res.status(404).json({message: "Word not found. Please, double check for any typos."})
      }
    } catch (error) {
      res.status(500).json({ message: `Failed to fetch word: ${error}` });
    }
  }

  static async getDailyWord(req: Request, res: Response) {
    try {
      const dailyWord = "Test"; //TODO
      res.status(200).json(dailyWord);
    } catch (error) {
      res.status(500).json({ message: `Failed to fetch daily word: ${error}` });
    }
  }
}

export default WordController;
