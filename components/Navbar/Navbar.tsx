'use client'

import Link from 'next/link';
import React, { memo } from 'react';
import { usePathname } from 'next/navigation';
import { NavLink, NavbarProps } from './types';
import classNames from 'classnames';

const navLinks: NavLink[] = [
    { text: 'Home', href: '/' },
    { text: 'Telegate', href: '/telegate' },
    { text: 'Notifications', href: '/notifications' },
    { text: 'Settings', href: '/settings' },
    { text: 'Logout', href: '/logout' },
];

const Navbar: React.FC<NavbarProps> = ({ className }) => {
    const currentPath = usePathname();

    return (
        <nav className={`${className} flex flex-col justify-center gap-10 items-center w-52 `}>
            {navLinks.map((link, index) => (
                <Link
                    key={index}
                    href={link.href}
                    className={classNames({
                        'text-zinc-900': link.href === currentPath,
                        'text-zinc-400': link.href !== currentPath,
                        'p-3': true
                    })}
                    >
                    {link.text}
                </Link>
            ))}
        </nav>
    );
};

export default memo(Navbar);