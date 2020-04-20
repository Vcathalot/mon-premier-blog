
  export class Post {

    title: string;
    content: string;
    loveIts: number;
    dontLoveIts :number;
    createdAt: number;
  
    constructor( title: string,  content: string,  loveIts?: any, dontLoveIts?: any, createdAt?: number) {
      this.title = title;
      this.content = content;
      this.loveIts = loveIts;
      this.dontLoveIts =dontLoveIts;
      this.createdAt = createdAt;
    }
  }