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
  const [email, setEmail] = useState(null);

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

  const isEnabled = () => {
    const regExp = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (regExp.test(email)) {
      return true;
    }
    return false;
  };

  return (
    <>
      <button
        className="button Nav_links capitalize"
        onClick={() => toggleModal()}
        id="navSignUp"
        type="button"
      >
        sign up
      </button>
      {modal && (
        <Modal viewStyle="Landing_modal gradientBox" node={node}>
          <h3>Beta Registration</h3>
          <p className="betaModalText">
            EatWe11 is currently in beta before it&apos;s upcoming public release. <br />Enter your email
            below to request access and we&apos;ll notify you as new features are released!
          </p>
          <div className="betaModalInputBtnWrapper">
            <input
              className="inputHeavyStyle"
              type="text"
              onChange={(e) => setEmail(e.target.value)}
            />
            <button
              onClick={(e) => handleBetaRegisterSubmit(e)}
              className="button inputSubmitBtn"
              type="submit"
              disabled={!isEnabled()}
            >
              submit
            </button>
          </div>
        </Modal>
      )}
    </>
  );
};

export default RegisterForm;
