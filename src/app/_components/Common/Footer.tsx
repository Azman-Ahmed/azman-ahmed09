import { AiFillCopyrightCircle } from 'react-icons/ai';
import { MdMail } from 'react-icons/md';
import { AiOutlineWhatsApp } from 'react-icons/ai';

const Footer = () => {
  return (
    <div id="intro" className="mt-4 mb-10 lg:mb-0">
      <div className="flex h-20 items-center justify-between text-xs font-normal text-LightGray py-6 px-2 md:px-4 w-full bg-MidNightBlack">
        <div className="flex items-center">
          <div className="mr-1 text-base">
            <AiFillCopyrightCircle />
          </div>
          <span>2024 All rights Reserved!</span>
        </div>
        <div className="flex items-center">
          <a
            href=""
            target="_blank"
            rel="noreferrer"
          >
            Made with Hatred by <span className="font-bold">Azman</span>
          </a>
        </div>
        <div className="hidden md:flex items-center">
          <div className="mr-1 text-base">
            <MdMail />
          </div>
          <div>ahmed.azman.bd0007@gmail.com</div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
