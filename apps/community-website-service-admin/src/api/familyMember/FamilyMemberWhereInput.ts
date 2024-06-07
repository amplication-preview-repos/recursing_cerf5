import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { UserListRelationFilter } from "../user/UserListRelationFilter";

export type FamilyMemberWhereInput = {
  familyOrigin?: StringNullableFilter;
  familyRelationship?: StringNullableFilter;
  id?: StringFilter;
  origin?: StringNullableFilter;
  relationship?: StringNullableFilter;
  users?: UserListRelationFilter;
};
