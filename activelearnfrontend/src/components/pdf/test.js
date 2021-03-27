import React from 'react';
import { Document, Page } from 'react-pdf';

import samplePDF from './sample.pdf';

export default function Test() {
  return (
    <Document file={samplePDF} options={{workerSrc: "pdf.worker.js"}}>
      <Page pageNumber={7} />
    </Document>
  );
}