import React, { useState } from 'react'

const ScrollBar = ( { currentPage, totalPages, scrollBarPos } ) => {
    return (
        <span className={`scrollContainer ${currentPage > 0 ? '' : 'toHide'} ${totalPages === 3 ? 'sideScrollContainer' : ''}`}>
            <span className='scrollNumbers' style={{ marginTop: scrollBarPos }}>
                <p className='scrollCurr'>{Math.min( Math.max( currentPage, 1 ), totalPages )}</p>
                <p className='scrollDash'>/</p>
                <p className='scrollTotal'>{totalPages}</p>
            </span>
        </span >
    )
}

export default ScrollBar