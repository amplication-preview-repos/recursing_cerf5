import { Advertisement } from "../advertisement/Advertisement";
import { FamilyMember } from "../familyMember/FamilyMember";
import { MatrimonialProfile } from "../matrimonialProfile/MatrimonialProfile";
import { JsonValue } from "type-fest";

export type User = {
  advertisements?: Array<Advertisement>;
  createdAt: Date;
  email: string | null;
  familyMember?: FamilyMember | null;
  firstName: string | null;
  id: string;
  lastName: string | null;
  matrimonialProfile?: MatrimonialProfile | null;
  profileVisible: boolean | null;
  role: string | null;
  roles: JsonValue;
  updatedAt: Date;
  username: string;
};
