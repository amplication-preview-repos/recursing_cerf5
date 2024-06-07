import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { MatrimonialProfileList } from "./matrimonialProfile/MatrimonialProfileList";
import { MatrimonialProfileCreate } from "./matrimonialProfile/MatrimonialProfileCreate";
import { MatrimonialProfileEdit } from "./matrimonialProfile/MatrimonialProfileEdit";
import { MatrimonialProfileShow } from "./matrimonialProfile/MatrimonialProfileShow";
import { FamilyMemberList } from "./familyMember/FamilyMemberList";
import { FamilyMemberCreate } from "./familyMember/FamilyMemberCreate";
import { FamilyMemberEdit } from "./familyMember/FamilyMemberEdit";
import { FamilyMemberShow } from "./familyMember/FamilyMemberShow";
import { AdvertisementList } from "./advertisement/AdvertisementList";
import { AdvertisementCreate } from "./advertisement/AdvertisementCreate";
import { AdvertisementEdit } from "./advertisement/AdvertisementEdit";
import { AdvertisementShow } from "./advertisement/AdvertisementShow";
import { UserList } from "./user/UserList";
import { UserCreate } from "./user/UserCreate";
import { UserEdit } from "./user/UserEdit";
import { UserShow } from "./user/UserShow";
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
        title={"CommunityWebsiteService"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="MatrimonialProfile"
          list={MatrimonialProfileList}
          edit={MatrimonialProfileEdit}
          create={MatrimonialProfileCreate}
          show={MatrimonialProfileShow}
        />
        <Resource
          name="FamilyMember"
          list={FamilyMemberList}
          edit={FamilyMemberEdit}
          create={FamilyMemberCreate}
          show={FamilyMemberShow}
        />
        <Resource
          name="Advertisement"
          list={AdvertisementList}
          edit={AdvertisementEdit}
          create={AdvertisementCreate}
          show={AdvertisementShow}
        />
        <Resource
          name="User"
          list={UserList}
          edit={UserEdit}
          create={UserCreate}
          show={UserShow}
        />
      </Admin>
    </div>
  );
};

export default App;
