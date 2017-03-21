import React from 'react';
import ReactDOM from 'react-dom';
import './Add.css';

class Add extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        agreeNotChecked: true,
        authorIsEmpty: true,
        textIsEmpty: true
       };
      this.onBtnClickHandler = this.onBtnClickHandler.bind(this);
      this.onCheckRuleClick = this.onCheckRuleClick.bind(this);
      this.onFieldChange = this.onFieldChange.bind(this);
    }
    componentDidMount() {
      ReactDOM.findDOMNode(this.refs.author).focus();
    }
    onBtnClickHandler(e) {
      e.preventDefault();
      var textEl = ReactDOM.findDOMNode(this.refs.text);
      var author = ReactDOM.findDOMNode(this.refs.author).value;
      var text = textEl.value;

      var item = [{
        author: author,
        text: text,
        bigText: '...'
      }];


      window.ee.emit('News.add', item);

      textEl.value = '';
      this.setState({textIsEmpty: true});
    }
   onCheckRuleClick() {
     this.setState(
       {agreeNotChecked: !this.state.agreeNotChecked}
     );
    }

  onFieldChange(fieldName, e) {
    var next = {};
    if (e.target.value.trim().length > 0) {
      next[fieldName] = false;
      this.setState(next);
    } else {
      next[fieldName] = true;
      this.setState(next);
    }
  }
    render() {
      var agreeNotChecked = this.state.agreeNotChecked,
      authorIsEmpty = this.state.authorIsEmpty,
      textIsEmpty = this.state.textIsEmpty;
      return (
        <form className='add cf'>
          <input
            type='text'
            className='add__author'
            defaultValue=''
            placeholder='your name'
            ref='author'
            onChange={this.onFieldChange.bind(this, 'authorIsEmpty')}
          />
          <textarea
            className='add__text'
            defaultValue=''
            placeholder='your news'
            ref='text'
            onChange={this.onFieldChange.bind(this, 'textIsEmpty')}
          ></textarea>
          <label className='add__checkrule'>
            <input type='checkbox' defaultChecked={false} ref='checkrule' onChange={this.onCheckRuleClick} />I agree with the rules
          </label>
          <button
            className='add__btn'
            onClick={this.onBtnClickHandler}
            disabled={agreeNotChecked || authorIsEmpty || textIsEmpty}
            ref='alert_button' >
            add news
          </button>
        </form>
      );
    }
  }


export default Add;
