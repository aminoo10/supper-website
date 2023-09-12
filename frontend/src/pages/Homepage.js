import React from 'react'
import { useQuery, gql } from '@apollo/client'

const POSTS = gql`
    query GetPosts {
        posts {
        data {
            id,
            attributes {
            title,
            body,
            media {
                data {
                attributes {
                    name,
                    formats
                }
                }
            }
            }
        }
        }
    }
`
const url = process.env.REACT_APP_URL;

export default function Homepage() {
    const { loading, error, data } = useQuery(POSTS)

    if (loading) return <p>Loading...</p>
    if (error == []) return <p>Error :(</p>

    console.log(data);
    
  return (
    <div>
        {data.posts.data.map(post => (
            <div key={post.id} className="post-card">
                <h2>{post.attributes.title}</h2>
                <img src={`${url}${post.attributes.media.data.attributes.formats.small.url}`}
                     alt={post.attributes.media.data.attributes.name} />
                <p>{post.attributes.body}</p>
            </div>
        ))}
    </div>
  )
}
