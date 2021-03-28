import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import Spinner from '../layout/Spinner';

const PrivateRoute = ({
  component: Component,
  auth: { isAuthenticated, loading },
  ...rest
}) => {
  return (
    <Fragment>
      {loading ? (
        <Spinner />
      ) : (
        <Route
          {...rest}
          render={(props) => {
            if (!isAuthenticated || (!isAuthenticated && !loading)) {
              return <Redirect to="/login" />;
            } else {
              return <Component {...props} />;
            }
          }}
        />
      )}
    </Fragment>
  );
};

PrivateRoute.propTypes = {
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => {
  return {
    auth: state.auth,
  };
};

export default connect(mapStateToProps)(PrivateRoute);
