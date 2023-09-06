import { Button, TextField } from 'components'
import React from 'react'
import { MdAdd, MdSearch } from 'react-icons/md'
import CollectionImage from 'assets/collection.svg';

export default function Main() {
  return (
    <div>
      <div className='grid grid-cols-[2fr_1.5fr] my-14 mx-24'>
        <h1>Your collection</h1>
        <div className='flex gap-4 justify-center'>
          <TextField Icon={MdSearch} placeholder='Search' />
          <Button type='primary' iconPosition='left' icon={MdAdd}>Add new sneakers</Button>
        </div>
      </div>
      {/* TODO: add and edit form drawers */}
      {/* TODO: extract content to a different component */}
      <div className='flex flex-col text-center items-center'>
        <img src={CollectionImage} alt="empty sneaker collection vector art" className='px-24 py-12 max-w-[80vw]' />
        <p>
          Seem's like you still didn't add <br/>any new sneaker to your collection
        </p>
      </div>
      {/* if items then generate list of item cards from data with sort header*/}
      <div>

      </div>
      {/* if search is not empty and no items then show not found*/}
      <div>

      </div>
    </div>
  )
}