import { UserUpdateManyWithoutMatrimonialProfilesInput } from "./UserUpdateManyWithoutMatrimonialProfilesInput";

export type MatrimonialProfileUpdateInput = {
  compatibilityScore?: number | null;
  profileCompatibilityScore?: number | null;
  profileUser?: string | null;
  users?: UserUpdateManyWithoutMatrimonialProfilesInput;
};
