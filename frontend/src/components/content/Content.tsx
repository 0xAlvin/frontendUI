import React from 'react';
import './content.css';
import img_1 from '../../../public/images/k.jpg';
import img_2 from '../../../public/images/img2.jpg';
import Image from 'next/image';


const images = [img_1, img_2];


function Card() {
    return (
        <div className="content_card">
            <button type="button">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5m-13.5-9L12 3m0 0 4.5 4.5M12 3v13.5" />
                </svg>
            </button>
            <div className="content_card_imgs">
                <div className="card_img_indicators">
                    <span className="indicator"></span>
                    <span className="indicator"></span>
                    <span className="indicator active"></span>
                    <span className="indicator"></span>
                    <span className="indicator"></span>
                </div>
                <div className="card_img_buttons">
                    <button type="button">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                        </svg>
                    </button>
                    <button type="button">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                        </svg>
                    </button>
                </div>
                {images.map((m, index) => (
                    <Image key={index} src={m} alt="image" width={700} height={700} />
                ))}
            </div>
            <div className="content_card_details">
                <h3>Train at the X-Mansion</h3>
                <p className="content_card_host">Hosted by Jubilee</p>
                <p className="content_card_status">Booking closed</p>
            </div>
        </div>
    )
}
export default function Content() {
    return (
        <div className="content">
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
        </div>
    )
}