import "react-native-gesture-handler";
import React, { useState } from "react";
import { StyleSheet } from "react-native";
import { createStore, combineReducers } from "redux";
import { NavigationContainer } from "@react-navigation/native";
import { Provider } from "react-redux";
import { AppLoading } from "expo";
import * as Font from "expo-font";

import ShopNavigator from "./navigation/shopNavigation";
import productsReducer from "./store/reducers/products";
import orderReducer from "./store/reducers/orders";
import cartReducer from "./store/reducers/cart";

const rootReducer = combineReducers({
  products: productsReducer,
  cart: cartReducer,
  orders: orderReducer,
});

const store = createStore(rootReducer);

const fetchFonts = () => {
  return Font.loadAsync({
    raleway: require("./assets/Fonts/Raleway-Regular.ttf"),
    "raleway-bold": require("./assets/Fonts/Raleway-SemiBold.ttf"),
  });
};

export default function App() {
  const [fontLoaded, setFontLoaded] = useState(false);

  if (!fontLoaded) {
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => setFontLoaded(true)}
      />
    );
  }
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
