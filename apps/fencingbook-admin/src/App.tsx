import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { UserList } from "./user/UserList";
import { UserCreate } from "./user/UserCreate";
import { UserEdit } from "./user/UserEdit";
import { UserShow } from "./user/UserShow";
import { RoleList } from "./role/RoleList";
import { RoleCreate } from "./role/RoleCreate";
import { RoleEdit } from "./role/RoleEdit";
import { RoleShow } from "./role/RoleShow";
import { ClubList } from "./club/ClubList";
import { ClubCreate } from "./club/ClubCreate";
import { ClubEdit } from "./club/ClubEdit";
import { ClubShow } from "./club/ClubShow";
import { UserClubList } from "./userClub/UserClubList";
import { UserClubCreate } from "./userClub/UserClubCreate";
import { UserClubEdit } from "./userClub/UserClubEdit";
import { UserClubShow } from "./userClub/UserClubShow";
import { UserProfileList } from "./userProfile/UserProfileList";
import { UserProfileCreate } from "./userProfile/UserProfileCreate";
import { UserProfileEdit } from "./userProfile/UserProfileEdit";
import { UserProfileShow } from "./userProfile/UserProfileShow";
import { UserRoleList } from "./userRole/UserRoleList";
import { UserRoleCreate } from "./userRole/UserRoleCreate";
import { UserRoleEdit } from "./userRole/UserRoleEdit";
import { UserRoleShow } from "./userRole/UserRoleShow";
import { CompetitionList } from "./competition/CompetitionList";
import { CompetitionCreate } from "./competition/CompetitionCreate";
import { CompetitionEdit } from "./competition/CompetitionEdit";
import { CompetitionShow } from "./competition/CompetitionShow";
import { SportsHallList } from "./sportsHall/SportsHallList";
import { SportsHallCreate } from "./sportsHall/SportsHallCreate";
import { SportsHallEdit } from "./sportsHall/SportsHallEdit";
import { SportsHallShow } from "./sportsHall/SportsHallShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"fencingbook"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="User"
          list={UserList}
          edit={UserEdit}
          create={UserCreate}
          show={UserShow}
        />
        <Resource
          name="Role"
          list={RoleList}
          edit={RoleEdit}
          create={RoleCreate}
          show={RoleShow}
        />
        <Resource
          name="Club"
          list={ClubList}
          edit={ClubEdit}
          create={ClubCreate}
          show={ClubShow}
        />
        <Resource
          name="UserClub"
          list={UserClubList}
          edit={UserClubEdit}
          create={UserClubCreate}
          show={UserClubShow}
        />
        <Resource
          name="UserProfile"
          list={UserProfileList}
          edit={UserProfileEdit}
          create={UserProfileCreate}
          show={UserProfileShow}
        />
        <Resource
          name="UserRole"
          list={UserRoleList}
          edit={UserRoleEdit}
          create={UserRoleCreate}
          show={UserRoleShow}
        />
        <Resource
          name="Competition"
          list={CompetitionList}
          edit={CompetitionEdit}
          create={CompetitionCreate}
          show={CompetitionShow}
        />
        <Resource
          name="SportsHall"
          list={SportsHallList}
          edit={SportsHallEdit}
          create={SportsHallCreate}
          show={SportsHallShow}
        />
      </Admin>
    </div>
  );
};

export default App;
