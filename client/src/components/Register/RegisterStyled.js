import styled from 'styled-components';
import stars from './images/register-bg.jpg';
export const RegisterStyled = styled.div`
    background-image: url(${stars});
    background-position: center;
    background-size: cover;
   #register-form {
    background-color: rgba(0, 0, 0, 0.3);
    display: flex;
    align-items: center;
    flex-direction: column;
    min-height: 100vh;
  }
  .register-form-element {
    background-color: rgba(130, 204, 221, 0.7);
    padding: 2rem;
    border-radius: 5px;
    margin-top: auto;
    margin-bottom: auto;
    h1 {
      color: white;
      text-align: center;
      margin-bottom: 2rem;
      font-size: 1.5rem;
    }
    p{
      color: white;
      text-align: center;
    }
  }
  .terms-button-submit {
    text-align: center;
  }
  .terms {
    color: #ffffff;
  }
  .button-submit {
    color: #888888;
    text-align: center;
    border-radius: 3px;
    border : none;
    padding : .5rem .5rem;
    margin-top: 2rem;
    background-color: #ffffff;
    &:hover:enabled {
      background-color : ${props => props.theme.colors.darkBlue};
      color : white;
      transition-duration: .3s;
    }
  }
  button:hover:disabled{
    background-color : white;
}   
`;
export default RegisterStyled;