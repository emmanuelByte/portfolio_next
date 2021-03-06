import React from 'react';
import Section from '../components/Experience/Section';
import Stepper from '../components/Stepper/Stepper';

import usePageTransition from '../hooks/pageTransition';
const Experience = () => {
  const isLoading = usePageTransition();

  return (
    <div className="flex min-h-screen h-full flex-col pb-2 pt-10 px-10 w-4/5 items-center mx-auto">
      {[1, 2, 3].map((i) => (
        <Section key={i} />
      ))}
    </div>
  );
};

export default Experience;
