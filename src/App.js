import React from 'react';
import logo from './logo.svg';
import pdfMake from 'pdfmake/build/pdfmake.min';
import pdfFonts from 'pdfmake/build/vfs_fonts';
import './App.css';

pdfMake.vfs = pdfFonts.pdfMake.vfs;
const pdfTemplate = {
	content: [
		'First paragraph',
		'Another paragraph, this time a little bit longer to make sure, this line will be divided into at least two lines'
	]
	
};
const generate = () => pdfMake.createPdf(pdfTemplate).download('file')

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <button onClick={generate}>download pdf</button>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
