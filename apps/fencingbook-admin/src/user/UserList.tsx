import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  TextField,
  DateField,
  BooleanField,
} from "react-admin";
import Pagination from "../Components/Pagination";

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
        <TextField label="AgeCategory" source="ageCategory" />
        <TextField label="BirthDate" source="birthDate" />
        <TextField label="Club" source="club" />
        <TextField label="Country" source="country" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="Email" source="email" />
        <TextField label="First Name" source="firstName" />
        <TextField label="Gender" source="gender" />
        <TextField label="ID" source="id" />
        <BooleanField label="IsVerified" source="isVerified" />
        <TextField label="Last Name" source="lastName" />
        <TextField label="PasswordHash" source="passwordHash" />
        <TextField label="Region" source="region" />
        <TextField label="Roles" source="roles" />
        <TextField label="ScreenName" source="screenName" />
        <TextField label="SportsLevel" source="sportsLevel" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="Username" source="username" />
        <TextField label="VerificationCode" source="verificationCode" />
        <TextField label="WeaponType" source="weaponType" />
      </Datagrid>
    </List>
  );
};
