'use client'

import Image from 'next/image';
import Countdown from './components/countdown';
import StickyFooter from './components/stickyFooter';

const Page = () => {
  return (
    <div className='h-screen flex flex-col justify-end p-4 bg-gradient-to-br from-zinc-900 to-zinc-950 main-background-image'>
      <div className='mx-auto mb-auto'>
        <Image
          src='/lnl_logo_gold.png'
          width={1024 - 256}
          height={1024 - 256}
          alt='Late Night Lounge. Elegance in Every Sip, Laughter on Every Lip.'
          priority
        />
        <div className='mt-16'>
          <Countdown />
        </div>
      </div>
      <StickyFooter/>
    </div>
  );
};

export default Page;