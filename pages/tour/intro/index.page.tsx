import React from 'react';
import { getLayout } from '~/components/SiteLayout';
import Head from 'next/head';
import { SectionContext } from '~/context';
import AceEditorForm from './Editor';

export default function Content() {
  return (
    <div className='mt-[70px]'>
      <SectionContext.Provider value='docs'>
        <Head>
          <title>Tour</title>
        </Head>
        <div className='h-[90vh] bg-[#202224]'>
          <div className='grid grid-cols-2 gap-2'>
            <div className='bg-black-200 text-white '>
              <div className='p-[15px] h-[80vh] overflow-auto'>
                <div>
                  <br />
                  <h1 className='text-[25px]'>Hello</h1>
                  <br />
                  <p>
                    Welcome to a tour of the{' '}
                    <a className='text-blue-400' href='/'>
                      JSON Schema
                    </a>
                    .
                  </p>
                  <br />
                  <p>
                    You can also view the table of contents at any time by
                    clicking on the{' '}
                    <a className='text-blue-400' href='/'>
                      menu
                    </a>{' '}
                    on the top right of the page.
                  </p>
                  <br />
                  <p>
                    Throughout the tour you will find a series of slides and
                    exercises for you to complete.
                  </p>
                  <br />
                  <p>You can navigate through them using</p>
                  <br />

                  <ul className='ml-[30px]'>
                    <li>
                      <a className='text-blue-400' href='#'>
                        "previous"
                      </a>{' '}
                      to go to the previous page,
                    </li>
                    <br />
                    <li>
                      <a className='text-blue-400' href='#'>
                        "next"
                      </a>{' '}
                      to go to the next page.
                    </li>
                    <br />
                  </ul>
                  <p>
                    The tour is interactive. Click the{' '}
                    <a className='text-blue-400' href='/'>
                      Validate
                    </a>{' '}
                    button now to validate the JSON Schema. The result is
                    displayed below the code.
                  </p>
                  <br />
                  <p>
                    These example programs demonstrate different aspects of JSON
                    Schema. The programs in the tour are meant to be starting
                    points for your own experimentation.
                  </p>
                  <br />
                  <p>
                    When you're ready to move on, click the{' '}
                    <a className='text-blue-400' href='/'>
                      right arrow
                    </a>{' '}
                    below or type the PageDown key.
                  </p>
                  <br />
                </div>
              </div>
              <div className='flex mx-auto justify-center bg-slate-800 items-center'>
                <a
                  href='/tour'
                  className='prev-page  btn bg-transparent hover:bg-white text-white font-semibold hover:text-blue-700 py-1 px-2 border border-white hover:border-blue-700 rounded text-center'
                >
                  &lt;
                </a>
                <span className='ng-binding'> 0/2 </span>
                <a
                  href='/tour/1'
                  className='next-page  btn bg-transparent hover:bg-white text-white font-semibold hover:text-blue-700 py-1 px-2 border border-white hover:border-blue-700 rounded text-center hover:blue-700'
                >
                  &gt;
                </a>
              </div>
            </div>
            <div className='bg-black-200'>
              <a className='bg-slate-500 text-white ml-[15px] p-[7px] rounded'>
                Schema.json
              </a>
              <AceEditorForm />
            </div>
          </div>
        </div>
      </SectionContext.Provider>
    </div>
  );
}
Content.getLayout = getLayout;
