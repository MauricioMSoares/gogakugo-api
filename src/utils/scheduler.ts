import cron from "node-cron";
import { getDailyWord, getDailyWordAudio } from "./dailyFetch";
import { Word } from "../models/Word";

// Schedule to run every day at midnight (00:00)
cron.schedule("0 0 * * *", async () => {
  try {
    const wordPayload = await getDailyWord();
    const audioPayload = await getDailyWordAudio();

    global.dailyWord = new Word(wordPayload.word, audioPayload.fileUrl, [
      {
        definition: wordPayload.definitions[0].text,
        example: wordPayload.examples[0].text,
        synonyms: [],
        antonyms: [],
      },
    ]);
  } catch (error) {
    console.error("Error executing daily task:", error);
  }
});
