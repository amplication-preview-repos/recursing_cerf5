import { SortOrder } from "../../util/SortOrder";

export type FamilyMemberOrderByInput = {
  createdAt?: SortOrder;
  familyOrigin?: SortOrder;
  familyRelationship?: SortOrder;
  id?: SortOrder;
  origin?: SortOrder;
  relationship?: SortOrder;
  updatedAt?: SortOrder;
};
