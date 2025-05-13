import {useEffect, useRef, useState } from 'react';
import ButtonI from '../../components/Buttons/ButtonI';
import ButtonII from '../../components/Buttons/ButtonII';
import landingStyle from './LandingPage.module.css'
import flexImgae from '../../assets/Berly.svg';
import CaseStudy from '../../components/CaseStudy/CaseStudy';
import styles from '../../pages/FAQ/FAQ.module.css'


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

    const [position, setPosition] = useState(0);

    const logos = [
        { src: 'https://res.cloudinary.com/do5wu6ikf/image/upload/v1737563458/DesignGuy-Ltd/22nd%20Jan/Item_SVG-1_nsmx8c.svg', name: 'Airbnb' },
        { src: 'https://res.cloudinary.com/do5wu6ikf/image/upload/v1737563459/DesignGuy-Ltd/22nd%20Jan/Item_SVG_iginj8.svg', name: 'Contra' },
        { src: 'https://res.cloudinary.com/do5wu6ikf/image/upload/v1737563459/DesignGuy-Ltd/22nd%20Jan/Item_SVG-4_jg3yvx.svg', name: 'Dribbble' },
        { src: 'https://res.cloudinary.com/do5wu6ikf/image/upload/v1737563459/DesignGuy-Ltd/22nd%20Jan/Item_SVG-2_yyshvf.svg', name: 'Hodinkee' },
        { src: 'https://res.cloudinary.com/do5wu6ikf/image/upload/v1737563459/DesignGuy-Ltd/22nd%20Jan/Item_SVG-3_hwqves.svg', name: 'Lark' },
        { src: 'https://res.cloudinary.com/do5wu6ikf/image/upload/v1737563461/DesignGuy-Ltd/22nd%20Jan/Vector_u5ntyk.svg', name: 'Lo' },
    ];

    // Duplicate logos for infinite scroll effect
    const duplicatedLogos = [...logos, ...logos];

    useEffect(() => {
        const animate = () => {
            setPosition((prev) => {
                const newPosition = prev - 0.5;
                // Reset position when we've scrolled through first set of logos
                if (Math.abs(newPosition) >= logos.length * 120) {
                    return 0;
                }
                return newPosition;
            });
        };

        const animationId = setInterval(animate, 30);
        return () => clearInterval(animationId);
    }, [logos.length]);

    return (
        <div className={landingStyle.LandingContainer}  data-aos="fade-up">

            <div   data-aos="fade-down" className={landingStyle.heroCtn1}>
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

            <div   data-aos="fade-up" className={landingStyle.heroCTACtn}>
                <p className={landingStyle.heroCTAText}>
                    Our firm specializes in the development of innovative ideas, products, and experiences designed to enhance brand visibility for reputable organizations within their respective fields.
                </p>
                <div className={landingStyle.heroCTABtn}>
                    <ButtonI />
                    <ButtonII onClick={()=> {
                        window.location.href = '#/pricing';
                    } }/>
                </div>
            </div>

            <div   data-aos="fade-up" className={landingStyle.pageContainer}>
                <div ref={containerRef} className={landingStyle.mainContainer}>
                    <div className={landingStyle.grid}>
                        {/* Sticky Section */}
                        <div
                            ref={stickyRef}
                            className={`${landingStyle.stickySection} ${isSticky ? landingStyle.isSticky : ''}`}
                        >
                            <div className={landingStyle.whatWeDoCard}>
                                <h1 className={landingStyle.mainTitle}>WHAT WE DO</h1>
                            </div>
                        </div>

                        {/* Scrolling Sections */}
                        <div className={landingStyle.scrollingSections}   data-aos="fade-up">
                            {/* Graphics Design Section */}
                            <div className={`${landingStyle.card} ${landingStyle.graphicsCard}`}>
                                <div className={landingStyle.flexcard}>
                                    <div>
                                        <h2 className={`${landingStyle.cardTitle} ${landingStyle.cardTitlegraphicsCard}`}>GRAPHICS <br/> DESIGN
                                        </h2>
                                        <br/>

                                        <p className={`${landingStyle.cardDescription} ${landingStyle.cardTitlegraphicsCard}`}>
                                            Graphics Design Use powerful yet familiar tools to create your ultimate
                                            website design. Import your designs from Figma. Use powerful yet familiar
                                            tools to create your ultimate website design.
                                        </p>
                                    </div>
                                    <img
                                        src="https://res.cloudinary.com/do5wu6ikf/image/upload/v1737440209/DesignGuy-Ltd/21st%20Jan/Group_481483_ibrhd9.svg"
                                        alt="flat"/>

                                </div>

                            </div>

                            {/* Digital Marketing Section */}
                            <div className={`${landingStyle.card} ${landingStyle.marketingCard}`}   data-aos="fade-up">
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
                            <div className={`${landingStyle.card} ${landingStyle.socialCard}`}  data-aos="fade-up">
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
                            <div className={`${landingStyle.card} ${landingStyle.videoCard}`}   data-aos="fade-up">
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

            <div  className={landingStyle.CaseStudyCtn}   data-aos="fade-up">
                <div className={landingStyle.whatWeDoCtn}>
                    <div className={`${landingStyle.cardTitle} ${landingStyle.whatWeDoText}`}>
                        WE DO <br/> GREAT WORK
                    </div>
                    <div className={landingStyle.whatWeDoCtn2}>
                        <p className={`${landingStyle.cardDescription} ${landingStyle.whatWeDoSubText}`}>
                            We uncover insights to achieve
                            timelessness and relevance in this rapidly changing world.
                        </p>
                        <ButtonI/>

                    </div>
                </div>

                <CaseStudy fleximgae={flexImgae}/>
                <CaseStudy fleximgae={flexImgae}/>
                <CaseStudy fleximgae={flexImgae}/>
                <CaseStudy fleximgae={flexImgae}/>
                <CaseStudy fleximgae={flexImgae}/>


            </div>


            <div className={landingStyle.container}>
                <div className={landingStyle.wrapper}>


                    <div   data-aos="fade-up" className={landingStyle.sliderContainer}>
                        <div
                            className={landingStyle.slider}
                            style={{
                                transform: `translateX(${position}px)`,
                                width: `${duplicatedLogos.length * 140}px`  // 120px logo width + 20px gap
                            }}
                        >
                            {duplicatedLogos.map((logo, index) => (
                                <div
                                    key={`${logo.name}-${index}`}
                                    className={styles.logoWrapper}
                                >
                                    <img
                                        src={logo.src}
                                        alt={logo.name}
                                        className={landingStyle.logo}
                                    />
                                </div>
                            ))}
                        </div>

                        {/* Gradient overlays for smooth edges */}
                        <div className={`${landingStyle.gradient} ${landingStyle.gradientLeft}`}/>
                        <div className={`${landingStyle.gradient} ${landingStyle.gradientRight}`}/>
                        <br/>

                        <h3 className={landingStyle.title}>
                            Meet our customers &gt;
                        </h3>
                    </div>
                </div>
            </div>

            <div className={styles.faqCTA}   data-aos="fade-up">
                <div className={styles.faqHeaderText}>
                    Begin your Brand Journey with us
                </div>

                <p className={styles.faqSubText}>
                    Graphics Design Use powerful yet familiar tools to create your ultimate website design. Import your
                    designs from Figma. Use powerful yet familiar tools to create your ultimate website design.
                </p>

                <ButtonI/>
            </div>
        </div>
    );
};

export default LandingPage;