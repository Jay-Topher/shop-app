import React from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import ProductItem from "../../components/Shop/ProductItem";
import * as CartActions from "../../store/actions/cart";

const ProductsOverviewScreen = (props) => {
  const products = useSelector((state) => state.products.availableProducts);
  const dispatch = useDispatch();

  return (
    <FlatList
      data={products}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <ProductItem
          title={item.title}
          imageUrl={item.imageUrl}
          price={item.price}
          onViewDetails={() => {
            props.navigation.navigate("ProductDetail", {
              productId: item.id,
              productTitle: item.title,
            });
          }}
          onAddToCart={() => {
            dispatch(CartActions.addToCart(item));
          }}
        />
      )}
    />
  );
};

export default ProductsOverviewScreen;

const styles = StyleSheet.create({});
