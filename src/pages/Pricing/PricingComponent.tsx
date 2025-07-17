import React, { useState } from 'react';
import styles from './PricingComponent.module.css';

interface PricingOption {
    id: string;
    name: string;
    discount: number;
    total: number;
    discountPercent: number;
}

interface BusinessServiceItem {
    name: string;
    price: number;
    frequency: string;
}

interface Plan {
    name: string;
    price: number;
    subtotal: number;
    savings: string;
    features: boolean[];
}

interface PricingComponentProps {
    options: PricingOption[];
    businessPackage: {
        services: BusinessServiceItem[];
        totalPrice: number;
        discountPrice: number;
        note?: string;
    };
    premiumPackage: {
        services: BusinessServiceItem[];
        totalPrice: number;
        discountPrice: number;
        note?: string;
    };
    economyPackage: {
        services: BusinessServiceItem[];
        totalPrice: number;
        discountPrice: number;
        note?: string;
    };
    litePackage: {
        services: BusinessServiceItem[];
        totalPrice: number;
        discountPrice: number;
        note?: string;
    };
    setSelectedPlan: (plan: Plan) => void;
    plans: Plan[];
}

const PricingComponent: React.FC<PricingComponentProps> = ({
                                                               options,
                                                               businessPackage,
                                                               premiumPackage,
                                                               economyPackage,
                                                               litePackage,
                                                               setSelectedPlan,
                                                               plans
                                                           }) => {
    const [selectedOption, setSelectedOption] = useState<string | null>(
        options.find(option => option.id === 'lite')?.id || null
    );
    const [openPackageDetails, setOpenPackageDetails] = useState<boolean>(false);
    const [currentPackage, setCurrentPackage] = useState<'business' | 'premium' | 'economy' | 'lite'>('lite');

    const handleOptionSelect = (optionId: string) => {
        setSelectedOption(optionId);

        // Find corresponding plan and update the selected plan in parent component
        const selectedPlanInfo = plans.find(plan => plan.name.toLowerCase() === optionId.toLowerCase());
        if (selectedPlanInfo) {
            setSelectedPlan(selectedPlanInfo);
        }

        // Determine which package to show and open details
        if (['business', 'premium', 'economy', 'lite'].includes(optionId)) {
            setOpenPackageDetails(true);
            setCurrentPackage(optionId as 'business' | 'premium' | 'economy' | 'lite');
        } else {
            setOpenPackageDetails(false);
        }
    };

    const formatCurrency = (amount: number): string => {
        return `₦${amount.toLocaleString()}`;
    };

    const renderOption = (option: PricingOption) => {
        const isSelected = selectedOption === option.id;

        // Find corresponding plan for features
        // const planInfo = plans.find(plan => plan.name.toLowerCase() === option.id.toLowerCase());

        return (
            <div
                key={option.id}
                className={`${styles.option} ${isSelected ? styles.selected : ''} ${styles[option.id.toLowerCase()]}`}
                onClick={() => handleOptionSelect(option.id)}
            >
                <div className={styles.optionHeader}>
                    <div className={styles.selectionArea}>
                        <div className={`${styles.radioButton} ${isSelected ? styles.checked : ''}`}>
                            {isSelected && <div className={styles.innerCircle} />}
                        </div>
                        <div className={styles.optionName}>{option.name}</div>
                    </div>

                    <div className={styles.discountTag}>
                        {option.discountPercent}% off
                    </div>
                </div>

                <div className={styles.priceInfo}>
                    <div className={styles.priceSection}>
                        <div className={styles.priceLabel}>Total</div>
                        <div className={styles.originalPrice}>{formatCurrency(option.total)}</div>
                    </div>

                    <div className={styles.priceSection}>
                        <div className={styles.priceLabel}>Discount</div>
                        <div className={styles.discountPrice}>{formatCurrency(option.discount)}</div>
                    </div>
                </div>
            </div>
        );
    };

    const getSelectedPackage = () => {
        switch (currentPackage) {
            case 'business':
                return businessPackage;
            case 'premium':
                return premiumPackage;
            case 'economy':
                return economyPackage;
            case 'lite':
                return litePackage;
            default:
                return null;
        }
    };

    const renderPackageDetails = () => {
        const selectedPackage = getSelectedPackage();
        if (!selectedPackage) return null;

        return (
            <div className={styles.businessPackage}>
                <div className={styles.businessHeader}>
                    <button
                        className={styles.backButton}
                        onClick={() => setOpenPackageDetails(false)}
                    >
                        ← {currentPackage.charAt(0).toUpperCase() + currentPackage.slice(1)}
                    </button>
                </div>

                <div className={styles.servicesList}>
                    {selectedPackage.services.map((service, index) => (
                        <div key={index} className={styles.serviceItem}>
                            <div className={styles.serviceName}>{service.name}</div>
                            <div className={styles.servicePrice}>
                                {formatCurrency(service.price)} <span className={styles.frequency}>per {service.frequency}</span>
                            </div>
                        </div>
                    ))}
                </div>

                <div className={styles.businessPricing}>
                    <div className={styles.businessTotal}>
                        <div className={styles.totalLabel}>Total</div>
                        <div className={styles.totalAmount}>{formatCurrency(selectedPackage.totalPrice)}</div>
                    </div>

                    <div className={styles.businessDiscount}>
                        <div className={styles.discountLabel}>Discount Price</div>
                        <div className={styles.discountAmount}>{formatCurrency(selectedPackage.discountPrice)}</div>
                    </div>
                </div>

                {selectedPackage.note && (
                    <div className={styles.packageNote}>
                        <span className={styles.noteLabel}>Note:</span> {selectedPackage.note}
                    </div>
                )}
            </div>
        );
    };

    return (
        <div className={styles.pricingContainer}>
            {options.map(option => {
                const isSelected = selectedOption === option.id && openPackageDetails;
                return isSelected ? (
                    <div key={option.id} className={`${styles.option} ${styles.selected2} ${styles[option.id.toLowerCase()]}`}>
                        {currentPackage === option.id.toLowerCase() && renderPackageDetails()}
                    </div>
                ) : (
                    renderOption(option)
                );
            })}
        </div>
    );
};

export default PricingComponent;