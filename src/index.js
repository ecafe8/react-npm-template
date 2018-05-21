import React from 'react';
import PropTypes from 'prop-types';
// import css from './index.less';

/**
 * !!! 请修改组件名称 !!!
 */
export default class SinxNpmDemo extends React.Component {

  static propTypes = {
    something: PropTypes.any.isRequired,
  };

  static defaultProps = {};

  constructor(props) {
    super(props);
  }

  componentDidMount() {}

  render() {
    return (
      <div className="sinx-npm-demo">
        sinx-npm-demo
      </div>
    );
  }
}
