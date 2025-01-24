import { useState } from 'react';
import  pricingStyle from './Pricing.module.css'
import styles from '../../pages/FAQ/FAQ.module.css'
import ButtonI from '../../components/Buttons/ButtonI';

const Pricing = () => {
    const plans = [
        { name: "Lite", price: 160.56, subtotal: 150.15, savings: "5%", features: [true, true, false, false, false, false] },
        { name: "Economy", price: 370.56, subtotal: 370.56, savings: "0%", features: [true, true, true, true, false, false] },
        { name: "Business", price: 756.56, subtotal: 752.15, savings: "30%", features: [true, true, true, true, true, false] },
        { name: "Premium", price: 1050.56, subtotal: 1050.15, savings: "30%", features: [true, true, true, true, true, true] },
    ];

    const features = [
        "Social Media Flyer",
        "Content Creation",
        "Video Edits & Motion Graphics",
        "Social Media Management",
        "Digital Marketing (Ads)",
        "Brand Consultation",
    ];

    const [selectedPlan, setSelectedPlan] = useState(plans[0]);

    return (
        <div className={pricingStyle.Ctn}>
            <div className={pricingStyle.PricingHeroCtn}>
                <div className={pricingStyle.PricingHeroTextCtn}>
                    <h1 className={pricingStyle.PricingHeroHeaderText}>Ready to get <br/>started</h1>
                    <p className={pricingStyle.PricingHeroSubText}>Choose the plan that’s right for your business.
                        Whether you’re just getting started with email marketing or well down the path to
                        personalization, we’re got you covered</p>
                </div>
                <div className={pricingStyle.PricingHeroImgCtn}>
                    <img className={pricingStyle.PricingHeroImg}
                         src="https://res.cloudinary.com/do5wu6ikf/image/upload/v1737654230/DesignGuy-Ltd/23rd%20jan/photo-careers-y0qwaijpg-t0wMA.jpe_vnrxjm.svg"
                         alt="man"/>
                </div>
            </div>

            <div className={pricingStyle.container}>
                <div className={pricingStyle.features}>
                    <div className={pricingStyle.toggle}>
                        <button className={pricingStyle.active}>Monthly</button>
                        <button>Yearly</button>
                    </div>
                    {features.map((feature, index) => (
                        <div key={index} className={pricingStyle.feature}>
                            <span>{feature}</span>
                            {selectedPlan.features[index] ? (
                                <span className={pricingStyle.check}><img
                                    src="https://res.cloudinary.com/do5wu6ikf/image/upload/v1737654228/DesignGuy-Ltd/23rd%20jan/No_czu56h.svg"
                                    alt="check"/></span>
                            ) : (
                                <span className={pricingStyle.cross}><img
                                    src="https://res.cloudinary.com/do5wu6ikf/image/upload/v1737654229/DesignGuy-Ltd/23rd%20jan/x-circle_1_iiich8.svg"
                                    alt="cross"/></span>
                            )}
                        </div>
                    ))}
                </div>

                <div className={pricingStyle.plans}>
                    {plans.map((plan) => (
                        <div
                            key={plan.name}
                            className={`${pricingStyle.plan} ${selectedPlan.name === plan.name ? pricingStyle.activePlan : ""}`}
                            onClick={() => setSelectedPlan(plan)}
                        >
                            <div className={pricingStyle.planName}>
                                {plan.name} <br/><span>{plan.savings} Savings</span>
                            </div>
                            <div className={pricingStyle.planPrice}>
                                <span>
                                    Total
                                </span> <br/> ${plan.price.toFixed(2)}
                            </div>

                            <div className={pricingStyle.planPrice}>
                                <span> Sub-Total </span><br/> ${plan.subtotal.toFixed(2)}
                            </div>
                        </div>
                    ))}
                </div>

                <div className={pricingStyle.details}>
                    <div className={pricingStyle.detailsHeader}>
                        <h3>{selectedPlan.name} Pack</h3>
                        <div className={pricingStyle.total}>
                            ${selectedPlan.price.toFixed(2)} <span>/project</span>
                        </div>
                    </div>

                    <p>Here is the detailed <br/> information or receipt <br/>for the plan you picked:</p>

                   <hr style={{ border: "1px solid #ddd", margin: "20px 0" }}/>

                    <div className={pricingStyle.detailsfooter}>
                        <ul>
                            {selectedPlan.features.map((feature, index) =>
                                feature ? <li key={index}><img src="https://res.cloudinary.com/do5wu6ikf/image/upload/v1737658493/DesignGuy-Ltd/23rd%20jan/check_1_zn3iq9.svg" alt="check"/>{features[index]}</li> : null
                            )}
                        </ul>

                        <button className={pricingStyle.confirm}>Confirm Order <img src="https://res.cloudinary.com/do5wu6ikf/image/upload/v1737273906/DesignGuy-Ltd/19th%20Jan/aVector_zz8bwx.svg" alt="next"/></button>
                    </div>

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

export default Pricing;