import ButtonI from '../../components/Buttons/ButtonI';
import stylesAbout from  './About.module.css';
import styles from "../FAQ/FAQ.module.css";
import landingStyle from '../landingPage/LandingPage.module.css';

const About = () => {
    return (
        <div className={stylesAbout.cont}>
            <div  className={stylesAbout.Herocont}>
                <div className={stylesAbout.Herotextcont}>
                    <div style={{padding: '0px'}} className={`${landingStyle.cardTitle} ${stylesAbout.col}`}>About Us</div>
                    <p className={`${landingStyle.cardDescription} ${stylesAbout.col}`}>
                        We're Designguy, a team of passionate creatives who believe that great design has the power to
                        transform businesses. We help companies of all sizes tell their stories through visually
                        stunning graphics, engaging marketing campaigns, and compelling content. Whether you need a logo
                        that makes a statement, social media posts that convert, or videos that captivate, we've got you
                        covered.
                        We're creative, collaborative, and results-oriented. Let's work together to elevate your brand
                        and achieve your marketing goals. This version is still relatively concise but provides a bit
                        more information about Designguy's approach and what makes them unique.
                        I hope this is a better fit!
                    </p>

                    <ButtonI/>
                </div>
                <div className={stylesAbout.Heroimgcont}>
                    <img
                        src="https://res.cloudinary.com/do5wu6ikf/image/upload/v1739211416/DesignGuy-Ltd/e5687b9f07d3691a5212dd68007f8076.svg"
                        alt="group"/>
                </div>

            </div>


            <div className={styles.faqCTA}>
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

export default About;