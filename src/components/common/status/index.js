import React from 'react';
import {Icon} from 'antd';
import {injectIntl} from 'react-intl';
import style from './index.css';
import {getStateColor} from '../../../utils/common'

class StatusView extends React.Component {


  constructor(props) {
    super(props)

  }


  render() {
    let data = this.props.data;

    data = data.statusObj || data.status;

    let color = getStateColor(data);

    return <div className={style.div_div}>
      <Icon
        type="zhuangtai1"
        style={{fontSize: 21, color: color,}}/>
      <div className={style.div_content}>
        <span style={{color: color, fontSize: 14}}>{data.showName}</span>
      </div>
    </div>
  };
}

export default injectIntl(StatusView)
