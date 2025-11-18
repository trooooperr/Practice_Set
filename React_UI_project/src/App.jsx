import React from 'react'
import Navbar from './components/Navbar'
import Page1content from './components/Section1/Page1content'

const user = [
  {
    img:'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1288&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    intro:'',
    tag: 'Satisfied'
  },
    {
    img:'https://images.unsplash.com/photo-1541560052-5e137f229371?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    intro:'',
    tag: 'Unsatisfied'
  },
    {
    img:'https://images.unsplash.com/photo-1665436035665-d7dad9086ee2?q=80&w=1359&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    intro:'',
    tag: 'Undeserved'
  },
    {
    img:'https://plus.unsplash.com/premium_photo-1661641353075-f0eaf2d82aae?q=80&w=1335&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    intro:'',
    tag: 'Underbanked'
  },
]
const App = () => {
  return (
    <div>
      <Navbar/>  
      <Page1content user={user}/> 
    </div>
  )
}

export default App
