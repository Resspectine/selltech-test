import { gql } from '@apollo/client';

export const ApplicantIndividualCompanyPositions = gql`
  {
    applicantIndividualCompanyPositions {
      data {
        id
        name
      }
    }
  }
`;
