import { FamilyMember as TFamilyMember } from "../api/familyMember/FamilyMember";

export const FAMILYMEMBER_TITLE_FIELD = "familyOrigin";

export const FamilyMemberTitle = (record: TFamilyMember): string => {
  return record.familyOrigin?.toString() || String(record.id);
};
