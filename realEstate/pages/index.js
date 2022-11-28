import Image from 'next/image'
import {Flex, Box, Text,Button} from '@chakra-ui/react';
import Link from 'next/link';
const Banner=({purpose})=>(
  <Flex flexWrap="wrap" justifyContent="center" alignItems="center" m="10">
<Image/>
  </Flex>
)
export default function Home() {
  return (
    <div>
     <h1>Hellow World</h1>
<li><Link href='/users'>users</Link></li>
  <Banner purpose={'For byu'}/>
    </div>
  )
}
