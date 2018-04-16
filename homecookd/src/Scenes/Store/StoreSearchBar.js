import React, {Component} from 'react';
import { AutoComplete }   from 'material-ui';
import getMuiTheme        from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider   from 'material-ui/styles/MuiThemeProvider';

import JSONP              from 'jsonp';




const CenterAlign = {

  width: 'auto',
  marginRight: 50,
  display: 'flex',
  justifyContent: 'flex-end',
  alignItems: 'flex-end',
  alignSelf: 'flex-end',
  flexDirection: 'column'

}

const googleAutoSuggestURL = `
  //suggestqueries.google.com/complete/search?client=youtube&ds=yt&q=`;

class MaterialUIAutocomplete extends Component {
  constructor(props) {
    super(props);
    this.onUpdateInput = this.onUpdateInput.bind(this);
    this.state = {
      dataSource : [],
      inputValue : ''
    }
  }

  onUpdateInput(inputValue) {
    const self = this;
    this.setState({
      inputValue: inputValue
    }, function() {
      self.performSearch();
    });
  }

  performSearch() {
    const
      self = this,
      url  = googleAutoSuggestURL + this.state.inputValue;

    if(this.state.inputValue !== '') {
      JSONP(url, function(error, data) {
        let searchResults, retrievedSearchTerms;

        if(error) return error;

        searchResults = data[1];

        retrievedSearchTerms = searchResults.map(function(result) {
          return result[0];
        });

        self.setState({
          dataSource: retrievedSearchTerms
        });
      });
    }
  }



  render() {
    return <MuiThemeProvider muiTheme={getMuiTheme()}>
      <AutoComplete style = {CenterAlign}
<<<<<<< HEAD
=======

>>>>>>> 479b16f6d485ae7d9932777eab142207361ebd63
        dataSource    = {this.state.dataSource}
        onUpdateInput = {this.onUpdateInput} />
      </MuiThemeProvider>
  }
}



export default MaterialUIAutocomplete;
