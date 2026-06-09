class DailyWord {
  word: string;
  description: string;

  constructor(word: string, description: string) {
    ((this.word = word), (this.description = description));
  }
}

export { DailyWord }
