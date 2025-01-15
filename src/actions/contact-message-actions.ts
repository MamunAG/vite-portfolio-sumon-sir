import axios from "axios";
import { apiRoot } from "./api";
import { ContactMessage } from "@/type/app-type";

export async function GetAllContactMessage(): Promise<ContactMessage[]> {
  const res = await axios.get(apiRoot + `/contact-msg`);
  return res.data;
}

export async function GetContactMessageById(
  id: number
): Promise<ContactMessage | null> {
  const res = await axios.get(apiRoot + `/contact-msg/${id}`);
  return res.data;
}

export async function Save(
  contactMessage: ContactMessage
): Promise<ContactMessage> {
  const { name, email } = contactMessage;

  if (!name) {
    throw new Error("Name is required");
  }
  if (name.length < 3) {
    throw new Error("Name must be at least 3 character.");
  }
  if (!email) {
    throw new Error("Email is required");
  }
  if (email.length < 10) {
    throw new Error("Please provide a valid contact number.");
  }

  const res = await axios.post(apiRoot + `/contact-msg`, contactMessage);
  return res.data;
}
