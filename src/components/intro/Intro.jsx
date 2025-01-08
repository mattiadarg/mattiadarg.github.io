import React from 'react';
import { FaGraduationCap } from 'react-icons/fa';
import { FaUsers } from 'react-icons/fa';
import ME from '../../assets/io.jpeg';
import './intro.css';
import {useTranslation} from "react-i18next";

const Intro = () => {
  const { t } = useTranslation();
  return (
    <section id="about">
      <h2>{t('about')}</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="me" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaGraduationCap className="about__icon" />
              <h5>{t('exp')}</h5>
              <small>{t('exp2')}</small>
            </article>
            <article className="about__card">
              <FaUsers className="about__icon" />
              <h5>{t('proj')}</h5>
              <small>{t('proj2')}</small>
            </article>
          </div>
          <p>{t('intro')}</p>
        </div>
      </div>
    </section>
  )
}

export default Intro