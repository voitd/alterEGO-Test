import { type } from "os";

export interface Post {
  userId: string;
  id: string;
  title: string;
  body: string;
}

export interface INewsState {
  news: Post[];
}
