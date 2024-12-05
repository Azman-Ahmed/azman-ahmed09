import Link from 'next/link';
import { FaDownload, FaFacebook, FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import Contact from './LeftSideBarComponents/Contact';
import Download from './LeftSideBarComponents/Download';
import Location from './LeftSideBarComponents/Location';
import Tools from './LeftSideBarComponents/Tools';
import Skills from './LeftSideBarComponents/Skills';
import Image from 'next/image';
import { NAME, DESIGNATION, SOCIAL_LINKS } from '../ConstantData/constants';
import azman from '../../../.././public/me.jpg';

const LeftSideBar = ({ isOpen, setIsOpen }: { isOpen: boolean; setIsOpen: React.Dispatch<React.SetStateAction<boolean>> }) => {
  const keys = Object.keys(DESIGNATION) as Array<keyof typeof DESIGNATION>;
  return (
    <>
      {/* Top Header */}
      <div className="headerr z-50 absolute bg-MidNightBlack backdrop-blur-sm inset-y-0 h-72 top-0 flex items-center justify-center w-full flex-col px-4 gap-y-4 md:h-60 lg:h-56">
        <Image className="w-20 h-20 rounded-full md:w-16 md:h-16 lg:w-14 lg:h-14" src={azman} alt="profile picture" />
        <div className="flex flex-col items-center justify-center">
          {keys.map((key) => (
            <div key={key} className="flex items-center justify-between">
              <span className="text-sm text-LightGray text-center mt-2 md:text-xs lg:text-xs">{DESIGNATION[key].toString()}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Scrollable Middle Section */}
      <div className="beech z-20 flex flex-col overflow-y-scroll pt-72 top-72 space-y-6 divide-y divide-white overflow-x-hidden no-scrollbar px-4 md:pt-64 lg:pt-56">
        <Location />
        <Tools />
        <Skills />
        <Contact />
        {/* <GithubSkill/> */}
        <Download icon={<FaDownload />} />
      </div>

      {/* Footer Section */}
      <div className="footer absolute flex justify-center space-x-6 text-xl items-center bottom-0 z-50 h-12 w-full bg-MidNightBlack text-Snow md:h-10 lg:h-8">
        <Link href={SOCIAL_LINKS.GITHUB} target="_blank" rel="noreferrer" className="hover:text-gray-400">
          <FaGithub />
        </Link>
        <Link href={SOCIAL_LINKS.TWITTER} target="_blank" rel="noreferrer" className="hover:text-gray-400">
          <FaTwitter />
        </Link>
        <Link href={SOCIAL_LINKS.FACEBOOK} target="_blank" rel="noreferrer" className="hover:text-gray-400">
          <FaFacebook />
        </Link>
        <Link href={SOCIAL_LINKS.LINKEDIN} target="_blank" rel="noreferrer" className="hover:text-gray-400">
          <FaLinkedin />
        </Link>
      </div>
    </>
  );
};

export default LeftSideBar;
