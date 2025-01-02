type porps = {
  normalText: string;
  strongText: string;
};
export default function HeroSectionOtherPage({
  normalText,
  strongText,
}: porps) {
  return (
    <div className="untree_co-section bg-primary-dark py-20 flex justify-center items-center">
      <div className="container">
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
      </div>
    </div>
  );
}
