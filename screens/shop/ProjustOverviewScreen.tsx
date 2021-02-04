import React from "react";
import { FlatList, Text } from "react-native";
import { useSelector } from "react-redux";
import { RootState } from "../../App";

const ProductsOverviewScreen = () => {
  const products = useSelector(
    (state: RootState) => state.products.availableProducts
  );
  return (
    <FlatList
      data={products}
      renderItem={(itemData) => <Text>{itemData.item.title}</Text>}
    />
  );
};

export default ProductsOverviewScreen;
