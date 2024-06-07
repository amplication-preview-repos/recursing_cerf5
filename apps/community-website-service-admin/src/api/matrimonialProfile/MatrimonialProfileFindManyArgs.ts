import { MatrimonialProfileWhereInput } from "./MatrimonialProfileWhereInput";
import { MatrimonialProfileOrderByInput } from "./MatrimonialProfileOrderByInput";

export type MatrimonialProfileFindManyArgs = {
  where?: MatrimonialProfileWhereInput;
  orderBy?: Array<MatrimonialProfileOrderByInput>;
  skip?: number;
  take?: number;
};
