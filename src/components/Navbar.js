import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FaBars, FaTimes } from 'react-icons/fa'

function Narbar() {
    const imgSrc = {
        logo: "../img/ontario-logo--desktop.svg"
    }

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
                                        <img src={imgSrc.logo} alt="Government of Ontario" />
                                    </a>
                                </div>
                                <div className="ontario-columns ontario-small-6 ontario-application-header__lang-toggle">
                                    <a href="#" className="ontario-header__language-toggler ontario-header-button ontario-header-button--without-outline">
                                        <abbr title="Français" className="ontario-show-for-small-only">
                                            FR
                                        </abbr>
                                        <span className="ontario-show-for-medium">
                                            Français
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
                                                <li><Link to="/">Link 1</Link></li>
                                                <li><Link to="/">Link 2</Link></li>
                                                <li><Link to="/">Link 3</Link></li>
                                            </ul>
                                            <ul className="ontario-application-subheader__menu ontario-hide-for-small ontario-show-for-medium ontario-hide-for-large">
                                                <li><Link to="/">Link 1</Link></li>
                                                <li><Link to="/">Link 2</Link></li>
                                            </ul>

                                            <div className='menu-icon' onClick={handleClick}>
                                                {click ? <FaTimes /> : <FaBars />}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>
                            <nav className="ontario-navigation" id="ontario-navigation">
                                <button className="ontario-header__menu-toggler ontario-header-button ontario-header-button--with-outline" id="ontario-header-nav-toggler" aria-controls="ontario-navigation" aria-label="close">
                                    {/* <svg className="ontario-icon" focusable="false" viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet">
                                        <use xlink:href="#ontario-icon-close"></use>
                                    </svg> */}
                                    <span>Menu</span>
                                </button>
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
                            </nav>
                        </div>
                    </div>
                    <div className="ontario-overlay"></div>
                </div>
            </div>
        </>
    )
}

export default Narbar
