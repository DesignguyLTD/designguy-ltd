// footer.tsx
import footerStyle from './footer.module.css'
import { FaFacebook, FaLinkedinIn, FaInstagram } from 'react-icons/fa'

const Footer = () => {
    return (
        <footer className={footerStyle.ctn}>
            <div className={footerStyle.leftCtn}>
                <h3 className={footerStyle.leftCtnHeaderText}>
                    <span className={footerStyle.makeBlue}>Designguy </span>
                    offers you <br/> everything you need, <br/> all in one place.
                </h3>
                <br/>


                <div className={footerStyle.leftCtnCTA} onClick={() => window.open('https://api.whatsapp.com/send/?phone=2349113460989&text=Hello+DesignGuy%21+%EF%BF%BD%0AI+came+across+your+website+and+I%E2%80%99m+really+interested+in+your+services.%0AI%E2%80%99m+looking+for+support+with+one+or+more+of+the+following%3A%0A-+Social+Media+Flyer%0A-+Content+Creation%0A-+Video+Edits+%26+Motion+Graphics%0A-+Social+Media+Management%0A-+Digital+Marketing+%28Ads%29%0A-+Brand+Consultation%0A%0ACould+you+kindly+guide+me+on+your+packages%2C+pricing%2C+and+how+to+get+started%3F&type=phone_number&app_absent=0', '_blank')} >Contact Us Today</div>
            </div>

            <div className={footerStyle.rightCtn}>
                <div>
                    <div className={footerStyle.rightCtnHeader}>Our Location</div>
                    <div className={footerStyle.rightCtnLocation}>
                        Victoria Island, Lagos Nigeria
                        <img
                            src="https://res.cloudinary.com/do5wu6ikf/image/upload/v1737273908/DesignGuy-Ltd/19th%20Jan/share_ci0l0b.svg"
                            alt="link"
                        />
                    </div>
                </div>

                <div className={footerStyle.rightCtnMiddleCtn}>
                    <div>
                        {/*<div className={footerStyle.rightCtnHeader}>Learn</div>*/}
                      <ul className={footerStyle.rightCtnUl}>
                            <li className={footerStyle.rightCtnLi}><a href="#/about-us" onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>About</a></li>
                            <li className={footerStyle.rightCtnLi}><a href="#/pricing" onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>Pricing</a></li>
                            <li className={footerStyle.rightCtnLi}><a href="#/faq" onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>FAQ</a></li>
                        </ul>
                    </div>

                    <div>
                        {/*<div className={footerStyle.rightCtnHeader}>Company</div>*/}
                        <ul className={footerStyle.rightCtnUl}>
                            <li className={footerStyle.rightCtnLi}>Terms & Service</li>
                            <li className={footerStyle.rightCtnLi}>Privacy Policy</li>
                        </ul>
                    </div>
                </div>

                <div className={footerStyle.rightCtnBottomCtn}>
                    <a href="https://www.linkedin.com/company/designguyltd/" target="_blank" rel="noopener noreferrer">
                        <FaLinkedinIn />
                    </a>
                    <a href="https://www.instagram.com/designguyltd?igsh=MTFzcHlnN2podjczeA==" target="_blank" rel="noopener noreferrer">
                        <FaInstagram />
                    </a>
                    <a href="https://www.facebook.com/share/1G7TBAjx3X/" target="_blank" rel="noopener noreferrer">
                        <FaFacebook />
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;