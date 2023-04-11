import * as React from 'react';
import styled from 'styled-components';

interface IComponentProps {
  message: string;
}

function StatusHandler({ message }: IComponentProps) {
  const [status, setStatus] = React.useState('');
  React.useEffect(() => {
    setStatus(message);
  }, [message]);

  return (
    <>
      <StatusStyled>
        <p className={status}>{status}</p>
      </StatusStyled>
    </>
  );
}

export default StatusHandler;

const StatusStyled = styled.div`
  margin: 2em;
  font-weight: bolder;
  text-transform: uppercase;
  text-align: center;
  p {
    font-size: 0.7em;
  }
  .ok {
    color: green;
  }
  .accepted {
    color: green;
  }
  .not-authorized {
    color: red;
  }
  .not-found {
    color: red;
  }
  .bad-request {
    color: red;
  }
  .unprocessable {
    color: yellow;
  }
  .enabled {
    color: #446344;
  }
`;
