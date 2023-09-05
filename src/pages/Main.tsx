import { Button, TextField } from 'components'
import React from 'react'
import { MdAdd, MdSearch } from 'react-icons/md'
import CollectionImage from 'assets/collection.svg';

export default function Main() {
  return (
    <div>
      <h1>Your collection</h1>
      <TextField icon={MdSearch} />
      <Button type='primary' iconPosition='left' icon={MdAdd}>Add new sneakers</Button>
      {/* TODO: add and edit form drawers */}
      {/* TODO: extract content to a different component */}
      <div>
        <img src={CollectionImage} alt="empty sneaker collection vector art" className='px-24 py-12 justify-self-center' />
        <p>
          Seem's like you still didn't add any new sneaker to your collection
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