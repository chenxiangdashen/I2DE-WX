import React, {Component} from 'react';
import styles from './index.less'

import PhotoSwipe from 'photoswipe';
import PhotoswipeUIDefault from 'photoswipe/dist/photoswipe-ui-default';

import {injectIntl} from 'react-intl';

import 'photoswipe/dist/photoswipe.css';
import 'photoswipe/dist/default-skin/default-skin.css';

class ImageView extends Component {

  constructor(props) {
    super(props);
    this.state = {
      gallery: null
    }
  }

  componentDidMount() {

  }

  componentWillUnmount = () => {
    this.closeGallery();
  };

  openGallery = (items, index) => {
    console.log(this.props);
    const data = items.map(item => {
      return {
        src: item.value,
        w: 0,
        h: 0,
      }
    })
    const pswpElement = this.pswpElement;
    // console.log(pswpElement);
    const options = {
      index,
      shareEl: false,
      fullscreenEl: false
    };
    this.gallery = new PhotoSwipe(pswpElement, PhotoswipeUIDefault, data, options);
    this.gallery.listen('gettingData', (index, item) => {
      const _this = this;
      if (item.w < 1 || item.h < 1) { // unknown size
        var img = new Image();
        img.onload = function () { // will get size after load
          item.w = this.width; // set image width
          item.h = this.height; // set image height
          _this.gallery.invalidateCurrItems(); // reinit Items
          _this.gallery.updateSize(true); // reinit Items
        };
        img.src = item.src; // let's download image
      }
    });
    this.gallery.init();
  }

  closeGallery = () => {
    if (!this.gallery) return;
    this.gallery.close();
  }

  render() {

    let {displayNum = 0, imageArray = [], openGalleryArray = [], expand = false ,intl} = this.props;
    // console.log(displayNum);
    // console.log(imageArray);
    return [
      <div className={styles.container} key="imageView-1">
        {
          imageArray.map((item, index) => {

            if (index === (displayNum - 1)) {
              return (
                <div className={expand ? styles.imageContainerExpand : styles.imageContainer}
                     style={{marginLeft: (index !== 0 ? 3 : 0)}}
                     key={index} onClick={() => {
                  this.openGallery(openGalleryArray, index)
                }}>
                  <img alt="" src={item.value} className={styles.image}/>
                  {
                    imageArray.length > displayNum ?
                      <div className={styles.imgTips}>{intl.messages.totalZhang.replace('${param}',imageArray.length)}</div> : null
                  }
                </div>
              );
            }
            if (index < (displayNum - 1)) {
              return (
                <div className={expand ? styles.imageContainerExpand : styles.imageContainer}
                     style={{marginLeft: (index !== 0 ? 3 : 0)}}
                     key={index}>
                  <img alt="" src={item.value} className={styles.image}  onClick={() => {
                    this.openGallery(openGalleryArray, index)
                  }}/>
                </div>
              );
            }
            return null;
          })
        }
      </div>,
      <div className="pswp" tabIndex="-1" role="dialog" aria-hidden="true" ref={(div) => {
        this.pswpElement = div;
      }} key="imageView-2">

        <div className="pswp__bg"/>

        <div className="pswp__scroll-wrap">

          <div className="pswp__container">
            <div className="pswp__item"/>
            <div className="pswp__item"/>
            <div className="pswp__item"/>
          </div>

          <div className="pswp__ui pswp__ui--hidden">

            <div className="pswp__top-bar">

              <div className="pswp__counter"/>

              <button className="pswp__button pswp__button--close" title="Close (Esc)"/>

              <button className="pswp__button pswp__button--share" title="Share"/>

              <button className="pswp__button pswp__button--fs" title="Toggle fullscreen"/>

              <button className="pswp__button pswp__button--zoom" title="Zoom in/out"/>

              <div className="pswp__preloader">
                <div className="pswp__preloader__icn">
                  <div className="pswp__preloader__cut">
                    <div className="pswp__preloader__donut"/>
                  </div>
                </div>
              </div>
            </div>

            <div className="pswp__share-modal pswp__share-modal--hidden pswp__single-tap">
              <div className="pswp__share-tooltip"/>
            </div>

            <button className="pswp__button pswp__button--arrow--left" title="Previous (arrow left)"/>

            <button className="pswp__button pswp__button--arrow--right" title="Next (arrow right)"/>

            <div className="pswp__caption">
              <div className="pswp__caption__center"/>
            </div>

          </div>

        </div>

      </div>
    ];

  }
}

export default injectIntl(ImageView)
