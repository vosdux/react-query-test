import { httpClient } from "./http-client";

export type Posts = {
  userId: number;
  id: number;
  title: number;
  body: number;
};

class PostsService {
  private slug = "/posts";
  get = async () => (await httpClient.get<Posts[]>(this.slug)).data;
}

export default new PostsService();
