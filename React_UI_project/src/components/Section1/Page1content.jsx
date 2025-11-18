import React from 'react'
import Leftcontent from './Leftcontents'
import Rightcontent from './Rightcontent'

const Page1content = (props) => {
  return (
    <div className='py-10 px-18 flex items-center gap-10 h-[90vh]'>
      <Leftcontent/>
      <Rightcontent user={props.user} />
    </div>
  )
}

export default Page1content