import React, { useEffect } from 'react';
import PhotoSwipeLightbox from 'photoswipe';
import 'photoswipe/photoswipe.css';


export default function ImageGallery(props) {
    useEffect(() => {
        let lightbox = new PhotoSwipeLightbox({
            gallery: '#' + props.galleryID,
            children: 'a',
            pswpModule: () => import('photoswipe'),
        });
        lightbox.init();

        return () => {
            lightbox.destroy();
            lightbox = null;
        };
    }, []);

    const url = process.env.REACT_APP_URL;

    console.log("this is the props passed through: ");
    console.log(props);

    
  return (
    <div className="pswp-gallery">
      {props.map(image => (
        <a
            href={`${url}${image.attributes.image.data.attributes.url}`}
            data-psp-width={image.attributes.image.data.attributes.width}
            data-pswp-height={image.attributes.image.data.attributes.width}
            key={image.id}
            target="_blank"
            rel="noreferrer"
        >
            <img src={`${url}${image.attributes.image.data.attributes.formats.thumbnail.url}`} alt="" />
        </a>
      ))}
    </div>
  );
}
