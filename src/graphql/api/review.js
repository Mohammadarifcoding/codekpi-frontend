import { gql } from "@apollo/client";

export const GET_REVIEWS = gql`
  query Reviews($limit: Int!, $page: Int!) {
    reviews(limit: $limit, page: $page) {
      message
      data {
        id
        name
        text
        rating
        status
        department
        session
        shift
        createdAt
        userImage {
          id
          image
        }
      }
      page
      limit
    }
  }
`;

export const CREATE_REVIEW = gql`
  mutation CreateReview($input: CreateReviewInput!) {
    createReview(input: $input) {
      message
      success
      data {
        id
        name
        text
        rating
        status
        department
        session
        shift
        createdAt
        userImage {
          id
          image
        }
      }
    }
  }
`;
