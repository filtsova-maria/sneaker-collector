import React from 'react'
import { Sneaker } from 'types'
import { SortBy } from './SortBy';
import { ItemCard } from 'components';

type Props = {
    items: Sneaker[];
}

export const Content: React.FC<Props> = ({ items }) => {
    return (
        <div>
            <SortBy />
            {items.map(item => <ItemCard {...item} />)}
        </div>
    )
}