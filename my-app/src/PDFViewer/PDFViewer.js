import React, { useState } from 'react'
import { Document,Page } from 'react-pdf/dist/esm/entry-webpack';
import './PDFViewer.css';

const PDFViewer = () => {
    const[numPagesetNumPages]=useState(null);
    const[pageNumber,setPageNumber]=useState(1);

   
  return (
    <div>PDFViewer</div>
  )
}

export default PDFViewer;