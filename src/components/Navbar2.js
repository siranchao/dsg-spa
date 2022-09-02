import React, { useState } from 'react'

function Navbar2() {

    const background = "#8DC63F"
    const [selected, setSelected] = useState(null)

    const clickIcon = (e) => {
        console.log(e);
        //setSelected(sectionName)
    }

    return (
        <div className='bottom-nav'>
            <section onClick={clickIcon}>
                <div className='bottom-nav-icon'>
                    <svg width="88.9px" height="88.9px" viewBox="-8.47 0 88.9 88.9" xmlns="http://www.w3.org/2000/svg">
                        <g id="Group_18" data-name="Group 18" transform="translate(-652 -672)">
                            <path id="Path_37" data-name="Path 37" d="M718.8,717.1V691.8L702.4,674H664.5A10.5,10.5,0,0,0,654,684.5v63.9a10.5,10.5,0,0,0,10.5,10.5h43.8a10.5,10.5,0,0,0,10.5-10.5v-8" fill="none" stroke="#2b4ea2" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="4" />
                            <path id="Path_38" data-name="Path 38" d="M697.3,675.1v16.4s-.2,5.8,3.5,5.8h16.4" fill="none" stroke="#2b4ea2" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="4" />
                            <path id="Path_39" data-name="Path 39" d="M721.9,729.2a3.172,3.172,0,0,1-3.7,3.7,3.209,3.209,0,0,1-2.5-2.5,3.172,3.172,0,0,1,3.7-3.7A3.512,3.512,0,0,1,721.9,729.2Z" fill="#2b4ea2" stroke="#2b4ea2" strokeMiterlimit="10" strokeWidth="4" />
                        </g>
                    </svg>
                </div>
                <p className='bottom-nav-link'>Checklist</p>
            </section>
            <section onClick={clickIcon}>
                <div className='bottom-nav-icon'>
                    <svg width="98.4px" height="98.4px" viewBox="-5.4 0 98.4 98.4" xmlns="http://www.w3.org/2000/svg">
                        <g id="Group_4" data-name="Group 4" transform="translate(-822.7 -241.5)">
                            <path id="Path_52" data-name="Path 52" d="M899.4,254.3H833.6a8.92,8.92,0,0,0-8.9,8.9V329a8.92,8.92,0,0,0,8.9,8.9h65.8a8.92,8.92,0,0,0,8.9-8.9V263.2A8.92,8.92,0,0,0,899.4,254.3Z" fill="none" stroke="#2b4ea2" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="4" />
                            <line id="Line_25" data-name="Line 25" x2="21.2" transform="translate(842.6 283.7)" fill="none" stroke="#2b4ea2" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="4" />
                            <line id="Line_26" data-name="Line 26" x2="45.9" transform="translate(842.6 302)" fill="none" stroke="#2b4ea2" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="4" />
                            <line id="Line_27" data-name="Line 27" y2="19.6" transform="translate(853.6 243.5)" fill="none" stroke="#2b4ea2" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="4" />
                            <line id="Line_28" data-name="Line 28" y2="19.6" transform="translate(879.4 243.5)" fill="none" stroke="#2b4ea2" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="4" />
                        </g>
                    </svg>
                </div>
                <p className='bottom-nav-link'>Sprint Guide</p>
            </section>
            <section onClick={clickIcon}>
                <div className='bottom-nav-icon'>
                    <svg width="82.4px" height="82.4px" viewBox="0 0 82.4 82.4" xmlns="http://www.w3.org/2000/svg">
                        <g id="Group_10" data-name="Group 10" transform="translate(-1024.8 -886.7)">
                            <circle id="Ellipse_4" data-name="Ellipse 4" cx="38.7" cy="38.7" r="38.7" transform="translate(1027.3 889.2)" fill="none" stroke="#2b4ea2" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="5" />
                            <line id="Line_33" data-name="Line 33" x1="13" transform="translate(1064 929.9)" fill="none" stroke="#2b4ea2" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="5" />
                            <line id="Line_34" data-name="Line 34" y2="20.3" transform="translate(1064 909.6)" fill="none" stroke="#2b4ea2" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="5" />
                            <circle id="Ellipse_5" data-name="Ellipse 5" cx="2.5" cy="2.5" r="2.5" transform="translate(1081.9 927.4)" fill="#2b4ea2" />
                        </g>
                    </svg>

                </div>
                <p className='bottom-nav-link'>Sprint Tools</p>
            </section>
            <section onClick={clickIcon}>
                <div className='bottom-nav-icon'>
                    <svg width="92.071px" height="92.071px" viewBox="0 -4.99 92.071 92.071" xmlns="http://www.w3.org/2000/svg">
                        <g id="Group_21" data-name="Group 21" transform="translate(-285.564 -881.7)">
                            <path id="Path_63" data-name="Path 63" d="M361.5,925.2v25.9c0,5.7-3.4,10.2-7.5,10.2H306.9c-4.1,0-7.5-4.6-7.5-10.2V925.2" fill="none" stroke="#2b4ea2" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="5" />
                            <path id="Path_64" data-name="Path 64" d="M289.1,921.7l33.1-33.1s3.2-4.4,8.4-4.4,9.1,4.3,9.1,4.3l34.4,34.4" fill="none" stroke="#2b4ea2" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="5" />
                            <path id="Path_65" data-name="Path 65" d="M335.6,950.1H325.3a3.159,3.159,0,0,1-3.2-3.2v-14a3.159,3.159,0,0,1,3.2-3.2h10.3a3.159,3.159,0,0,1,3.2,3.2v14A3.159,3.159,0,0,1,335.6,950.1Z" fill="none" stroke="#2b4ea2" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="5" />
                        </g>
                    </svg>
                </div>
                <p className='bottom-nav-link'>My Account</p>
            </section>
        </div>
    )
}

export default Navbar2
