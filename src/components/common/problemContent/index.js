import React from 'react';
import style from './less.less';

import Audio from '../../common/audio'
import ImageView from '../../common/imageView'

import {injectIntl} from 'react-intl';
import {Icon} from 'antd';


class problemContent extends React.Component {


  constructor(props) {
    super(props)
    this.state = {
      expand: false,
    }
  }

  _renderHorizontalText(data, i) {
    if (data.key === 'text' && (i === 0 || !this.hasShow)) {
      return <span key={i} style={{color: '#919191'}}>{data.value}</span>
    }
  }

  _renderHorizontalAudio(data, i) {
    if (data.key === 'audio' && (i === 0 || !this.hasShow)) {
      return <Audio key={i} src={data.value} time={data.time} style={{color: '#919191'}}/>
    }
  }

  _renderHorizontalImage(data, i) {

    return <ImageView imageArray={data} openGalleryArray={data} displayNum={3}/>
  }


  _renderverticalContent(data, horizontalData) {
    if (data.key === 'img') {
      console.log(horizontalData)
      return <ImageView imageArray={[data]} openGalleryArray={horizontalData.img} expand={true} displayNum={1}/>

    } else if (data.key === 'audio') {
      if (data.time) {
        return <Audio src={data.value} time={data.time} style={{color: '#919191'}}/>
      }
    } else if (data.key === 'text') {
      return <span style={{color: '#919191'}}>{data.value}</span>
    }
  }

  _renderArr(arr) {
    let arr2 = {};
    arr2.img = [];
    arr2.text = [];
    arr2.audio = [];
    arr.map((data) => {
      if (data.key === 'img') {
        this.hasShow = true;
        arr2.img.push(data)
      } else if (data.key === 'audio') {
        arr2.audio.push(data)
      } else if (data.key === 'text') {
        arr2.text.push(data)
      }
    })

    if (arr2.audio.length > 1) {
      this.hasShow = true
    }
    return arr2;
  }


  render() {


    const {intl, data} = this.props;

    var horizontalData = this._renderArr(data);

    return (
      <div>
        {
          // 问题内容展开
          this.state.expand ?
            <div>
              {
                data.map((item, i) => {

                  return <div key={i}>
                    {
                      this._renderverticalContent(item, horizontalData)
                    }
                  </div>
                })

              }
            </div>
            :
            <div>
              {
                horizontalData.text.length > 0 ?
                  <div>
                    {horizontalData.text.map((tab, i) => this._renderHorizontalText(tab, i, horizontalData.text.length))}
                  </div> : null
              }


              {
                horizontalData.audio.length > 0 ?
                  <div style={{flexDirection: 'row', marginTop: 10}}>
                    {horizontalData.audio.map((tab, i) => this._renderHorizontalAudio(tab, i, horizontalData.audio.length))}
                  </div>
                  : null
              }

              {
                horizontalData.img.length > 0 ?
                  <div style={{flexDirection: 'row', marginTop: 10}}>
                    {
                      this._renderHorizontalImage(horizontalData.img)
                    }
                  </div>
                  : null
              }

            </div>
        }

        <div onClick={()=>this.setState({expand:!this.state.expand})}>
          {
            !this.state.expand ?
              <div className={style.expand}>
                <div style={{fontSize: 12, color: '#c6c6c6'}}>{intl.messages.expand}</div>
                <Icon type="xiajiantou" style={{fontSize: 11, color: '#c6c6c6', marginLeft: 8}}/>
              </div>
              :
              <div className={style.expand}>
                <div style={{fontSize: 12, color: '#c6c6c6'}}>{intl.messages.collapse}</div>
                <Icon type="shangjiantou" style={{fontSize: 11, color: '#c6c6c6', marginLeft: 8}}/>
              </div>
          }
        </div>


      </div>
    );
  }
}

export default injectIntl(problemContent)
