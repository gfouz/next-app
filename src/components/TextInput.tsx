import React from 'react';
import styled from 'styled-components';
import ErrorWarning from './ErrorWarning';
import { Path, UseFormRegister } from 'react-hook-form';

interface IFormInput {
  name: string;
  email: string;
  message: string;
}

type InputProps = {
  id?: string;
  info?: string;
  errors: object;
  required?: boolean;
  defaultValue?: string;
  label: Path<IFormInput>;
  onMouseEnter?: React.MouseEventHandler<HTMLInputElement> | undefined;
  onMouseLeave?: React.MouseEventHandler<HTMLInputElement> | undefined;
  register: UseFormRegister<IFormInput>;
};
const TextInput = ({
  label,
  register,
  required,
  errors,
  defaultValue,
  info,
  id,
  onMouseEnter,
  onMouseLeave,
}: InputProps) => {
  return (
    <>
      <StyledInput
        id={id}
        type='text'
        defaultValue={defaultValue}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        {...register(label, {
          pattern: /^[a-zA-Z\u00C0-\u017F\s]+$/,
          required,
        })}
      />
      <ErrorWarning label={label} errors={errors} info={info} />
    </>
  );
};

export default TextInput;

const StyledInput = styled.input`
  cursor: pointer;
`;
