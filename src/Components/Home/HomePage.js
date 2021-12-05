import React from 'react'
import HomeBanner from './HomeBanner'
import HomeCards from './HomeCards'
import HomeShortIntroduction from './HomeShortIntroduction'

const HomePage = () => {
    return (
        <div>
            <HomeBanner />
            <HomeShortIntroduction />
            <HomeCards />
        </div>
    )
}

export default HomePage
