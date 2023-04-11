import styled from 'styled-components';

interface IBoxProps {
  bg?: string;
  color?: string;
}

export const Box = styled.div<IBoxProps>`
  border-radius: 5px;
  font-weight: bolder;
  padding: 3px 10px;
  margin: 0 0.2em;
  color: ${(props) => props.color};
  background-color: ${(props) => props.bg};
`;

export const ColumnArranged = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const RowArranged = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  align-item: center;
`;
export const Relative = styled.div`
  position: relative;
`;
