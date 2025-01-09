import HeroSectionOtherPage from "@/components/hero-section-other-page";
import ContactForm from "./contact-form";

export default function ContactUs() {
  return (
    <>
      <HeroSectionOtherPage normalText="Contact" strongText="Us" />
      <div
        className="untree_co-section flex justify-center"
        style={{ backgroundColor: "#37373F" }}
      >
        <div className="container px-5 sm:px-0">
          <div className="flex justify-center">
            <div className="w-full flex justify-center">
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
