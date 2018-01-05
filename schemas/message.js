export default ` 
type Message {
    id: Int!
    text: String!
    consumer: Consumer!
    dispensary: Dispensary!
    channel: Channel!
}
type Mutation {
    createMessage(text: String!, senderId: Int!, receiverId: Int!): Boolean!
}
`;
