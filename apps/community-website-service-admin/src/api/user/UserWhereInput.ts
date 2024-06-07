import { AdvertisementListRelationFilter } from "../advertisement/AdvertisementListRelationFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { FamilyMemberWhereUniqueInput } from "../familyMember/FamilyMemberWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { MatrimonialProfileWhereUniqueInput } from "../matrimonialProfile/MatrimonialProfileWhereUniqueInput";
import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";

export type UserWhereInput = {
  advertisements?: AdvertisementListRelationFilter;
  email?: StringNullableFilter;
  familyMember?: FamilyMemberWhereUniqueInput;
  firstName?: StringNullableFilter;
  id?: StringFilter;
  lastName?: StringNullableFilter;
  matrimonialProfile?: MatrimonialProfileWhereUniqueInput;
  profileVisible?: BooleanNullableFilter;
  role?: StringNullableFilter;
  username?: StringFilter;
};
