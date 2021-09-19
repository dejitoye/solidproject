import MainMessageBoard from 'components/messageFiles/MainMessageBoard'
import useScreenSize from 'hooks/useScreenSize'
import React, { useEffect, useState } from 'react'
import { Redirect } from 'react-router-dom'

function MessagesPage() {
  const screenSize = useScreenSize()
  const [state, setState] = useState(false)
  console.log(screenSize)

  //  const check =screenSize=== Boolean("Small"|| "Medium")
// console.log(check)
// const screenAccess = ()=>{
// //   if(screenSize==="Large")return  (
// //     <div className="h-screen ">
// //       <MainMessageBoard/>
// //     </div>
// // )
// if(screenSize==="Medium" || "Small")  
// return (
//   <div className="h-screen ">
//     <MainMessageBoard/>
//   </div>)
// }
const check =()=>{
 if( screenSize=== "Large")
  setState(true)
  if( screenSize=== "Medium")
  setState(false)
  if( screenSize=== "Small")
  setState(false)
 
}

useEffect(() => {
 check()
}, [screenSize])
console.log(state)

    return (
      <div>
     {!state ? (<h1 className="p-14"> Doesnt work on small to medium screen please download app </h1>):( <div className="h-screen ">
       <MainMessageBoard/>
     </div>) }
    
       
        </div>
    )
}

export default MessagesPage
