import Header from "./components/Header/Header";
import Title from "./components/Title/Title";
import Footer from "./components/Footer/Footer";
import PropertyList from "./components/PropertyList/PropertyList";

const App = () => {
  return (
    <div>
      <Header />
      <main>
        <Title />
        <PropertyList />
      </main>
      <Footer />
    </div>
  );
};

export default App;
