import { ChevronDoubleLeftIcon } from '@heroicons/react/outline'
import React from 'react'
import { Link } from 'react-router-dom'

function GoBackProfile() {
    return (
        <div className="bg-white flex p-2 border space-x-4 items-center">
            <Link>
          <ChevronDoubleLeftIcon className="h-6 w-6"/> 
          </Link>
          <span>Go back</span>
        </div>
    )
}

export default GoBackProfile
