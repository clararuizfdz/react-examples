import React from "react";
import { MyComponent } from "./demo";
import { MyComponent2 } from "./demo2-usereducer";
import { MyComponent3 } from "./demo3-useContext";
import { EditUser } from "./edit-user";
import {MyUserInfoContextProvider} from "./userContext";

export const App = () => {
  return (
    <MyUserInfoContextProvider>
      <MyComponent3 />
      <EditUser />
    </MyUserInfoContextProvider>
  );
};
