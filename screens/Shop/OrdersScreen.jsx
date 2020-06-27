import React from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";
import { useSelector } from "react-redux";

const OrdersScreen = () => {
  const orders = useSelector((state) => state.orders.orders);
  return (
    <FlatList
      data={orders}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => <Text>{item.totalAmount.toFixed(2)}</Text>}
    />
  );
};

export default OrdersScreen;

const styles = StyleSheet.create({});
