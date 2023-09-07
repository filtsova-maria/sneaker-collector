import React from 'react'
import SearchImage from 'assets/search.svg';

type Props = {}

export const NotFound: React.FC<Props> = () => {
    return (
        <div>
            <img src={SearchImage} alt="empty sneaker collection vector art" className='px-24 py-12 max-w-[80vw]' />
            Search better. There is nothing like this in your collection.
        </div>
    )
}