import React from "react";
import { Platform } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import ProductsOverviewScreen from "../screens/Shop/ProductsOverviewScreen";
import ProductDetailScreen from "../screens/Shop/ProductDetailScreen";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import { Ionicons } from "@expo/vector-icons";

import Colors from "../constants/Colors";
import HeaderButton from "../components/UI/HeaderButton";
import CartScreen from "../screens/Shop/CartScreen";
import OrdersScreen from "../screens/Shop/OrdersScreen";

const defaultNavigationOptions = {
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
};

const Stack = createStackNavigator();

function ProductStack() {
  return (
    <Stack.Navigator screenOptions={defaultNavigationOptions}>
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
          headerLeft: () => (
            <HeaderButtons HeaderButtonComponent={HeaderButton}>
              <Item
                title="Menu"
                iconName={Platform.OS === "android" ? "md-menu" : "ios-menu"}
                onPress={() => {
                  navigation.toggleDrawer();
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
      <Stack.Screen
        name="Cart"
        component={CartScreen}
        options={{ headerTitle: "Your Cart" }}
      />
    </Stack.Navigator>
  );
}

const stackTwo = createStackNavigator();

function OrderStack() {
  return (
    <stackTwo.Navigator screenOptions={defaultNavigationOptions}>
      <stackTwo.Screen
        name="Orders"
        component={OrdersScreen}
        options={({ navigation }) => {
          return {
            headerTitle: "Your Orders",
            headerLeft: () => (
              <HeaderButtons HeaderButtonComponent={HeaderButton}>
                <Item
                  title="Menu"
                  iconName={Platform.OS === "android" ? "md-menu" : "ios-menu"}
                  onPress={() => {
                    navigation.toggleDrawer();
                  }}
                />
              </HeaderButtons>
            ),
          };
        }}
      />
    </stackTwo.Navigator>
  );
}

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      screenOptions={defaultNavigationOptions}
      initialRouteName="Products"
      drawerContentOptions={{ activeTintColor: Colors.primary }}
    >
      <Drawer.Screen
        name="Products"
        component={ProductStack}
        options={{
          drawerIcon: ({ color }) => (
            <Ionicons
              name={Platform.OS === "android" ? "md-gift" : "ios-gift"}
              size={20}
              color={color}
            />
          ),
        }}
      />
      <Drawer.Screen
        name="Orders"
        component={OrderStack}
        options={{
          drawerIcon: ({ color }) => (
            <Ionicons
              name={Platform.OS === "android" ? "md-list" : "ios-list"}
              size={20}
              color={color}
            />
          ),
        }}
      />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
