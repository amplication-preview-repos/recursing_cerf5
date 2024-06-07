import { User } from "../user/User";

export type FamilyMember = {
  createdAt: Date;
  familyOrigin: string | null;
  familyRelationship: string | null;
  id: string;
  origin: string | null;
  relationship: string | null;
  updatedAt: Date;
  users?: Array<User>;
};
