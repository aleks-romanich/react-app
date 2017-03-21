import React from 'react';
import './Article.css';

class Article extends React.Component{
  constructor(props) {
    super(props);
    this.state = {visible: false};
    this.readmoreClick = this.readmoreClick.bind(this);
  }
  readmoreClick(e) {
    e.preventDefault();
    this.setState({visible: true});
  }

  render() {
    var visible = this.state.visible;
    var newsText = this.props.data.text;
    var maxLength = 60;
    if (newsText.length > maxLength){
       newsText = newsText.substr(0, maxLength) + '...';
    }
    return (
        <div  className="article">
          <p className="news__author">{this.props.data.author}</p>
          <p  className="news__text" ref="newsText">{newsText}</p>
          <a href="#" onClick={this.readmoreClick} className={'news__readmore ' + (visible ? 'none': '')}>Read more</a>
          <p className={'news__big-text ' + (visible ? '': 'none')}>{this.props.data.bigText}</p>
        </div>
    );
  }
}
Article.propTypes ={
    data: React.PropTypes.shape({
      author: React.PropTypes.string.isRequired,
      text: React.PropTypes.string.isRequired
    })
  };

export default Article;
