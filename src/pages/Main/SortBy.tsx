import { Button } from 'components'
import React from 'react'
import { MdOutlineAttachMoney, MdOutlineCalendarToday, MdOutlineCode } from 'react-icons/md'

type Props = {}

export const SortBy: React.FC<Props> = () => {
    return (
        <div>
            <caption>Sort by:</caption>
            <Button type='secondary' IconLeft={MdOutlineCalendarToday}>Oldest Year</Button>
            <Button type='secondary' IconLeft={MdOutlineCode}>Smallest Size</Button>
            <Button type='secondary' IconLeft={MdOutlineAttachMoney}>Lowest Price</Button>
        </div>
    )
}