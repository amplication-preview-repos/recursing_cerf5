import { InputJsonValue } from "../../types";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type AdvertisementUpdateInput = {
  description?: string | null;
  image?: InputJsonValue;
  title?: string | null;
  user?: UserWhereUniqueInput | null;
};
