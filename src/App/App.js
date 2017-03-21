import React from 'react';
import {my_news} from './../data';
import News from './../News/News';
import Add from './../Add/Add';
import './App.css';

var EventEmitter = require('events').EventEmitter;
window.ee = new EventEmitter();

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {news: my_news};
  }
  componentDidMount() {
    var self = this;
     window.ee.addListener('News.add', function(item) {
       var nextNews = item.concat(self.state.news);
       self.setState({news: nextNews});
     });
  }
  componentWillUnmount() {
   window.ee.removeListener('News.add');
  }
  render() {
    return (
      <div className="app">
        <h3 className="app-title">News</h3>
        <News data={this.state.news}  />
        <div id="displayDiv"></div>
        
        <Add />
      </div>
    )
   }
}

export default App;
