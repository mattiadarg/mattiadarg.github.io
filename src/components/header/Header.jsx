import React from 'react';
import CTA from './CTA';
import HeaderSocials from './HeaderSocials';
import { ReactTyped } from 'react-typed';
import './header.css';
import {useTranslation} from "react-i18next";

const Header = () => {
  const { t } = useTranslation();

  const roles = [
    'CyberSecurity enthusiast',
    'AI Addicted',
    'Ethical Hacker',
    'Critical Thinker',
    'Team Player'
  ];

  return (
    <header id="home">
      <div className="container header__container">
        <h3>{t('greeting')} <span className="wave">👋🏻</span> {t('am')}</h3>
        <h1>Mattia d'Argenio</h1>
        <h3 className= "text-light">
          <ReactTyped
              strings={roles}
              typeSpeed={40}
              backSpeed={50}
              loop
          />
        </h3>
        <CTA/>
        <a href="#contact" className="scroll__down">
          {t('scroll')}
        </a>
        <HeaderSocials/>
      </div>
    </header>
  );
};

export default Header;
