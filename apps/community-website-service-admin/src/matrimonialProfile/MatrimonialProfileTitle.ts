import { MatrimonialProfile as TMatrimonialProfile } from "../api/matrimonialProfile/MatrimonialProfile";

export const MATRIMONIALPROFILE_TITLE_FIELD = "profileUser";

export const MatrimonialProfileTitle = (
  record: TMatrimonialProfile
): string => {
  return record.profileUser?.toString() || String(record.id);
};
