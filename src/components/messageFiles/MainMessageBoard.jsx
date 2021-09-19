import LeftBar from 'components/mainbar/LeftBar'
import LeftTestBar from 'components/mainbar/LeftTestBar'
import RightBar from 'components/mainbar/RightBar'
import React from 'react'
import CenterMessageBar from './CenterMessageBar'
import MessageFriendsList from './MessageFriendsList'
import Messages from './Messages'
import RightMessageBar from './RightMessageBar'

function MainMessageBoard() {
    return (
        <div className="flex  pt-14 h-screen z-20 relative bg-white ">
{/* <div className=" lg:w-1/5 hidden lg:inline flex-none">
           
            <LeftTestBar/>
            </div> */}
            {/* <div className=" flex-grow overflow-y-auto">
          <CenterMessageBar/>
         

           </div> */}
           <div className="w-full md:w-auto lg:w-1/5  overflow-y-auto flex-none">
              <MessageFriendsList/>
          </div>
          <div className =" hidden md:inline md:flex-grow overflow-y-auto border">
              <Messages/>
          </div>
           <div className=" lg:w-1/5 hidden  lg:inline flex-none overflow-y-auto border">
           <RightMessageBar/>
           </div>
         
        </div>
    )
}

export default MainMessageBoard
