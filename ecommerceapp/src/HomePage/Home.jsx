import React from 'react'
import Header from '../Header/Header'
import Products from '../Products/Products'
import HomeBanner from './HomeBanner'
import HomeCards from './HomeCards'

function Home() {
  return (
    <div>
        <Header/>
        <HomeBanner/>
        <HomeCards/>

    </div>
  )
}

export default Home