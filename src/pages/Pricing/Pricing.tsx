import { useState } from 'react';
import  pricingStyle from './Pricing.module.css'
import styles from '../../pages/FAQ/FAQ.module.css'
import ButtonI from '../../components/Buttons/ButtonI';
import PricingComponent from "./PricingComponent.tsx";

const Pricing = () => {
    const plans = [
        { name: "Lite", price: 120000, subtotal: 278988, savings: "43%", features: [true, true, false, false, false, false] },
        { name: "Economy", price: 250000, subtotal: 504988, savings: "49.5%", features: [true, true, true, true, false, false] },
        { name: "Business", price: 550000, subtotal: 1033980, savings: "54%", features: [true, true, true, true, true, false] },
        { name: "Premium", price: 995000, subtotal: 1784960, savings: "57.7%", features: [true, true, true, true, true, true] },
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

    // Define pricing options
    const pricingOptions = [
        {
            id: 'lite',
            name: 'Lite',
            discount: 120000,
            total: 278988,
            discountPercent: 43
        },
        {
            id: 'economy',
            name: 'Economy',
            discount: 120000,
            total: 278988,
            discountPercent: 49.5
        },
        {
            id: 'business',
            name: 'Business',
            discount: 550000,
            total: 1033980,
            discountPercent: 53.2
        },
        {
            id: 'premium',
            name: 'Premium',
            discount: 995000,
            total: 1784960,
            discountPercent: 57.7
        }
    ];

    // Define business package
    const businessPackage = {
        services: [
            { name: '5 Socials Media Flyers', price: 74995, frequency: 'week' },
            { name: '3 Video Editing', price: 60000, frequency: 'week' },
            { name: '8 Curated Content', price: 66000, frequency: 'week' },
            { name: 'Social Media Ads (Meta)', price: 80000, frequency: 'month' },
            { name: 'Social Media Management', price: 150000, frequency: 'Month' }
        ],
        totalPrice: 1033980,
        discountPrice: 550000,
        note: 'This package will provide 3 Flyers and contents of the above values per week for 4 weeks'
    };

    const litePackage = {
        services: [
            { name: '5 Socials Media Flyers', price: 74995, frequency: 'week' },
            { name: '3 Video Editing', price: 60000, frequency: 'week' },
            { name: '8 Curated Content', price: 66000, frequency: 'week' },
            { name: 'Social Media Ads (Meta)', price: 80000, frequency: 'month' },
            { name: 'Social Media Management', price: 150000, frequency: 'Month' }
        ],
        totalPrice: 1033980,
        discountPrice: 550000,
        note: 'This package will provide 3 Flyers and contents of the above values per week for 4 weeks'
    };

    const economyPackage = {
        services: [
            { name: '5 Socials Media Flyers', price: 74995, frequency: 'week' },
            { name: '3 Video Editing', price: 60000, frequency: 'week' },
            { name: '8 Curated Content', price: 66000, frequency: 'week' },
            { name: 'Social Media Ads (Meta)', price: 80000, frequency: 'month' },
            { name: 'Social Media Management', price: 150000, frequency: 'Month' }
        ],
        totalPrice: 1033980,
        discountPrice: 550000,
        note: 'This package will provide 3 Flyers and contents of the above values per week for 4 weeks'
    };

    const premiumPackage = {
        services: [
            { name: '5 Socials Media Flyers', price: 74995, frequency: 'week' },
            { name: '3 Video Editing', price: 60000, frequency: 'week' },
            { name: '8 Curated Content', price: 66000, frequency: 'week' },
            { name: 'Social Media Ads (Meta)', price: 80000, frequency: 'month' },
            { name: 'Social Media Management', price: 150000, frequency: 'Month' }
        ],
        totalPrice: 1033980,
        discountPrice: 550000,
        note: 'This package will provide 3 Flyers and contents of the above values per week for 4 weeks'
    };

    return (
        <div data-aos-delay="300" data-aos="fade-up" className={pricingStyle.Ctn}>
            <div  data-aos-delay="300" data-aos="fade-down" className={pricingStyle.PricingHeroCtn}>
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

            <div  className={pricingStyle.container}>
                {/*<div className={pricingStyle.features}>*/}
                {/*    <div className={pricingStyle.toggle}>*/}
                {/*        <div className={pricingStyle.toggleDuration}>*/}
                {/*            <button className={pricingStyle.active}>Monthly</button>*/}
                {/*            <button className={pricingStyle.active2}>Yearly</button>*/}
                {/*        </div>*/}

                {/*    </div>*/}
                {/*    {features.map((feature, index) => (*/}
                {/*        <div key={index} className={pricingStyle.feature}>*/}
                {/*            <span>{feature}</span>*/}
                {/*            {selectedPlan.features[index] ? (*/}
                {/*                <span className={pricingStyle.check}><img*/}
                {/*                    src="https://res.cloudinary.com/do5wu6ikf/image/upload/v1737654228/DesignGuy-Ltd/23rd%20jan/No_czu56h.svg"*/}
                {/*                    alt="check"/></span>*/}
                {/*            ) : (*/}
                {/*                <span className={pricingStyle.cross}><img*/}
                {/*                    src="https://res.cloudinary.com/do5wu6ikf/image/upload/v1737654229/DesignGuy-Ltd/23rd%20jan/x-circle_1_iiich8.svg"*/}
                {/*                    alt="cross"/></span>*/}
                {/*            )}*/}
                {/*        </div>*/}
                {/*    ))}*/}
                {/*</div>*/}

                <div  data-aos-delay="300" data-aos="fade-up" className={pricingStyle.plans}>
                    {/*{plans.map((plan) => (*/}
                    {/*    <div*/}
                    {/*        key={plan.name}*/}
                    {/*        className={`${pricingStyle.plan} ${selectedPlan.name === plan.name ? pricingStyle.activePlan : ""}`}*/}
                    {/*        onClick={() => setSelectedPlan(plan)}*/}
                    {/*    >*/}
                    {/*        <div className={pricingStyle.planName}>*/}
                    {/*            {plan.name} <br/><span>{plan.savings} off</span>*/}
                    {/*        </div>*/}
                    {/*        <div className={pricingStyle.planPrice}>*/}
                    {/*            <span>*/}
                    {/*                Total*/}
                    {/*            </span> <br/>*/}
                    {/*            <s>₦{plan.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</s>                            </div>*/}

                    {/*        <div className={pricingStyle.planPrice2}>*/}
                    {/*            <span> Discount </span><br/><div></div> ₦{plan.subtotal.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}*/}
                    {/*        </div>*/}
                    {/*    </div>*/}
                    {/*))}*/}

                    <PricingComponent
                        options={pricingOptions}
                        businessPackage={businessPackage}
                        setSelectedPlan={setSelectedPlan}
                        plans={plans}
                        premiumPackage={premiumPackage}
                        economyPackage={economyPackage}
                        litePackage={litePackage}
                    />
                </div>

                <div  data-aos-delay="300" data-aos="fade-up" className={pricingStyle.details}>
                    <div className={pricingStyle.detailsHeader}>
                        <h3>{selectedPlan.name} Pack</h3>
                        <div className={pricingStyle.total}>
                            {/*selectedPlan.subtotal or selectedPlan.price*/}
                            ₦{selectedPlan.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")} <span>/project</span>
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

            <div  data-aos-delay="300" data-aos="fade-up" className={styles.faqCTA}>
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