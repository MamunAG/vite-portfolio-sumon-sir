/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from "axios";
import { apiRoot } from "./api";
import { BlogWithFirstDetailsDto } from "./DTO/blog-with-first-details-dto";
import { useQuery } from "@tanstack/react-query";
import { ReactQueryKey } from "@/utility/react-query-key";

export async function GetAllBlogById(id: number) {
  if (Number.isNaN(id) || id == undefined || id == null || id <= 0) return null;
  try {
    const blog = await axios.get(`${apiRoot}/blogs/${id}`);
    return blog.data;
  } catch (error) {
    console.log("err: ", error);
  }
}

export function GetAllBlogWithFirstDetails() {
  const query = useQuery({
    queryKey: [ReactQueryKey.blogsView],
    queryFn: async (): Promise<BlogWithFirstDetailsDto[]> =>
      await GetAllBlogWithFirstDetails_Action(),
    staleTime: 1000 * 60 * 10,
  });
  return query;
}

async function GetAllBlogWithFirstDetails_Action() {
  const blogs = await axios.get(
    `${apiRoot}/blogs/get-all-blog-with-first-details/${new Date()}`
  );
  console.log(blogs);

  const data: BlogWithFirstDetailsDto[] = [];
  blogs?.data?.forEach((element: any) => {
    const item: BlogWithFirstDetailsDto = {
      id: element.id,
      title: element.title,
      firstDetails: element.firstDetails,
      firstImageUrl: element.firstImageUrl,
    };

    data.push(item);
  });

  return data;
}
