// import { API, Auth, graphqlOperation } from 'aws-amplify'
// import { createChatRoom, createChatRoomUser } from 'graphql/mutations'
import { Auth, DataStore } from 'aws-amplify'
import { ChatRoomUser } from 'models'
import { User } from 'models'
import { ChatRoom } from 'models'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'

function IndividualListUsers({listFriendArray}) {
    const history = useHistory()
    const [id, setdId] = useState("")
    const [deet, setdeet] = useState("")
    const dispatch = useDispatch()
// console.log(id)
    useEffect(() => {
        // listUsers()
userId()
    }, [])
    const userId = async()=>{
const user =await Auth.currentAuthenticatedUser()
setdId(user.attributes.sub)
    }
const createChatRoom =async()=>{
   const newChatRoom = await DataStore.save(
       new ChatRoom({newMessage:0})
   ) 
   console.log("chatrooom was added",newChatRoom)
const getUserdb= await DataStore.query(User,id)
//   console.log(getUserdb.id) 
 const useradd= await DataStore.save(new ChatRoomUser({
      user:getUserdb,
      chatroom:newChatRoom,
  }))
console.log("user was added",useradd)
   const friendadd= await DataStore.save(new ChatRoomUser({
    user:listFriendArray,
    chatroom:newChatRoom,
}))
console.log("friend was added",friendadd)
history.push(`/message/${newChatRoom.id}`)
}

    return (
        <button onClick={createChatRoom} className="w-full">
        <div className="flex items-center p-4 bg-gray-100 border-b justify-start w-full mb-1">
            <img src={ listFriendArray.pix} alt="" className="h-14 w-14 rounded-full object-cover" />
            <div className="flex flex-col items-start">
            <h1 className="text-md font-semibold "> @{ listFriendArray.name}</h1>
            <p className="mb-2">status: {listFriendArray?.status}</p>
            </div>
            </div>
            </button>
    )
}

export default IndividualListUsers
