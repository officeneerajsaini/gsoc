import React from 'react';
import { getLayout } from '~/components/SiteLayout';
import Head from 'next/head';
import { SectionContext } from '~/context';

export default function Content() {
  return (
    <div className='bg-gradient-to-r from-startBlue from-1.95% to-endBlue '>
      <SectionContext.Provider value='docs'>
        <Head>
          <title>Tour</title>
        </Head>
        <div className='grid justify-center h-[100vh] items-center text-white'>
          <div className='mx-auto w-4/6 text-center '>
            <div className='mb-[15px]'>
              <h1 className='text-[40px] font-bold'>
                Welcome to the JSON Schema Tour
              </h1>
            </div>
            <div className='mb-[15px] font-medium'>
              <p>
                Welcome to the JSON Schema Tour! Join us on a journey to
                discover the power of JSON Schema. Whether you're new to JSON
                Schema or looking to enhance your skills, this tour is designed
                to be interactive and enjoyable. Let's embark on this adventure
                together, demystifying its intricacies and empowering you to
                master data validation and schema definition. Get ready to
                explore, learn, and have fun along the way!
              </p>
            </div>
            <div className='mt-[28px]'>
              <a
                className=' btn bg-transparent hover:bg-white text-white font-semibold hover:text-blue-700 py-2 px-4 border border-white hover:border-blue-700 rounded text-center'
                href='tour/intro'
              >
                Start Tour
              </a>
            </div>
          </div>
        </div>
      </SectionContext.Provider>
    </div>
  );
}
Content.getLayout = getLayout;
