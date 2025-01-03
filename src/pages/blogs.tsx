import { GetAllBlogWithFirstDetails } from "@/actions/blog-actions";
import BlogCard from "@/components/blog/blog-card";
import HeroSectionOtherPage from "@/components/hero-section-other-page";
import { Skeleton } from "@/components/ui/skeleton";
import { BlogWithFirstDetailsDto } from "@/type/app-type";

export default function Blogs() {
  const { data: blogs } = GetAllBlogWithFirstDetails();

  return (
    <>
      <HeroSectionOtherPage normalText="" strongText="" />

      {blogs ? (
        <div
          className="untree_co-section bg-primary-dark pt-3 pb-10 flex justify-center items-center"
          style={{ backgroundColor: "#37373F" }}
        >
          <div
            className="container mx-auto flex flex-col-reverse
            p-3 lg:flex-col lg:mt-5 lg:px-20 text-white"
          >
            {blogs?.map((b: BlogWithFirstDetailsDto) => (
              <BlogCard blog={b} key={Math.random()} />
            ))}
          </div>
        </div>
      ) : (
        <div
          className="untree_co-section bg-primary-dark pt-3 pb-10 flex justify-center items-center"
          style={{ backgroundColor: "#37373F" }}
        >
          <div className="container p-3  mx-auto flex flex-col-reverse lg:flex-col lg:mt-5 lg:px-20 text-white">
            <Skeleton className="border rounded-lg shadow w-full p-5 mb-5 h-28 transition" />
            <Skeleton className="border rounded-lg shadow w-full p-5 mb-5 h-28  transition" />
            <Skeleton className="border rounded-lg shadow w-full p-5 mb-5 h-28  transition" />
            <Skeleton className="border rounded-lg shadow w-full p-5 mb-5 h-28  transition" />
            <Skeleton className="border rounded-lg shadow w-full p-5 mb-5 h-28  transition" />
          </div>
        </div>
      )}
    </>
  );
}
