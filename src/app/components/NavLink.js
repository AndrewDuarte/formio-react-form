import React, {Component} from 'react';
import {IndexLink} from 'react-router';
import PropTypes from 'prop-types';

export default class NavLink extends Component {
  static propTypes = {
    to: PropTypes.string.isRequired,
    exact: PropTypes.bool
  };

  static contextTypes = {
    router: PropTypes.object
  };
  static defaultProps = {
    exact: false
  };

  componentDidMount = () => {
    this.unlisten = this.context.router.listen(() => {
      if (!this.unmounting) {
        this.forceUpdate();
      }
    });
  };

  componentWillUnmount = () => {
    this.unmounting = true;
    this.unlisten();
  };

  render() {
    const {to} = this.props;
    // This removes exact from passed down props which is invalid on anchor elements.
    const {exact, ...props} = this.props;
    const className = this.context.router.isActive(to, exact) ? 'active' : '';

    return (
      <li className={className}>
        <IndexLink {...props} />
      </li>
    );
  }
}
