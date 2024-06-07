import { User } from "../user/User";

export type MatrimonialProfile = {
  compatibilityScore: number | null;
  createdAt: Date;
  id: string;
  profileCompatibilityScore: number | null;
  profileUser: string | null;
  updatedAt: Date;
  users?: Array<User>;
};
