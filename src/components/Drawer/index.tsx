import React from 'react'

type Props = {
    open: boolean;
    children: React.ReactNode;
}

export const Drawer: React.FC<Props> = ({ open, children }) => {
    return (
        <>
            <div className={`fixed top-0 left-0 w-full h-full bg-black/60 z-10 ${open ? "visible" : "collapse"}`}>
                <div className={`fixed top-0 right-0 h-full w-4/12 min-w-[300px] z-10 bg-white`}>
                    {children}
                </div>
            </div>
        </>
    )
}