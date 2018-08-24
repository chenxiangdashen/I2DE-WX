import React from 'react';
import {Icon} from 'antd';
import {injectIntl} from 'react-intl';
import style from './index.css';
import {getStateColor} from '../../../utils/common'

class PriorityView extends React.Component {


  constructor(props) {
    super(props)

    let {intl , data=1 } = this.props;
    this.importance = [
      {
        value: 1,
        text:intl.messages.ordinary,
        color: '#ababab',
        textColor: '#565656',
        checked: true,//默认勾选
      },
      {
        value: 2,
        text: intl.messages.important,
        color: '#ffad2e',
        textColor: '#565656',
        checked: false,
      },
      {
        value: 3,
        text: intl.messages.veryImportant,
        color: '#ff7e7e',
        textColor: '#565656',
        checked: false,
      },

    ];

    this.importance=this.importance.filter((item)=>item.value==data);

  }


  render() {


    let {intl} = this.props;
    let defualtData =  {
      value: 1,
      text:intl.messages.ordinary,
      color: '#ababab',
      textColor: '#565656',
      checked: true,//默认勾选
    };

    console.log(this.importance)
    let data = this.importance[0] ||  defualtData

    return <div className={style.div_div}>
      <Icon
        type="youxianji"
        style={{fontSize: 21, color: data.color,}}/>
      <div className={style.div_content}>
        <span style={{color: data.color, fontSize: 14}}>{data.text}</span>
      </div>
    </div>
  };
}

export default injectIntl(PriorityView)
