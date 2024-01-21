'use client'

import { RxBadge } from "react-icons/rx"
import { AnimatePresence, motion } from "framer-motion"
import { cn } from "@/lib/utils"
import { useState } from "react"

const LoadingPage = () => {
    const [isVisible, setVisible] = useState<boolean>(true)

    // css
    const wrapperStyles = 'fixed top-[50%] left-[50%] bg-transparent flex w-auto h-auto items-center justify-center'
    const contentBoxStyles = 'bg-transparent absolute'
    const radialGradient = "rounded-full from-cyan-500 to-blue-500"
    const pulsingComponentSize = 'h-32 w-32 shadow-lg shadow-2xl'
    const centerBox = 'flex items-center justify-center text-zinc-50'
    const hoverClasses = "bg-gradient-to-br hover:bg-gradient-to-b shadow-md transition-all"

    return(
        <AnimatePresence>
        {isVisible && (
            <motion.span 
                className={cn(wrapperStyles)}
            >
                <motion.span 
                className={cn(hoverClasses, centerBox, contentBoxStyles, radialGradient, pulsingComponentSize)}
                initial={{ y: 0, scale: 0.5, opacity: 1 }}
                animate={{ y: 0, scale: 1, opacity: 0.7 }}
                exit={{y: -233, scale: 0.5, opacity: 0.4}}
                transition={{
                    duration: 1.8,
                    delay: 0,
                    repeat: Infinity,
                    repeatType: 'loop'
                }}
                >
                    {/* PULSING COMPONENT CONTENT */}
                    <motion.span
                        initial={{ rotate: -45, scale: 1, opacity: 0.6 }}
                        animate={{ rotate: 45, scale: 0.8, opacity: 1 }}
                        exit={{y: -233, scale: 0.5, opacity: 0.4}}
                        transition={{
                            duration: 0.9,
                            delay: 0,
                            repeat: Infinity,
                            repeatType: 'mirror'
                        }}
                    >
                        <RxBadge size={60} />
                    </motion.span>
                </motion.span>
            </motion.span>
                )}
        </AnimatePresence>
    )
}

export default LoadingPage;