import { useEffect, useRef, useState } from 'react';
import ButtonI from '../../components/Buttons/ButtonI';
import stylesAbout from './About.module.css';
import styles from "../FAQ/FAQ.module.css";

const About = () => {
    const [isVisible, setIsVisible] = useState(false);
    const heroRef = useRef(null);
    const teamRef = useRef(null);

    useEffect(() => {
        setIsVisible(true);

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add(stylesAbout.visible);
                }
            });
        }, { threshold: 0.1 });

        if (teamRef.current) {
            observer.observe(teamRef.current);
        }

        return () => {
            if (teamRef.current) {
                observer.unobserve(teamRef.current);
            }
        };
    }, []);

    return (
        <div className={stylesAbout.cont}>
            {/* Hero Section */}
            <div className={`${stylesAbout.Herocont} ${isVisible ? stylesAbout.visible : ''}`} ref={heroRef}>
                <div className={stylesAbout.Herotextcont}>
                    <h1 className={stylesAbout.aboutTitle}>About <span>Us</span></h1>
                    <p className={stylesAbout.aboutDescription}>
                        We're <span>Designguy</span>, a team of passionate creatives who believe that great design has the power to
                        transform businesses. We help companies of all sizes tell their stories through visually
                        stunning graphics, engaging marketing campaigns, and compelling content.
                    </p>
                    <p className={stylesAbout.aboutMission}>
                        Whether you need a logo that makes a statement, social media posts that convert, or videos that captivate,
                        we've got you covered. We're creative, collaborative, and results-oriented.
                    </p>

                    <ButtonI text="Let's Work Together" />
                </div>
                <div className={stylesAbout.Heroimgcont}>
                    <div className={stylesAbout.imgWrapper}>
                        <img
                            src="https://res.cloudinary.com/do5wu6ikf/image/upload/v1739211416/DesignGuy-Ltd/e5687b9f07d3691a5212dd68007f8076.svg"
                            alt="Creative team"
                            className={stylesAbout.heroImage}
                        />
                        <div className={stylesAbout.imageBg}></div>
                    </div>
                </div>
            </div>

            {/* Team Values Section */}
            <div className={stylesAbout.valuesSection} ref={teamRef}>
                <h2 className={stylesAbout.valueTitle}>Our Core Values</h2>
                <div className={stylesAbout.valuesGrid}>
                    <div className={stylesAbout.valueCard}>
                        <div className={stylesAbout.valueIcon}>🎨</div>
                        <h3>Creativity</h3>
                        <p>We push boundaries and think outside the box to deliver unique solutions.</p>
                    </div>
                    <div className={stylesAbout.valueCard}>
                        <div className={stylesAbout.valueIcon}>🤝</div>
                        <h3>Collaboration</h3>
                        <p>We work closely with our clients to understand their vision and goals.</p>
                    </div>
                    <div className={stylesAbout.valueCard}>
                        <div className={stylesAbout.valueIcon}>🎯</div>
                        <h3>Results</h3>
                        <p>We focus on designs that not only look good but also achieve business objectives.</p>
                    </div>
                    <div className={stylesAbout.valueCard}>
                        <div className={stylesAbout.valueIcon}>💡</div>
                        <h3>Innovation</h3>
                        <p>We constantly evolve our skills and stay ahead of design trends.</p>
                    </div>
                </div>
            </div>

            {/* CTA Section */}
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

export default About;