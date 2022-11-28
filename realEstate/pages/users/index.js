import React from 'react'
import { Box, Flex } from '@chakra-ui/react'
import Link from 'next/link'
import id from './[usersId]'

function Users({ users }) {
  return (
    <div><Flex fontSize={30} fontWeight={500}>List of users</Flex>
      {users.map((item) => (

        <ul key={item.id} className="tryd">
          <li>

            <Link href={`users/${item.id}`} passHref>
              <h1>{item.username}</h1>
              <p>{item.email}</p>
              <hr />
            </Link>
          </li>
        </ul>

      ))}
    </div>
  )
}

export default Users

export async function getStaticProps() {
  const response = await fetch('https://jsonplaceholder.typicode.com/users')
  const data = await response.json()

  return {
    props: {
      users: data
    }
  }
}