import React, { useState } from "react";
import { Document, Page } from "react-pdf"
import './pdf-pages-student.css';


export default function SinglePage(props) {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1); //setting 1 to show fisrt page

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
    setPageNumber(1);
  }

  function changePage(offset) {
    setPageNumber(prevPageNumber => prevPageNumber + offset);
  }

  function previousPage() {
    changePage(-1);
  }

  function nextPage() {
    changePage(1);
  }

  const { pdf } = props;

  return (
    <>
      <Document
        file={pdf}
        options={{ workerSrc: "/pdf.worker.js" }}
        onLoadSuccess={onDocumentLoadSuccess}
      >
        <Page pageNumber={pageNumber} />
      </Document>
      <div>
        <p className="pg">
          Page {pageNumber || (numPages ? 1 : "--")} of {numPages || "--"}
        </p>
        {/* <button className = "prev" type="button" disabled={pageNumber <= 1} onClick={previousPage}>
          Previous
        </button> */}
        {/* <button
          className = "next"
          type="button"
          disabled={pageNumber >= numPages}
          onClick={nextPage}
        >
          Next
        </button> */}
      </div>
    </>
  );
}