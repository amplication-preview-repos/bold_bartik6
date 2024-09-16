import * as React from "react";
import { Create, SimpleForm, CreateProps, TextInput } from "react-admin";

export const SportsHallCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="Address" source="address" />
        <TextInput label="City" source="city" />
        <TextInput label="Country" source="country" />
        <TextInput label="Name" source="name" />
        <TextInput label="ShortName" source="shortName" />
      </SimpleForm>
    </Create>
  );
};
