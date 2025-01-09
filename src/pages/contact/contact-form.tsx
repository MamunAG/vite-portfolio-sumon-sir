import React from "react";
import { useToast } from "@/components/ui/use-toast";
import { useState } from "react";
import { Save } from "@/actions/contact-message-actions";
import { ContactMessage } from "@/type/app-type";

type contactDataType = {
  name: string;
  email: string;
  phoneNumber: string;
  subject: string;
  message: string;
};

export default function ContactForm() {
  const { toast } = useToast();
  const [data, setData] = useState<contactDataType>({
    name: "",
    email: "",
    phoneNumber: "",
    subject: "",
    message: "",
  });

  function updateState(e: React.ChangeEvent<HTMLInputElement>) {
    setData({ ...data, [e.target.name]: e.target.value });
  }

  function updateState_txtArea(e: React.ChangeEvent<HTMLTextAreaElement>) {
    setData({ ...data, [e.target.name]: e.target.value });
  }

  async function handleOnSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (data.name == "") {
      showErrorMessage("Name is required.");
      return;
    }
    if (data.email == "") {
      showErrorMessage("Email is required.");
      return;
    }
    const msg: ContactMessage = {
      id: 0,
      name: data.name,
      email: data.email,
      phoneNumber: data.phoneNumber,
      subject: data.subject,
      message: data.message,
      createdDate: new Date(),
    };

    // alert(JSON.stringify(msg));
    await Save(msg);

    toast({
      variant: "success",
      description: "Message has been sent successfully.",
    });

    console.log(data);
  }

  function showErrorMessage(msg: string) {
    toast({
      variant: "destructive",
      title: "Message",
      description: msg,
    });
  }
  return (
    <form
      onSubmit={handleOnSubmit}
      className="w-full"
      data-aos="fade-up"
      data-aos-delay="200"
    >
      <div className="flex flex-wrap">
        <div className="w-6/12">
          <div className="form-group">
            <label className="" htmlFor="name" style={{ color: "#b2b2b8" }}>
              Name
            </label>
            <input
              type="text"
              className="form-control px-2"
              id="name"
              name="name"
              onChange={updateState}
            />
          </div>
        </div>
        <div className="w-6/12">
          <div className="form-group">
            <label className="" htmlFor="email" style={{ color: "#b2b2b8" }}>
              Email address
            </label>
            <input
              type="email"
              className="form-control px-2"
              id="email"
              name="email"
              onChange={updateState}
            />
          </div>
        </div>
        {/* <div className="w-6/12">
          <div className="form-group">
            <label className="" htmlFor="lname" style={{ color: "#b2b2b8" }}>
              Last name
            </label>
            <input
              type="text"
              className="form-control px-2"
              id="lname"
              name="lname"
              onChange={updateState}
            />
          </div>
        </div> */}
      </div>
      <div className="flex flex-wrap">
        <div className="w-full">
          <div className="form-group">
            <label
              className=""
              htmlFor="phone-number"
              style={{ color: "#b2b2b8" }}
            >
              Phone Number
            </label>
            <input
              type="tel"
              className="form-control px-2"
              id="phone-number"
              name="phoneNumber"
              onChange={updateState}
            />
          </div>
        </div>
      </div>

      <div className="form-group">
        <label className="" htmlFor="message" style={{ color: "#b2b2b8" }}>
          Message
        </label>

        <textarea
          name="message"
          className="form-control px-2 min-h-36"
          id="message"
          cols={30}
          rows={10}
          onChange={updateState_txtArea}
        ></textarea>
      </div>

      <button type="submit" className="btn btn-primary text-white">
        Send Message
      </button>
    </form>
  );
}
