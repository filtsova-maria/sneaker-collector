import React from 'react'
import CollectionImage from 'assets/collection.svg';
import Header from './Header';

export default function Main() {
  return (
    <div>
      <Header/>
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