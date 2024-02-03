import React from 'react'
import { headers } from 'next/headers';
import Main from './Main';
type Props = {}

const page = async (props: Props) => {
  return (
    <main>
      <Main />
    </main>
  )
}

export default page