import React, {  useEffect, useMemo, useRef, useState } from 'react';
import Link from 'next/link';
import Button from '../ui/Button';
import ArrowIcon from '../ui/icons/Arrow';
import { useRouter } from 'next/router';
import CloseIcon from '../ui/icons/Close';
import { useTranslation } from 'next-i18next'

const Header = ({ onOpen }) => {
    const { t } = useTranslation('common')
    const headerRef = useRef(null);
    const router = useRouter();
    const [isOpen, setIsOpen] = useState(false);
    const [currentPath, setCurrentPath] = useState("");
    const toggleMenu = () => setIsOpen(!isOpen);

    useEffect(() => {
        const handleScroll = () => {
            if (headerRef.current) {
                if (window.scrollY > 0) {
                    headerRef.current.classList.add("bg-white", "shadow-md");
                } else {
                    headerRef.current.classList.remove("bg-white", "shadow-md");
                }
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Update path only on client
    useEffect(() => {
        if (typeof window !== "undefined") {
            setCurrentPath(window.location.pathname + window.location.hash);
        }
    }, [router.asPath]); // runs every route change
 
    const navLinks = useMemo(() => {
        return [
            { href: "/#about", label: t('navigation.about'), isActive: currentPath === '/#about' },
            { href: "/#features", label: t('navigation.features'), id: 'features', isActive: currentPath === '/#features' },
            { href: "/#competitions", label: t('navigation.competitions'), id: 'competitions', isActive: currentPath === '/#competitions' },
            { href: "/#how-it-works", label: t('navigation.how_it_works'), id: 'how-it-works', isActive: currentPath === '/#how-it-works' },
            { href: "/#membership", label: t('navigation.membership'), id: 'membership', isActive: currentPath === '/#membership' },
            { href: "/blogs", label: t('navigation.blog'), id: 'blogs', isActive: currentPath?.includes('blogs')  },
            { href: "/#contact", label: t('navigation.contact'), id: 'contact', isActive: currentPath === '/#contact' },
        ]
    }, [currentPath])

    return (
        <header
            ref={headerRef}
            className="header w-full flex justify-center fixed top-0 left-0 z-30 transition-all duration-300"
        >
            <div className="max-w-[1440px] w-full px-6 sm:px-8 md:px-16 lg:px-20">
                <div className="flex justify-between items-center py-8">
                    <Link href="/" passHref>
                        <img src={`${"/logo.png"}`} alt="Logo" className="max-w-20 lg:max-w-24 cursor-pointer" />
                    </Link>

                    <div className="lg:hidden">
                        <div className="flex items-center">
                            <Button
                                text={t('buttons.join_the_list')}
                                IconComponent={<ArrowIcon strokeColor={"stroke-white"} />}
                                onClick={onOpen}
                                classes={"bg-dark hover:bg-orange text-white whitespace-nowrap h-11 mx-auto"}
                            />

                            <button onClick={toggleMenu} className="ml-2 w-11 h-11 p-1 rounded-lg inline-flex items-center justify-center transition-colors duration-300 hover:bg-gray-300 border border-[#59595986]">
                                <img src={"/menu.png"} alt="Menu" className="w-5 h-5" />
                            </button>
                        </div>
                    </div>

                    <nav className={`${isOpen ? 'fixed inset-0 bg-white z-50' : 'hidden'} lg:flex lg:relative lg:bg-transparent lg:z-auto`}>
                        <div className="lg:flex sm:justify-center lg:items-center flex-wrap xl:justify-between mx-4 mt-16 lg:mt-0">
                            {isOpen && (
                                <div className="absolute top-0 right-0 p-4 flex justify-between w-full">
                                    <Link href="/" passHref onClick={toggleMenu}>
                                        <img src={`${"/logo.png"}`} alt="Logo" className="max-w-16 lg:max-w-24 cursor-pointer" />
                                    </Link>
                                    <Button
                                        text={''}
                                        IconComponent={<CloseIcon strokeColor={"stroke-black"} />}
                                        onClick={toggleMenu}
                                        classes={"absolute z-10 top-3 right-3 bg-gray-300 hover:bg-gray-400 rounded-lg !px-1 !pr-3 flex items-center justify-center"}
                                    />
                                </div>
                            )}

                            {navLinks.map((link) => {
                                return (
                                    <Link
                                        key={link.href}
                                        href={link.href}
                                        passHref
                                        className={`block lg:inline-flex items-center px-3 py-2 rounded-lg transition-colors duration-300 text-sm text-center ${link.isActive ? 'font-semibold cursor-default pointer-events-none' : 'hover:text-gray-600'}`}
                                        onClick={() =>
                                            setIsOpen(false)
                                        }
                                    >
                                      <span className={`inline-flex ${!link.isActive?'hidden':''} mr-2 h-2 w-2 rounded-full bg-orange`}/> {link.label}
                                    </Link>
                                );
                            })}

                            {isOpen && (
                                <div className="mt-8">
                                    <Button
                                        text={t('buttons.join_the_list')}
                                        IconComponent={<ArrowIcon strokeColor={"stroke-white"} />}
                                        onClick={() => {
                                            onOpen()
                                            toggleMenu()
                                        }}
                                        classes={"bg-dark hover:bg-orange text-white whitespace-nowrap h-11 mt-4 mx-auto"}
                                    />
                                </div>
                            )}
                        </div>
                    </nav>

                    <div className="hidden lg:flex items-center space-x-4">
                        <Button
                            text={t('buttons.join_the_list')}
                            IconComponent={<ArrowIcon strokeColor={"stroke-white"} />}
                            onClick={onOpen}
                            classes={"ml-4 bg-dark hover:bg-orange text-white whitespace-nowrap h-14"}
                        />
                    </div>
                </div>
            </div >
        </header >
    );
};

export default Header;
