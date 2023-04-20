import styled from 'styled-components';

const NotFound = () => {
  return (
    <StyledNotFound>
      <h1>NotFound page</h1>
    </StyledNotFound>
  );
};

export default NotFound;

const StyledNotFound = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #f1f1f1;
  background-color: #555555;
`;
