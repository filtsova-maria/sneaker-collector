import React from 'react'
import { MdOutlineClose } from 'react-icons/md';

type Props = {
    open: boolean;
    closeHandler: () => void;
    children: React.ReactNode;
}

export const Drawer: React.FC<Props> = ({ open, closeHandler, children }) => {
    return (
        <>
            <div className={`fixed top-0 left-0 w-full h-full bg-black/60 z-10 ${open ? "visible opacity-100" : "invisible opacity-0"} transition-opacity`}>
                <div className={`fixed top-0 right-0 h-full z-10 ${open ? "w-4/12 min-w-[300px]" : "w-0"} bg-white transition-all`}>
                    <MdOutlineClose size={24} onClick={closeHandler} className='text-black'/>
                    {children}
                </div>
            </div>
        </>
    )
}