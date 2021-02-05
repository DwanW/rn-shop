import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { Platform } from 'react-native'

import ProductsOverViewScreen from '../screens/shop/ProductsOverviewScreen'
import Colors from '../constants/Colors'
import ProductDetailScreen from '../screens/shop/ProjectDetailScreen'

type RootStackParamList = {
    ProductsOverview: undefined,
    ProductDetail: undefined
}

const RootStack = createStackNavigator<RootStackParamList>()

function StackNavigation() {
    return (
        <RootStack.Navigator
            headerMode="screen"
            screenOptions={{
                headerTintColor: Platform.OS === 'android' ? 'white' : Colors.primary,
                headerStyle: {
                    backgroundColor: Platform.OS === 'android' ? Colors.primary : ''
                }
            }}
        >
            <RootStack.Screen name="ProductsOverview" component={ProductsOverViewScreen} options={{ headerTitle: 'All Products' }} />
            <RootStack.Screen name="ProductDetail" component={ProductDetailScreen} />
        </RootStack.Navigator>
    )
}

export default StackNavigation