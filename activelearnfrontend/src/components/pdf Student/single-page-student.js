import React, { useState } from "react";
import { Document, Page } from "react-pdf"
import { globalObject } from "../../App";
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
    console.log("mounted viewer")
    console.log(globalObject.socket)
    console.log(this.state.pageNumber || (this.state.numPages ? 1 : "--"))
    console.log(this.state.numPages || "--")
    globalObject.socket.addEventListener("message", (event) =>{
        console.log("elixir is better than go ok")
        let json = JSON.parse(event.data)
        console.log(json)
        if (json.info === "page") {
          console.log("we got the page")
          this.setState({
            pageNumber: parseInt(json.value)
          });
        }
      })
  };

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
