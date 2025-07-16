import React, { useState } from "react";
import styles from "./FAQ.module.css";
import ButtonI from "../../components/Buttons/ButtonI";
import stylesAbout from "../About/About.module.css";

interface FAQItem {
    question: string;
    answer: string;
}

const FAQ: React.FC = () => {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    const faqItems: FAQItem[] = [
        {
            question: "What is Designguy and how does it work?",
            answer: "Designguy is an agricultural commodity exchange platform that facilitates buying and selling of agricultural products. It connects buyers and sellers from across the world and provides a transparent marketplace for transactions."
        },
        {
            question: "How can I participate in Designguy?",
            answer: "You can participate by registering an account on our platform and completing the verification process."
        },
        {
            question: "How are the prices determined on Designguy?",
            answer: "Prices are determined through market dynamics, based on supply and demand from verified buyers and sellers."
        },
        {
            question: "Is there a minimum or maximum quantity for trading on Designguy?",
            answer: "Trading limits vary by commodity type and market conditions. Please check specific product listings for details."
        },
        {
            question: "Does Straddle provide any guarantees for the quality of commodities traded?",
            answer: "Yes, we maintain strict quality control standards and verification processes for all traded commodities."
        },
        {
            question: "How are payments handled on Straddle?",
            answer: "Payments are processed through our secure payment gateway with multiple payment options available."
        },
        {
            question: "Can I trade internationally on Designguy?",
            answer: "Yes, our platform supports international trade with proper documentation and compliance."
        },
        {
            question: "What are the fees or charges associated with using Designguy?",
            answer: "Fee structures vary based on transaction type and volume. Please refer to our pricing page for details."
        },
        {
            question: "How can I contact customer support if I have any issues on Designguy?",
            answer: "Our customer support team is available 24/7 through chat, email, and phone support."
        }
    ];

    const toggleFAQ = (index: number) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <div  className={styles.faqContainer}>
            <h1 className={styles.title}>Frequently Asked Questions</h1>
            <div className={styles.faqList}>
                {faqItems.map((item, index) => (
                    <div
                        key={index}
                        className={`${styles.faqItem} ${
                            activeIndex === index ? styles.active : ""
                        }`}
                        onClick={() => toggleFAQ(index)}
                    >
                        <div className={styles.question}>
                            {item.question}
                            <span className={styles.icon}>
                {activeIndex === index ? <img src="https://res.cloudinary.com/do5wu6ikf/image/upload/v1737273906/DesignGuy-Ltd/19th%20Jan/Group_35538_ul5cio.svg" alt="down"/> : <img src="https://res.cloudinary.com/do5wu6ikf/image/upload/v1737273906/DesignGuy-Ltd/19th%20Jan/Group_35539_djfbuj.svg" alt="close"/>}
              </span>
                        </div>
                        <div
                            className={styles.answer}
                            style={{
                                maxHeight: activeIndex === index ? "200px" : "0",
                            }}
                        >
                            {item.answer}
                        </div>
                    </div>
                ))}
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

export default FAQ;
