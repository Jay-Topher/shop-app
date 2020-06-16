import React from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  Button,
} from "react-native";
import { useSelector, useDispatch } from "react-redux";
import Colors from "../../constants/Colors";
import * as CartActions from "../../store/actions/cart";

const ProductDetailScreen = (props) => {
  const productId = props.route.params.productId;
  const dispatch = useDispatch();
  const selectedProduct = useSelector((state) =>
    state.products.availableProducts.find((product) => product.id === productId)
  );
  return (
    <ScrollView>
      <Image style={styles.image} source={{ uri: selectedProduct.imageUrl }} />
      <Text style={styles.title}>{selectedProduct.title}</Text>
      <Text style={styles.price}>${selectedProduct.price.toFixed(2)}</Text>
      <Text style={styles.description}>{selectedProduct.description}</Text>
      <View style={styles.actions}>
        <Button
          color={Colors.primary}
          title="Add to Cart"
          onPress={() => dispatch(CartActions.addToCart(selectedProduct))}
        />
      </View>
    </ScrollView>
  );
};

export default ProductDetailScreen;

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 300,
  },
  price: {
    fontSize: 20,
    color: "#888",
    textAlign: "center",
    marginVertical: 10,
    fontFamily: "raleway-bold",
  },
  description: {
    fontSize: 14,
    textAlign: "center",
    marginHorizontal: 10,
    fontFamily: "raleway",
  },
  actions: {
    alignItems: "center",
    marginVertical: 10,
  },
  title: {
    fontSize: 24,
    textAlign: "center",
    marginTop: 10,
    // fontWeight: "bold",
    fontFamily: "raleway-bold",
  },
});
