import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import ProductsOverviewScreen from "../screens/Shop/ProductsOverviewScreen";
import ProductDetailScreen from "../screens/Shop/ProductDetailScreen";
import Colors from "../constants/Colors";

const Stack = createStackNavigator();

function ProductStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTintColor: "white",
        headerStyle: {
          backgroundColor: Colors.primary,
        },
      }}
    >
      <Stack.Screen name="Products" component={ProductsOverviewScreen} />
      <Stack.Screen
        name="ProductDetail"
        component={ProductDetailScreen}
        options={({ route }) => {
          return {
            headerTitle: route.params.productTitle,
          };
        }}
      />
    </Stack.Navigator>
  );
}

export default ProductStack;
