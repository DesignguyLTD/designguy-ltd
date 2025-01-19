// footer.tsx
import footerStyle from './footer.module.css'

const Footer = () => {
    return (
        <footer className={footerStyle.ctn}>
            <div className={footerStyle.leftCtn}>
                <h3 className={footerStyle.leftCtnHeaderText}>
                    <span className={footerStyle.makeBlue}>Designguy </span>
                    offers you <br/> everything you need, <br/> all in one place.
                </h3>
                <br/>


                <div className={footerStyle.leftCtnCTA}>Contact Us Today</div>
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
                        <div className={footerStyle.rightCtnHeader}>Learn</div>
                        <ul className={footerStyle.rightCtnUl}>
                            <li className={footerStyle.rightCtnLi}>Demo</li>
                            <li className={footerStyle.rightCtnLi}>Developers</li>
                            <li className={footerStyle.rightCtnLi}>How To</li>
                        </ul>
                    </div>

                    <div>
                        <div className={footerStyle.rightCtnHeader}>Company</div>
                        <ul className={footerStyle.rightCtnUl}>
                            <li className={footerStyle.rightCtnLi}>Terms & Service</li>
                            <li className={footerStyle.rightCtnLi}>Privacy Policy</li>
                        </ul>
                    </div>
                </div>

                <div className={footerStyle.rightCtnBottomCtn}>
                    <img
                        src="https://res.cloudinary.com/do5wu6ikf/image/upload/v1737273906/DesignGuy-Ltd/19th%20Jan/Frame_56504_msqc3p.svg"
                        alt="linkedin"
                    />
                    <img
                        src="https://res.cloudinary.com/do5wu6ikf/image/upload/v1737273906/DesignGuy-Ltd/19th%20Jan/Frame_56503_qyomay.svg"
                        alt="insta"
                    />
                    <img
                        src="https://res.cloudinary.com/do5wu6ikf/image/upload/v1737273906/DesignGuy-Ltd/19th%20Jan/Frame_56502_bhgfng.svg"
                        alt="x"
                    />
                </div>
            </div>
        </footer>
    );
};

export default Footer;