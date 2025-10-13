import {useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
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

    const words = [
        { text: 'DEFINE', color: '#364c96' },
        { text: 'CREATE', color: '#ff9f23' },
        { text: 'THINK', color: '#deaaff' }
    ];

    // Enhanced word rotation with Framer Motion
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentWordIndex((prev) => (prev + 1) % words.length);
        }, 3000); // Change word every 3 seconds

        return () => clearInterval(interval);
    }, [words.length]);

    // Show elements when they come into view
    useEffect(() => {
        setIsVisible(true);
        // Start with the first word and 'entering' animation
        setCurrentWordIndex(0);
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
                        {/* Floating images with Framer Motion */}
                        <motion.img
                            className={landingStyle.heroImg1}
                            src="https://res.cloudinary.com/do5wu6ikf/image/upload/v1752076320/DesignGuy-Ltd/9th%20July/Background-2_xe8ixg.svg"
                            alt="Decoration 1"
                            animate={{
                                y: [-10, 10, -10],
                                rotate: [0, 2, 0, -2, 0]
                            }}
                            transition={{
                                duration: 6,
                                repeat: Infinity,
                                ease: "easeInOut"
                            }}
                        />
                        <motion.img
                            className={landingStyle.heroImg2}
                            src="https://res.cloudinary.com/do5wu6ikf/image/upload/v1752076319/DesignGuy-Ltd/9th%20July/Background_adxwfr.svg"
                            alt="Decoration 2"
                            animate={{
                                y: [10, -15, 10],
                                rotate: [0, -1, 0, 1, 0]
                            }}
                            transition={{
                                duration: 7,
                                repeat: Infinity,
                                ease: "easeInOut",
                                delay: 1
                            }}
                        />
                        <motion.img
                            className={landingStyle.heroImg3}
                            src="https://res.cloudinary.com/do5wu6ikf/image/upload/v1752076320/DesignGuy-Ltd/9th%20July/Background-1_lgydnk.svg"
                            alt="Decoration 3"
                            animate={{
                                y: [-8, 12, -8],
                                rotate: [0, 1.5, 0, -1.5, 0]
                            }}
                            transition={{
                                duration: 5.5,
                                repeat: Infinity,
                                ease: "easeInOut",
                                delay: 0.5
                            }}
                        />

                        <motion.h1
                            className={landingStyle.heroText}
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1, delay: 0.3 }}
                        >
                            <div className={landingStyle.aniText}>
                                <motion.span
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.8, delay: 0.5 }}
                                >
                                    RE
                                </motion.span>

                                <div className={landingStyle.wordContainer}>
                                    <AnimatePresence mode="wait">
                                        <motion.span
                                            key={words[currentWordIndex].text}
                                            className={landingStyle.animatedWord}
                                            style={{ color: words[currentWordIndex].color }}
                                            initial={{
                                                opacity: 0,
                                                y: 50,
                                                scale: 0.8,
                                                rotateX: -90
                                            }}
                                            animate={{
                                                opacity: 1,
                                                y: 0,
                                                scale: 1,
                                                rotateX: 0
                                            }}
                                            exit={{
                                                opacity: 0,
                                                y: -50,
                                                scale: 0.8,
                                                rotateX: 90
                                            }}
                                            transition={{
                                                duration: 0.6,
                                                ease: [0.25, 0.46, 0.45, 0.94],
                                                scale: { duration: 0.4 },
                                                rotateX: { duration: 0.5 }
                                            }}
                                        >
                                            {words[currentWordIndex].text}
                                        </motion.span>
                                    </AnimatePresence>
                                </div>
                            </div>

                            <motion.span
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.8, delay: 0.7 }}
                                style={{color: 'black'}}
                            >
                                EVERYTHING
                            </motion.span>
                        </motion.h1>
                    </div>
                </div>

                <motion.div
                    className={landingStyle.heroCTACtn}
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 1 }}
                >
                    <p className={landingStyle.heroCTAText}>
                        Our firm specializes in the development of innovative ideas, products, and experiences designed to enhance brand visibility for reputable organizations within their respective fields.
                    </p>
                    <div className={landingStyle.heroCTABtn}>
                       <ButtonI onClick={() => window.open('https://api.whatsapp.com/send/?phone=2349113460989&text=Hello+DesignGuy%21+%EF%BF%BD%0AI+came+across+your+website+and+I%E2%80%99m+really+interested+in+your+services.%0AI%E2%80%99m+looking+for+support+with+one+or+more+of+the+following%3A%0A-+Social+Media+Flyer%0A-+Content+Creation%0A-+Video+Edits+%26+Motion+Graphics%0A-+Social+Media+Management%0A-+Digital+Marketing+%28Ads%29%0A-+Brand+Consultation%0A%0ACould+you+kindly+guide+me+on+your+packages%2C+pricing%2C+and+how+to+get+started%3F&type=phone_number&app_absent=0', '_blank')} />
                        <ButtonII onClick={() => window.location.href = '#/pricing'} />
                    </div>
                </motion.div>
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

                <ButtonI onClick={() => window.open('https://api.whatsapp.com/send/?phone=2349113460989&text=Hello+DesignGuy%21+%EF%BF%BD%0AI+came+across+your+website+and+I%E2%80%99m+really+interested+in+your+services.%0AI%E2%80%99m+looking+for+support+with+one+or+more+of+the+following%3A%0A-+Social+Media+Flyer%0A-+Content+Creation%0A-+Video+Edits+%26+Motion+Graphics%0A-+Social+Media+Management%0A-+Digital+Marketing+%28Ads%29%0A-+Brand+Consultation%0A%0ACould+you+kindly+guide+me+on+your+packages%2C+pricing%2C+and+how+to+get+started%3F&type=phone_number&app_absent=0', '_blank')} text="Start a Project" />
            </div>
        </div>
    );
};

export default LandingPage;
