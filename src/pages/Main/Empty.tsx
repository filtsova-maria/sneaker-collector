import React from 'react'
import CollectionImage from 'assets/collection.svg';

type Props = {}

export const Empty: React.FC<Props> = () => {
    return (
        <div className='flex flex-col text-center items-center'>
            <img src={CollectionImage} alt="empty sneaker collection vector art" className='px-24 py-12 max-w-[80vw]' />
            <p>
                Seem's like you still didn't add <br />any new sneaker to your collection
            </p>
        </div>
    )
}