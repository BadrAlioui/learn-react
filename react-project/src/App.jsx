import GoogleComponent from "./components/GoogleComponent";
import AppleComponent from "./components/AppleComponent";
import AmazonComponent from "./components/AmazonComponent";

const App = () => {
  return (
    <div style={{ textAlign: "center", marginTop: "50px" , fontSize: "24px" , color: "blue"}}>
      <GoogleComponent />
      <AppleComponent />
      <AmazonComponent />
    </div>
  );
};

export default App;
