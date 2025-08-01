import landingStyle from '../../pages/landingPage/LandingPage.module.css'


const CaseStudy = ({text, fleximgae, subText, items = []}: {fleximgae: string, text: string, subText: string, items?: Array<{name: string, colorClass: string}>}) => {    return (
        <div  data-aos-delay="100" data-aos="fade-up" className={landingStyle.CaseStudyIndividualCtn}>
            <div className={landingStyle.CaseStudyflexImg}>
                <img src={fleximgae} alt="flexImage" style={{width: '100%', height: 'auto'}}/>
            </div>

            <div className={landingStyle.CaseStudyLowerCtn}>
                <div className={landingStyle.CaseStudyLowerTextCtn}>
                    <div className={landingStyle.CaseStudyLowerHeaderText}>{text}</div>
                    <div className={landingStyle.CaseStudyLowerSubText}>{subText}</div>
                </div>
                <div className={landingStyle.CaseStudyLowerItemCtn}>
                    {items.length > 0 ? (
                        items.map((item, index) => (
                            <div
                                key={index}
                                className={`${landingStyle.CaseStudyLowerItem} ${landingStyle[item.colorClass]}`}
                            >
                                {item.name}
                            </div>
                        ))
                    ) : (
                        <>
                            <div className={`${landingStyle.CaseStudyLowerItem} ${landingStyle.colourItem_}`}>Brand Strategy</div>
                            <div className={`${landingStyle.CaseStudyLowerItem} ${landingStyle.colourItem__}`}>Digital Ads</div>
                            <div className={`${landingStyle.CaseStudyLowerItem} ${landingStyle.colourItem___}`}>Social Media Graphics</div>
                            <div className={`${landingStyle.CaseStudyLowerItem} ${landingStyle.colourItem____}`}>Visual Identity</div>
                        </>
                    )}
                </div>
            </div>

        </div>
    );
};

export default CaseStudy;