import axios from 'axios'
import Link from 'next/link'

export default function Users({users}) {
  return (
    <div>
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

export async function getStaticProps() {

  const {data: users} = await axios('https://jsonplaceholder.typicode.com/users')

  console.log('Users count ====> ', users.length, new Date())

  return {
    props: {
      users
    },
    revalidate: 5  }
}