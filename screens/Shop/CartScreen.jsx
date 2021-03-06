import React from "react";
import { StyleSheet, Text, View, FlatList, Button } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import Colors from "../../constants/Colors";
import CartItem from "../../components/Shop/CartItem";
import * as cartActions from "../../store/actions/cart";
import * as orderActions from "../../store/actions/orders";

const CartScreen = (props) => {
  const cartTotalAmount = useSelector((state) => state.cart.totalAmount);
  const dispatch = useDispatch();
  const cartItem = useSelector((state) => {
    const transformedCartItem = [];
    for (const key in state.cart.items) {
      transformedCartItem.push({
        productId: key,
        productTitle: state.cart.items[key].productTitle,
        productPrice: state.cart.items[key].productPrice,
        quantity: state.cart.items[key].quantity,
        sum: state.cart.items[key].sum,
      });
    }
    return transformedCartItem.sort((a, b) =>
      a.productId > b.productId ? 1 : -1
    );
  });
  return (
    <View style={styles.screen}>
      <View style={styles.summary}>
        <Text style={styles.summaryText}>
          Total:{" "}
          <Text style={styles.amount}>${cartTotalAmount.toFixed(2)}</Text>
        </Text>
        <Button
          title="Order Now"
          disabled={cartItem.length === 0}
          onPress={() => {
            dispatch(orderActions.addOrder(cartItem, cartTotalAmount));
          }}
        />
      </View>

      <FlatList
        data={cartItem}
        keyExtractor={(item) => item.productId}
        renderItem={({ item }) => (
          <CartItem
            quantity={item.quantity}
            title={item.productTitle}
            amount={item.sum}
            onRemove={() =>
              dispatch(cartActions.removeFromCart(item.productId))
            }
          />
        )}
      />
    </View>
  );
};

export default CartScreen;

const styles = StyleSheet.create({
  screen: {
    margin: 20,
  },
  summary: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 20,
    padding: 10,
    shadowColor: "black",
    shadowOpacity: 0.26,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    elevation: 5,
    borderRadius: 5,
    backgroundColor: "white",
  },
  summaryText: {
    fontFamily: "raleway-bold",
    fontSize: 18,
  },
  amount: {
    color: Colors.primary,
  },
});
