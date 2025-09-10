const SpeedMessage = ({ speed }) => {
    const speedLimit = 50;
    const message =
        speed <= speedLimit ? (
            <p>You are within the speed limit.</p>
        ) : (
            <p style={{ color: 'red' }}>You are exceeding the speed limit!</p>
        );

    const backgroundColor = speed <= speedLimit ? 'lightgreen' : 'lightcoral';

    const messageStyle = {
        fontWeight: 'bold',
        fontSize: '1.2em',
        textAlign: 'center',
        padding: '10px',
        borderRadius: '5px',
        margin: '10px 0'
    };
    return (
        <div style={{ backgroundColor }}>
            <p style={messageStyle}>Your speed is {speed} km/h.</p>
            <p style={messageStyle}>{message}</p>
        </div>
    );
};

export default SpeedMessage;
