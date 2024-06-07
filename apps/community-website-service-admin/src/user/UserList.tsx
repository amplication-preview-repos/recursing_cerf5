import * as React from "react";

import {
  List,
  Datagrid,
  ListProps,
  DateField,
  TextField,
  ReferenceField,
  BooleanField,
} from "react-admin";

import Pagination from "../Components/Pagination";
import { FAMILYMEMBER_TITLE_FIELD } from "../familyMember/FamilyMemberTitle";
import { MATRIMONIALPROFILE_TITLE_FIELD } from "../matrimonialProfile/MatrimonialProfileTitle";

export const UserList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Users"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <DateField source="createdAt" label="Created At" />
        <TextField label="Email" source="email" />
        <ReferenceField
          label="FamilyMember"
          source="familymember.id"
          reference="FamilyMember"
        >
          <TextField source={FAMILYMEMBER_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="First Name" source="firstName" />
        <TextField label="ID" source="id" />
        <TextField label="Last Name" source="lastName" />
        <ReferenceField
          label="MatrimonialProfile"
          source="matrimonialprofile.id"
          reference="MatrimonialProfile"
        >
          <TextField source={MATRIMONIALPROFILE_TITLE_FIELD} />
        </ReferenceField>
        <BooleanField label="profileVisible" source="profileVisible" />
        <TextField label="role" source="role" />
        <TextField label="Roles" source="roles" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="Username" source="username" />
      </Datagrid>
    </List>
  );
};
