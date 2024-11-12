import React, { useState } from 'react';
import Intro from '../_components/intro/sidebar';

const Page = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <Intro isOpen={isOpen} setIsOpen={setIsOpen} />
    </div>
  );
};

export default Page;
