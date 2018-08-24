import React from 'react';
import {Icon} from 'antd';
import {injectIntl} from 'react-intl';
import style from './index.css';
import {formatDate, parseDate} from '../../../utils/common'

class AssociatedPart extends React.Component {


  constructor(props) {
    super(props)

  }


  render() {
    let {data, intl} = this.props;

    let color = '#B6B9BD';


    return <div>
      <div className={style.div_div}>
        <Icon
          type="lingjianxuanzhong"
          style={{fontSize: 21, color: color,}}/>
        <div className={style.div_content}>
          <span style={{color: color, fontSize: 14}}>{intl.messages.associatedPart}</span>
        </div>
      </div>


      <div style={{backgroundColor: '#fff', paddingHorizontal: 14}}>
        {
          data.length>0?
          data.map((obj, i) => {
            return <div key={i} style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginLeft: 39,
              display:'flex',
              justifyContent: 'space-between',
              height: 45,
              flex: 1,

            }}>
              <div>
                <span style={{color: '#565656', fontSize: 14}}>{obj.code}
                  / {obj.revision} {obj.relatedPartSummary}</span>
              </div>

              <div>
                <Icon
                  type='youjiantou'
                  style={{fontSize: 12, color: color,marginRight:10}}
                />
              </div>

            </div>

          })
            :
            <div style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginLeft: 48,
              display:'flex',
              height: 45,
              flex: 1,

            }}>
                  <span style={{color: '#c0c4c8', fontSize: 14}}>{intl.messages.notAdded}</span>
            </div>
        }
      </div>
    </div>

  };
}

export default injectIntl(AssociatedPart)
