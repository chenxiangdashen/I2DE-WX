import React from 'react';
import {Icon} from 'antd';
import {injectIntl} from 'react-intl';
import style from './index.css';
import Avatar from '../avater'

class Respondent extends React.Component {


  constructor(props) {
    super(props)

  }


  render() {
    let {solver,intl , worker} = this.props;


    let color = solver ? '#565656' : '#B6B9BD'



    return <div style={{
      display:'flex',
      alignItems:'center',
      height: 44,
      flexDirection: 'row',
      backgroundColor: '#fff',
      paddingLeft: 14,
    }}>
      {
        solver ?
          <Avatar  width={21} height={21} fontSize={12} text={solver.firstName}/>
          :
          <Icon
            type="huidazhe-copy"
            style={{fontSize: 21, color: color,}}/>
      }


      <div className={style.div_content}>
        <span style={{color: color, fontSize: 14}}>{solver ? solver.firstName : intl.messages.setAnswerer}</span>

        {
          worker ?
            <span style={{color: '#ffad2e', fontSize: 14}}>({intl.messages.designator}{worker.firstName})</span>
            :
            null
        }
      </div>
    </div>
  };
}

export default injectIntl(Respondent)
