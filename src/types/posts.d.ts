import { type } from "os";

export interface IPost {
  userId: string;
  id: string;
  title: string;
  body: string;
}

export type Post = IPost[];

export interface INewsState {
  news: Post;
}
