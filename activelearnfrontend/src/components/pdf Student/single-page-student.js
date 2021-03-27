import React, { useState } from "react";
import { Document, Page } from "react-pdf"
import './pdf-pages-student.css';

class SinglePage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      pageNumber: 1,
      numPages: 2
    }
    console.log("SINGLE PAGE TEACHER")
  }

  componentDidMount = () => {
    console.log(this.state.pageNumber || (this.state.numPages ? 1 : "--"))
    console.log(this.state.numPages || "--")
  }

  onDocumentLoadSuccess = ({numPages}) => {
    this.setState({
      pageNumber: 1,
      numPages: numPages
    })
  }

  changePage = (offset) => {
    let pageNumber = this.state.pageNumber;
    pageNumber += offset;
    this.setState({
      pageNumber: pageNumber
    })
  }

  previousPage = () => {
    this.changePage(-1);
  }

  nextPage = () => {
    this.changePage(1);
  }

  render = () => {
    return (
      <>
      <Document
        file={this.props.pdf}
        options={{ workerSrc: "/pdf.worker.js" }}
        onLoadSuccess={this.onDocumentLoadSuccess}
      >
        <Page pageNumber={this.state.pageNumber} />
      </Document>
      <div>
        <p className="pg">
          Page {this.state.pageNumber || (this.state.numPages ? 1 : "--")} of {this.state.numPages || "--"}
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
}

export default SinglePage;
