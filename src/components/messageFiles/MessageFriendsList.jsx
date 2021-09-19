import React from 'react'
import SearchUtil from 'utils/SearchUtil'
// import {friends} from "data"
import IndividualMeassageFriend from './IndividualMeassageFriend'
import { useState } from 'react'
import { useEffect } from 'react'
// import { API, Auth, graphqlOperation } from 'aws-amplify'
// import { listUsers } from 'graphql/queries'
// import { getUserMe } from 'graphqlhooks/myqueries'

function MessageFriendsList() {
    const [friends, setfriend] = useState([])
    const [friendsz, setfriendz] = useState([])
    const [friendId, setfriendId] = useState(null)
    const [loading, setloading] = useState(false)
    const [friendss, setfriendss] = useState([])


// console.log(object)
// const zone = friendsz.map((fri)=> (fri.chatRoom.chatRoomUsers.items.map(goog=>console.log(goog))))
// const zone = friendsz.map((fri)=> (fri.chatRoom.chatRoomUsers.items[0]))
// console.log(zone)
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
