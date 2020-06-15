import "react-native-gesture-handler";
import React from "react";
import { StyleSheet } from "react-native";
import { createStore, combineReducers } from "redux";
import { NavigationContainer } from "@react-navigation/native";
import { Provider } from "react-redux";
import ShopNavigator from "./navigation/shopNavigation";

import productsReducer from "./store/reducers/products";

const rootReducer = combineReducers({
  products: productsReducer,
});

const store = createStore(rootReducer);

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <ShopNavigator />
      </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
