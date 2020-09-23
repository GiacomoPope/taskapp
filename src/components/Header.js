import React from 'react'
import donepng from '../assets/done-1.png'

export default function Header() {
    return (
        <div className="header">
            <h1>Tasks App</h1>
            <img className="headerImage" src={donepng} alt="Man looking at to do list"/>
        </div>
    )
}
