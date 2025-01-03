import axios from "axios";
import { apiRoot } from "./api";
import { HireMe } from "@/type/app-type";

export async function GetAllRequest(): Promise<HireMe[]> {
  const res = await axios.get(apiRoot + `/hire-me`);
  return res.data;
}

export async function GetRequestById(id: number): Promise<HireMe | null> {
  const res = await axios.get(apiRoot + `/hire-me/${id}`);
  return res.data;
}

export async function Save(hireMe: HireMe): Promise<HireMe> {
  const { name, contact } = hireMe;

  if (!name) {
    throw new Error("Name is required");
  }
  if (name.length < 3) {
    throw new Error("Tag name must be at least 3 character.");
  }
  if (!contact) {
    throw new Error("Contact number is required");
  }
  if (contact.length < 10) {
    throw new Error("Please provide a valid contact number.");
  }

  const res = await axios.post(apiRoot + `/hire-me`, hireMe);
  return res.data;
}
