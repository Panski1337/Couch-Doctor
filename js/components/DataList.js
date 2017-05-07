import '../../css/compontents/data-list.scss';
import React, {Component, PropTypes} from "react";
import {capitalize} from '../utils/stringHelper'

export default class DataList extends Component {
  static propTypes = {
    data: PropTypes.object.isRequired
  };

  renderItem(index, entry) {
    return <li key={index} className="data-list__item">
      <span className="data-list__item__label">{capitalize(entry.name)}</span>
      <span className="data-list__item__value">{entry.value}</span>
    </li>
  }

  render() {
    const {data} = this.props;
    return (
      <ul className={'data-list'}>
        {Object.keys(data).map((key, index) => this.renderItem(index, data[key]))}
      </ul>
    )
  }
}