import React from "react";
import { StyleSheet, Text, View, Image, Button } from "react-native";
import Colors from "../../constants/Colors";

const ProductItem = (props) => {
  return (
    <View style={styles.product}>
      <View style={styles.imageContainer}>
        <Image source={{ uri: props.imageUrl }} style={styles.image} />
      </View>
      <View style={styles.details}>
        <Text style={styles.title}>{props.title}</Text>
        <Text style={styles.price}>${props.price.toFixed(2)}</Text>
      </View>
      <View style={styles.actions}>
        <Button
          title="View Details"
          onPress={props.onViewDetails}
          color={Colors.primary}
        />
        <Button
          title="Add to cart"
          onPress={props.onAddToCart}
          color={Colors.primary}
        />
      </View>
    </View>
  );
};

export default ProductItem;

const styles = StyleSheet.create({
  product: {
    shadowColor: "black",
    shadowOpacity: 0.26,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    elevation: 5,
    borderRadius: 5,
    backgroundColor: "white",
    height: 300,
    margin: 20,
  },
  imageContainer: {
    height: "60%",
    width: "100%",
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    overflow: "hidden",
  },
  image: { height: "100%", width: "100%" },
  title: {
    fontSize: 18,
    marginVertical: 4,
  },
  price: {
    fontSize: 14,
    color: "#888",
  },
  actions: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    height: "25%",
  },
  details: {
    alignItems: "center",
    height: "15%",
    padding: 5,
  },
});
