import { RiPlayReverseFill } from "react-icons/ri";

const PrevArrow = (props: any) => {
    const { className, style, onClick } = props;
    return (
        <RiPlayReverseFill
            className={className}
            style={{ ...style, display: "block", left: '-60px', width: '25px', height: '25px', color: '#E66648' }}
            onClick={onClick}
        />
    );
}

export default PrevArrow;
