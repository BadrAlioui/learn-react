const GoogleComponent = () => {
    const containerStyle = {
        color: "#4285F4",
        fontFamily: "Arial, sans-serif",
        textAlign: "center",
        marginTop: "20px"
    };

    const paragraphStyle = {
        color: "#34A853",
        fontSize: "1.2rem"
    };
    return (
        <div style={containerStyle}>
            <h1>Google</h1>
            <p style={paragraphStyle}>Organizing the world's information and making it universally accessible and useful.</p>
        </div>
    );
};

export default GoogleComponent;