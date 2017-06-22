import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import marked from 'marked';

class TextDisplay extends React.Component {
  constructor(props){
    super(props);
    this.updateView = this.updateView.bind(this);
    this.markedApi = this.markedApi.bind(this);
    this.state = {
      value: 'Heading\n=======\n\nSub-heading\n-----------\n \n### Another deeper heading\n \nParagraphs are separated\nby a blank line.\n\nLeave 2 spaces at the end of a line to do a  \nline break\n\nText attributes *italic*, **bold**, \n`monospace`, ~~strikethrough~~ .\n\nShopping list:\n\n  * apples\n  * oranges\n  * pears\n\nNumbered list:\n\n  1. apples\n  2. oranges\n  3. pears\n\nThe rain---not the reign---in\n'
    } //this.state
  } //constructor
  
  updateView(addedText){
    this.setState({
      value: addedText
    }) //this.setState
  }//updateView
  
    markedApi(val){
      var markedApi = marked(val, {santize: true});
      return{
        __html: markedApi
      }; //return
    } //markedApi
  
    render(){
      return (
        <div className="row">
          <div className="col-sm-4">
            <Markdown value={this.state.value} updateView={this.updateView} />
          </div>
          <div className="col-md-6">
            <span dangerouslySetInnerHTML={this.markedApi(this.state.value)} />
          </div>
        </div>
      )//return
    } //render
} //TextDisplay

class Markdown extends React.Component {
  
  newData(){
    var typedValue=this.refs.inputValue.value;
    this.props.updateView(typedValue);
  } //newData
  
  render(){
    return (
      <textarea rows="30" cols="50" ref="inputValue" value={this.props.value} onChange={this.newData.bind(this)} className="form-control" />
    ) //return
  } //render
} //Markdown

ReactDOM.render(
<TextDisplay />,
  document.getElementById('root')
);
