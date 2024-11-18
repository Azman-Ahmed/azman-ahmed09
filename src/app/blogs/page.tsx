import React from 'react';
import Footer from '../_components/HomeComponents/Footer';

const ComingSoonCard = () => {
  return (
    <div className="card_stylings p-8 bg-gray-800 text-Snow rounded-xl flex flex-col items-center justify-center">
      <div className="text-xl font-bold mb-4">Tech Blogs</div>
      <p className="text-sm text-center">
        We're working hard to bring something awesome! Stay tuned.
      </p>
    </div>
  );
};

const Page = () => {
  return (
    <>
      <div className="px-2 md:px-8 py-4 text-lg font-bold text-Snow">Tech Blogs Coming soon...</div>
      <div className="grid grid-cols-1 gap-4 px-2 md:px-8">
        {/* Show the Coming Soon Card */}
        <ComingSoonCard />
      </div>
      {/* <Footer /> */}
    </>
  );
};

export default Page;
