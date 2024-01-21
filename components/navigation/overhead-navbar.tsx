'use client'

import { AnimatePresence, motion } from "framer-motion"
import { cn } from "@/lib/utils"
import Link from "next/link";
import { Button } from "../ui/button";
import { RxBlendingMode } from "react-icons/rx";
import { useState } from "react";


const Navigation = () => {
    const [hoveredAuth, setHoveredAuth] = useState<boolean>(false);
    const [hoveredLogin, setHoveredLogin] = useState<boolean>(false);
    const [hoveredSignup, setHoveredSignup] = useState<boolean>(false);

    // css
    const basicNavStyles = 'relative flex bg-transparent px-4 w-full group items-center justify-between';
    const navbarResponsiveStyles = '';
    const navbarBackgroundShapeAndColors = 'rounded-full p-4 gap-4'
    const temp = ''

    // RENDER
    return(
        <nav className={cn(basicNavStyles, navbarBackgroundShapeAndColors, navbarResponsiveStyles)}>
            <span className='flex items-center gap-8'>
            {/* logo */}
            <span className='flex overflow-hidden aspect-square h-[7vh] justify-center items-center bg-gradient-to-br from-cyan-500 to-blue-500 rounded-full text-sky-100'>
                <motion.span
                whileHover={{scale: 1.4}}
                transition={{duration: 0.3}}
                className='w-auto h-auto p-4 rounded-full'
                >
                    <RxBlendingMode size={28} />
                </motion.span>
            </span>
            {/* Navigation links */}
            <span 

            className='gap-2 grid grid-cols-3 w-auto'>
                <span
                onMouseEnter={() => setHoveredAuth(true)}
                onMouseLeave={() => setHoveredAuth(false)}
                className='flex flex-col relative group'
                >
                    <Link href='/auth'>
                        <Button variant='link'>
                            Auth
                        </Button>
                    </Link>
                    <AnimatePresence>
                    {hoveredAuth ?                         
                    <motion.span 
                        initial={{width: '30%', opacity: 0}}
                        animate={{width: '100%', opacity: 1}}
                        exit={{width: '1%', opacity: 0}}
                        transition={{ duration: 0.1, type: 'spring', damping: 10, mass: 0.75, stiffness: 100 }}
                        className='h-1 rounded-full bg-gradient-to-r from-cyan-400 to-blue-400 absolute -bottom-2'
                        >
                            {/*  */}
                    </motion.span> : null}
                    </AnimatePresence>
                </span>
                <span
                onMouseEnter={() => setHoveredLogin(true)}
                onMouseLeave={() => setHoveredLogin(false)}
                className='flex flex-col relative group'
                >
                    <Link href='/login'>
                        <Button variant='link'>
                            Login
                        </Button>
                    </Link>
                    <AnimatePresence>
                    {hoveredLogin ?                         
                    <motion.span 
                        initial={{width: '30%', opacity: 0}}
                        animate={{width: '100%', opacity: 1}}
                        exit={{width: '1%', opacity: 0}}
                        transition={{ duration: 0.1, type: 'spring', damping: 10, mass: 0.75, stiffness: 100 }}
                        className='h-1 rounded-full bg-gradient-to-r from-cyan-400 to-blue-400 absolute -bottom-2'
                        >
                            {/*  */}
                    </motion.span> : null}
                    </AnimatePresence>
                </span>
                <span
                onMouseEnter={() => setHoveredSignup(true)}
                onMouseLeave={() => setHoveredSignup(false)}
                className='flex flex-col relative group'
                >
                    <Link href='/register'>
                        <Button variant='link'>
                            Register
                        </Button>
                    </Link>
                    <AnimatePresence>
                    {hoveredSignup ?                         
                    <motion.span 
                        initial={{width: '30%', opacity: 0}}
                        animate={{width: '100%', opacity: 1}}
                        exit={{width: '1%', opacity: 0}}
                        transition={{ duration: 0.1, type: 'spring', damping: 10, mass: 0.75, stiffness: 100 }}
                        className='h-1 rounded-full bg-gradient-to-r from-cyan-400 to-blue-400 absolute -bottom-2'
                        >
                            {/*  */}
                    </motion.span> : null}
                    </AnimatePresence>
                </span>
                </span>

            </span>
            <span className="h-12 rounded-full w-12 bg-blue-950">

            </span>

        </nav>
    )
}

export default Navigation;