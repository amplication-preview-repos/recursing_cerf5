import { UserCreateNestedManyWithoutMatrimonialProfilesInput } from "./UserCreateNestedManyWithoutMatrimonialProfilesInput";

export type MatrimonialProfileCreateInput = {
  compatibilityScore?: number | null;
  profileCompatibilityScore?: number | null;
  profileUser?: string | null;
  users?: UserCreateNestedManyWithoutMatrimonialProfilesInput;
};
