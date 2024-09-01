import React from 'react';
import './location.css';
import Image from 'next/image';
import icons_img from '../../../public/icons/icons-star.png';
import caves_img from '../../../public/icons/caves.jpg';
import design_img from '../../../public/icons/design.jpg';
import off_grid_img from '../../../public/icons/off_grid.jpg';
import tiny_h_img from '../../../public/icons/tiny_homes.jpg';
import islands_img from '../../../public/icons/islands.jpg';
import creative_s_img from '../../../public/icons/creative_spaces.jpg';
import riads_img from '../../../public/icons/riads.jpg';
import Link from 'next/link';

export default function Location() {
    return (
        <div className="locations">
            <div className="locations_category active">
                <Link href={`#`}>
                    <div className="locations_category_icon">
                        <Image src={icons_img} alt="location" width={100} height={100} />
                    </div>
                    <p>icons</p>
                </Link>
            </div>
            <div className="locations_category">
                <Link href={`#`}>
                    <div className="locations_category_icon">
                        <Image src={caves_img} alt="location" width={100} height={100} />
                    </div>
                    <p>caves</p>
                </Link>
            </div>
            <div className="locations_category">
                <Link href={`#`}>
                    <div className="locations_category_icon">
                        <Image src={design_img} alt="location" width={100} height={100} />
                    </div>
                    <p>design</p>
                </Link>
            </div>
            <div className="locations_category">
                <Link href={`#`}>
                    <div className="locations_category_icon">
                        <Image src={off_grid_img} alt="location" width={100} height={100} />
                    </div>
                    <p>Off-the-grid</p>
                </Link>
            </div>
            <div className="locations_category">
                <Link href={`#`}>
                    <div className="locations_category_icon">
                        <Image src={tiny_h_img} alt="location" width={100} height={100} />
                    </div>
                    <p>Tiny homes</p>
                </Link>
            </div>
            <div className="locations_category">
                <Link href={`#`}>
                    <div className="locations_category_icon">
                        <Image src={islands_img} alt="location" width={100} height={100} />
                    </div>
                    <p>islands</p>
                </Link>
            </div>
            <div className="locations_category">
                <Link href={`#`}>
                    <div className="locations_category_icon">
                        <Image src={creative_s_img} alt="location" width={100} height={100} />
                    </div>
                    <p>Creative spaces</p>
                </Link>
            </div>
            <div className="locations_category">
                <Link href={`#`}>
                    <div className="locations_category_icon">
                        <Image src={riads_img} alt="location" width={100} height={100} />
                    </div>
                    <p>riads</p>
                </Link>
            </div>
            <div className="locations_category">
                <Link href={`#`}>
                    <div className="locations_category_icon">
                        <Image src={icons_img} alt="location" width={100} height={100} />
                    </div>
                    <p>icons</p>
                </Link>
            </div>
            <div className="locations_category">
                <Link href={`#`}>
                    <div className="locations_category_icon">
                        <Image src={icons_img} alt="location" width={100} height={100} />
                    </div>
                    <p>icons</p>
                </Link>
            </div>
            <div className="locations_category">
                <Link href={`#`}>
                    <div className="locations_category_icon">
                        <Image src={icons_img} alt="location" width={100} height={100} />
                    </div>
                    <p>icons</p>
                </Link>
            </div>
            <div className="locations_category">
                <Link href={`#`}>
                    <div className="locations_category_icon">
                        <Image src={icons_img} alt="location" width={100} height={100} />
                    </div>
                    <p>icons</p>
                </Link>
            </div>
            <div className="locations_category">
                <Link href={`#`}>
                    <div className="locations_category_icon">
                        <Image src={icons_img} alt="location" width={100} height={100} />
                    </div>
                    <p>icons</p>
                </Link>
            </div>
            <div className="locations_category">
                <Link href={`#`}>
                    <div className="locations_category_icon">
                        <Image src={icons_img} alt="location" width={100} height={100} />
                    </div>
                    <p>icons</p>
                </Link>
            </div>
            <div className="locations_category">
                <Link href={`#`}>
                    <div className="locations_category_icon">
                        <Image src={icons_img} alt="location" width={100} height={100} />
                    </div>
                    <p>icons</p>
                </Link>
            </div>
            <div className="locations_category">
                <Link href={`#`}>
                    <div className="locations_category_icon">
                        <Image src={icons_img} alt="location" width={100} height={100} />
                    </div>
                    <p>icons</p>
                </Link>
            </div>
            <div className="locations_category">
                <Link href={`#`}>
                    <div className="locations_category_icon">
                        <Image src={icons_img} alt="location" width={100} height={100} />
                    </div>
                    <p>icons</p>
                </Link>
            </div>
        </div>
    );
}