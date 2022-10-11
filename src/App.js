
import BlueButtonComponent from './components/BlueButtonComponent';
import ButtonComponent from './components/ButtonComponent';

function App() {
  let name = 'Anurag'
  return (
    <div className="App">
     {name}
     <h1>My First Component</h1>
     <hr/>
     <BlueButtonComponent/>
     <hr/>
     <ButtonComponent label={'firstButton'} col="red"/>
     <ButtonComponent label={'secondButton'} col="blue"/>

    </div>
  );
}

export default App;
