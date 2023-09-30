import React from 'react'
import { useQuery, gql } from '@apollo/client'
import ReactMarkdown from 'react-markdown'
import '../styles/Homepage.css';


const POSTS = gql`
    query GetPosts {
        posts {
        data {
            id,
            attributes {
            title,
            body,
            createdAt
            }
        }
        }
    }
`

const POSTS2 = gql`
    query GetPosts {
        posts {
        data {
            id,
            attributes {
            title,
            body,
            createdAt,
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

const convertISOToDate = (isoDate) => {
    const options = { year: 'numeric', 
                    month: 'long', 
                    day: 'numeric', 
                    hour: 'numeric', 
                    minute: 'numeric', 
                    hour12: true};

    const date = new Date(isoDate);
    return date.toLocaleString('en-US', options);
}

const url = process.env.REACT_APP_URL;

export default function Homepage() {
    const { loading, error, data } = useQuery(POSTS);

    if (loading) return <p>Loading...</p>
    if (error) return <p>Error :(</p>

    console.log(data);
    
  return (
    <div className="blog">
        {data.posts.data.map(post => (
            <div key={post.id} className="post-card">
                <h2>{post.attributes.title}</h2>
                <div className="inner-box">
                    <p className="date-created">Posted on {convertISOToDate(post.attributes.createdAt)}</p>
                    {/* <img src={`${url}${post.attributes.media.data.attributes.formats.small.url}`}
                        alt={post.attributes.media.data.attributes.name} /> */}
                    {/*<p>{post.attributes.body}</p>*/}
                    <ReactMarkdown>{post.attributes.body}</ReactMarkdown>
                </div>
            </div>
        ))}
    </div>
  )
}
