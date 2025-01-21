import {useEffect, useRef, useState } from 'react';
import ButtonI from '../../components/Buttons/ButtonI';
import ButtonII from '../../components/Buttons/ButtonII';
import landingStyle from './LandingPage.module.css'


const LandingPage = () => {
    const [isSticky, setIsSticky] = useState(true);
    const stickyRef = useRef<HTMLDivElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleScroll = () => {
            if (!containerRef.current || !stickyRef.current) return;

            const container = containerRef.current;
            const sticky = stickyRef.current;
            const containerRect = container.getBoundingClientRect();
            const stickyHeight = sticky.offsetHeight;
            const containerBottom = containerRect.bottom - stickyHeight;

            setIsSticky(containerBottom > 0);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className={landingStyle.LandingContainer}>

            <div className={landingStyle.heroCtn1}>
                <div className={landingStyle.heroCtn2}>
                    <br/>
                    <img className={landingStyle.heroImg1}
                         src="https://res.cloudinary.com/do5wu6ikf/image/upload/v1737440206/DesignGuy-Ltd/21st%20Jan/3Background_u4ssfb.svg"
                         alt="1"/>
                    <img className={landingStyle.heroImg2}
                         src="https://res.cloudinary.com/do5wu6ikf/image/upload/v1737440206/DesignGuy-Ltd/21st%20Jan/2Background_ahb1yw.svg"
                         alt="2"/>
                    <img className={landingStyle.heroImg3}
                         src="https://res.cloudinary.com/do5wu6ikf/image/upload/v1737440207/DesignGuy-Ltd/21st%20Jan/Background_vxtigs.svg"
                         alt="3"/>

                    <h1 className={landingStyle.heroText}>
                        RE<span>THINK</span> <br/>
                        EVERYTHING
                    </h1>

                </div>
            </div>

            <div className={landingStyle.heroCTACtn}>
                <p className={landingStyle.heroCTAText}>
                    We have crafted ideas, products and experiences for reputable organizations in order to increase
                    their brand visibility in their field
                </p>
                <div className={landingStyle.heroCTABtn}>
                    <ButtonI/>
                    <ButtonII/>
                </div>
            </div>

            <div className={landingStyle.pageContainer}>
                <div ref={containerRef} className={landingStyle.mainContainer}>
                    <div className={landingStyle.grid}>
                        {/* Sticky Section */}
                        <div
                            ref={stickyRef}
                            className={`${landingStyle.stickySection} ${isSticky ? landingStyle.isSticky : ''}`}
                        >
                            <div className={landingStyle.whatWeDoCard}>
                                <h1 className={landingStyle.mainTitle}>WHAT WE DO</h1>
                                {/*<p className={landingStyle.mainDescription}>*/}
                                {/*    We provide comprehensive digital solutions to help your business grow.*/}
                                {/*</p>*/}
                            </div>
                        </div>

                        {/* Scrolling Sections */}
                        <div className={landingStyle.scrollingSections}>
                            {/* Graphics Design Section */}
                            <div className={`${landingStyle.card} ${landingStyle.graphicsCard}`}>
                                <div className={landingStyle.flexcard}>
                                    <div>
                                        <h2 className={`${landingStyle.cardTitle} ${landingStyle.cardTitlegraphicsCard}`}>GRAPHICS <br/> DESIGN</h2>
                                        <br/>

                                        <p className={`${landingStyle.cardDescription} ${landingStyle.cardTitlegraphicsCard}`}>
                                            Graphics Design Use powerful yet familiar tools to create your ultimate
                                            website design. Import your designs from Figma. Use powerful yet familiar
                                            tools to create your ultimate website design.
                                        </p>
                                    </div>
                                    <img  src="https://res.cloudinary.com/do5wu6ikf/image/upload/v1737440209/DesignGuy-Ltd/21st%20Jan/Group_481483_ibrhd9.svg" alt="flat"/>

                                </div>

                            </div>

                            {/* Digital Marketing Section */}
                            <div className={`${landingStyle.card} ${landingStyle.marketingCard}`}>
                                <div className={landingStyle.flexcard}>
                                    <div>
                                        <h2 className={`${landingStyle.cardTitle} ${landingStyle.cardTitlemarketingCard}`}>DIGITAL <br/>
                                            MARKETING</h2>
                                        <br/>
                                        <p className={`${landingStyle.cardDescription} ${landingStyle.cardTitlemarketingCard}`}>
                                            Graphics Design Use powerful yet familiar tools to create your ultimate
                                            website
                                            design. Import your designs from Figma. Use powerful yet familiar tools to
                                            create
                                            your ultimate website design.
                                        </p>
                                    </div>
                                    <img
                                         src="https://res.cloudinary.com/do5wu6ikf/image/upload/v1737440208/DesignGuy-Ltd/21st%20Jan/Social_media_marketing_and_digital_advertising_xk3esx.svg"
                                         alt="flat"/>

                                </div>
                            </div>

                            {/* Social Media Management Section */}
                            <div className={`${landingStyle.card} ${landingStyle.socialCard}`}>
                                <div className={landingStyle.flexcard}>
                                    <div>
                                        <h2 className={`${landingStyle.cardTitle} ${landingStyle.cardTitlesocialCard}`}>SOCIAL
                                            MEDIA <br/> MANAGEMENT</h2>
                                        <br/>
                                        <p className={`${landingStyle.cardDescription} ${landingStyle.cardTitlesocialCard}`}>
                                            Graphics Design Use powerful yet familiar tools to create your ultimate
                                            website
                                            design. Import your designs from Figma. Use powerful yet familiar tools to
                                            create
                                            your ultimate website design.
                                        </p>
                                    </div>
                                    <img className={landingStyle.flexcardblend}
                                         src="https://res.cloudinary.com/do5wu6ikf/image/upload/v1737477316/DesignGuy-Ltd/21st%20Jan/social-media-manager-concept-illustration_114360-23821_hoqctk.avif"
                                         alt="flat"/>
                                </div>
                            </div>

                            {/* Video Editing Section */}
                            <div className={`${landingStyle.card} ${landingStyle.videoCard}`}>
                                <div className={landingStyle.flexcard}>
                                    <div>
                                        <h2 className={`${landingStyle.cardTitle} ${landingStyle.cardTitlevideoCard}`}>VIDEO <br/> EDITING
                                        </h2>
                                        <br/>
                                        <p className={`${landingStyle.cardDescription} ${landingStyle.cardTitlevideoCard}`}>
                                            Graphics Design Use powerful yet familiar tools to create your ultimate
                                            website
                                            design. Import your designs from Figma. Use powerful yet familiar tools to
                                            create
                                            your ultimate website design.
                                        </p>
                                    </div>
                                    <img className={landingStyle.flexcardblend}
                                         src="https://res.cloudinary.com/do5wu6ikf/image/upload/v1737477659/DesignGuy-Ltd/21st%20Jan/how-videos-abstract-concept-illustration_335657-3680_jp0qho.avif"
                                         alt="flat"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LandingPage;