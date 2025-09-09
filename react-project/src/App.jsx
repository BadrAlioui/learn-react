

const ColorfulComponent = ({ color = 'blue' }) => {
  return (
    <div style={{ color: color}}>
      <h1>This component is {color}!</h1>
    </div>
  );
}


 
const App = () => {
  return (
    <>
      <ColorfulComponent color='blue' />
      <ColorfulComponent color='red' />
      <ColorfulComponent color='green' />
      <ColorfulComponent/>
    </>
  );
};

export default App;