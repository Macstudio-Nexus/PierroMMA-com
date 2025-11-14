import ContactForm from "./ContactForm";
import ContactInfo from "./ContactInfo";

export default function Contact() {
  return (
    <div id="contact" className="flex flex-col md:flex-row items-center md:items-start px-4 justify-center gap-4 lg:gap-24 scroll-mt-20 xl:scroll-mt-45">
      <div className="flex flex-col items-center max-w-xs lg:max-w-lg gap-3 px-4 md:pt-10">
        <h2 className="!text-primary !text-4xl">ready to train?</h2>
        <p>
          Whether you have training experience or you are a true beginner, we
          will welcome you with open arms.
        </p>
        <p>
          Please fill out your information and we will reach out to you within
          24 hours.
        </p>
        <p>
          Please reach out to coach Johnny directly regarding personal training.
        </p>
        <ContactInfo />
      </div>
      <ContactForm />
    </div>
  );
}
