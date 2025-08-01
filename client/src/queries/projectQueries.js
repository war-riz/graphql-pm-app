import { gql } from '@apollo/client';

const GET_PROJECT = gql`
  query getProject($id: ID!) {
    project(id: $id) {
        id
        name
        description
        status
        client {
          id
          name
          email
          phone
        }
    }
  }
`

const GET_PROJECTS = gql`
  query getProjects{
    projects {
      id
      name
      description
      status
    }
  }
`

export { GET_PROJECTS, GET_PROJECT };