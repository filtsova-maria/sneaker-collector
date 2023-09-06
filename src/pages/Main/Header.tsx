import React from 'react'
import { Button, TextField } from 'components'
import { MdAdd, MdSearch } from 'react-icons/md'


export default function Header() {
  return (
    <div className='grid grid-cols-[2fr_1.5fr] my-14 mx-24'>
        <h1>Your collection</h1>
        <div className='flex gap-4 justify-center'>
          <TextField Icon={MdSearch} placeholder='Search' />
          <Button type='primary' IconLeft={MdAdd}>Add new sneakers</Button>
        </div>
      </div>
  )
}