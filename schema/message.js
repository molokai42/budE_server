export default ` 
type Message {
    id: Int!
    text: String!
    user: User!
    consumer: Consumer!
    dispensary: Dispensary!
    
}
type Mutation {
    createMessage(id: Int!, text: String!): Boolean!
}
`;
