import React from 'react'
import { MdOutlineClose } from 'react-icons/md';

type Props = {
    open: boolean;
    closeHandler: () => void;
    title: string;
    children: React.ReactNode;
}

export const Drawer: React.FC<Props> = ({ open, closeHandler, title, children }) => {
    return (
        <>
            <div className={`fixed top-0 left-0 w-full h-full bg-black/60 z-10 ${open ? "visible opacity-100" : "invisible opacity-0"} transition-opacity`}>
                <div className={`fixed top-0 right-0 h-full z-10 ${open ? "w-4/12 min-w-[350px]" : "w-0"} bg-white transition-all p-12`}>
                    <div className='flex'>
                        <h2>{title}</h2>
                        <MdOutlineClose size={24} onClick={closeHandler} className='text-black min-w-[24px]' />
                    </div>
                    {children}
                </div>
            </div>
        </>
    )
}