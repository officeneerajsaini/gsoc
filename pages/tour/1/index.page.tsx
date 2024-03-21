import React from 'react';
import { getLayout } from '~/components/SiteLayout';
import Head from 'next/head';
import { SectionContext } from '~/context';
import AceEditorForm from './Editor';

export default function Content() {
  const jsonSchema: string = `
{
  "$schema": "https://json-schema.org/draft/2020-12/schema",
  "type": "object",
  "properties": {
    "name": {
      "type": "string"
    },
    "age": {
      "type": "integer"
    }
  },
  "required": ["name"]
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
                  <br />
                  <h1 className='text-[18px]'>
                    JSON Schema draft 2020-12 is a specification for defining
                    the structure and validation rules of JSON documents. It
                    provides a standardized way to describe the shape and
                    constraints of JSON data.
                  </h1>
                  <br />
                  <p>
                    The basic structure of a JSON Schema draft 2020-12 consists
                    of:
                  </p>
                  <br />
                  <p>
                    <span className='text-blue-400'>$schema</span>: This is a
                    required property that specifies the URI of the JSON Schema
                    version being used. For draft 2020-12, it should be set to{' '}
                    <a
                      className='text-blue-400'
                      href='https://json-schema.org/draft/2020-12/schema'
                    >
                      "https://json-schema.org/draft/2020-12/schema"
                    </a>
                    .
                  </p>
                  <br />
                  <p>
                    <span className='text-blue-400'>type</span>: This property
                    defines the type of data that the schema is describing. It
                    can be "object", "array", "string", "number", "integer",
                    "boolean", or "null".
                  </p>
                  <br />
                  <p>
                    <span className='text-blue-400'>properties</span>: This
                    property defines the properties of an object. It contains
                    key-value pairs where the key is the name of the property
                    and the value is another schema that describes the property.
                  </p>
                  <br />
                  <p>
                    <span className='text-blue-400'>required</span>:This
                    property specifies an array of property names that must be
                    present in the object.
                  </p>
                  <br />
                  <p>
                    Here's a very basic example of a JSON Schema draft 2020-12:
                  </p>
                  <br />
                  <div className='bg-slate-200 text-black'>
                    <pre className='ml-[20px]'>
                      <code>{jsonSchema}</code>
                    </pre>
                  </div>
                  <br />
                  <p>
                    In this example, the schema describes an object with two
                    properties: "name" and "age". The "name" property must be a
                    string, and it is required, while the "age" property is
                    optional and must be an integer.
                  </p>
                  <br />
                  <p>
                    Click the <span className='text-blue-400'>"next"</span>{' '}
                    button to continue.
                  </p>
                </div>
              </div>
              <div className='flex mx-auto justify-center bg-slate-800 items-center'>
                <a
                  href='/tour/intro'
                  className='prev-page  btn bg-transparent hover:bg-white text-white font-semibold hover:text-blue-700 py-1 px-2 border border-white hover:border-blue-700 rounded text-center'
                >
                  &lt;
                </a>
                <span className='ng-binding'> 1/2 </span>
                <a
                  href='/tour/2'
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
