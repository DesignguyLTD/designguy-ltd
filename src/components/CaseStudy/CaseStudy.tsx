import landingStyle from '../../pages/landingPage/LandingPage.module.css'


const CaseStudy = ({fleximgae}: {fleximgae: string}) => {
    return (
        <div className={landingStyle.CaseStudyIndividualCtn}>
            <div className={landingStyle.CaseStudyflexImg}>
                <img src={fleximgae} alt="flexImage" style={{width: '100%', height: 'auto'}}/>
            </div>

            <div className={landingStyle.CaseStudyLowerCtn}>
                <div className={landingStyle.CaseStudyLowerTextCtn}>
                    <div className={landingStyle.CaseStudyLowerHeaderText}>Beryl elegancia</div>
                    <div className={landingStyle.CaseStudyLowerSubText}>Fashion redefined in luxury</div>
                </div>
                <div className={landingStyle.CaseStudyLowerItemCtn}>
                    <div className={`${landingStyle.CaseStudyLowerItem} ${landingStyle.colourItem_}`}>Brand
                        Strategy
                    </div>
                    <div className={`${landingStyle.CaseStudyLowerItem} ${landingStyle.colourItem__}`}>Digital Ads
                    </div>
                    <div className={`${landingStyle.CaseStudyLowerItem} ${landingStyle.colourItem___}`}>Social Media
                        Graphics
                    </div>
                    <div className={`${landingStyle.CaseStudyLowerItem} ${landingStyle.colourItem____}`}>
                        Visual Identity
                    </div>
                </div>
            </div>

        </div>
    );
};

export default CaseStudy;