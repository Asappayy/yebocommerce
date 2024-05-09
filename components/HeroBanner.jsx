import React from 'react';
import Link from 'next/link';

// import { urlFor } from '../lib/client';
import { urlForImage } from '../sanity/lib/image'; 

const HeroBanner = ({ heroBanner }) => {
  return (
    <div className="hero-banner-container">
      <div>
        <h5 className="beats-solo logoyen">{heroBanner.smallText}</h5>
        <h3 className='logoyen'>{heroBanner.midText}</h3>
        <h1>{heroBanner.largeText1}</h1>
        <img src={urlForImage(heroBanner.image)} alt="headphones" className="hero-banner-image" />

        <div>
          <Link href={`/product/${heroBanner.product}`}>
            <button type="button">{heroBanner.buttonText}</button>
          </Link>
          <div className="desc">
            <h5 className='logoyen'>Introduction</h5>
            <p className='logoyen'>{heroBanner.desc}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeroBanner