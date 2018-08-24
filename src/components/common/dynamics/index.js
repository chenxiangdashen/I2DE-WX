import React from 'react';
import {Icon} from 'antd';
import {injectIntl} from 'react-intl';
import style from './index.css';
import {getStateColor} from '../../../utils/common'

class DynamicsView extends React.Component {


  constructor(props) {
    super(props)

  }


  render() {
    let {data,mark,intl}= this.props;


    return <div style={{justifyContent:'center'}}>
      <span  style={{fontSize:14,fontWeight:'300' , color:'#595757'}}>
        {
          mark==0 ? data || ' ':
            mark==3?`[${intl.messages.image}][${intl.messages.voice}]`:mark==2 ? `[${intl.messages.voice}]` : mark==1? `[${intl.messages.image}]`:' '

        }
      </span>
    </div>
  };
}

export default injectIntl(DynamicsView)
