import * as React from "react";
import { Edit, SimpleForm, EditProps, TextInput } from "react-admin";

export const SportsHallEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="Address" source="address" />
        <TextInput label="City" source="city" />
        <TextInput label="Country" source="country" />
        <TextInput label="Name" source="name" />
        <TextInput label="ShortName" source="shortName" />
      </SimpleForm>
    </Edit>
  );
};
