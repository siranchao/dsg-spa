import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FaBars, FaTimes } from 'react-icons/fa'
import logo from '../img/ontario-logo--desktop.svg'

function Navbar() {

    const [click, setClick] = useState(false)
    const handleClick = () => {
        return setClick(!click)
    }

    return (
        <>
            <div className='narbar'>
                <div className="documentation-only--application">
                    <div className="ontario-header__container">
                        <header className="ontario-application-header ontario-header" id="ontario-header">
                            <div className="ontario-row">
                                <div className="ontario-columns ontario-small-6 ontario-application-header__logo">
                                    <a href="https://www.ontario.ca/page/government-ontario">
                                        <img src={logo} alt="Government of Ontario" />
                                    </a>
                                </div>
                                <div className="ontario-columns ontario-small-6 ontario-application-header__lang-toggle">
                                    <a href="/" className="ontario-header__language-toggler ontario-header-button ontario-header-button--without-outline">
                                        {/* <abbr title="Français" className="ontario-show-for-small-only">
                                            FR
                                        </abbr>
                                        <span className="ontario-show-for-medium">
                                            Français
                                        </span> */}
                                        <abbr className="ontario-show-for-small-only">
                                            Login
                                        </abbr>
                                        <span className="ontario-show-for-medium">
                                            Login
                                        </span>
                                    </a>
                                </div>
                            </div>
                        </header>
                        <div className="ontario-application-subheader-menu__container">
                            <section className="ontario-application-subheader">
                                <div className="ontario-row">
                                    <div className="ontario-columns ontario-small-12 ontario-application-subheader__container">
                                        <p className="ontario-application-subheader__heading">
                                            <Link to="/">Design Sprint Guide</Link>
                                        </p>

                                        <div className="ontario-application-subheader__menu-container">
                                            <ul className="ontario-application-subheader__menu ontario-show-for-large">
                                                <li><Link to="/checklist">Check List</Link></li>
                                                <li><Link to="/bootcamp">Sprint Bootcamp</Link></li>
                                                <li><Link to="/stories">Stories</Link></li>
                                            </ul>

                                            <div className='menu-icon' onClick={handleClick}>
                                                {click ? <FaTimes /> : <FaBars />}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>
                            {/* <nav className="ontario-navigation" id="ontario-navigation">
                                <div className="ontario-navigation__container">
                                    <ul>
                                        <li className="ontario-show-for-small-only"><a href="#">Link
                                            1</a></li>
                                        <li className="ontario-show-for-small-only"><a href="#">Link
                                            2</a></li>
                                        <li className="ontario-hide-for-large"><a href="#">Link
                                            3</a></li>
                                        <li className="ontario-hide-for-large"><a href="#">Link
                                            4</a></li>
                                        <li className="ontario-hide-for-large"><a href="#">Link
                                            5</a></li>
                                        <li><a href="#">Link 6</a></li>
                                        <li><a href="#">Link 7</a></li>
                                        <li><a href="#">Link 8</a></li>
                                    </ul>
                                </div>
                            </nav> */}
                        </div>
                    </div>
                    <div className="ontario-overlay"></div>
                </div>
            </div>
        </>
    )
}

export default Navbar
