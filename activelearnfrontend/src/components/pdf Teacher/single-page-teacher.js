import React, { useState } from "react";
import { Document, Page } from "react-pdf";
import { globalObject } from "../../App";
import './pdf-pages-teacher.css';



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
    return pageNumber
  }

  previousPage = () => {
    let new_page = this.changePage(-1);
    let message = {"role":"teacher", "code": globalObject.room_code.toString(),"name":"Teacher","info":"page","value":new_page.toString()}
    console.log(message)
    globalObject.socket.send(JSON.stringify(message))
  }

  nextPage = () => {
    let new_page = this.changePage(1);
    let message = {"role":"teacher", "code": globalObject.room_code.toString(),"name":"Teacher","info":"page","value":new_page.toString()}
    console.log(message)
    globalObject.socket.send(JSON.stringify(message))
  }

  render = () => {
    return (
      <div>
        <Document
          file={this.props.pdf}
          options={{ workerSrc: "/pdf.worker.js" }}
          onLoadSuccess={this.onDocumentLoadSuccess}
        >
          <Page pageNumber={this.state.pageNumber} />
        </Document>
        <div>
          <p className="pg">
            Page {this.state.pageNumber || (this.state.numPages ? 1 : "--")} of {this.state.numPages || '--'}
          </p>
          <button className = "prev" type="button" disabled={this.state.pageNumber <= 1} onClick={this.previousPage}>
            Previous
          </button>
          <button
            className = "next"
            type="button"
            disabled={this.state.pageNumber >= this.state.numPages}
            onClick={this.nextPage}
          >
            Next
          </button>
        </div>
      </div>
    );
  }
}

export default SinglePage;