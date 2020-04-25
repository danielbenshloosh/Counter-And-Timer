import React, {Component, Fragment} from 'react';
import classes from './Cockpit.module.css'
import Teams from '../Teams'
import Time from '../Time/Time'
class Cockpit extends Component {
    state = {
        teams: [],
        minAndSecArray: [
            0, 0, 0, 0
        ],
        showMessageInTime: false,
        showTime:false
    }
 
    handleClickAddOrRemoveTeam = (whatClicked) => {
        const tmpTeams = [...this.state.teams]
      
        if(whatClicked==='add'){
            if (this.state.teams.length < 10) {
                tmpTeams.push({
                    id: (this.state.teams.length + 1),
                    score: 0
                })
                this.setState((prevState, props) => {
                    return {teams: tmpTeams}
                })
            }
        }
        else if(whatClicked==='remove') {
            tmpTeams.pop();
            this.setState((prevState, props) => {
                return {teams: tmpTeams}
            })        
        }

    }
    handleClickPlusOrMinusOrReset = (index,whatClicked) => {
        ///!plusOrMinus = minus
        let flag=false
        const tmpTeams = [...this.state.teams]
        if(whatClicked=='-')///minus
        {
            if(this.state.teams[index].score > 0)
            {
                   flag=true
                tmpTeams[index].score = tmpTeams[index].score - 1
            }   
        }
        else if(whatClicked=='+')///plus
        {
            flag=true
            tmpTeams[index].score = tmpTeams[index].score + 1
        }
        else if(whatClicked=='+5')///plus5
        {
            flag=true
            tmpTeams[index].score = tmpTeams[index].score + 5
        }
        else if(whatClicked=='-5'&&tmpTeams[index].score>=5)///minus5
        {
            flag=true
            tmpTeams[index].score = tmpTeams[index].score -5
        }
        
        else if(whatClicked=='reset')
        {
            flag=true
            tmpTeams[index].score = 0
        }

        if(flag)
            this.setState((prevState, props) => {
                return {teams: tmpTeams}
            })
        }
    clickShowHideTime=()=>{
        this.setState({
            showTime:!this.state.showTime
        })
    }
    
    render() {
        console.log('[App.js] ' + classes.App)
        return (
            <div className={classes.Cockpit}>
                <div className={classes.Counter}>
                    <Teams
                        handleClickPlusOrMinusOrReset={this.handleClickPlusOrMinusOrReset}
                        teamsMethod={this.handleClickAddOrRemoveTeam}
                        teams={this.state.teams}></Teams>
                </div>
                <button className={classes.btnDesign} onClick={this.clickShowHideTime}>Show Timer</button>
                {this.state.showTime?<div>
                    <div className={classes.Timer}>
                <div className={classes.threeD}>
Couner & Timer</div>
                <Time
                
                showMessage={this.state.showMessageInTime}
                minAndSecArray={this.state.minAndSecArray}></Time>
                
                </div>
                </div>:null}
               
             
            </div>
        );
    }
}
export default Cockpit