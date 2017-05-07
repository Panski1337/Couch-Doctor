import '../../../css/compontents/ui/action-bar.scss';
import React, {Component, PropTypes} from "react";
import t from "../../lang/Translate";

export default class ActionBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: false
    };
  }

  handleClickOpen() {
    this.setState({isOpen: true});
  }

  handleClickClose() {
    this.setState({isOpen: false});
  }

  renderAction(action, index) {
    return <div key={index}
                className="action-bar__action"
                onClick={() => this.props.handleClick(action)}>{action.text}</div>
  }

  render() {
    const {actions} = this.props;
    const actionBarClasses = [
      'action-bar',
      this.state.isOpen ? 'action-bar--open' : ''
    ].join(' ');

    return (
      <div className={actionBarClasses}>
        <a onClick={this.handleClickOpen.bind(this)} className="action-bar__opener">
          <span className="glyphicon glyphicon-chevron-up action-bar__opener__symbol" aria-hidden="true"/>
          <span className="action-bar__opener__text">{t('actionBar.open')}</span>
        </a>
        <div onClick={this.handleClickClose.bind(this)} className="action-bar__overlay"></div>
        <div className="action-bar__wrapper noselect">
          <a onClick={this.handleClickClose.bind(this)} className="action-bar__closer">
            <span className="action-bar__closer__text">{t('actionBar.close')}</span>
            <span className="glyphicon glyphicon-chevron-down action-bar__closer__symbol" aria-hidden="true"/>
          </a>
          {actions.map(this.renderAction.bind(this))}
        </div>
      </div>
    )
  }
}

ActionBar.propTypes = {
  actions: PropTypes.arrayOf(PropTypes.object).isRequired,
  handleClick: PropTypes.func.isRequired
};