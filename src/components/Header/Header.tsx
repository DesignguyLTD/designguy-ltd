import  { useState } from 'react';
import navStyle from './Header.module.css';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isClosing, setIsClosing] = useState(false);

    const toggleMenu = () => {
        if (isMenuOpen) {
            setIsClosing(true);
            setTimeout(() => {
                setIsMenuOpen(false);
                setIsClosing(false);
            }, 500); // Match the animation duration
        } else {
            setIsMenuOpen(true);
        }
    };

    return (
        <nav className={navStyle.ctn}>
            <div className={navStyle.Logo}>
                <img src="https://res.cloudinary.com/do5wu6ikf/image/upload/v1737273910/DesignGuy-Ltd/19th%20Jan/vite_kwvrnl.svg" alt="logo" />
            </div>
            <div className={navStyle.middleNav}>
                <li className={navStyle.middleNavLi}>About Us</li>
                <li className={navStyle.middleNavLi}>Work</li>
                <li className={navStyle.middleNavLi}>Pricing</li>
            </div>

            <div className={navStyle.menu} onClick={toggleMenu}>
                <div className={navStyle.menuText}>
                    Menu <img src="https://res.cloudinary.com/do5wu6ikf/image/upload/v1737440208/DesignGuy-Ltd/21st%20Jan/Menu_efmfj2.svg" alt="menu" />
                </div>
            </div>

            {isMenuOpen && (
                <div className={`${navStyle.popupMenu} ${
                    isClosing ? navStyle.animateMenuClose : navStyle.animateMenuOpen
                }`}>
                    <div className={navStyle.closeText} onClick={toggleMenu}>
                       Close <img src="https://res.cloudinary.com/do5wu6ikf/image/upload/v1737440207/DesignGuy-Ltd/21st%20Jan/closeMenu_ihifnr.svg" alt="close"/>
                    </div>

                    <div className={navStyle.menuItemCtn}>
                        <ul>
                            <li>FAQs</li>
                            <li>Contact Us</li>
                            <li>About Us</li>

                        </ul>

                        <ul>
                            <li>Work</li>
                            <li>Pricing</li>
                        </ul>
                    </div>

                    <div  className={navStyle.menuimageFrame}>
                        <img src="https://res.cloudinary.com/do5wu6ikf/image/upload/v1737440570/DesignGuy-Ltd/21st%20Jan/Frame_1171276714_ykx2g7.svg" alt="imageFrame"/>
                    </div>

                </div>
            )}
        </nav>
    );
};

export default Header;
