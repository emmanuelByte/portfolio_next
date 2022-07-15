import React from 'react';
import useInView from '../../hooks/useInView';
import Stepper from '../Stepper/Stepper';
import { motion } from 'framer-motion';
import useControls from '../../hooks/useControls';
const Section = () => {
  const { ref, entry, inView } = useInView({ threshold: 0.5 });
  const leftVariation = {
    visible: {
      opacity: 1,
      scale: [0.9, 1.05, 1.1, 1],
      transition: {
        duration: 1,
        ease: 'easeInOut',
      },
      x: 0,
    },
    hidden: {
      opacity: 0,
      x: -100,
      transition: {
        duration: 1,
        ease: 'easeInOut',
      },
      scale: 0,
    },
  };
  const rightVariation = {
    visible: {
      opacity: 1,
      scale: [0.9, 1.05, 1.1, 1],
      transition: {
        duration: 1,
        ease: 'easeInOut',
      },
      x: 0,
    },
    hidden: {
      opacity: 0,
      x: 100,
      transition: {
        duration: 1,
        ease: 'easeInOut',
      },
      scale: 0,
    },
  };
  const leftControls = useControls(inView);
  const rightControls = useControls(inView);
  return (
    <motion.div className="grid grid-cols-[.7fr,.2fr,1.5fr] w-100" ref={ref}>
      <motion.div animate={leftControls} variants={leftVariation}>
        <h1>Part Time Infrastructure Consultant</h1>
        <h4 className="text-primary-100 mt-2">May. 2020 - Present</h4>
      </motion.div>
      <div className="mx-5">
        <Stepper />
      </div>
      <motion.div animate={rightControls} variants={rightVariation}>
        <div className="flex justify-between items-center">
          <h1>Replex GmbH Backend/DevOps Engineer</h1>
          <h4 className="text-primary-100">Remote, Germany</h4>
        </div>
        <div className="mt-5 mb-2">
          <h1>Technologies:</h1>
        </div>
        <div className="flex gap-3 flex-wrap text-primary-100">
          {'K8S, GCP, AWS, Typescript, Golang, Docker, Postgres, TimescaleDB, Prometheus, Grafana'
            .split(',')
            .map((tech, index) => (
              <span key={index} className="shadow px-2 rounded">
                {tech.trim()}
              </span>
            ))}
        </div>
        <div className="mt-5">
          <h1 className="mb-2">Responsibilities:</h1>
          <ul className="list-decimal text-primary-100 pb-16">
            {[...Array(10)].map((_, index) => (
              <li className="mb-2" key={index}>
                Writing efficient SQL queries for independent features
              </li>
            ))}
          </ul>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Section;
