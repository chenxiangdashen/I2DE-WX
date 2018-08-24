import React from 'react';
import {Icon} from 'antd';
import {injectIntl} from 'react-intl';
import style from './index.css';

class ProblemPropsView extends React.Component {


  constructor(props) {
    super(props)

  }

  _renderItem(data,i ,propertys={}) {

    let color = propertys[data.attrName] ?'#565656' : '#B6B9BD';

    console.log( propertys[data.attrName])
    return <div key={i} className={style.div_div}>
      <Icon
        type="quyu"
        style={{fontSize: 21, color: color,}}/>
      <div className={style.div_content}>
        <span style={{color: color, fontSize: 14}}>{data.attrDisName}</span>
        <span style={{marginLeft:10,color:'#565656'}}>{propertys && propertys[data.attrName]}</span>
      </div>
    </div>
  }


  render() {
    let {propertyColumns , propertys} = this.props;

    return <div className={style.content}>
      {
        propertyColumns.map((item,i)=>{
          return this._renderItem(item,i , propertys)
        })
      }
    </div>
  };
}

export default injectIntl(ProblemPropsView)
