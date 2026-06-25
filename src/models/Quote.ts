class Quote {
  quote: string;
  author: string;

  constructor(quote: string, author: string) {
    ((this.quote = quote), (this.author = author));
  }
}

export { Quote };
