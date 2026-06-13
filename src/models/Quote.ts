class Quote {
  quote: string;
  author: string;
  work?: string | "";

  constructor(quote: string, author: string, work: string) {
    ((this.quote = quote), (this.author = author), (this.work = work));
  }
}

export { Quote };
