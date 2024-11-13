// NavItem.tsx
import Link from "next/link";
import { usePathname } from "next/navigation"; 
import React from 'react';

const NavItem = ({ setIsOpen, NavRoute, NavIcon, NavText }: { setIsOpen:any, NavRoute: string, NavIcon: React.ReactNode, NavText: string }) => {
    const pathname = usePathname(); 
    const className = pathname === NavRoute 
        ? "rounded-xl !text-DeepNightBlack bg-Green font-bold tracking-widest" 
        : '';

    return (
        <Link
            href={NavRoute}
            className={`${className} transition flex items-center px-2 hover:bg-EveningBlack text-SilverGray hover:text-SilverGray rounded-xl py-1.5 font-semibold space-x-4 text-base`}
        >
            {NavIcon}
            <span>{NavText}</span>
        </Link>
    );
};

export default NavItem;
