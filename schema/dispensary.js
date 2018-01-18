export default `

type Dispensary {
  id: Int!
  displayname: String!
  email: String!
  businessName: String!
}

type Query {
  getDispensary(id: Int!): Dispensary!
  allDispensaries: [Dispensary!]!
}
type DispensaryRegisterResponse {
  ok: Boolean!
  dispensary: Dispensary
  errors: [Error!]
}

type Mutation {
  registerDispensary(displayname: String!, email: String!, password: String!): DispensaryRegisterResponse!
}

`;
