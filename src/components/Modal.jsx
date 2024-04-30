import React, { useState } from 'react';
import { faHome, faClose } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import successIcon from "../assets/success_icon.png";
import styled from "styled-components";

const Modal = ({ isOpen, onClose }) => {
  const [visible, setVisible] = useState(isOpen);

  const closeModal = () => {
    setVisible(false);
    onClose();
  };

  const Button = styled.button`
    background: linear-gradient(92.73deg, #3a008c 26.15%, #8543e2 117.44%);
  `;

  return (
    <>
      {visible && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white flex flex-col rounded-lg m-5 p-8 max-w-md w-full text-center">
            <p className='float-right cursor-pointer'>
              <FontAwesomeIcon
                onClick={closeModal}
                icon={faClose}
                className="bg-gray-200 p-3 px-5 text-xl inline-flex float-right"
              />
            </p>
            <p className="text-lg font-medium mb-6">Message successfully sent!</p>
            <img className='flex self-center' alt="" srcset={successIcon} />
            <p className="text-gray-700 mt-6">We will reach out to you shortly</p>
            <Link to="/contact" className='float-right mt-6'>
              <Button onClick={closeModal} className="rounded p-3 px-7 text-white float-right">
                <FontAwesomeIcon
                  icon={faHome}
                  className="mr-3"
                />
                Send message
              </Button>
            </Link>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
