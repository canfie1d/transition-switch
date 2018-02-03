import React from 'react';
import { NavLink } from 'react-router-dom';

export default class Details extends React.Component {

  render() {
    return (
      <div style={{ background: '#4FB0C6', padding: '20px' }}>
        <div style={{height: '100vh'}}>
          <NavLink exact to='/'>Home</NavLink>
          <h1>Transition Switch Details</h1>
          <p style={{ maxWidth: '700px', marginBottom: '20px' }}>
            <b>Installation</b><br/>
            <code style={{display: "inline-block", background: '#000', color: "#fff", padding: '10px', marginBottom: '10px'}}>{"npm i --save transition-switch"}</code><br/>
          </p>
          <p style={{ maxWidth: '700px', marginBottom: '20px' }}>
            <b>Usage</b><br/>
            <code style={{display: "inline-block", background: '#000', color: "#fff", padding: '10px', marginBottom: '10px'}}>{"import { TransitionSwitch } from './TransitionSwitch';"}</code><br/>
            <code style={{display: "inline-block", background: '#000', color: "#fff", padding: '10px', marginBottom: '10px'}}>
              {"<TransitionSwitch>"}<br />
              &nbsp;&nbsp;{"<Route />"}<br />
              &nbsp;&nbsp;{"<Route />"}<br />
              {"</TransitionSwitch>"}
            </code><br/>
          </p>
          <p style={{maxWidth: "700px", marginBottom: '20px'}}>
            You can also use the ScrollToTop component independently which will initiate a scroll on any route change (requires location prop from react-router).<br/>
          </p>
          <p style={{maxWidth: "700px", marginBottom: '20px'}}>
            <code style={{display: "inline-block", background: '#000', color: "#fff", padding: '10px', marginBottom: '10px'}}>{"import { ScrollToTop } from './TransitionSwitch';"}</code><br/>
            <code style={{display: "inline-block", background: '#000', color: "#fff", padding: '10px', marginBottom: '10px'}}>{"<ScrollToTop location={this.props.location} />"}</code><br/>
          </p>
        </div>
        <NavLink exact to='/'>Home</NavLink>
      </div>
    )
  }
}
