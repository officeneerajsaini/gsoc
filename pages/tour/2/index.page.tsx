import React from 'react';
import { getLayout } from '~/components/SiteLayout';
import Head from 'next/head';
// import StyledMarkdown from '~/components/StyledMarkdown';
import { SectionContext } from '~/context';
import AceEditorForm from './Editor';

export default function Content() {
  const jsonSchema: string = `
  {
    "type": "array",
    "items": {
      "type": "number"
    }
  }
  
  `;

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
                  {' '}
                  <br />
                  <h1 className='text-[18px]'>
                    Array with Items of type "number"
                  </h1>
                  <br />
                  <p>
                    In JSON Schema, you can define an array where each item must
                    be of a specific type. To declare an array with items of
                    type "number," you can use the following structure:
                  </p>
                  <br />
                  <p>Let's break down the components:</p>
                  <br />
                  <p>
                    <span className='text-blue-400'>type</span>: Indicates that
                    the root of the schema is an array.
                  </p>
                  <br />
                  <p>
                    <span className='text-blue-400'>items</span>: Describes the
                    schema for each item in the array. In this case, it
                    specifies that each item must be of type "number".
                  </p>
                  <br />
                  <p>
                    Here's a very basic example of a JSON Schema array with
                    items of type "number":
                  </p>
                  <br />
                  <div className='bg-slate-200 text-black'>
                    <pre className='ml-[20px]'>
                      <code>{jsonSchema}</code>
                    </pre>
                  </div>
                  <p>
                    This schema ensures that any JSON document validated against
                    it must be an array where every item is a number. If an
                    array contains any item that is not a number, validation
                    against this schema will fail.
                  </p>
                  <br />
                  <p>
                    Congratulations , you have completed two steps, and in the
                    future, we may add more learning exercises or content.
                  </p>
                </div>
              </div>
              <div className='flex mx-auto justify-center bg-slate-800 items-center'>
                <a
                  href='/tour/1'
                  className='prev-page  btn bg-transparent hover:bg-white text-white font-semibold hover:text-blue-700 py-1 px-2 border border-white hover:border-blue-700 rounded text-center'
                >
                  &lt;
                </a>
                <span className='ng-binding'> 2/2 </span>
                <a
                  href='#'
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
