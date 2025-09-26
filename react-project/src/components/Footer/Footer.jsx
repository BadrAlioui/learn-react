import { Clock } from "lucide-react";
import "./Footer.css";

// Composant Footer affichant l'état d'ouverture selon l'heure et le jour
const Footer = () => {
  const openingHours = 9; // Heure d'ouverture (9h)
  const closingHours = 7; // Heure de fermeture (19h)
  const now = new Date(); // Date et heure actuelles
  const currentHour = now.getHours(); // Heure actuelle
  const currentDay = now.getDay(); // Jour actuel (0 = dimanche, 6 = samedi)
  const isWeekDay = currentDay >= 1 && currentDay <= 6; // True si jour de semaine (lundi-samedi)
  const isOpen =
    isWeekDay && currentHour >= openingHours && currentHour < closingHours; // True si ouvert

  // Élément affiché si ouvert (actuellement vide)
  const openElement = (
    <>
      <div className="message">
        <Clock className="icon" />

        <span className="status open">We are currently open!</span>
      </div>
      <div>
        <span>Call us at 123-456-7890</span>
      </div>
    </>
  );

  // Élément affiché si fermé (actuellement vide)
  const closeElement = (
    <>
      <div className="message">
        <Clock className="icon" />
        <span className="status closed">We are currently closed!</span>
      </div>
      <div style={{ marginTop: "0.5rem" }}>
        <span>Call us at 123-456-7890</span>
      </div>
    </>
  );

  return (
    <footer className="footer">{isOpen ? openElement : closeElement}</footer>
  );
};

export default Footer;
