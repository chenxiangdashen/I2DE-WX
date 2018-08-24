import React from 'react';
import {Icon} from 'antd';
import {injectIntl} from 'react-intl';
import style from './index.css';
import {formatDate,parseDate} from '../../../utils/common'

class SolutionCutOffDate extends React.Component {


  constructor(props) {
    super(props)

  }


  render() {
    let {data,intl} = this.props;


    let date = parseDate(data);
    let time;
    if (date) {
      time = date.getTime() - new Date().getTime();
    }

    // 默认图标颜色，左箭头，
    const defaultColor = '#B6B9BD';

    // 非编辑状态下 字体 图标颜色
    let color = '#5e8bff';
    if (data && time > 0) {
      color = '#5e8bff';
    } else {
      // color='#565656'
      color = '#B6B9BD'
    }


    let text = date ? formatDate(date, 'yyyy/MM/dd hh:mm') + ' ' + intl.messages.deadline : intl.messages.setDeadline ;

    return <div style={{
      display:'flex',
      alignItems:'center',
      height: 44,
      flexDirection: 'row',
      backgroundColor: '#fff',
      paddingLeft: 14,
    }}>
      <Icon
        type="jiezhiriqi1"
        style={{fontSize: 21, color: color,}}/>
      <div className={style.div_content}>
        <span style={{color: color, fontSize: 14}}>{text}</span>
      </div>
    </div>
  };
}

export default injectIntl(SolutionCutOffDate)
