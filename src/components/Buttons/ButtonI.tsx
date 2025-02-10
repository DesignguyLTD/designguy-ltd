import BtnStyle from './ButtonI.module.css'

const ButtonI = ({ onClick }: { onClick?: React.MouseEventHandler<HTMLDivElement> })  => {
    return (
        <div className={BtnStyle.ctn} onClick={onClick}>
            Start a conversation <img src="https://res.cloudinary.com/do5wu6ikf/image/upload/v1737273906/DesignGuy-Ltd/19th%20Jan/aVector_zz8bwx.svg" alt="arrow"/>
        </div>
    );
};

export default ButtonI;