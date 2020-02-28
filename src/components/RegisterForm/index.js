import React, {
  useEffect,
  useState,
  useRef,
} from 'react';

import Modal from '../Modal';
import RegisterService from '../../services/register-service';

const RegisterForm = ({
  toggleModal,
  modal,
}) => {
  const node = useRef();
  const [email, setEmail] = useState();

  useEffect(() => {
    const handleClick = (e) => {
      if (node.current.contains(e.target)) {
        // inside click
        return;
      } // outside click
      toggleModal();
    };

    if (modal) {
      document.addEventListener('mousedown', handleClick);
    } else {
      document.removeEventListener('mousedown', handleClick);
    }

    return () => {
      document.removeEventListener('mousedown', handleClick);
    };
  }, [modal, toggleModal]);

  const handleBetaRegisterSubmit = (e) => {
    e.preventDefault();
    RegisterService.postBetaRegister(email);
    toggleModal();
  };

  return (
    <>
      <button
        className="button"
        onClick={() => toggleModal()}
        id="Nav_signUp"
        type="button"
      >
        Sign Up
      </button>
      {modal && (
        <Modal viewStyle="Landing_modal" node={node}>
          <h3>EatWe11 Beta Register</h3>
          <p>
            EatWe11 is currently in beta before it&apos;s upcoming public release. Enter your email
            below to request access and we&apos;ll notify you as new features are released!
          </p>
          <input
            type="text"
            onChange={(e) => setEmail(e.target.value)}
          />
          <button
            onClick={(e) => handleBetaRegisterSubmit(e)}
            className="button"
            type="submit"
          >
            Send Request
          </button>
        </Modal>
      )}
    </>
  );
};

export default RegisterForm;
