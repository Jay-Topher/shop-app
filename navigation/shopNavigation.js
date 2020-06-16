import React from "react";
import { Platform } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import ProductsOverviewScreen from "../screens/Shop/ProductsOverviewScreen";
import ProductDetailScreen from "../screens/Shop/ProductDetailScreen";
import { HeaderButtons, Item } from "react-navigation-header-buttons";

import Colors from "../constants/Colors";
import HeaderButton from "../components/UI/HeaderButton";
import CartScreen from "../screens/Shop/CartScreen";

const Stack = createStackNavigator();

function ProductStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTintColor: "white",
        headerStyle: {
          backgroundColor: Colors.primary,
        },
        headerTitleStyle: {
          fontFamily: "raleway-bold",
        },
        headerBackTitleStyle: {
          fontFamily: "raleway",
        },
      }}
    >
      <Stack.Screen
        name="Products"
        component={ProductsOverviewScreen}
        options={({ navigation }) => ({
          headerTitle: "All Products",
          headerRight: () => (
            <HeaderButtons HeaderButtonComponent={HeaderButton}>
              <Item
                title="Cart"
                iconName={Platform.OS === "android" ? "md-cart" : "ios-cart"}
                onPress={() => {
                  navigation.navigate("Cart");
                }}
              />
            </HeaderButtons>
          ),
        })}
      />
      <Stack.Screen
        name="ProductDetail"
        component={ProductDetailScreen}
        options={({ route }) => {
          return {
            headerTitle: route.params.productTitle,
          };
        }}
      />
      <Stack.Screen name="Cart" component={CartScreen} />
    </Stack.Navigator>
  );
}

export default ProductStack;
