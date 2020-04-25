import React, {Component} from 'react';
import classes from './Time.module.css'
import Clock from './Clock'
import ThreeButtons from '../Time/ThreeButtons/ThreeButtons'
import Music from '../Music/Music'
/* import Sound from 'react-sound';
 */
class Time extends Component {
    constructor(props) {
        super(props)
    }
    state = {
        buttonsNames: [
            {
                first: '1',
                sec: '2',
                third: '+'
            }, {
                first: 'play',
                sec: 'pause',
                third: 'stop'
            }
        ],
        count: 0,
        running: false,
        flagPlay:false
    }
    getTime=(time)=>{ 
        let seconds = time % 60;
        let minutes = Math.floor(time / 60);
        minutes = minutes.toString().length === 1 ? "0" + minutes : minutes;
        seconds = seconds.toString().length === 1 ? "0" + seconds : seconds;
        return minutes + ':' + seconds;
      
    }
    handleClickedButtons=(whatClicked)=>{
        if(!this.state.running&&(whatClicked!='play'&&whatClicked!='pause'&&whatClicked!='stop'))
        {
            console.log("Time.js : "+whatClicked)
            let flagCount=false
            let newCount=0
            switch (whatClicked){
                case '1':
                    flagCount=true
                    newCount=60
                    break
                case '2':
                    flagCount=true
                    newCount=120
                    break
                case '+':
                    flagCount=true
                    newCount=this.state.count+60
                    break
      
            }
            if(flagCount)
                this.setState(
                    {count: newCount}
                );     
            
        }
        else{
            switch (whatClicked){

            case 'play':
                if(!this.state.running&&this.state.count!=0){
                console.log('hiS')
               this.handleCountdown(this.state.count);
            }
            break
            case 'pause':
                if(this.state.running)
                    this.handleStop()
                break
            case 'stop':
                    this.handleStop()
                    this.handleReset()
                break
            } 
        }
            
        }
        
    
         
    componentDidUpdate(prevProps, prevState) {
        if(this.state.running !== prevState.running){
        switch(this.state.running) {
            case true:
            this.handleStart();
        }
        }
    }
    handleStart() {
        this.timer = setInterval(() => {
          const newCount = this.state.count - 1;
          this.setState(
            {count: newCount >= 0 ? newCount : 0}
          );
          if(this.state.count<58)
          {
            this.handleStop()
            this.handleReset()
            ////animation time is over
            this.setState({
                flagPlay:true
            })
            console.log('Time.js -> stop & reset')
          }
        }, 1000);
      }
      
      handleStop() {
        if(this.timer) {
          clearInterval(this.timer);
          this.setState(
            {running:false}
          );
        }
      }
      
      handleReset() {
        this.setState(
          {count: 0}
        );
      }
      
      handleCountdown(seconds) {
        this.setState({
          count: seconds,
          running: true
        })
      }
      
    render() {
        console.log(this.state.buttonsNames)
        return (
            <div className={classes.Time}>
            {/*    { this.state.flagPlay? <Sound
        url={'../Music/horn.mp3'}
        playStatus={Sound.status.PLAYING}
      />:null} */}
                <Clock time={this.getTime(this.state.count)}> </Clock>
                <div className={classes.displayFlex}>
                    {/* <div className={classes.MinAndSec}>
                        <a className={classes.Digit}>{this.props.minAndSecArray[0]}</a>
                        <a className={classes.Digit}>{this.props.minAndSecArray[1]}</a>
                        <a className={classes.Digit}>:</a>
                        <a className={classes.Digit}>{this.props.minAndSecArray[2]}</a>
                        <a className={classes.Digit}>{this.props.minAndSecArray[3]}</a>
                    </div> */}
                    <div className={classes.AddingBtnDiv}>
                       <ThreeButtons showNames={true} clickedMethod={this.handleClickedButtons}  buttonsNames={this.state.buttonsNames[0]}></ThreeButtons>
                    </div>
                </div>
                <div className={classes.displayFlex}>
                <ThreeButtons showNames={false} clickedMethod={this.handleClickedButtons} buttonsNames={this.state.buttonsNames[1]}></ThreeButtons>

                </div>
                {this.props.showMessage ? <p>Somthing went wrong</p>:null}
            </div>
        )
    }
}
export default Time