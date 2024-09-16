import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  DateTimeInput,
} from "react-admin";

export const CompetitionEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="Category" source="category" />
        <DateTimeInput label="Date" source="date" />
        <TextInput label="Formula" source="formula" />
        <TextInput label="Gender" source="gender" />
        <TextInput label="Name" source="name" />
        <TextInput label="Owner" source="owner" />
        <TextInput label="SportsHall" source="sportshall" />
        <TextInput label="Weapon" source="weapon" />
      </SimpleForm>
    </Edit>
  );
};
