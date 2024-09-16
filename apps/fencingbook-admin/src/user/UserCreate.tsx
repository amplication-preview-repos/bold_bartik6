import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  DateTimeInput,
  BooleanInput,
  PasswordInput,
  SelectArrayInput,
  ReferenceArrayInput,
} from "react-admin";

import { UserClubTitle } from "../userClub/UserClubTitle";
import { UserProfileTitle } from "../userProfile/UserProfileTitle";
import { UserRoleTitle } from "../userRole/UserRoleTitle";
import { ROLES_OPTIONS } from "../user/RolesOptions";

export const UserCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="AgeCategory" source="ageCategory" />
        <DateTimeInput label="BirthDate" source="birthDate" />
        <TextInput label="Club" source="club" />
        <TextInput label="Country" source="country" />
        <TextInput label="Email" source="email" type="email" />
        <TextInput label="First Name" source="firstName" />
        <TextInput label="Gender" source="gender" />
        <BooleanInput label="IsVerified" source="isVerified" />
        <TextInput label="Last Name" source="lastName" />
        <PasswordInput label="Password" source="password" />
        <TextInput label="PasswordHash" source="passwordHash" />
        <TextInput label="Region" source="region" />
        <SelectArrayInput
          source="roles"
          choices={ROLES_OPTIONS}
          optionText="label"
          optionValue="value"
        />
        <TextInput label="ScreenName" source="screenName" />
        <TextInput label="SportsLevel" source="sportsLevel" />
        <ReferenceArrayInput
          source="userClubs"
          reference="UserClub"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={UserClubTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="userProfiles"
          reference="UserProfile"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={UserProfileTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="userRoles"
          reference="UserRole"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={UserRoleTitle} />
        </ReferenceArrayInput>
        <TextInput label="Username" source="username" />
        <TextInput label="VerificationCode" source="verificationCode" />
        <TextInput label="WeaponType" source="weaponType" />
      </SimpleForm>
    </Create>
  );
};
