import React from 'react';
import './search.css';

export default function Search() {
    return (
        <div className="search">
            <div className="search_icon">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="#000" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                </svg>
            </div>
            <div className="search_text">
                <h3>Where to?</h3>
                <ul>
                    <li>Anywhere</li>
                    <li>Any week</li>
                    <li>Add guests</li>
                </ul>
            </div>
        </div>
    );
}