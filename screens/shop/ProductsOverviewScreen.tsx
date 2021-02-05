import React from "react";
import { FlatList, Text } from "react-native";
import { useSelector } from "react-redux";
import { RootState } from "../../App";
import ProductItem from "../../components/shop/ProductItem";

interface ProductsOverviewScreenProps {
  navigation: any
}

const ProductsOverviewScreen = ({ navigation }: ProductsOverviewScreenProps) => {
  const products = useSelector(
    (state: RootState) => state.products.availableProducts
  );
  return (
    <FlatList
      data={products}
      renderItem={(itemData) => <ProductItem {...itemData.item} onPress={() => navigation.navigate({ name: 'ProductDetail' })} onAdd={() => console.log('added')} />}
    />
  );
};

export default ProductsOverviewScreen;
