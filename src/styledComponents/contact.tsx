import styled from 'styled-components';
import { Subtitle } from 'components/FramerMotions';
import { EmailInput } from 'components/EmailInput';
import { errorMsg } from 'constants/contact';



export const ContactContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  .upwards {
    position: relative;
    bottom: 10px;
  }
  .downwards {
    position: relative;
    bottom: -10px;
  }
  .normal {
    position: static;
  }
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: fixed;
  background-image: url('./images/tulip.jpg');
`;
export const MainTitle = styled( Subtitle )`
  color: #ffffff;
  margin-bottom: 1em;
`;
export const Contactform = styled.form`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  max-width: 600px;
  min-width: 320px;
  min-height: 500px;
  background-color: #00000090;
  border-radius: 20px;
  padding: 2em 0;
  .upwards {
    position: relative;
    bottom: 10px;
  }
  .downwards {
    position: relative;
    bottom: -10px;
  }
  .normal {
    position: static;
  }
`;
export const EmailInputContainer = styled.div`
  text-align: left;
`;
export const TextInputContainer = styled.div`
  text-align: left;
  margin: 1em 0;
  .messageError {
    animation: 1s ${errorMsg};
  }
`;
export const InputLabel = styled.label.attrs((props) => ({ htmlFor: props.htmlFor }))`
  color: #ffffff;
  display: block;
  transition: 1s;
`;
export const ContactEmailInput = styled( EmailInput )`
  padding: 1em;
  color: #ffffff;
  cursor: pointer;
  border-radius: 10px;
  background-color: transparent;
`;
export const TextArea = styled.textarea`
  padding: 1em;
  height: 5em;
  resize: none;
  border-radius: 10px;
  color: #f1f1f1;
  background-color: #00000090;
`;
export const BackwardsButton = styled.button`
  position: absolute;
  right: 20px;
  bottom: 20px;
  outline: none;
  border: none;
  color: #ffffff;
  background-color: transparent;
`;
export const QueryStatus = styled.p`
  color: #ffffff;
`;
