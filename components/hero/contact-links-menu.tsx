'use client'

import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import { FaFacebookSquare, FaFacebookMessenger, FaViber } from 'react-icons/fa';
import { GrLinkedin } from 'react-icons/gr';
import { useState } from 'react';
import { RxAlignTop } from 'react-icons/rx';

const ContactLinks = () => {
    // CONST
    const ICON_SIZE: number = 28;

    const [loading, setLoading] = useState<boolean>(false);

    // css
    const contactBtnStyles = 'group relative group text-zinc-100 hover:text-zinc-900 bg-transparent hover:bg-zinc-100 transition-color rounded-lg p-2 '

    const contactLinksList = [
        {
            icon: <FaFacebookSquare size={ICON_SIZE}/>,
            href: '/',
            tooltip: 'Contact me on Facebook'
        },
        {
            icon: <FaFacebookMessenger size={ICON_SIZE}/>,
            href: '/auth',
            tooltip: 'Contact me on Facebook Messenger'
        },
        {
            icon: <FaViber size={ICON_SIZE}/>,
            href: '/login',
            tooltip: 'Contact me on Viber'
        },
        {
            icon: <GrLinkedin size={ICON_SIZE}/>,
            href: '/register',
            tooltip: 'Contact me on LinkedI'
        }
    ]

    return (
        <>
        {/* Dynamic version */}

        {contactLinksList && contactLinksList.map((item, index) => 
            <motion.span 
            key={`contact-item-${index}`}
            onClick={() => setLoading(!loading)}
            onHoverStart={() => console.log(`Hovered ${item.href}`)}
            className={cn(contactBtnStyles)}>
                <span className='absolute top-12 -ml-2 bg-zinc-100 rounded-b-xl rounded-tr-xl p-2 opacity-0 group-hover:opacity-100'>
                    {item.tooltip}
                </span>
                <Link href={item.href}>
                    {!loading ?                     <span>
                        {item.icon}
                    </span> : 
                    <motion.span
                    animate={{ rotate: 360 }}
                    transition={{ ease: "linear", duration: 2, repeat: Infinity }}
                    >
                        <RxAlignTop size={ICON_SIZE} />
                    </motion.span>}
                </Link>
            </motion.span>
        )}
        {/* REDUNDANT */}
        {/* <motion.span 
            className={cn(contactBtnStyles)}
            initial={{x: -25, opacity: 0}}
            whileInView={{x: 0, opacity: 1}}
            transition={{duration: 0.3, delay: 1.2, damping: 15}}
            viewport={{once: false}}>
            <Link href='/'>
                <FaFacebookSquare size={28} />
            </Link>
        </motion.span>
        <motion.span 
            className={cn(contactBtnStyles)}
            initial={{x: -25, opacity: 0}}
            whileInView={{x: 0, opacity: 1}}
            transition={{duration: 0.3, delay: 1.3, damping: 15}}
            viewport={{once: false}}>
            <Link href='/register'>
                <FaFacebookMessenger size={28} />
            </Link>
        </motion.span>
        <motion.span 
            className={cn(contactBtnStyles)}
            initial={{x: -25, opacity: 0}}
            whileInView={{x: 0, opacity: 1}}
            transition={{duration: 0.3, delay: 1.4, damping: 15}}
            viewport={{once: false}}>
            <Link href='/login'>
                <FaViber size={28} />
            </Link>
        </motion.span>
        <motion.span 
            className={cn(contactBtnStyles)}
            initial={{x: -25, opacity: 0}}
            whileInView={{x: 0, opacity: 1}}
            transition={{duration: 0.3, delay: 1.5, damping: 15}}
            viewport={{once: false}}>
            <Link href='/auth'>
                <GrLinkedin size={28} />
            </Link>
        </motion.span> */}
        </>
    )
}

export default ContactLinks;