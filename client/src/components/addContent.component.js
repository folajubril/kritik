import React, {Component} from "react";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';

export default class AddUser extends Component {
    fileObj = [];
    fileArray = [];

  constructor(props) {
    super(props)

    // Setting up functions
    this.onChangeContentName = this.onChangeContentName.bind(this);
    this.onChangeContentType = this.onChangeContentType.bind(this);
    this.onChangeContentDescription = this.onChangeContentDescription.bind(this);
    this.uploadMultipleFiles = this.uploadMultipleFiles.bind(this)
    this.uploadFiles = this.uploadFiles.bind(this)
    this.onSubmit = this.onSubmit.bind(this);

    // Setting up state
    this.state = {
      contentName: '',
      ContentType: '',
      Description: '',
      file: [null]
    }
  }

  onChangeContentName(e) {
    this.setState({name: e.target.value})
  }

  onChangeContentType(e) {
    this.setState({email: e.target.value})
  }

  onChangeContentDescription(e) {
    this.setState({Description: e.target.value})
  }

  uploadMultipleFiles(e) {
    this.fileObj.push(e.target.files)
    for (let i = 0; i < this.fileObj[0].length; i++) {
        this.fileArray.push(URL.createObjectURL(this.fileObj[0][i]))
    }
    this.setState({ file: this.fileArray })
}

uploadFiles(e) {
    e.preventDefault()
    console.log(this.state.file)
}

  onSubmit(e) {
    e.preventDefault()

    console.log(`Student successfully created!`);
    console.log(`Name: ${this.state.contentName}`);
    console.log(`Type: ${this.state.ContentType}`);
    console.log(`Description: ${this.state.Description}`);
    console.log(`File: ${this.fileArray}`)

    this.setState({contentName: '', ContentType: '', Description: '', file: this.fileArray })
  }

  render() {
    return (<div className="form-wrapper">
      <Form onSubmit={this.onSubmit}>
      <div className="form-group multi-preview">
                    {(this.fileArray || []).map(url => (
                        <img src={url} alt="..." style={height: '175px', width: '150px'} />
                    ))}
        </div>
        <Form.Group controlId="Name">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" value={this.state.name} onChange={this.onChangeContentName}/>
        </Form.Group>

        <Form.Group controlId="Type">
          <Form.Label>Type</Form.Label>
          <Form.Control type="text" value={this.state.email} onChange={this.onChangeContentType}/>
        </Form.Group>

        <Form.Group controlId="Description">
          <Form.Label>Description</Form.Label>
          <Form.Control type="text" value={this.state.description} onChange={this.onChangeContentDescription}/>
        </Form.Group>
        <div className="form-group">
            <input type="file" className="form-control" onChange={this.uploadMultipleFiles} multiple />
        </div>
        <Button variant="danger" size="md" type="submit">
         Upload Content
        </Button>
      </Form>
    </div>);
  }
}