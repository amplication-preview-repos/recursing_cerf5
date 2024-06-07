import { UserUpdateManyWithoutFamilyMembersInput } from "./UserUpdateManyWithoutFamilyMembersInput";

export type FamilyMemberUpdateInput = {
  familyOrigin?: string | null;
  familyRelationship?: string | null;
  origin?: string | null;
  relationship?: string | null;
  users?: UserUpdateManyWithoutFamilyMembersInput;
};
