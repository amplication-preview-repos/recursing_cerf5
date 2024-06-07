import { IntNullableFilter } from "../../util/IntNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { UserListRelationFilter } from "../user/UserListRelationFilter";

export type MatrimonialProfileWhereInput = {
  compatibilityScore?: IntNullableFilter;
  id?: StringFilter;
  profileCompatibilityScore?: IntNullableFilter;
  profileUser?: StringNullableFilter;
  users?: UserListRelationFilter;
};
