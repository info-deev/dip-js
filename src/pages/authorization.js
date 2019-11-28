import React from 'react';
import { Redirect, useLocation } from "react-router-dom";
import { connect } from 'react-redux';
import { userAuthentication, authenticationUrl } from '../store/actions';


function useQuery() {
  return new URLSearchParams(useLocation().search);
}

const Authorization = ({unsplash, userAuthentication}) => {

  let query = useQuery();
  const code = query.get("code")
  
  if (unsplash.isAuthenticated) {
    return (
      <Redirect to="/" />
    )
  }
  else if (code) {
    userAuthentication(code);
    return (      
      <Redirect to="/" />
    )
  }
  else {
    return (
      <div>
        { document.location.assign(authenticationUrl) }
      </div>
    )
  }
}


const mapStateToProps = state => ({
  unsplash: state.unsplash
});

const mapDispatchToProps = {
  userAuthentication
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
  )(Authorization);