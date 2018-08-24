import React from 'react';
import {Icon} from 'antd';
import {injectIntl} from 'react-intl';
import style from './index.css';
import DynamicsView from '../dynamics'

import {formatDate} from '../../../utils/common'

class LatestAnswerView extends React.Component {


  constructor(props) {
    super(props)

  }


  render() {
    let {data, intl} = this.props;

    let color = '#B6B9BD';


    return <div>
      <div className={style.div_div}>
        <Icon
          type="wuhuida"
          style={{fontSize: 21, color: color,}}/>
        <div className={style.div_content}>
          <span style={{color: color, fontSize: 14}}>{intl.messages.latestAnswer}</span>

          <span style={{color: color, fontSize: 12,marginRight:10}}>{formatDate(data.lastUpdatedDate,'hh:mm')}</span>

        </div>
      </div>


      <div style={{
        backgroundColor:'#fff',
        flexDirection: 'row',
        alignItems: 'center',
        paddingLeft: 48,
        display: 'flex',
        height: 45,
        flex: 1,
      }}>
        {
          data ?
            <div style={{display:'flex',alignItems:'center'}}>
              <span>{data.creator.firstName + ': '}</span>
              <DynamicsView mark={data.summaryMark} data={data.summary}/>
            </div>
            :
            <div>
              <span style={{color: '#c0c4c8', fontSize: 14}}>{intl.messages.notAdded}</span>
            </div>
        }
      </div>
    </div>

  };
}

export default injectIntl(LatestAnswerView)
