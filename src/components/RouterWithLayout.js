import React from "react";
import { Route, Redirect } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";

const RouteWithLayout = (props) => {
  const {
    layout: Layout,
    component: Component,
    private: Private,
    auth,
    ...rest
  } = props;

  return (
    <>
      {Private ? (
        auth ? (
          <Route
            {...rest}
            render={(matchProps) => (
              <Layout>
                <Component {...matchProps} />
              </Layout>
            )}
          />
        ) : (
          <Redirect to="/sign-in" />
        )
      ) : (
        <Route
          {...rest}
          render={(matchProps) => (
            <Layout>
              <Component {...matchProps} />
            </Layout>
          )}
        />
      )}
    </>
  );
};

RouteWithLayout.propTypes = {
  component: PropTypes.any.isRequired,
  layout: PropTypes.any.isRequired,
  path: PropTypes.string,
  private: PropTypes.bool,
  auth: PropTypes.bool.isRequired,
};
RouteWithLayout.defaultProps = {
  private: false,
};
const mapStateToProps = (state) => ({
  auth: state.auth.isAuthenticated,
});

export default connect(mapStateToProps)(RouteWithLayout);
