export const getUserMe = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
      id
      name
      pix
      status
      chatRoomUser {
        items {
          id
          userID
          chatRoomID
          createdAt
          updatedAt
chatRoom{
    id
    lastMessageID
          lastMessage {
            userID
            content
            chatRoomID
            createdAt
            id
            updatedAt
          }
    chatRoomUsers{
        items{
            user{
                id
                name
                pixx
                sta
  }
`;


export const listUsers = /* GraphQL */ `
  query  listUsers {
    items {
      pix
      name
      id
    }
  }
}

       
`;