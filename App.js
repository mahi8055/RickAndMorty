//---------- imports

// react
import React from "react";

// navigation
import { NavigationContainer } from "@react-navigation/native";


// context
import { GlobalContextProvide } from '../RickandMorty/src/ContextHooks/GlobalContextProvide'
import StackNaviagtion from "./src/Navigation/StackNavigation";

// helper
import NavigationService from "./src/Navigation/NavigationService";


//---------- main app / component

const App = () => {

  //---------- return main view

  return (

    // global context 
    <GlobalContextProvide >

      {/* navigation ref */}
      <NavigationContainer
        ref={(navigatorRef) => {
          NavigationService.setTopLevelNavigator(navigatorRef);
        }}
      >

        {/* main navigaton */}
        <StackNaviagtion />

      </NavigationContainer>
    </GlobalContextProvide>
  );
};

//---------- export component

export default App;
