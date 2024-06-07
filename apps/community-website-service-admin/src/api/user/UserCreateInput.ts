import { AdvertisementCreateNestedManyWithoutUsersInput } from "./AdvertisementCreateNestedManyWithoutUsersInput";
import { FamilyMemberWhereUniqueInput } from "../familyMember/FamilyMemberWhereUniqueInput";
import { MatrimonialProfileWhereUniqueInput } from "../matrimonialProfile/MatrimonialProfileWhereUniqueInput";
import { InputJsonValue } from "../../types";

export type UserCreateInput = {
  advertisements?: AdvertisementCreateNestedManyWithoutUsersInput;
  email?: string | null;
  familyMember?: FamilyMemberWhereUniqueInput | null;
  firstName?: string | null;
  lastName?: string | null;
  matrimonialProfile?: MatrimonialProfileWhereUniqueInput | null;
  password: string;
  profileVisible?: boolean | null;
  role?: string | null;
  roles: InputJsonValue;
  username: string;
};
