import React, { Component } from "react";

import Vinyl from "../Vinyl";
import VinylForm from "../VinylForm";
import HomeButton from "../../common/HomeButton";

import { vinyls } from "../../../resources/data.js";
import "./index.css";

class Vinyls extends Component {
  state = {
    vinyls
  };

  addToVinylCollection = (artist, album, year) => {
    this.setState(previousState => ({
      vinyls: [...previousState.vinyls, { artist, album, year }]
    }));

    // N.B.: IT WOULD BE NICE FOR THE STATE TO AUTOMATICALLY SORT ITSELF AGAIN
    // SCRAMBLINGS BELOW

    // .sort will mutate the original array, which we cannot do with React
    // console.log(this.state);

    // const sortedVinyls = [].concat(this.state.vinyls);
    // console.log(sortedVinyls);

    // sortedVinyls.sort((a,b) => a.artist > b.artist ? 1 : -1);

    // console.log(sortedVinyls);

    // this.setState(previousState => ({
    //   vinyls: [...previousState.vinyls].sort((a,b) => a.artist > b.artist ? 1 : -1)
    // }));

    //     const nuState = [{
    //       artist: 'C',
    //       album: 'c',
    //       year: 3
    //     },{
    //     artist: 'B',
    //     album: 'b',
    //     year: 2
    //   },
    // {
    //   artist: 'A',
    //   album: 'a',
    //   year: 1
    // }];

    // this.setState(() => ({
    //   vinyls: [{artist, album, year}]
    // }));

    // this.setState(() => ({
    //   vinyls: nuState.sort((a,b) => a.artist > b.artist ? 1 : -1)
    // }));

    // const newlySortedState = this.state.vinyls.sort(((a, b) => (a.artist > b.artist) ? 1 : -1));

    // this.setState(() => (
    //   {vinyls: newlySortedState
    // }));
  };

  render() {
    return (
      <>
        <HomeButton />
        <h2>vinyls</h2>
        <p>below is a record (pun intended) of my expanding vinyl collection</p>

        <VinylForm onSubmit={this.addToVinylCollection} />
        <br />

        <table>
          <thead>
            <tr>
              <th>ARTIST</th>
              <th>ALBUM</th>
              <th>YEAR</th>
            </tr>
          </thead>

          <tbody>
            {this.state.vinyls.map((value, index) => {
              return (
                <Vinyl
                  key={index}
                  artist={value.artist}
                  album={value.album}
                  year={value.year}
                />
              );
            })}
          </tbody>
        </table>
      </>
    );
  }
}

export default Vinyls;
