import React from 'react';
import GiphysIndex from './giphys_index';


class GiphysSearch extends React.Component {
  constructor() {
    super();

    this.state = { searchTerm: "Fun Giphys" };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    this.props.fetchSearchGiphys('american+eskimo');
  }

  handleChange(e) {
    this.setState({ searchTerm: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    let searchTerm = this.state.searchTerm.split(' ').join('+');
    return this.props.fetchSearchGiphys(searchTerm);
  }

  render () {
    let { giphys } = this.props;
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            <h1>Search for Giphys!!</h1>
          </label>
          <br></br>
          <input
            type='text'
            value={this.state.searchTerm}
            onChange={this.handleChange}/>
          <br></br>
          <input type='submit' value='Search For Giphys'/>
        </form>

        <br></br>
        <GiphysIndex giphys={giphys} />
      </div>
    );
  }
}

export default GiphysSearch;
