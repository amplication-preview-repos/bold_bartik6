import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
} from "react-admin";

export const CompetitionShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="Category" source="category" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="Date" source="date" />
        <TextField label="Formula" source="formula" />
        <TextField label="Gender" source="gender" />
        <TextField label="ID" source="id" />
        <TextField label="Name" source="name" />
        <TextField label="Owner" source="owner" />
        <TextField label="SportsHall" source="sportshall" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="Weapon" source="weapon" />
      </SimpleShowLayout>
    </Show>
  );
};
