import React, { useState } from 'react';
import AceEditor from 'react-ace';
import Ajv from 'ajv/dist/2020';
// import draft202012Schema from './schema.json';

import 'ace-builds/src-noconflict/mode-json';
import 'ace-builds/src-noconflict/theme-cobalt';

function AceEditorForm() {
  const [textareaValue, setTextareaValue] = useState('');
  const [validationResult, setValidationResult] = useState('');

  const handleChange = (value) => {
    setTextareaValue(value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    try {
      const schema = JSON.parse(textareaValue);
      const isValid = validateSchema(schema);
      setValidationResult(
        isValid ? (
          <span style={{ color: '#16a34a' }}>JSON schema is Valid</span>
        ) : (
          <span style={{ color: '#dc2626' }}>
            JSON schema validation failed
          </span>
        ),
      );
    } catch (error) {
      setValidationResult(
        <span style={{ color: '#dc2626' }}>Invalid JSON schema format</span>,
      );
    }
    setTextareaValue('');
  };

  const ajv = new Ajv({ $data: true, strict: false, schemaRef: true });

  // ajv.addMetaSchema(draft202012Schema);

  function validateSchema(data) {
    const valid = ajv.validateSchema(data);
    if (!valid) {
      return false;
    } else {
      return true;
    }
  }

  return (
    <div>
      <AceEditor
        mode='json'
        theme='cobalt'
        onChange={handleChange}
        placeholder={`{
          "$schema": "https://json-schema.org/draft/2020-12/schema",
          "type": "object",
          "properties": {
            "name": { "type": "string" },
            "age": { "type": "integer" },
            "email": { "type": "string", "format": "email" }
          },
          "required": ["name", "age"]
        }`}
        width='100%'
        height='60vh'
        fontSize={16}
        value={textareaValue}
      />
      <button
        className='w-[100px] h-[40px] mx-auto mt-[15px] rounded-lg border-2 bg-primary text-white font-semibold'
        type='submit'
        onClick={handleSubmit}
      >
        Validate
      </button>
      {validationResult && <div className='text-white'>{validationResult}</div>}
    </div>
  );
}

export default AceEditorForm;
