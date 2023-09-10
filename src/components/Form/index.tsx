import React from 'react'

type Props = {
    children: any;
}

export const Form: React.FC<Props> = ({ children }) => {
    return (
        <form className='flex flex-col gap-6'>
            {children}
        </form>
    )
}