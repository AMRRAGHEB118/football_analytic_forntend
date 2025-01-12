import { RiPlayFill } from "react-icons/ri";

const NextArrow = (props: any) => {
    const { className, style, onClick } = props;
    return (
        <RiPlayFill
            className={className}
            style={{ ...style, display: "block", right: '-60px', width: '25px', height: '25px', color: '#E66648' }}
            onClick={onClick}
        />
    );
}

export default NextArrow;
