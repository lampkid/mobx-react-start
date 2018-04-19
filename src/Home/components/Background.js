import { PropTypes } from 'prop-types';

import { observer } from 'mobx-react';

@observer
export default class Background extends React.Component {
  render() {
    const { themeStore: { backgroundColor, slogan }, children } = this.props;
    return <div style={{ backgroundColor }}> {slogan} {children} </div>;
  }
}

Background.propTypes = {
  themeStore: PropTypes.object.isRequired,
};
