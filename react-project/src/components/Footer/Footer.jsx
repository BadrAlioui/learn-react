import './Footer.css'

const Footer = () => {
    const openingHours = 9;
    const closingHours = 7;
    const now = new Date();
    const currentHour = now.getHours();
    const currentDay = now.getDay();
    const isWeekDay = currentDay >= 1 && currentDay <= 6;
    const isOpen = isWeekDay && currentHour >= openingHours && currentHour < closingHours;
    return (
        <footer>
            
            {currentHour < openingHours || currentHour >= closingHours ? <p>We are currently closed.</p> : <p>Welcome to our website!</p>}
            <p>{now.toString()}</p>

        </footer>
    );
}

export default Footer;
