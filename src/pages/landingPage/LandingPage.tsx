import {useEffect, useRef, useState } from 'react';
import ButtonI from '../../components/Buttons/ButtonI';
import ButtonII from '../../components/Buttons/ButtonII';
import landingStyle from './LandingPage.module.css'
import flexImgae from '../../assets/Berly.svg';
import  flexImg2 from '../../assets/Mask Group.svg';
import CaseStudy from '../../components/CaseStudy/CaseStudy';
import styles from '../../pages/FAQ/FAQ.module.css'
import stylesAbout from "../About/About.module.css";


const LandingPage = () => {
    const [isSticky, setIsSticky] = useState(true);
    const stickyRef = useRef<HTMLDivElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);
    const [activeSection, setActiveSection] = useState(0);
    const [isVisible, setIsVisible] = useState(false);
    const [currentWordIndex, setCurrentWordIndex] = useState(0);
    const [animationState, setAnimationState] = useState<'entering' | 'leaving'>('entering');

    const words = [
        { text: 'DEFINE', color: '#364c96' },
        { text: 'CREATE', color: '#ff9f23' },
        { text: 'THINK', color: '#deaaff' }
    ];

    // Word rotation effect with scroll-like transition
    useEffect(() => {
        if (animationState === 'entering') {
            // When a word has entered, set timer to begin exit animation
            const enteringTimer = setTimeout(() => {
                setAnimationState('leaving');
            }, 3000); // Word stays visible for 3 seconds - increased for better visibility

            return () => clearTimeout(enteringTimer);
        } else {
            // When a word is leaving, prepare to show the next word
            const leavingTimer = setTimeout(() => {
                setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
                setAnimationState('entering');
            }, 800); // Match animation-duration in CSS

            return () => clearTimeout(leavingTimer);
        }
    }, [animationState, words.length]);

    // Show elements when they come into view
    useEffect(() => {
        setIsVisible(true);
        // Start with the first word and 'entering' animation
        setCurrentWordIndex(0);
        setAnimationState('entering');
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            if (!containerRef.current || !stickyRef.current) return;

            const container = containerRef.current;
            const sticky = stickyRef.current;
            const containerRect = container.getBoundingClientRect();
            const stickyHeight = sticky.offsetHeight;
            const containerBottom = containerRect.bottom - stickyHeight;

            setIsSticky(containerBottom > 0);

            // Determine which section is currently in view
            const sections = document.querySelectorAll(`.${landingStyle.card}`);
            sections.forEach((section, index) => {
                const rect = section.getBoundingClientRect();
                if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
                    setActiveSection(index);
                }
            });
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const [position, setPosition] = useState(0);

    const logos = [
        { src: 'https://res.cloudinary.com/do5wu6ikf/image/upload/v1752076294/DesignGuy-Ltd/9th%20July/Item_SVG_np9wgk.svg', name: 'Amani' },
        { src: 'https://res.cloudinary.com/do5wu6ikf/image/upload/v1752076295/DesignGuy-Ltd/9th%20July/Item_SVG-2_qcutuc.svg', name: 'Jarom' },
        { src: 'https://res.cloudinary.com/do5wu6ikf/image/upload/v1752076294/DesignGuy-Ltd/9th%20July/Item_SVG-1_pkzmhf.svg', name: 'Zoe' },
        { src: 'https://res.cloudinary.com/do5wu6ikf/image/upload/v1752076294/DesignGuy-Ltd/9th%20July/Item_SVG-5_qd5lwh.svg', name: 'Beryl' },
        { src: 'https://res.cloudinary.com/do5wu6ikf/image/upload/v1752076294/DesignGuy-Ltd/9th%20July/Item_SVG-4_ovakjd.svg', name: 'Beulah' },
        { src: 'https://res.cloudinary.com/do5wu6ikf/image/upload/v1752076294/DesignGuy-Ltd/9th%20July/Item_SVG-5_qd5lwh.svg', name: 'Beryl' },
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

    const berryl = [
        { name: 'Brand Strategy', colorClass: 'colourItem_' },
        { name: 'Digital Ads', colorClass: 'colourItem__' },
        { name: 'Social Media Graphics', colorClass: 'colourItem___' },
        { name: 'Visual Identity', colorClass: 'colourItem____' }
    ];

    const jarom = [
        { name: 'Brand Strategy', colorClass: 'colourItem_' },
        { name: 'Digital Ads', colorClass: 'colourItem__' },
        { name: 'Social Media Graphics', colorClass: 'colourItem___' },
        { name: 'Social Media Management', colorClass: 'colourItem____' }
    ];

    return (
        <div className={landingStyle.LandingContainer}>
            <div className={`${landingStyle.heroSection} ${isVisible ? landingStyle.visible : ''}`}>
                <div className={landingStyle.heroCtn1}>
                    <div className={landingStyle.heroCtn2}>
                        <img className={landingStyle.heroImg1}
                            src="https://res.cloudinary.com/do5wu6ikf/image/upload/v1752076320/DesignGuy-Ltd/9th%20July/Background-2_xe8ixg.svg"
                            alt="Decoration 1"/>
                        <img className={landingStyle.heroImg2}
                            src="https://res.cloudinary.com/do5wu6ikf/image/upload/v1752076319/DesignGuy-Ltd/9th%20July/Background_adxwfr.svg"
                            alt="Decoration 2"/>
                        <img className={landingStyle.heroImg3}
                            src="https://res.cloudinary.com/do5wu6ikf/image/upload/v1752076320/DesignGuy-Ltd/9th%20July/Background-1_lgydnk.svg"
                            alt="Decoration 3"/>

                        <h1 className={landingStyle.heroText}>
                           <div className={landingStyle.aniText}> RE
                               <div className={landingStyle.wordContainer}>
                                   <span
                                       key={`${words[currentWordIndex].text}-${animationState}`}
                                       className={landingStyle.animatedWord}
                                       style={{
                                           color: words[currentWordIndex].color,
                                           animationName: animationState === 'entering'
                                               ? landingStyle.wordSlideIn
                                               : landingStyle.wordSlideOut
                                       }}
                                   >
                                    {words[currentWordIndex].text}
                                   </span>
                               </div>
                            </div>
                            EVERYTHING
                        </h1>
                    </div>
                </div>

                <div className={landingStyle.heroCTACtn}>
                    <p className={landingStyle.heroCTAText}>
                        Our firm specializes in the development of innovative ideas, products, and experiences designed to enhance brand visibility for reputable organizations within their respective fields.
                    </p>
                    <div className={landingStyle.heroCTABtn}>
                        <ButtonI />
                        <ButtonII onClick={() => window.location.href = '#/pricing'} />
                    </div>
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
                                <div className={landingStyle.sectionIndicator}>
                                    {[].map((index) => (
                                        <div
                                            key={index}
                                            className={`${landingStyle.indicator} ${activeSection === index ? landingStyle.activeIndicator : ''}`}
                                        />
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Scrolling Sections */}
                        <div className={landingStyle.scrollingSections}>
                            {/* Graphics Design Section */}
                            <div id="graphics" className={`${landingStyle.card} ${landingStyle.graphicsCard}`}>
                                <div className={landingStyle.flexcard}>
                                    <div className={landingStyle.cardContent}>
                                        <h2 className={`${landingStyle.cardTitle} ${landingStyle.cardTitlegraphicsCard}`}>
                                            GRAPHICS <br/> DESIGN
                                        </h2>
                                        <br/>

                                        <p className={`${landingStyle.cardDescription} ${landingStyle.cardTitlegraphicsCard}`}>
                                            We create stunning visual designs that capture your brand essence. From logos to marketing materials, our designs are crafted to make lasting impressions that resonate with your audience.
                                        </p>
                                        <div className={landingStyle.cardCTA}>
                                            <a href="#/about-us" className={landingStyle.learnMore}>Learn more →</a>
                                        </div>
                                    </div>
                                    <img
                                        src="https://res.cloudinary.com/do5wu6ikf/image/upload/v1737440209/DesignGuy-Ltd/21st%20Jan/Group_481483_ibrhd9.svg"
                                        alt="Graphics Design Illustration"/>
                                </div>
                            </div>

                            {/* Digital Marketing Section */}
                            <div className={`${landingStyle.card} ${landingStyle.marketingCard}`}   data-aos="fade-up">
                                <div className={landingStyle.flexcard}>
                                    <div className={landingStyle.cardContent}>
                                        <h2 className={`${landingStyle.cardTitle} ${landingStyle.cardTitlemarketingCard}`}>DIGITAL <br/>
                                            MARKETING</h2>
                                        <br/>
                                        <p className={`${landingStyle.cardDescription} ${landingStyle.cardTitlemarketingCard}`}>
                                            Elevate your online presence with our digital marketing services. We use data-driven strategies to increase your visibility, engage your audience, and drive conversions.
                                        </p>
                                        <div className={landingStyle.cardCTA}>
                                            <a href="#/about-us" className={landingStyle.learnMore}>Learn more →</a>
                                        </div>
                                    </div>
                                    <img
                                        src="https://res.cloudinary.com/do5wu6ikf/image/upload/v1737440208/DesignGuy-Ltd/21st%20Jan/Social_media_marketing_and_digital_advertising_xk3esx.svg"
                                        alt="Digital Marketing Illustration"/>
                                </div>
                            </div>

                            {/* Social Media Management Section */}
                            <div className={`${landingStyle.card} ${landingStyle.socialCard}`}  data-aos="fade-up">
                                <div className={landingStyle.flexcard}>
                                    <div className={landingStyle.cardContent}>
                                        <h2 className={`${landingStyle.cardTitle} ${landingStyle.cardTitlesocialCard}`}>SOCIAL
                                            MEDIA <br/> MANAGEMENT</h2>
                                        <br/>
                                        <p className={`${landingStyle.cardDescription} ${landingStyle.cardTitlesocialCard}`}>
                                            Build and manage your brand's presence on social media. Our team creates engaging content, manages your social channels, and interacts with your audience to grow your online community.
                                        </p>
                                        <div className={landingStyle.cardCTA}>
                                            <a href="#/about-us" className={landingStyle.learnMore}>Learn more →</a>
                                        </div>
                                    </div>
                                    <img className={landingStyle.flexcardblend}
                                         src="https://res.cloudinary.com/do5wu6ikf/image/upload/v1752076321/DesignGuy-Ltd/9th%20July/OBJECTS_hfapgu.svg"
                                         alt="Social Media Management Illustration"/>
                                </div>
                            </div>

                            {/* Video Editing Section */}
                            <div className={`${landingStyle.card} ${landingStyle.videoCard}`}   data-aos="fade-up">
                                <div className={landingStyle.flexcard}>
                                    <div className={landingStyle.cardContent}>
                                        <h2 className={`${landingStyle.cardTitle} ${landingStyle.cardTitlevideoCard}`}>VIDEO <br/> EDITING
                                        </h2>
                                        <br/>
                                        <p className={`${landingStyle.cardDescription} ${landingStyle.cardTitlevideoCard}`}>
                                            Enhance your video content with our professional editing services. We bring your vision to life with creative editing, color correction, and sound design.
                                        </p>
                                        <div className={landingStyle.cardCTA}>
                                            <a href="#/about-us" className={landingStyle.learnMore}>Learn more →</a>
                                        </div>
                                    </div>
                                    <img className={landingStyle.flexcardblend}
                                         src="https://res.cloudinary.com/do5wu6ikf/image/upload/v1752076321/DesignGuy-Ltd/9th%20July/12290855_Wavy_Tech-07_Single-02_1_dkqhmf.svg"
                                         alt="Video Editing Illustration"/>
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
                        <ButtonI text={'Our Work'}/>

                    </div>
                </div>

                <CaseStudy items={berryl} text={'Beryl elegancia'} subText={'Fashion redefined in luxury'} fleximgae={flexImgae}/>
                <CaseStudy items={jarom} text={'Jarom Travels'} subText={'Happiness is free'}   fleximgae={flexImg2}/>



            </div>


            <div className={landingStyle.wrapper}>
                <div data-aos="fade-up" className={landingStyle.sliderSection}>
                    {/*<h3 className={landingStyle.sliderHeading}>*/}
                    {/*    Meet our valued partners*/}
                    {/*</h3>*/}

                    <div className={landingStyle.sliderContainer}>
                        <div
                            className={landingStyle.slider}
                            style={{
                                transform: `translateX(${position}px)`,
                                width: `${duplicatedLogos.length * 140}px`
                            }}
                            aria-label="Our clients and partners"
                        >
                            {duplicatedLogos.map((logo, index) => (
                                <div
                                    key={`${logo.name}-${index}`}
                                    className={landingStyle.logoWrapper}
                                    title={`${logo.name} - Our client`}
                                >
                                    <img
                                        src={logo.src}
                                        alt={`${logo.name} logo`}
                                        className={landingStyle.logo}
                                        loading="lazy"
                                    />
                                    <span className={landingStyle.logoName}>{logo.name}</span>
                                </div>
                            ))}
                        </div>

                        {/* Gradient overlays for smooth edges */}
                        <div className={`${landingStyle.gradient} ${landingStyle.gradientLeft}`}/>
                        <div className={`${landingStyle.gradient} ${landingStyle.gradientRight}`}/>
                    </div>

                    <div className={landingStyle.sliderFooter}>
                        <a href="#/" className={landingStyle.viewAllLink}>
                            View all our partners
                            <span className={landingStyle.arrowIcon}>→</span>
                        </a>
                    </div>
                </div>
            </div>

            <div className={`${styles.faqCTA} ${stylesAbout.ctaSection}`}>
                <div className={styles.faqHeaderText}>
                    Begin your Brand Journey with us
                </div>

                <p className={styles.faqSubText}>
                    Let's transform your vision into compelling visual narratives. Our expert team is ready to elevate
                    your brand with cutting-edge design solutions tailored to your specific needs.
                </p>

                <ButtonI text="Start a Project" />
            </div>
        </div>
    );
};

export default LandingPage;
