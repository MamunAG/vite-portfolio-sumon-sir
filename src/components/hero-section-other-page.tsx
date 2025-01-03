import { Skeleton } from "./ui/skeleton";

type porps = {
  normalText: string;
  strongText: string;
  isLoading?: boolean;
};
export default function HeroSectionOtherPage({
  normalText,
  strongText,
  isLoading = false,
}: porps) {
  return (
    <div className="untree_co-section bg-primary-dark py-20 flex justify-center items-center">
      <div className="container">
        {isLoading ? (
          <div className="w-full h-full pt-16">
            <Skeleton className="h-10 bg-zinc-700" style={{ width: "100%" }} />
          </div>
        ) : (
          <div className="flex justify-center items-center">
            <div className="lg:w-7/12 pt-5 mt-5 flex justify-center items-center">
              <h1
                className="text-white heading"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                {normalText} <strong>{strongText}</strong>
              </h1>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
