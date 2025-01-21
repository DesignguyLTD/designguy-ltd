import ButtonI from '../../components/Buttons/ButtonI';
import ButtonII from '../../components/Buttons/ButtonII';
import landingStyle from './LandingPage.module.css'


const LandingPage = () => {
    return (
        <div className={landingStyle.LandingContainer}>

            <div  className={landingStyle.heroCtn1}>
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
                    We have crafted ideas, products and  experiences for reputable organizations in order to increase their brand visibility in their field
                </p>
                <div className={landingStyle.heroCTABtn}>
                    <ButtonI/>
                    <ButtonII/>
                </div>
            </div>

        </div>
    );
};

export default LandingPage;