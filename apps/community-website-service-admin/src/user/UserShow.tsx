import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  ReferenceField,
  BooleanField,
  ReferenceManyField,
  Datagrid,
} from "react-admin";

import { USER_TITLE_FIELD } from "./UserTitle";
import { FAMILYMEMBER_TITLE_FIELD } from "../familyMember/FamilyMemberTitle";
import { MATRIMONIALPROFILE_TITLE_FIELD } from "../matrimonialProfile/MatrimonialProfileTitle";

export const UserShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
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
        <ReferenceManyField
          reference="Advertisement"
          target="userId"
          label="Advertisements"
        >
          <Datagrid rowClick="show">
            <DateField source="createdAt" label="Created At" />
            <TextField label="description" source="description" />
            <TextField label="ID" source="id" />
            <TextField label="image" source="image" />
            <TextField label="title" source="title" />
            <DateField source="updatedAt" label="Updated At" />
            <ReferenceField label="user" source="user.id" reference="User">
              <TextField source={USER_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
