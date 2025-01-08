import React from 'react';
import CV from '../../assets/CV_MattiadArgenio_0125.pdf';
import {useTranslation} from "react-i18next";


const CTA = () => {
    const { t } = useTranslation();
  return (
    <div className="cta">
      <a href={CV} download className="btn">
          {t('cv')}
      </a>
      <a href="#contact" className="btn btn-primary">
          {t('talk')}
      </a>
    </div>
  );
};

export default CTA;
