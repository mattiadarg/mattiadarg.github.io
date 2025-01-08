import React from 'react';
import { BsLinkedin } from 'react-icons/bs';
import { FaGithub } from 'react-icons/fa';
import { RiInstagramFill } from "react-icons/ri";
import './footer.css';
import {useTranslation} from "react-i18next";

const Footer = () => {
    const { t } = useTranslation();
  
  let getYear = () => {
    let currentYear = new Date().getFullYear();
    return currentYear;
  };
  
  return (
    <footer>
      <a href="#home" className="footer__logo">Mattia d'Argenio</a>
      <ul className="permalinks">
        <li><a href="#home">Home</a></li>
        <li><a href="#about">{t('aboutF')}</a></li>
        <li><a href="#experience">{t('skills')}</a></li>
        <li><a href="#portfolio">{t('proj')}</a></li>
        <li><a href="#contact">{t('contactf')}</a></li>
      </ul>
      <div className="footer__socials">
      <a href="https://www.linkedin.com/in/mattia-d-argenio-a57849255/" target="_blank" rel="noreferrer" ><BsLinkedin /></a>
      <a href="https://github.com/mattiadarg" target="_blank" rel="noreferrer" ><FaGithub /></a>
      <a href="https://www.instagram.com/_matt_dargenio_/" target="_blank" rel="noreferrer" ><RiInstagramFill /></a>
      </div>
      <div className="footer__copyright">
        <small>&copy; Mattia d'Argenio {getYear()}. {t('c')}</small>
      </div>
    </footer>
  )
}

export default Footer
