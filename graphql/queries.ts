import { gql } from '@apollo/client';

export const GET_QUERY = gql`
  query getCustomers {
    getCustomers {
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