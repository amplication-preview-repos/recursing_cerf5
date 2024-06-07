import { UserCreateNestedManyWithoutFamilyMembersInput } from "./UserCreateNestedManyWithoutFamilyMembersInput";

export type FamilyMemberCreateInput = {
  familyOrigin?: string | null;
  familyRelationship?: string | null;
  origin?: string | null;
  relationship?: string | null;
  users?: UserCreateNestedManyWithoutFamilyMembersInput;
};
