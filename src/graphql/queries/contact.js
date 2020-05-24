import { useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag';

export const GET_CONTACT_QUERY = gql`
  query allContact {
    allContact {
      firstName
      lastName
      accountName
      companyName
      phone
      fax
      title
      email
      emailOptOut
      numberAndStreet
      city
      state
      postcode
      description
    }
  }
`;
