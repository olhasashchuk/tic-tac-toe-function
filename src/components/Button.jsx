export function Button (props) {
    const { children, onClick, className } = props;
    return <button
        className={`btn ${className}`}
        onClick={onClick}
    > {children}
    </button>
}