// import { API, Auth, graphqlOperation } from 'aws-amplify'
import { friends } from 'data'
// import { createChatRoom, createChatRoomUser } from 'graphql/mutations'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

function IndividualMeassageFriend({chatRoomFriend}) {
console.log("chchc",chatRoomFriend)
    const [dee, setdee] = useState("")
    const [deet, setdeet] = useState("")
    const [friendList, setFriendList] = useState(null)



    return (  

        <div className="bg-gray-100  mb-2">
           {/* <button onClick={()=>} className=""> */}
           <Link to = {`/message/${chatRoomFriend.chatroom.id}`} className=""> 
           
           <div className="flex items-center p-4 bg-gray-100 border-b justify-start w-full mb-">
            <img src={ chatRoomFriend.user?.pix} alt="" className="h-14 w-14 rounded-full object-cover" />
            <div className="flex flex-col items-start">
            <h1 className="text-md font-semibold "> @{ chatRoomFriend.user.name}</h1>
            <p className="mb-2">status: {chatRoomFriend.user?.status}</p>
            </div>
            </div>
            </Link>
          
               
        </div>

      
    )
}
 
export default IndividualMeassageFriend
