import { gql } from '@apollo/client';

export const ApplicantIndividualCompanyRelations = gql`
  {
    applicantIndividualCompanyRelations {
      data {
        id
        name
      }
    }
  }
`;
