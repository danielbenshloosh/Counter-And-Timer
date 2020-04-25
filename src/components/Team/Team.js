import React, {Component} from 'react';
import classes from './Team.module.css'

class Team extends Component {
    constructor(props) {
        super(props)
    }
    state = {}
    render() {
        return (
<div className={classes.displayFlexCol}>
                    <div className={classes.line}></div>
                <div className={classes.Team}>
                    <div  className={classes.inputArea}><input className={classes.input}></input></div>
{/*         <p className={classes.teamNumber}>{'Team '+parseInt(this.props.id+1)}</p>
 */}                    <div className={classes.displayFlex}>
                        <button
                            className={classes.Btn}
                            onClick={() => this.props.handleClickPlusOrMinusOrReset(this.props.id, '-5')}>-5</button>
                                        <button
                            className={classes.Btn}
                            onClick={() => this.props.handleClickPlusOrMinusOrReset(this.props.id, '-')}>-</button>
                        <p className={classes.counter}>{this.props.counter}</p>
                        <button
                            className={classes.Btn}
                            onClick={() => this.props.handleClickPlusOrMinusOrReset(this.props.id, '+')}>+</button>
                                     <button
                            className={classes.Btn}
                            onClick={() => this.props.handleClickPlusOrMinusOrReset(this.props.id, '+5')}>+5</button>
                            
                    </div>
                </div>
              {/*   <button
                    className={classes.btnDesign}
                    onClick={() => this.props.handleClickPlusOrMinusOrReset(this.props.id, 'reset')}>Reset</button> */}
</div>        )
    }
}
export default Team