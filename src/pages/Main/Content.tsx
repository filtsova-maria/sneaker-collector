import React from 'react'
import { Sneaker } from 'types'
import { SortBy } from './SortBy';
import { ItemCard } from 'components';

type Props = {
    items: Sneaker[];
}

export const Content: React.FC<Props> = ({ items }) => {
    return (
        <div className='px-24'>
            <SortBy />
            <div className='flex gap-5'>
                {items.map(item => <ItemCard {...item} />)}
            </div>
        </div>
    )
}