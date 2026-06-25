import nodeProcess from "node:process";

export async function getDailyWord(): Promise<any> {
  try {
    nodeProcess.loadEnvFile();
    const apiKey = process.env.WORDNIK_API_KEY;
    const word = await fetch(
      `api.wordnik.com/words.json/wordOfTheDay?api_key=${apiKey}`,
    );
    const data = word.json();
    return data;
  } catch (error) {
    console.error("Error fetching daily word: " + error);
  }
}

export async function getDailyWordAudio(): Promise<any> {
  try {
    const source = await getDailyWord();
    const data = source.json();

    try {
      nodeProcess.loadEnvFile();
      const apiKey = process.env.WORDNIK_API_KEY;
      const audio = await fetch(
        `api.wordnik.com/words.json/${data.word}/audio?api_key=${apiKey}`,
      );
      const response = audio.json();
      return response;
    } catch (error) {
      console.error("Error fetching daily word audio: " + error);
    }
  } catch (error) {
    console.error("Error fetching daily word: " + error);
  }
}
