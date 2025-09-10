const TodoItem = ({ description, finished }) => {
    const listStyle = {
        border: '1px solid #ccc',
        margin: '5px',
        padding: '10px',
        borderRadius: '5px',
        backgroundColor: finished ? '#e0ffe0' : '#fff0f0'
    };
    return (
        <li style={listStyle}>
            {description}
            {finished && <span>✅</span>}
        </li>
    );
};

export default TodoItem;
