import React from 'react';
import usePageTransition from '../hooks/pageTransition';

const Contact = () => {
  usePageTransition();
  return (
    <div className="flex min-h-[calc(100vh-5rem)] flex-col py-2 px-10">
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora nulla
      itaque, blanditiis, suscipit a totam recusandae animi ipsa necessitatibus
      vel sunt et, adipisci corrupti temporibus autem velit aperiam! Cumque,
      culpa!
    </div>
  );
};

export default Contact;
