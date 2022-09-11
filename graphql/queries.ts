import { gql } from '@apollo/client';

export const GET_CUSTOMERS = gql`
  query getCustomers {
    getCustomers {
      name
      value {
        email
        name
      }
    }
  }
`;

export const GET_ORDERS = gql`
  query getOrders {
    getOrders {
      name
      value {
        carrier
        createdAt
        trackingId
        shippingCost
        Address
        City
        Lat
        Lng
        trackingItems {
          customer_id
          customer {
            email
            name
          }
          items {
            item_id
            name
            price
            quantity
          }
        }
      }
    }
  }
`;