import React from 'react';
import pdfMake from 'pdfmake/build/pdfmake.min';
import pdfFonts from 'pdfmake/build/vfs_fonts';

pdfMake.vfs = pdfFonts.pdfMake.vfs;
const pdfTemplate = {
	content: [
		'test',
	]
	
};
const generate = () => pdfMake.createPdf(pdfTemplate).download('file')

function App() {
  return (
    <div className="App">
        <button onClick={generate}>download pdf</button>
    </div>
  );
}

export default App;
