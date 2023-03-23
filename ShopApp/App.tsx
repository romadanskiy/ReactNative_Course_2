import React from "react";
import { NavigationContainer } from '@react-navigation/native';

import BottomTabNavigator from "./navigation/TabNavigator";
import { StoresProvider, stores } from './stores/Stores';

const App = () => {
  return (
    <StoresProvider value={stores}>
      <NavigationContainer>
        <BottomTabNavigator />
      </NavigationContainer>
    </StoresProvider>
  );
}

export default App;