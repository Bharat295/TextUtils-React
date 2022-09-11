// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForms from './components/TextForm';

function App() {
  return (
    <>     
      <Navbar tittle="Hello" />
      <div className="container my-3">
        <TextForms heading="Enter Your name " />
        
      </div>
    </>
  );
}

export default App;
