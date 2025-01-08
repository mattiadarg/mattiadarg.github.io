import React from 'react';
import { BsFillPatchCheckFill } from 'react-icons/bs';
import './experience.css';
import {useTranslation} from "react-i18next";

const Experience = () => {
  const { t } = useTranslation();
  return (
    <section id="experience">
      <h2>{t('skills')}</h2>
      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Cybersecurity</h3>
          <div className="experience__content">
            <article className="experience__details">
              <BsFillPatchCheckFill className="experience__details-icon"/>
              <h4>Network sniffing/analysis</h4>
            </article>
            <article className="experience__details">
              <BsFillPatchCheckFill className="experience__details-icon"/>
              <h4>{t('acl')}</h4>
            </article>
            <article className="experience__details">
              <BsFillPatchCheckFill className="experience__details-icon"/>
              <h4>{t('def')}</h4>
            </article>
            <article className="experience__details">
              <BsFillPatchCheckFill className="experience__details-icon"/>
              <h4>{t('att')}</h4>
            </article>
            <article className="experience__details">
              <BsFillPatchCheckFill className="experience__details-icon"/>
              <h4>{t('web')}</h4>
            </article>
          </div>
        </div>
        <div className="experience__backend">
          <h3>Penetration Testing</h3>
          <div className="experience__content">
            <article className="experience__details">
              <BsFillPatchCheckFill className="experience__details-icon"/>
              <h4>{t('test')}</h4>
            </article>
            <article className="experience__details">
              <BsFillPatchCheckFill className="experience__details-icon"/>
              <h4>OSINT tools</h4>
            </article>
            <article className="experience__details">
              <BsFillPatchCheckFill className="experience__details-icon"/>
              <h4>Target discovery</h4>
            </article>
            <article className="experience__details">
              <BsFillPatchCheckFill className="experience__details-icon"/>
              <h4>Port Scanning</h4>
            </article>
            <article className="experience__details">
              <BsFillPatchCheckFill className="experience__details-icon"/>
              <h4>Vulnerability Mapping</h4>
            </article>
            <article className="experience__details">
              <BsFillPatchCheckFill className="experience__details-icon"/>
              <h4>{t('tax')}</h4>
            </article>
          </div>
        </div>
        <div className="experience__frontend">
          <h3>AI</h3>
          <div className="experience__content">
            <article className="experience__details">
              <BsFillPatchCheckFill className="experience__details-icon"/>
              <h4>Machine/Deep Learning</h4>
            </article>
            <article className="experience__details">
              <BsFillPatchCheckFill className="experience__details-icon"/>
              <h4>LLM</h4>
            </article>
            <article className="experience__details">
              <BsFillPatchCheckFill className="experience__details-icon"/>
              <h4>Reinforcement Learning</h4>
            </article>
            <article className="experience__details">
              <BsFillPatchCheckFill className="experience__details-icon"/>
              <h4>{t('gen')}</h4>
            </article>
            <article className="experience__details">
              <BsFillPatchCheckFill className="experience__details-icon"/>
              <h4>Prompt Engineering</h4>
            </article>
            <article className="experience__details">
              <BsFillPatchCheckFill className="experience__details-icon"/>
              <h4>Computer Vision</h4>
            </article>
          </div>
        </div>
        <div className="experience__frontend">
          <h3>{t('altre')}</h3>
          <div className="experience__content">
            <article className="experience__details">
              <BsFillPatchCheckFill className="experience__details-icon"/>
              <h4>Java</h4>
            </article>
            <article className="experience__details">
              <BsFillPatchCheckFill className="experience__details-icon"/>
              <h4>C</h4>
            </article>
            <article className="experience__details">
              <BsFillPatchCheckFill className="experience__details-icon"/>
              <h4>Python</h4>
            </article>
            <article className="experience__details">
              <BsFillPatchCheckFill className="experience__details-icon"/>
              <h4>Linux/macOS/Windows</h4>
            </article>
            <article className="experience__details">
              <BsFillPatchCheckFill className="experience__details-icon"/>
              <h4>Digital forensics</h4>
            </article>
            <article className="experience__details">
              <BsFillPatchCheckFill className="experience__details-icon"/>
              <h4>{t('virt')}</h4>
            </article>
            <article className="experience__details">
              <BsFillPatchCheckFill className="experience__details-icon"/>
              <h4>{t('cri')}</h4>
            </article>
            <article className="experience__details">
              <BsFillPatchCheckFill className="experience__details-icon"/>
              <h4>{t('iot')}</h4>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience