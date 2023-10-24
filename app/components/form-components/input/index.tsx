import React from 'react';
import { type InputFormProps } from '~/types/form-type';

const InputForm: React.FC<InputFormProps> = ({ ...props }) => {
  return (
    <section className="flex flex-col gap-1 mb-4">
      {props.label && (
        <label className="text-base font-semibold text-purple-500 capitalize">
          {props.label}
        </label>
      )}
      <input
        title={props.title}
        className={`${props.className} border-2 px-4 py-1 rounded-none`}
        {...props}
      />
    </section>
  );
};

export default InputForm;
