import Achievement from "@/components/achivement";
import HeroSectionOtherPage from "@/components/hero-section-other-page";

export default function About() {
  return (
    <>
      <HeroSectionOtherPage normalText="About" strongText="Company" />

      <div
        className="untree_co-section pb-10 flex flex-col justify-center items-center"
        style={{ backgroundColor: "#37373F" }}
      >
        <div className="container min-h-64 px-5 sm:px-0">
          <div
            className="block sm:flex sm:gap-10 m-0 sm:mt-20"
            style={{ margin: 0 }}
          >
            <div className="w-full sm:w-1/4 mb-1 sm:mb-0 flex sm:block  justify-center">
              <img
                src="/images/person_1.jpg"
                width="250"
                height="200"
                className="rounded-lg"
                alt="Profile Image"
              />
            </div>
            <div
              className="font-general-regular w-full sm:w-3/4 text-left"
              style={{ color: "#b2b2b8" }}
            >
              <p className="mb-4 text-ternary-dark dark:text-ternary-light text-lg text-justify">
                Far far away, behind the word mountains, far from the countries
                Vokalia and Consonantia, there live the blind texts. Separated
                they live in Bookmarksgrove right at the coast of the Semantics,
                a large language ocean.Far far away, behind the word mountains,
                far from the countries Vokalia and Consonantia, there live the
                blind texts. Separated they live in Bookmarksgrove right at the
                coast of the Semantics, a large language ocean.Far far away,
                behind the word mountains, far from the countries Vokalia and
                Consonantia, there live the blind texts. Separated they live in
                Bookmarksgrove right at the coast of the Semantics, a large
                language ocean.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* section: achivement*/}
      <Achievement />
    </>
  );
}
