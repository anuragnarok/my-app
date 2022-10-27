
import BlueButtonComponent from './components/BlueButtonComponent';
import BoxComponent from './components/BoxComponent';
import ButtonComponent from './components/ButtonComponent';
import HooksComponent from './components/HooksComponent';

function App() {
  let name = 'Anurag'
  return (
    <div className="App">
     {name}
     <h1>My First Component</h1>
     <hr/>
     <h3>Solution 1.</h3>
     <BlueButtonComponent/>
     <hr/>
     <h3>Solution 2.</h3>
     <ButtonComponent label={'firstButton'} col="red"/>
     <ButtonComponent label={'secondButton'} col="blue"/>
      <hr/> <br/>
      <h3>SOlution 3.</h3>
      <br/>
      <HooksComponent/>
      <hr/>
      <BoxComponent/>
    </div>
  );
}

export default App;
