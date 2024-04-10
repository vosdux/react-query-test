import { queryOptions } from "@tanstack/react-query";
import postService from '../../service/posts';
import { postsKey } from "../constants";

export const postsQueryOptions = queryOptions({
  queryKey: [postsKey],
  queryFn: () => postService.get(),
})