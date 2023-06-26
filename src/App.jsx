import { useState } from 'react'
import  ReactDOM  from 'react-dom'
import Nav from './navbar'
import Banner from './banner'
import Card from './card'
import Data from './data'


function App() {
  const [count, setCount] = useState(0)

  const names = Data.map(items => {
    return(
      <Card
         image= {items.coverImg}
         poster={items.poster}
         title= {items.title}
         views= {items.views}
      
      />
    )
  })

  return (
    <>
      <Nav/>
      <Banner/>
      {names}
    </>
  )
}

export default App
