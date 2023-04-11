import styled from 'styled-components';

type InputProps = {
  id?: string;
  defaultValue?: string;
  onMouseEnter?: React.MouseEventHandler<HTMLInputElement> | undefined;
  onMouseLeave?: React.MouseEventHandler<HTMLInputElement> | undefined;
};

export const EmailInput = styled.input.attrs<InputProps>((props) => ({
  id: props.id,
  type: 'email',
  defaultValue: props.defaultValue,
  onMouseEnter: props.onMouseEnter,
  onMouseLeave: props.onMouseLeave,
}))``;
