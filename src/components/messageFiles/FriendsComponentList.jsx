
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import IndividualFriend from './IndividualFriend'

function FriendsComponentList() {
    const [friends, setfriend] = useState([])
    const [friendsz, setfriendz] = useState([])
    const [loading, setloading] = useState(false)
    
    return (
        <div className=" flex justify-center items-center p-4">
            <div className="flex flex-col w-full">
           <div className="flex-grow sticky ">
               <input type="text" className = "search" placeholder="search for friends"/>
               {/* <SearchUtil/> */}
           </div>
           <div className ="mt-2">
             
           </div>
        </div>
        </div>
    )
}

export default FriendsComponentList
