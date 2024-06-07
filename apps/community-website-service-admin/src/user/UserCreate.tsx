import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceArrayInput,
  SelectArrayInput,
  TextInput,
  ReferenceInput,
  SelectInput,
  PasswordInput,
  BooleanInput,
} from "react-admin";

import { AdvertisementTitle } from "../advertisement/AdvertisementTitle";
import { FamilyMemberTitle } from "../familyMember/FamilyMemberTitle";
import { MatrimonialProfileTitle } from "../matrimonialProfile/MatrimonialProfileTitle";
import { ROLES_OPTIONS } from "../user/RolesOptions";

export const UserCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceArrayInput
          source="advertisements"
          reference="Advertisement"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={AdvertisementTitle} />
        </ReferenceArrayInput>
        <TextInput label="Email" source="email" type="email" />
        <ReferenceInput
          source="familyMember.id"
          reference="FamilyMember"
          label="FamilyMember"
        >
          <SelectInput optionText={FamilyMemberTitle} />
        </ReferenceInput>
        <TextInput label="First Name" source="firstName" />
        <TextInput label="Last Name" source="lastName" />
        <ReferenceInput
          source="matrimonialProfile.id"
          reference="MatrimonialProfile"
          label="MatrimonialProfile"
        >
          <SelectInput optionText={MatrimonialProfileTitle} />
        </ReferenceInput>
        <PasswordInput label="Password" source="password" />
        <BooleanInput label="profileVisible" source="profileVisible" />
        <TextInput label="role" source="role" />
        <SelectArrayInput
          source="roles"
          choices={ROLES_OPTIONS}
          optionText="label"
          optionValue="value"
        />
        <TextInput label="Username" source="username" />
      </SimpleForm>
    </Create>
  );
};
