import { useState, useEffect } from 'react'
import axios from 'axios'
import Link from 'next/link'

export default function Posts ({posts = []}) {

  // const [posts, setPosts] = useState([])
  //
  // useEffect(() => {
  //   axios('https://jsonplaceholder.typicode.com/posts')
  //     .then(response => setPosts(response.data))
  // }, [])

  return (
    <div>
      <h2>Posts</h2>
      <ol>
        {posts.map(({id, title}) => (
          <Link key={id} href={`/post/${id}`}>
            <a>
              <li>
                {title}
              </li>
            </a>
          </Link>
        ))}
      </ol>
    </div>
  )
}

export async function getServerSideProps () {

  const {data: posts} = await axios('https://jsonplaceholder.typicode.com/posts')

  console.log('Post count', posts.length)

  return {
    props: {
      posts
    }
  }
}



