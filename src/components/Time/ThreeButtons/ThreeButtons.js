import React, {Component} from 'react';
import classes from './ThreeButtons.module.css'

class ThreeButtons extends Component {
    constructor(props) {
        super(props)
     
                }
    state = {
    }
    render() {   
        let classesBtn1=[],classesBtn2=[],classesBtn3=[]
        classesBtn1.push(classes.AddingBtn)
        classesBtn2.push(classes.AddingBtn)
        classesBtn3.push(classes.AddingBtn)
        
        if(this.props.buttonsNames.first!=='1'){
         
            classesBtn1.push(classes.btn1)
            classesBtn2.push(classes.btn2)
            classesBtn3.push(classes.btn3)

        }
        
        return (
            <div className={classes.AddingBtnDiv}>
    <button onClick={()=>this.props.clickedMethod(this.props.buttonsNames.first)} className={classesBtn1.join(' ')}>{this.props.showNames?this.props.buttonsNames.first:null}</button>
                <button onClick={()=>this.props.clickedMethod(this.props.buttonsNames.sec)} className={classesBtn2.join(' ')}>{this.props.showNames?this.props.buttonsNames.sec:null}</button>
                <button onClick={()=>this.props.clickedMethod(this.props.buttonsNames.third)} className={classesBtn3.join(' ')}>{this.props.showNames?this.props.buttonsNames.third:null}</button>
            </div>
        )
    }
}
export default ThreeButtons