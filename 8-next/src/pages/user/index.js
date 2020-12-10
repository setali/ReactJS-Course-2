import axios from 'axios'
import Link from 'next/link'
import Head from 'next/head'

export default function Users ({users}) {
  return (
    <div>
      <Head>
        <title>Users list</title>
      </Head>
      <h2>Users list</h2>
      <ol>
        {users.map(({name, id}) => (
          <Link key={id} href={`/user/${id}`}>
            <a>
              <li>
                {name}
              </li>
            </a>
          </Link>
        ))}
      </ol>
    </div>
  )
}

export async function getStaticProps () {

  const {data: users} = await axios('https://jsonplaceholder.typicode.com/users')

  console.log('Users count ====> ', users.length, new Date())

  users.length = 5

  return {
    props: {
      users
    },
    revalidate: 5
  }
}