import React from 'react'
import SearchUtil from 'utils/SearchUtil'
// import {friends} from "data"
import IndividualMeassageFriend from './IndividualMeassageFriend'
import { useState } from 'react'
import { useEffect } from 'react'
import { Auth, DataStore } from 'aws-amplify'
import { ChatRoom } from 'models'
import { ChatRoomUser } from 'models'
// import { API, Auth, graphqlOperation } from 'aws-amplify'
// import { listUsers } from 'graphql/queries'
// import { getUserMe } from 'graphqlhooks/myqueries'

function MessageFriendsList() {
    const [friends, setfriend] = useState([])
    const [friendsz, setfriendz] = useState([])
    const [friendId, setfriendId] = useState(null)
    const [loading, setloading] = useState(false)
    const [chatRoomFriends, setChatRoomFriends] = useState([])
    console.log("aaaaa",chatRoomFriends)
    useEffect(() => {
        listChatRoom()
    }, [])
  
    const listChatRoom= async()=>{
        setloading(true)
        const user =await Auth.currentAuthenticatedUser()
const id=user.attributes.sub
        const model = await DataStore.query(ChatRoomUser)
        const filterFriends= model.filter((m)=>m.user.id!==id)
        setChatRoomFriends(filterFriends)
       setloading(false)
    }
    return (
        <div className=" flex justify-center items-center p-4">
            <div className="flex flex-col w-full">
           <div className="flex-grow sticky ">
               <input type="text" className = "search" placeholder="search for friends"/>
               {loading? (<h1> loading</h1>):( chatRoomFriends.map(m=>  <IndividualMeassageFriend key = {m.id} chatRoomFriend={m}/>) )}
               {/* <SearchUtil/> */}
              
           </div>

        


          
        </div>
        </div>
    )
}

export default MessageFriendsList
