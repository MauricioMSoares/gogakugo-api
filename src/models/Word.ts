class Word {
  word: string;
  audioUrl?: string;
  definitions: [
    {
      definition: string;
      example: string;
      synonyms: [];
      antonyms: [];
    },
  ];

  constructor(
    word: string,
    audioUrl: string,
    definitions: [
      { definition: string; example: string; synonyms: []; antonyms: [] },
    ],
  ) {
    ((this.word = word),
      (this.audioUrl = audioUrl),
      (this.definitions = definitions));
  }
}

export { Word };
