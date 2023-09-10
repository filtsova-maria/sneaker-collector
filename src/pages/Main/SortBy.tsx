import { Button } from 'components'
import React, { useState } from 'react'
import { MdOutlineAttachMoney, MdOutlineCalendarToday, MdOutlineCode } from 'react-icons/md'
import { Sneaker } from 'types'

type Props = {}
type SortByCriterium = Exclude<keyof Sneaker, "brand" | "name">;

export const SortBy: React.FC<Props> = () => {
    const [by, setBy] = useState<SortByCriterium>("year");
    return (
        <div className='flex justify-end items-center pb-6'>
            <caption className='pr-4'>Sort by:</caption>
            <div className='flex gap-2'>
                <Button onClick={() => {setBy("year")}}variant='secondary' IconLeft={MdOutlineCalendarToday} className={by === 'year' ? "button-active" : ""}>Oldest Year</Button>
                <Button onClick={() => {setBy("size")}}variant='secondary' IconLeft={MdOutlineCode} className={by === 'size' ? "button-active" : ""}>Smallest Size</Button>
                <Button onClick={() => {setBy("price")}}variant='secondary' IconLeft={MdOutlineAttachMoney} className={by === 'price' ? "button-active" : ""}>Lowest Price</Button>
            </div>
        </div>
    )
}