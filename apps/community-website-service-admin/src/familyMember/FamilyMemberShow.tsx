import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
  BooleanField,
} from "react-admin";

import { FAMILYMEMBER_TITLE_FIELD } from "./FamilyMemberTitle";
import { MATRIMONIALPROFILE_TITLE_FIELD } from "../matrimonialProfile/MatrimonialProfileTitle";

export const FamilyMemberShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="familyOrigin" source="familyOrigin" />
        <TextField label="familyRelationship" source="familyRelationship" />
        <TextField label="ID" source="id" />
        <TextField label="origin" source="origin" />
        <TextField label="relationship" source="relationship" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField
          reference="User"
          target="familyMemberId"
          label="Users"
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
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
