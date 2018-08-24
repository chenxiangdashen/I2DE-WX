import React from 'react';
import {Icon} from 'antd';
import {injectIntl} from 'react-intl';
import style from './index.css';
import {getStateColor} from '../../../utils/common'

class TagsView extends React.Component {


  constructor(props) {
    super(props)

  }

  _renderItem(data){
    return data.map((item, i) =>
          <div key={i} style={{
            display:'flex',
            borderRadius: 4,
            marginRight: 8,
            marginTop:  5,
            justifyContent:'center',
            alignItems:'center',
            paddingHorizontal:2,
            height:25,
            borderStyle:'solid',
            borderColor: item.color,
            borderWidth: 1
          }}>
            <span numberOfLines={1} style={{
              paddingLeft:3,
              paddingRight:3,
              color: item.color,
            }}> {item.name}</span>
          </div>
        )
  }

  render() {

    let {data} = this.props;
    let color = '#B6B9BD'


    return <div className={style.div_div}>
      <Icon
        type="biaoqian"
        style={{fontSize: 21, color: color,}}/>
      <div className={style.div_content} style={{flexDirection: 'row', flexWrap: 'wrap'}}>
        {
          this._renderItem(data)
        }
        {/*<span style={{color: color, fontSize: 14}}>{data.showName}</span>*/}
      </div>
    </div>
  };
}

export default injectIntl(TagsView)
