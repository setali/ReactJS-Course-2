// import { useRouter } from 'next/router'
import axios from 'axios'
import Link from 'next/link'

export default function Post ({post = {}}) {
  // const {query} = useRouter()

  return (
    <div>
      <h3>{post.title}</h3>
      <p>{post.body}</p>
      <hr/>
      <Link href={"/post"}>
        <a>
          Return to list
        </a>
      </Link>
    </div>
  )
}

export async function getServerSideProps({params}) {

  // const {data: post} = await axios(`https://jsonplaceholder.typicode.com/posts/${params.id}`)
  const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`)
  const post = await response.json()

  return {
    props: {
      post
    }
  }
}

