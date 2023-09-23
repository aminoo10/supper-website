import React from 'react'
import { useQuery, gql } from '@apollo/client';
import ImageGallery from '../components/ImageGallery';


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
          <ImageGallery imageData={data.imagePosts.data} galleryID='portfolio-gallery'/>
    </div>
  )
}
