import { ImCross } from 'react-icons/im'
import { FiAward } from 'react-icons/fi'
import { FaHandshake } from 'react-icons/fa'
import { ImHome } from 'react-icons/im'
import { HiIdentification } from 'react-icons/hi'
import NavItem from './NavItem'
import DrawerLayout from './DrawerLayout'


const Nav = ({ setIsOpen, isOpen }:{ setIsOpen:any, isOpen:any }) => {
    return (
        <DrawerLayout setIsOpen={setIsOpen} isOpen={isOpen}>
            <div className='absolute z-50 flex flex-col justify-center lg:inset-y-0 -right-0 lg:right-0 w-64 h-screen lg:mt-3 lg:mr-3 lg:h-[96%] bg-DeepNightBlack shadow-2xl md:rounded-xl md:overflow-hidden">      '>
                <div onClick={e => setIsOpen(false)} className="flex text-LightGray absolute top-0 w-full items-center justify-start pl-6 text-sm h-10 bg-EveningBlack">
                    <ImCross />
                </div>
                <div>
                    {/* <NavItem setIsOpen={setIsOpen} NavRoute={'/'} NavIcon={<ImHome />} NavText={'Home'} />
                    <NavItem setIsOpen={setIsOpen} NavRoute={'/'} NavIcon={<ImHome />} NavText={'Contact'} />
                    <NavItem setIsOpen={setIsOpen} NavRoute={'/'} NavIcon={<ImHome />} NavText={'Background'} />
                    <NavItem setIsOpen={setIsOpen} NavRoute={'/'} NavIcon={<ImHome />} NavText={'Portfolio'} /> */}
                </div>

            </div>
        </DrawerLayout>

    )
}

export default Nav