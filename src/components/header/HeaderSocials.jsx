import React from 'react';
import { BsLinkedin } from 'react-icons/bs';
import { FaGithub } from 'react-icons/fa';
import { RiInstagramFill } from "react-icons/ri";
import { useTranslation } from 'react-i18next';

const HeaderSocials = () => {
    const { i18n } = useTranslation();

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
    };

    const toggleLanguage = () => {
        // Cambia la lingua in base alla lingua corrente
        const newLanguage = i18n.language === 'en' ? 'it' : 'en';
        i18n.changeLanguage(newLanguage);
    };

    return (
        <div className="header__socials">
            <a href="https://www.linkedin.com/in/mattia-d-argenio-a57849255/" target="_blank" rel="noreferrer"><BsLinkedin /></a>
            <a href="https://github.com/mattiadarg" target="_blank" rel="noreferrer"><FaGithub /></a>
            <a href="https://www.instagram.com/_matt_dargenio_/" target="_blank" rel="noreferrer"><RiInstagramFill /></a>
            <div className="language__switcher">
                <button onClick={toggleLanguage} className="lang-btn">
                    {i18n.language === 'en' ? '🇮🇹' : '🇬🇧'}
                </button>
            </div>
        </div>
    );
};

export default HeaderSocials;
