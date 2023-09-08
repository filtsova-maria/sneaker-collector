import React from 'react'

type Props = {
    label: string;
    text: string;
}

const ItemText: React.FC<Props> = ({ label, text }) => {
    return (
        <div className="border-r-2 border-gray-80 last:border-none flex flex-col text-left w-4/12 mt-6 pl-4 first:pl-0">
            <h4>{text}</h4>
            <span>{label}</span>
        </div>
    )
}

export default ItemText