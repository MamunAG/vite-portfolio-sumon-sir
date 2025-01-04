import { GetAllBlogById } from "@/actions/blog-actions";
import HeroSectionOtherPage from "@/components/hero-section-other-page";
import { Skeleton } from "@/components/ui/skeleton";
import { BlogDetails, BlogMaster } from "@/type/app-type";

import React, { Suspense } from "react";
import { useParams } from "react-router";

function ImageSection({ src }: { src: string }) {
  return (
    <div className="flex justify-center items-center">
      <img
        src={`https://files.kkklawhouse.com/blog_images/${src}`}
        alt="vat-text"
        height={300}
        width={300}
      />
    </div>
  );
}

function TextSection({ text }: { text: string }) {
  return (
    <div
      className="my-5 ProseMirror"
      dangerouslySetInnerHTML={{ __html: text }}
    />
  );
}

function GetBlogDetails() {
  const { id } = useParams();
  console.log("details", id);

  const [blog, setBlog] = React.useState<
    | ({
        BlogDetails: BlogDetails[];
        BlogTags: ({
          tag: {
            name: string;
            id: number;
            isActive: boolean;
          } | null;
        } & {
          id: number;
          blogId: number;
          tagId: number;
        })[];
      } & BlogMaster)
    | null
  >();

  React.useEffect(() => {
    const getData = async () => {
      const data = await GetAllBlogById(Number(id));
      console.log(data);
      setBlog(data);
    };
    getData();
  }, [id]);

  //   console.log(blog);
  if (blog) {
    return (
      <>
        <HeroSectionOtherPage normalText={blog?.title} strongText="" />
        <div
          className="untree_co-section bg-primary-dark pt-5 pb-20 flex justify-center items-center"
          style={{ backgroundColor: "#37373F" }}
        >
          <div className="container flex flex-col justify-center text-white px-5 sm:px-0">
            {/* <div className="border-b-2 mb-3 pb-2">
              <h1 className="font-bold text-2xl">{blog?.title}</h1>
            </div> */}
            {blog?.BlogDetails?.map((element) =>
              element.sectionType === "image" ? (
                <ImageSection src={element.imagePreview!} key={Math.random()} />
              ) : (
                <TextSection text={element.text!} key={Math.random()} />
              )
            )}
          </div>
        </div>
      </>
    );
  } else {
    return (
      <>
        <HeroSectionOtherPage normalText="" strongText="" isLoading={true} />
        {/* <div className="container flex flex-col justify-center"> */}
        <div
          className="untree_co-section bg-primary-dark pt-5 pb-20 flex justify-center items-center"
          style={{ backgroundColor: "#37373F" }}
        >
          <div className="container flex flex-col justify-center text-white">
            {/* <div className="border-b-2 mb-3 pb-2">
            <Skeleton className="w-full md:w-6/12 h-10" />
          </div> */}
            {/* image */}
            <div className="flex justify-center items-center">
              <Skeleton className="w-8/12 sm:w-3/12 h-48 bg-zinc-700" />
            </div>
            {/* image */}
            <div className="flex justify-center items-center mt-5">
              <Skeleton className="w-full h-32 bg-zinc-700" />
            </div>
            <div className="flex justify-center items-center mt-5">
              <Skeleton className="w-full h-32 bg-zinc-700" />
            </div>
            <div className="flex justify-center items-center mt-5">
              <Skeleton className="w-full h-32 bg-zinc-700" />
            </div>
            <div className="flex justify-center items-center mt-5">
              <Skeleton className="w-full h-32 bg-zinc-700" />
            </div>
            <div className="flex justify-center items-center mt-5">
              <Skeleton className="w-full h-32 bg-zinc-700" />
            </div>
            <div className="flex justify-center items-center mt-5">
              <Skeleton className="w-full h-32 bg-zinc-700" />
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default function WrappedBlogDetails() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <GetBlogDetails />
    </Suspense>
  );
}
