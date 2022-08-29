import React from 'react'
import banner from '../img/sprint-overview.png'

function Home() {

    return (
        <>
            <div className='banner-img'>
                <img src={banner} alt="banner-image"
                    style={{
                        display: "block",
                        maxWidth: "100%",
                    }} />
            </div>

            <div className='home-container'>
                <div className='banner-box'>
                    <h1>Design Sprint Guide</h1>
                    <p>
                        The idea of the Design Sprint is to build and test a prototype in just FIVE days. You'll take a small team, clear the schedule for a week, and rapidly progress from problem to tested solution using a proven <a href='/checkList'>step-by-step checklist</a>.
                        <br />
                        <br />
                        A Design Sprint is like fast-forwarding into the future, so you can see how customers react before you invest all the time and expense of creating your new product, service, marketing campaign... or whatever!
                        <br />
                        <br />
                        It's also an excellent way to replace the old defaults of office work to a smarter, more respectful, and more effective way of problem solving mindset that brings out the best contributions of everyone on the team and helps you spend your time on work that really matters.
                    </p>
                </div>

            </div>
        </>


    )
}

export default Home