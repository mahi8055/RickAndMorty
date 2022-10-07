//---------- imports

// react
import * as React from 'react'
import { useEffect } from "react";

// navigations
import { createStackNavigator } from "@react-navigation/stack";

// components
import CharatersHome from "../Components/CharatersHome";
import CharatersDetails from '../Components/CharatersDetails';

// global stack veriable
const Stack = createStackNavigator();

//---------- main app / component

function StackNaviagtion(props) {
  //---------- state, redux state, veriable and hooks



  useEffect(() => {

  }, []);

  //---------- return main view   

  return (
    <>

      <Stack.Navigator initialRouteName="profileHome">

        <Stack.Screen
          options={{ headerShown: false }}

          name="profileHome"
          component={CharatersHome} />

        <Stack.Screen
          options={{ headerShown: false }}

          name="charatersDetails"
          component={CharatersDetails} />

      </Stack.Navigator>
    </>
  );
}

//---------- export component

export default StackNaviagtion;
