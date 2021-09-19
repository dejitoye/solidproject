import React, { useEffect, useState } from 'react'
import FriendsComponentList from './FriendsComponentList'
import { DataStore } from '@aws-amplify/datastore';
import { User } from 'models';
// import { User } from './models';

function RightMessageBar() {


    return (
        <div>
         <FriendsComponentList  />  
        </div>
    )
}

export default RightMessageBar
