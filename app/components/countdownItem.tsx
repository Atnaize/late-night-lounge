'use client'

import { AnimatePresence, motion } from 'framer-motion';

const CountdownItem: React.FC<{ num: number; text: string }> = ({ num, text }) => (
  <div className='w-1/4 h-24 md:h-36 flex flex-col items-center justify-center border-gray-500 mb-4'>
      <div className='w-full text-center relative overflow-hidden'>
        <AnimatePresence mode='popLayout'>
          <motion.span
            key={num}
            initial={{ y: '100%' }}
            animate={{ y: '0%' }}
            exit={{ y: '-100%' }}
            transition={{ ease: 'backIn', duration: 0.75 }}
            className='block text-2xl md:text-4xl lg:text-6xl xl:text-9xl text-white font-medium'
          >
            {num}
          </motion.span>
        </AnimatePresence>
      </div>
      <span className='text-xs md:text-sm lg:text-3xl font-light text-zinc-400'>
        {text}
      </span>
    </div>
)

export default CountdownItem;