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

            <main className='home-container'>
                <div className='banner-box'>
                    <h1 className='title'>Design Sprint Guide</h1>
                    <div className='entry-flex-box'>
                        <div className='entry-intro'>
                            <p className='text'>
                                The idea of the Design Sprint is to build and test a prototype in just FIVE days. You'll take a small team, clear the schedule for a week, and rapidly progress from problem to tested solution using a proven <a href='/checkList'>step-by-step checklist</a>.
                            </p>
                            <p className='text'>
                                A Design Sprint is like fast-forwarding into the future, so you can see how customers react before you invest all the time and expense of creating your new product, service, marketing campaign... or whatever!
                            </p>
                        </div>
                        <div className='entry-btn-group'>
                            <button className='ontario-button ontario-button--primary'>New Design Sprint</button>
                            <button className='ontario-button ontario-button--secondary'>Continue My Sprint</button>
                        </div>
                    </div>

                    <div className='entry-video-box'>
                        <div className='video-section'>
                            <iframe src="https://www.youtube.com/embed/K2vSQPh6MCE" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                        </div>
                        <div className='intro-section'>
                            <h2 className='sub-title'>Sprint process in 90 seconds</h2>
                            <p className='text'>Check out this short video where Jake Knapp introduces and explains the Design Sprint. It includes behind-the-scenes video from a sprint with Blue Bottle Coffee ☕️</p>
                        </div>
                    </div>
                </div>
            </main>

            <div className='history-container'>
                <div className='history-box'>
                    <h2 className='sub-title'>A brief history of the Design Sprint</h2>
                    <p className="paragraph text"><a href="http://jakeknapp.com/" target="_blank">Jake Knapp</a> created the Design Sprint process at Google in 2010. He took inspiration from many places, including Google's product development culture, IDEO's design thinking workshops, ideas like Basecamp's <a href="https://amzn.to/2Wswc3I" target="_blank"><em>Getting Real</em></a> and Atul Gawande's <a href="https://amzn.to/3dFhU5y" target="_blank"><em>Checklist Manifesto</em></a>, and his own experience building products like Gmail and Hangouts.
                        <br />
                        <br />
                        From 2010-12 at Google, Jake refined the Design Sprint with teams like Chrome, Search and Google X. In 2012, he brought Design Sprints to Google Ventures, where the rest of the team chipped in their expertise to perfect the process.‍
                        <br />
                        <br />
                        <a href="http://kowitz.co/" target="_blank">Braden Kowitz</a> added story-centered design, an approach that focuses on the user instead of features or technologies. <a href="http://www.gv.com/team/michael-margolis" target="_blank">Michael Margolis</a> took customer research—which can typically take weeks to plan and often delivers confusing results—and figured out a way to get crystal clear results in just one day. <a href="http://johnzeratsky.com" target="_blank">John Zeratsky</a> brought a focus on measuring results with the key metrics from each business. And <a href="https://danielburka.com/" target="_blank">Daniel Burka</a> brought firsthand expertise as an entrepreneur to ensure every step made sense for startups.
                        <br />
                        <br />
                        In 2012 and 2013, the Google Ventures team published a how-to <a href="https://medium.com/@jakek/the-product-design-sprint-a-five-day-recipe-for-startups-84fde3e97d79" target="_blank">series</a> about Design Sprints, and the process started to spread. <a href="/book">The <em>Sprint</em> book</a> came out in 2016, and today, thousands of teams around the world have run sprints in startups (like Slack and Airbnb), big companies (like LEGO and Google), agencies (like IDEO and McKinsey), schools (like Stanford and Columbia), governments (like the UK and the City of Chicago), and even museums (like the British Museum and the Smithsonian).</p>
                </div>
            </div>
        </>
    )
}

export default Home