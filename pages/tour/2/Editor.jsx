import React, { useState } from 'react';
import AceEditor from 'react-ace';
import Ajv from 'ajv';
import arrayJsonSchema from './arraySchema.json';

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

  ajv.addMetaSchema(arrayJsonSchema);

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
          "type": "array",
          "items": {
            "type": "number"
          }
        }
        `}
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
      {validationResult && (
        <div className='text-white ml-[15px]'>{validationResult}</div>
      )}
    </div>
  );
}

export default AceEditorForm;
