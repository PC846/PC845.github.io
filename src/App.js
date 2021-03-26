import React from 'react';
import { Pre } from "evergreen-ui";
//import Calculator from './components/calculator/Calculator';
import CitySvg from './components/citysvg/CitySvg';
// import CalculatorHookForm from './components/calculator/CalculatorHookForm';
import './css/App.css';
import NavBar from "./components/navbar/NavBar";
import MainBody from "./components/mainbody/MainBody";
import LineChart from "./components/linechart/LineChart";
import Form from "./components/Form";
import useStore from "./useStore";
import Amortization from "./components/amortization/Amortization";



function App() {
  const [store, dispatch] = useStore();

  
  return (
    
    <main>
    
      <NavBar />

      
      <CitySvg />
      
      {/*<Calculator />*}
      {/* <CalculatorHookForm /> */}

      <div className="form">
        <div className="sub-div"></div>
        <Form store={store} dispatch={dispatch} />
        {false && <Pre>{JSON.stringify(store, null, 2)}</Pre>}
        <Amortization store={store} />
       
       
    </div>

    <div className="wrapper-box wrapper-box--stripe">
   
    
      <div id="calc-form" class="animated-title">
        <div class="text-top">
          <div>
            <span>now featuring</span>
            <span> mudd loan calculator</span>
          </div>
        </div>
        <div class="text-bottom">
          <div>It budgets so you don't have to.</div>
        </div>
    </div>
    <svg  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#3a3a3a" fill-opacity="1" d="M0,192L48,176C96,160,192,128,288,133.3C384,139,480,181,576,176C672,171,768,117,864,128C960,139,1056,213,1152,224C1248,235,1344,181,1392,154.7L1440,128L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path></svg>
    
    <h3> Our loan calculator will help you determine the monthly payments on a loan. 
    <br />Simply enter the loan amount, term and interest rate in the fields. </h3>
    <svg className="bottom-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#3a3a3a" fill-opacity="1" d="M0,320L48,309.3C96,299,192,277,288,266.7C384,256,480,256,576,266.7C672,277,768,299,864,304C960,309,1056,299,1152,272C1248,245,1344,203,1392,181.3L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>
    <MainBody />
    
    
    </div>
    

    <canvas id="Mycanvas"></canvas>
      
     
    </main>
  );
}



export default App;
