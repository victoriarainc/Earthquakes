import React, {Component} from 'react';
import Moment from 'moment';
import Earthquakes from "../data/Earthquakes.js"

export default class EarthquakeInfo extends Component {
  render () {
    return (
      <div class="earthquake-title">
      This is a list of 8 Earthquakes occurring on the morning of July 14th across the United States.
      </div>
    )
  }
}
