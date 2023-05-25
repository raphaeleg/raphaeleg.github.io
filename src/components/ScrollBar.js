import React, { useState } from 'react'

const ScrollBar = ( { currentPage, scrollBarPos } ) => {
    const totalPages = 8;
    return (
        <span className={`scrollContainer ${currentPage > 0 ? '' : 'toHide'} ${currentPage > 5 ? 'sideScrollContainer' : ''}`}>
            <span className='scrollNumbers' style={{ marginTop: scrollBarPos }}>
                <p className='scrollCurr'>{Math.min( Math.max( currentPage, 1 ), totalPages )}</p>
                <p className='scrollDash'>/</p>
                <p className='scrollTotal'>{totalPages}</p>
            </span>
        </span >
    )
}

export default ScrollBar