import React from 'react'
import { Button, TextField } from 'components'
import { MdAdd, MdSearch } from 'react-icons/md'

interface Props {
  onClick: (e: React.MouseEvent) => void;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
export const Header: React.FC<Props> = ({ onClick }) => {
  return (
    <div className='grid grid-cols-2 my-14 mx-24 items-center'>
      <h1>Your collection</h1>
      <div className='flex gap-4 justify-end'>
        <TextField Icon={MdSearch} placeholder='Search' />
        <Button onClick={onClick} variant='primary' IconLeft={MdAdd}>Add new sneakers</Button>
      </div>
    </div>
  )
}