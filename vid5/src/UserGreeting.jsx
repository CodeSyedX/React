import PropTypes from'prop-types';

function UserGreeting(props) {

const welcome = <h2 className="wel">
               Welcome {props.username}</h2>

 const login = <h2>Login to continue </h2> 

return (props.isLoggedIn  ? welcome : login );


    
  }

  UserGreeting.proptypes = {
    isloggedIn: PropTypes.bool,
    usename : PropTypes.string,
   
  }
  UserGreeting.defaultprops = {
    isLoggedIn :false,
    username : "guest",
  }
  
  export default UserGreeting;
  