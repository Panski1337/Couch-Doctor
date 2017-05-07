import '../../css/containers/view.scss';
import React, {Component, PropTypes} from "react";
import {connect} from "react-redux";
import Place from '../components/Place';
import * as UIActions from '../actions/UIActions';


export class ViewContainer extends Component {
  renderPlace(place, index) {
    return <Place key={index}
                  handleClick={this.props.changePlace}
                  name={place}/>
  }

  render() {
    const {backgroundImage, places, isPlacesVisible} = this.props;
    return (
      <div className="view" style={{backgroundImage: 'url(' + backgroundImage + ')'}}>
        <div className="places">
          {isPlacesVisible && places && places.map(this.renderPlace.bind(this))}
        </div>
      </div>
    )
  }
}

ViewContainer.propTypes = {
  isPlacesVisible: PropTypes.bool.isRequired,
  backgroundImage: PropTypes.string.isRequired,
  places: PropTypes.arrayOf(PropTypes.string).isRequired,
  changePlace: PropTypes.func.isRequired
};

export default connect(state => {
  return state.view.place
}, {
  changePlace: UIActions.changePlace
})(ViewContainer)