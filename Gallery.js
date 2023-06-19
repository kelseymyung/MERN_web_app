import React from 'react';

import ImageGallery from 'react-image-gallery';

const pictures = [
    {
        original: 'images/baker-mountaineer-team.jpg',
        thumbnail: 'images/baker-mountaineer-team.jpg',
        description: `Mount Baker Climb (2022)`,
        originalHeight: '450px',
    },
    {
        original: 'images/underwater-scuba-diver.jpg',
        thumbnail: 'images/underwater-scuba-diver.jpg',
        description: `Diving in Kona, HI (2022)`,
        originalHeight: '450px',
    },
    {
        original: 'images/bryce-canyon.jpg',
        thumbnail: 'images/bryce-canyon.jpg',
        description: `Bryce Canyon hoodoos (2021)`,
        originalHeight: '450px',
    },
    {
        original: 'images/ironman-gear-bike.jpg',
        thumbnail: 'images/ironman-gear-bike.jpg',
        description: `Ironman Hawaii 70.3 (2022)`,
        originalHeight: '450px',
    },
    {
        original: 'images/ironman-race-kits.jpg',
        thumbnail: 'images/ironman-race-kits.jpg',
        description: `Ironman World Championship (2022)`,
        originalHeight: '450px',
    },
    {
        original: 'images/cultural-mural-art-vancouver.jpg',
        thumbnail: 'images/cultural-mural-art-vancouver.jpg',
        description: `Mural in Vancouver, BC (2022)`,
        originalHeight: '450px',
    },
    {
        original: 'images/pottery-wheel-clay.jpg',
        thumbnail: 'images/pottery-wheel-clay.jpg',
        description: `Working with clay (2022)`,
        originalHeight: '450px',
    },
    {
        original: 'images/watercolor-sunset.jpg',
        thumbnail: 'images/watercolor-sunset.jpg',
        description: `Sunset watercolor painting (2021)`,
        originalheight: '450px',
    },
    {
        original: 'images/slp-therapy-dog-scrubs.jpg',
        thumbnail: 'images/slp-therapy-dog-scrubs.jpg',
        description: `Rehab SLP and therapy pup (2023)`,
        originalHeight: '450px',
    },
    {
        original: 'images/slp-folder-neurocog.jpg',
        thumbnail: 'images/slp-folder-neurocog.jpg',
        description: `Neurocognitive SLP continuing education (2022)`,
        originalHeight: '450px',
    }
]


function Gallery() {
    return (
        <>
            <h2>Snapshots of Memorable Moments</h2>
            <p>I have experienced some special moments over the last few years... 
                Please take a look through these photos to get to know me a little better. 
                I enjoy sharing my life and passions with others.</p>

            <article class="images">
                <ImageGallery items={pictures}/>
            </article>
        </>
    );
}

export default Gallery;
