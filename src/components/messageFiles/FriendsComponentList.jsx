
import { DataStore } from 'aws-amplify'
import { User } from 'models'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import IndividualListUsers from './IndividualListUsers'
import IndividualFriend from './IndividualListUsers'

function FriendsComponentList() {
    const [friends, setfriend] = useState([])
    const [friendsz, setfriendz] = useState([])
    const [loading, setloading] = useState(false)
    // console.log("list of users",listFriendArray[0].name)
// const ddd = listFriendArray?.map((l)=> console.log(l)

// )
// console.log(ddd)
const [listFriendArray, setlistFriendArray] = useState(null)

useEffect(() => {
    listUsers()
}, [])

const listUsers = async()=>{
    setloading(true)
try{
const data = await DataStore.query(User)
setlistFriendArray(data)
setloading(false)
// console.log("list of users",data)
}catch(e){
    console.log(e)
    setloading(false)
}
}
    return (
// {loading ? (<h1> loading friends list </h1>) :() }
<div>

{loading ? (<h1> loading friends list </h1>) :( <div className=" flex justify-center items-center p-4">
            <div className="flex flex-col w-full">
           <div className="flex-grow sticky ">
               <input type="text" className = "search" placeholder="search for friends"/>
               {/* <SearchUtil/> */}
           </div>
           <div className ="mt-2">
               {listFriendArray?.map((l)=>  <IndividualListUsers key= {l.id} listFriendArray={l}/>)}
             {/* <IndividualFriend  listFriendArray={l}/> */}
           </div>
        </div>
        </div>) }
</div>
       
    )
}

export default FriendsComponentList
