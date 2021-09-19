import CenterBar from 'components/mainbar/CenterBar'
import LeftBar from 'components/mainbar/LeftBar'
import RightBar from 'components/mainbar/RightBar'
import FullPost from 'components/postfiles/FullPost'
import React from 'react'

function MainPostPage() {
    return (
        <div className=" flex pt-14 h-screen relative z-20">
        <LeftBar/>
      <FullPost/>
      {/* <div className=""> */}
        <RightBar/>
        {/* </div> */}
     </div>
    )
}

export default MainPostPage
