import React from 'react'
import { useQuery, gql } from '@apollo/client';
import ImageGallery from '../components/ImageGallery';
import SimpleGallery from '../components/SimpleGallery';
import '../styles/Gallery.css';

const usePhotoSwipe = false;
const url = process.env.REACT_APP_URL;

const IMAGES = gql`
query GetImages {
  imagePosts {
    data {
      id, 
      attributes {
        image {
          data {
            attributes {
              caption,
              url,
              width,
              height,
              formats
            }
          }
        }
      }
    }
  }
}
`

export default function Gallery() {

  const { loading, error, data } = useQuery(IMAGES);

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error :(</p>

  //console.log(data.imagePosts.data);

  return (
    <div>

      { !usePhotoSwipe && <SimpleGallery images={data.imagePosts.data}/> }
      {/* {!usePhotoSwipe && <div className="gallery">
        {data.imagePosts.data.map(image => (
          
          <a
              href={`${url}${image.attributes.image.data.attributes.url}`}
              target="_blank"
              rel="noreferrer"
          >
              <img src={`${url}${image.attributes.image.data.attributes.formats.thumbnail.url}`} alt="" />
          </a>
        ))}
      </div>} */}
      { usePhotoSwipe && <ImageGallery imageData={data.imagePosts.data} galleryID='portfolio-gallery'/> }
    </div>
  )
}
