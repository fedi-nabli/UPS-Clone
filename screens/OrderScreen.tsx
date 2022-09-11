import { View, Text } from 'react-native';
import React, { useLayoutEffect } from 'react';
import { useTailwind } from 'tailwind-rn/dist';
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import { OrdersScreenNavigationProp } from './OrdersScreen';
import { RootStackParamList } from '../navigator/RootNavigator';
import DeliveryCard from '../components/DeliveryCard';

type OrderScreenRouteProp = RouteProp<RootStackParamList, 'Order'>;

const OrderScreen = () => {
  const tailwind = useTailwind();
  const navigation = useNavigation<OrdersScreenNavigationProp>();
  const {
    params: { order }
  } = useRoute<OrderScreenRouteProp>();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: order.trackingItems.customer.name,
      headerTintColor: '#EB6A7C',
      headerTitleStyle: { color: 'black' },
      headerBackTitle: 'Deliveries'
    })
  }, [order])

  return (
    <View style={tailwind('-mt-2')}>
      <DeliveryCard
        fullWidth
        order={order}
      />
    </View>
  );
};

export default OrderScreen;