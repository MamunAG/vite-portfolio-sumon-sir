import { AppCarousel } from "@/components/app-carousel";

export default function About() {
  return (
    <div className="w-full flex justify-center p-10">
      <div className="container min-h-[500px] flex flex-col justify-center items-center gap-5">
        <h1 className="text-slate-500">About</h1>
        <AppCarousel />
      </div>
    </div>
  );
}
