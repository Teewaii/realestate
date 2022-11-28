import React from 'react'
import { useRouter } from 'next/router';

function Dynamic({ user }) {
    // const router = useRouter()
    // const id = router.query.id

    return (
        <div>
            <p>{user.id}</p>
            < p> {user.email}</p>
            <h1>{user.username}</h1>
        </div>
    )
}

export default Dynamic

export async function getStaticPaths() {
    const response = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = await response.json()

    const paths = data.map(user => {
        return {
            params: {
                usersId: `${user.id}`
            }
        }
    })
    return {
        paths,
        fallback: false,
    }
}

export async function getStaticProps(context) {
    const { params } = context
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${params.usersId}`)
    const data = await response.json()
    return {
        props: {
            user: data
        }
    }
}