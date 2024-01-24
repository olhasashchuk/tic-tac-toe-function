import PropTypes from "prop-types";

function Square(props) {
    const { value, onClick } = props;
    return (
        <button onClick={onClick} className="square border border-success  border-2">
            <span className={value === 'X' ? 'text-success text' : 'text-danger text'}>{value}</span>
        </button>
    )
}

Square.propTypes = {
    value: PropTypes.oneOf(['X', 'O']),
    onClick: PropTypes.func
}

export default Square
