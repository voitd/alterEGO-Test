import { IPost, Post } from "../types/posts";
import api from "./api";

export const newsApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getNews: builder.query<Post, void>({
      query: () => ({ url: "posts" }),
      providesTags: (result = []) => [
        ...result.map(({ id }) => ({ type: "News", id } as const)),
        { type: "News" as const, id: "LIST" },
      ],
    }),
    getPost: builder.query<IPost, string>({
      query: (id) => ({ url: `posts/${id}` }),
      providesTags: (_post, _err, id) => [{ type: "News", id }],
    }),
    deletePost: builder.mutation<{ success: boolean; id: number }, number>({
      query(id) {
        return {
          url: `posts/${id}`,
          method: "DELETE",
        };
      },
      invalidatesTags: (post) => [{ type: "News", id: post?.id }],
    }),
  }),
});

export const { useGetNewsQuery, useGetPostQuery, useDeletePostMutation } =
  newsApi;
