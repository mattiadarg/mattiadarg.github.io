import React from 'react';
import './portfolio.css';
import LLMicon from '../../assets/artificial-intelligence-04-stroke-rounded.svg'
import ceng from '../../assets/security-validation-stroke-rounded.svg'
import backdoor from '../../assets/zoom-lens.png'
import heart from '../../assets/heart-attack.png'
import mario from '../../assets/esport.png'
import brain from '../../assets/brain.png'
import camera from '../../assets/camera.png'
import dna from '../../assets/dna.png'
import chain from '../../assets/link.png'
import {useTranslation} from "react-i18next";




const Portfolio = () => {
  const { t } = useTranslation();
  const soloProjects = [
    {
      id: 1,
      title: 'LLM_VHDL',
      description:t('llm'),
      github: 'https://github.com/mattiadarg/LLM_VHDL',
      icon: LLMicon,
    },
    {
      id: 2,
      title: 'CengBox-PT',
      description:t('ceng'),
      github: 'https://github.com/mattiadarg/CengBox-PT',
      icon: ceng,
    },
    {
      id: 3,
      title: 'PersistenceIsFutile-CTF',
      description: t('pt'),
      github: 'https://github.com/mattiadarg/PersistenceIsFutile-CTF',
      icon: backdoor
    },
    {
      id: 4,
      title: 'Monitoraggio-frequenza-cardiaca',
      description: t('cuo'),
      github: 'https://github.com/mattiadarg/Sistema-sicuro-monitoraggio-frequenza-cardiaca',
      icon: heart
    },
    {
      id: 5,
      title: 'Super-Mario-Bros_AI',
      description: t('mario'),
      github: 'https://github.com/Alberto-00/Super-Mario-Bros-AI',
      icon: mario
    },
    {
      id: 6,
      title: 'eeg-for-human-recognition',
      description: t('eeg'),
      github: 'https://github.com/Kryozen/eeg-for-human-recognition',
      icon: brain
    },
    {
      id: 7,
      title: 'PhotoTrap',
      description: t('photo'),
      github: 'https://github.com/mattiadarg/PhotoTrap',
      icon: camera
    },
    {
      id: 8,
      title: 'Sense_Puzzle',
      description: t('sense'),
      github: 'https://github.com/D-DiSarno/Sense_Puzzle',
      icon: dna
    },
    {
      id: 9,
      title: 'blockchain-certificates',
      description: t('block'),
      github: 'https://github.com/Kryozen/blockchain-certificates',
      icon: chain
    },
  ];

  return (
    <section id="portfolio">
      <h2>{t('proj')}</h2>

      <div className="container portfolio__container">
        {soloProjects.map((pro) => (
            <article className="portfolio__item" key={pro.id}>
              <div className="portfolio__item-content">
                <div className="portfolio__item-icons-text">
                  <img src={pro.icon} alt="Icon Left" className="icon-left"/>
                  <h3>{pro.title}</h3>
                  <img src={pro.icon} alt="Icon Right" className="icon-right"/>
                </div>
                <p>{pro.description}</p>
              </div>
              <div className="portfolio__item-cta">
                <a
                    href={pro.github}
                    target="_blank"
                    className="btn"
                    rel="noreferrer"
                >
                  GitHub
                </a>
              </div>
            </article>

        ))}
      </div>
    </section>
  );
};

export default Portfolio;
