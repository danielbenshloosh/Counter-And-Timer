import React, {Component} from 'react';
import Team from "./Team/Team";
import classes from "./Teams.module.css";
class Teams extends Component {
    constructor(props) {
        super(props)
    }
    state = {}
    render() {
        return (
<div>                <div className={classes.displayFlex}>
                    <button className={classes.btnDesign} onClick={()=>this.props.teamsMethod('add')}>ADD NEW TEAM</button>
                    <button  className={classes.btnDesign} onClick={()=>this.props.teamsMethod('remove')}>REMOVE LAST TEAM</button>
                </div>

                {this
                    .props
                    .teams
                    .map((team, index) => {

                        return <Team id={index} handleClickPlusOrMinusOrReset={this.props.handleClickPlusOrMinusOrReset} key={team.id} counter={team.score}></Team>
                    })}
</div>
        )
    }
}
export default Teams