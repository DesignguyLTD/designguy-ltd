import BtnStyle from './ButtonI.module.css'


const ButtonII = ({ onClick }: { onClick?: React.MouseEventHandler<HTMLDivElement> }) => {
    return (
        <div className={BtnStyle.ctn2} onClick={onClick}>
           Check Our Pricing
        </div>
    );
};

export default ButtonII;