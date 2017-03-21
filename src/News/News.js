import React from 'react';
import Article from './../Article/Article';
import './News.css';

class News extends React.Component{
  render() {
    var data = this.props.data;
    var newsTemplate;
    if (data.length > 0) {
      newsTemplate = data.map((item,index) => {
        return (
        <div  key={index}>
              <Article data={item}/>
        </div>
        )
      })
    } else {
      newsTemplate = <p>Sorry, news are absent</p>
    }
    return (
      <div className="news">
        {newsTemplate}
        <strong  className={'news__count ' + (data.length > 0 ? '':'none') }>All News: {data.length}</strong>
      </div>
    );
  }
}
News.propTypes = {
  data: React.PropTypes.array.isRequired
};

export default News;
