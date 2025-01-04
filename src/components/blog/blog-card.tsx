/* eslint-disable @typescript-eslint/no-non-null-asserted-optional-chain */
"use client";

import { CardTitle } from "@/components/ui/card";
import { BlogWithFirstDetailsDto } from "@/type/app-type";
import { useNavigate } from "react-router";

export default function BlogCard({ blog }: { blog: BlogWithFirstDetailsDto }) {
  const navigate = useNavigate();
  return (
    <div
      className="border rounded-lg w-full p-5 mb-10 transition hover:cursor-pointer hover:shadow-lg hover:shadow-zinc-500"
      onClick={() => navigate(`/blogs/details/${blog?.id}`)}
      data-aos="fade-up"
      data-aos-delay="100"
    >
      <div className="w-full h-full flex flex-row justify-center items-start sm:items-center">
        <div className="flex-1 pl-3">
          <CardTitle className="mb-3 leading-6 text-primary sm:text-2xl">
            {blog?.title}
          </CardTitle>
          <div
            className="ProseMirror sm:line-clamp-3 hidden sm:block text-justify"
            dangerouslySetInnerHTML={{ __html: blog?.firstDetails! }}
          />
          <p className="mt-3 underline">বিস্তারিত ...</p>
        </div>
        <div className="w-4/12 sm:w-3/12 mb-3 pl-2 sm:pl-6 flex justify-center items-center">
          <img
            src={`https://files.kkklawhouse.com/blog_images/${blog?.firstImageUrl}`}
            alt={"image"}
            width={210}
            height={210}
            className="border rounded-lg p-1"
          />
        </div>
      </div>
    </div>
  );
}
