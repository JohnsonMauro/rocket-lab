import { useMutation } from '@apollo/react-hooks';
import gql from 'graphql-tag';

export const CREATE_CONTACT_MUTATION = gql`
  mutation AddContact(
    $firstName: String!
    $lastName: String!
    $accountName: String!
    $companyName: String!
    $phone: String!
    $fax: String
    $title: String
    $email: String!
    $emailOptOut: Boolean
    $numberAndStreet: String!
    $city: String!
    $state: String!
    $postcode: String!
    $description: String!
  ) {
    AddContact(
      firstName: $firstName
      lastName: $lastName
      accountName: $accountName
      companyName: $companyName
      phone: $phone
      fax: $fax
      title: $title
      email: $email
      emailOptOut: $emailOptOut
      numberAndStreet: $numberAndStreet
      city: $city
      state: $state
      postcode: $postcode
      description: $description
    ) {
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
