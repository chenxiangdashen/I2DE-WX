import React from 'react';
import style from './index.css';
import {injectIntl} from 'react-intl';
import {getRandomColor} from  '../../../utils/common'

class Avater extends React.Component {


  constructor(props){
    super(props)
    this.state = {
      color:getRandomColor(this.props.text)
    }
  }



  render() {

    let {width=28 , borderRadius=14 ,height=28 ,fontSize=14} = this.props;

    return (
      <div className={style.content} style={{backgroundColor:this.state.color,width:width,height:height , borderRadius: borderRadius}}>
          <span style={{color:'#fff',fontSize:fontSize}}>{this.props.text.slice(0,1)}</span>
      </div>
    );
  }
}

export default injectIntl(Avater)
