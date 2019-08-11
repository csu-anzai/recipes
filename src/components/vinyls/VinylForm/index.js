import React, {Component} from "react";

class VinylForm extends Component {
  state = {
    artist: '',
    album: '',
    year: ''
  }

  handleSubmit = (event) => {
    event.preventDefault();

    this.props.onSubmit(this.state.artist, this.state.album, this.state.year);

    this.setState({
      artist: '',
      album: '',
      year: ''
    })
  }

  render() {
    return(
      <form onSubmit={this.handleSubmit}>
        <input 
          type="text"
          value={this.state.artist}
          onChange={event => this.setState({artist: event.target.value})}
          placeholder="artist"
          required
        />
        <input
          type="text"
          value={this.state.album}
          onChange={event => this.setState({album: event.target.value})}
          placeholder="album"
          required
        />
        <input
          type="number"
          value={this.state.year}
          onChange={event => this.setState({year: event.target.value})}
          placeholder="year"
          required
        />
        <button type="submit">add to collection</button>

      </form>
    );
  }
}

export default VinylForm;