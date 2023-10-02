import React, { useEffect, useState } from 'react';
import '../styles/SimpleGallery.css';


export default function SimpleGallery(props) {

  const url = process.env.REACT_APP_URL;
  const [viewerOpen, setViewerOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const openViewer = (index) => {
    setCurrentImageIndex(index);
    setViewerOpen(true);
  }

  const closeViewer = () => {
    setViewerOpen(false);
  }

  const prevImage = () => {
    if (currentImageIndex > 0) {
      setCurrentImageIndex(currentImageIndex -1);
    } else setCurrentImageIndex(props.images.length -1);
  };

  const nextImage = () => {
    if (currentImageIndex < props.images.length - 1) {
      setCurrentImageIndex(currentImageIndex +1);
    } else setCurrentImageIndex(0);

  };

  const handleKeyDown = (e) => {
    if (viewerOpen) {
      // if (e.key === 'ArrowLeft') prevImage();
      // else if (e.key === 'ArrowRight') nextImage();
      // else if (e.key === 'Escape') closeViewer();

      if (e.key === 'ArrowLeft'){
        prevImage();
        console.log('i pressed left!');
        console.log(currentImageIndex);

      } 
      else if (e.key === 'ArrowRight') {
        nextImage();
        console.log('i pressed right!');
        console.log(currentImageIndex);

      } 
      else if (e.key === 'Escape') {
        closeViewer();
        console.log('i pressed escape!');
      }

    }
  }

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [viewerOpen, currentImageIndex]);
    
  return (
    <div className="gallery">
      {props.images.map((image, index) => (
        <div className="thumbnail" key={index} onClick={() => openViewer(index)}>
          <img src={`${url}${image.attributes.image.data.attributes.formats.thumbnail.url}`} alt={`Thumbnail ${index + 1}`} />
          
        </div>
      ))}

      {viewerOpen && (
        <div className='viewer'>
          <div className="viewer-content">
            <img src={`${url}${props.images[currentImageIndex].attributes.image.data.attributes.url}`} alt={'Full-screen Image'} />
          </div>
          <button className="btn-prev" onClick={prevImage}>Previous</button>
            <button className="btn-next" onClick={nextImage}>Next</button>

          <button className="btn-close" onClick={closeViewer}>Close</button> 
        </div>
      )}
    </div>
  );
}
