
import BlueButtonComponent from './components/BlueButtonComponent';
import ButtonComponent from './components/ButtonComponent';
import HooksComponent from './components/HooksComponent';

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
      <hr/> 
      <HooksComponent/>
    </div>
  );
}

export default App;
