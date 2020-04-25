import React, {Component} from 'react';
import classes from './Clock.module.css';
class Clock extends React.Component {
    render () {
      const {time} = this.props.time;
      return (
        <div className={classes.displayedTime}>
          <h1>{this.props.time}</h1>
        </div>
      )
    }
  }
  export default Clock 