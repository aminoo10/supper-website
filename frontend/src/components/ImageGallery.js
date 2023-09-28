import React, { useEffect } from 'react';
import PhotoSwipeLightbox from 'photoswipe/lightbox';
import 'photoswipe/dist/photoswipe.css';


export default function ImageGallery(props) {
    useEffect(() => {
        let lightbox = new PhotoSwipeLightbox({
            gallery: '#' + props.galleryID,
            children: 'a',
            pswpModule: () => import('photoswipe'),
        });
        lightbox.init();

    }, []);

    const url = process.env.REACT_APP_URL;

    // let data = Array.from(props);

    console.log();

    
  return (
    <div className="pswp-gallery" id={props.galleryID}>
      {props.imageData.map((image, index) => (
        
        <a
            href={`${url}${image.attributes.image.data.attributes.url}`}
            data-psp-width={image.attributes.image.data.attributes.width}
            data-pswp-height={image.attributes.image.data.attributes.height}
            key={props.galleryID + '-' + index}
            target="_blank"
            rel="noreferrer"
        >
            <img src={`${url}${image.attributes.image.data.attributes.formats.thumbnail.url}`} alt="" />
        </a>
      ))}
    </div>
  );
}
