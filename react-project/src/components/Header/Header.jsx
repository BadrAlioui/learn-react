import { House, Phone, Mail } from "lucide-react";
import "./Header.css";

const Header = () => {
  return (
    <header className="header">
    <div className="item brand">
    <House className="icon "/>
      <span>Cambridge Rentals</span>
    </div>
    <div className="item contact">
        <Phone className="icon"/>
        <span>+1 (234) 567-8901</span>
    </div>
    <div className="item contact">
        <Mail className="icon"/>
        <span>info@cambridgerentals.com</span>
    </div>
    </header>
  );
};

export default Header;
