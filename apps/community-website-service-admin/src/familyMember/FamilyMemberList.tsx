import * as React from "react";
import { List, Datagrid, ListProps, DateField, TextField } from "react-admin";
import Pagination from "../Components/Pagination";

export const FamilyMemberList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"FamilyMembers"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <DateField source="createdAt" label="Created At" />
        <TextField label="familyOrigin" source="familyOrigin" />
        <TextField label="familyRelationship" source="familyRelationship" />
        <TextField label="ID" source="id" />
        <TextField label="origin" source="origin" />
        <TextField label="relationship" source="relationship" />
        <DateField source="updatedAt" label="Updated At" />
      </Datagrid>
    </List>
  );
};
