import '../../css/dataList.css';
import React, {Component, PropTypes} from "react";
import {capitalize} from '../utils/stringHelper'

export default class Toolbar extends Component {
  static propTypes = {
    data: PropTypes.object.isRequired
  };

  renderItem(index, entry) {
    return <li key={index} >{capitalize(entry.name)}
      <span>{entry.value}</span>
    </li>
  }

  render() {
    const {data} = this.props;
    return (
      <ul className="dataList">
        {Object.keys(data).map((key, index) => this.renderItem(index, data[key]))}
      </ul>
    )
  }
}