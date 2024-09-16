type Author = {
    name: string;
    role: string;
    avatar: {
      url: string;
    };
  }
  
  type FeaturedImage = {
    url: string;
  }
  
  type BodyElement = {
    type: string;
    content?: string;
    url?: string;
    width?: number;
    height?: number;
    caption?: string;
    author?: string;
  }
  
  export type Article = {
    slug: string;
    title: string;
    subtitle: string;
    author: Author;
    featuredImage: FeaturedImage;
    body: BodyElement[];
    conclusion: string;
  }
  
  export type ArticleData = {
    articles: Article[];
  }