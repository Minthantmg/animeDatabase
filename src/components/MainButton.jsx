import { Link } from "react-router-dom";

function MainButton({ color, bg, hover, text, goTo }) {
    const goTop = () => {
        window.scrollTo({
            top: 0,
        });
    };
    return (
        <Link
            onClick={goTop}
            to={goTo}
            className={`${color} ${bg} border text-center text-sm uppercase px-6 py-2 mr-4 mb-4 rounded-sm ${hover}`}
        >
            {text}
        </Link>
    );
}

export default MainButton;
