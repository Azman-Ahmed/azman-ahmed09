import Link from 'next/link';
import { FaDownload, FaFacebook, FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import Contact from './Contact';
import Download from './Download';
import Location from './Location';
import Tools from './Tools';
import Skills from './Skills';
import Image from 'next/image';
import { NAME, DESIGNATION, SOCIAL_LINKS } from '../constants/constants';
import azman from '../../../.././public/me.jpg';
import GithubSkill from './Githubskill';
// import { DESIGNATION } from '../constants/constants';

const Intro = ({ isOpen, setIsOpen }: { isOpen: boolean; setIsOpen: React.Dispatch<React.SetStateAction<boolean>> }) => {
  const keys = Object.keys(DESIGNATION) as Array<keyof typeof DESIGNATION>;
  return (
    <>
      {/* fixed at top */}
      <div className='headerr z-50 absolute bg-MidNightBlack backdrop-blur-sm inset-y-0 h-72 top-0 flex items-center justify-center w-full flex-col px-4 gap-y-4'>
        <Image className='w-20 h-20 rounded-full' src={azman} alt='profile picture' />
        <div className='flex flex-col items-center justify-center'>
          {keys.map((key) => (
            <div key={key} className='flex items-center justify-between'>
              <span className='text-sm text-LightGray text-center mt-2'>{DESIGNATION[key].toString()}</span>
            </div>
          ))}
        </div>
      </div>

      {/* middle components */}
      <div className='beech z-20 flex flex-col overflow-y-scroll pt-72 top-72 space-y-6 divide-y divide-white overflow-x-hidden no-scrollbar px-4'>
        <Location />
        <Tools />
        <Skills />
        <Contact />
        {/* <GithubSkill/> */}
        <Download icon={<FaDownload />} />
      </div>

      {/* fixed at bottom */}
      <div className='footer absolute flex justify-center space-x-6 text-xl items-center bottom-0 z-50 h-10 w-full bg-MidNightBlack text-Snow'>
        <Link href={SOCIAL_LINKS.GITHUB} target='_blank' rel='noreferrer' className=''>
          <FaGithub />
        </Link>
        <Link href={SOCIAL_LINKS.TWITTER} target='_blank' rel='noreferrer' className=''>
          <FaTwitter />
        </Link>
        <Link href={SOCIAL_LINKS.FACEBOOK} target='_blank' rel='noreferrer' className=''>
          <FaFacebook />
        </Link>
        <Link href={SOCIAL_LINKS.LINKEDIN} target='_blank' rel='noreferrer' className=''>
          <FaLinkedin />
        </Link>
      </div>
    </>
  );
};

export default Intro;
