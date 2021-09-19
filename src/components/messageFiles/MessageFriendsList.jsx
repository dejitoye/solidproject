import React from 'react'
import SearchUtil from 'utils/SearchUtil'
// import {friends} from "data"
import IndividualMeassageFriend from './IndividualMeassageFriend'
import { useState } from 'react'
import { useEffect } from 'react'
import { DataStore } from 'aws-amplify'
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
    const [friendss, setfriendss] = useState([])

    useEffect(() => {
        listChatRoom()
    }, [])
    
    const listChatRoom= async()=>{
        const model = await DataStore.query(ChatRoomUser)
        console.log(model)
    }
    return (
        <div className=" flex justify-center items-center p-4">
            <div className="flex flex-col w-full">
           <div className="flex-grow sticky ">
               <input type="text" className = "search" placeholder="search for friends"/>
               {/* <SearchUtil/> */}
           </div>

        


          
        </div>
        </div>
    )
}

export default MessageFriendsList
