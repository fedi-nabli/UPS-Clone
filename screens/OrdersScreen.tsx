import { View, Text, ScrollView } from 'react-native';
import React, { useState, useLayoutEffect } from 'react';
import { CompositeNavigationProp, useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '../navigator/RootNavigator';
import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import { TabStackParamList } from '../navigator/TabNavigator';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useTailwind } from 'tailwind-rn/dist';
import useOrders from '../hooks/useOrders';
import { Button, Image } from '@rneui/themed';
import OrderCard from '../components/OrderCard';

export type OrdersScreenNavigationProp = CompositeNavigationProp<
  BottomTabNavigationProp<TabStackParamList, 'Orders'>,
  NativeStackNavigationProp<RootStackParamList>
>;

const OrdersScreen = () => {
  const tailwind = useTailwind();
  const navigation = useNavigation<OrdersScreenNavigationProp>();

  const [ascending, setAscending] = useState<boolean>(false);

  const {loading, error, orders} = useOrders();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
      tabBarLabel: ({focused, color}) => (
        <Text style={{color: focused ? '#EB6A7C' : color, fontSize: 10}}>Orders</Text>
      )
    })
  }, [])

  return (
    <ScrollView style={{ backgroundColor: '#EB6A7C' }}>
      <Image
        source={{ uri: 'https://links.papareact.com/m51' }}
        containerStyle={tailwind('w-full h-64')}
      />

      <View>
        <Button
          color='pink'
          titleStyle={{ color: 'gray', fontWeight: '400' }}
          style={tailwind('py-2 px-5')}
          onPress={() => setAscending(!ascending)}
        >
          {ascending ? "Showing: Oldest First" : "Showing: Most Recent First"}
        </Button>

        {orders?.sort((a, b) => {
          if (ascending) {
            return new Date(a.createdAt) > new Date(b.createdAt) ? 1 : -1
          } else {
            return new Date(a.createdAt) < new Date(b.createdAt) ? 1 : -1
          }
        }).map(order => (
          <OrderCard
            key={order.trackingId}
            item={order}
          />
        ))}
      </View>
    </ScrollView>
  );
};

export default OrdersScreen;