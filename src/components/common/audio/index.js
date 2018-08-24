import React, { Component } from 'react';
import styles from './index.css'

import { Icon } from 'antd';

class Audio extends Component {
    constructor(props){
        super(props);
        // console.log(props);
        this.play = this.play.bind(this);
        this.state = {
            isPlay: false,
            time: parseInt(this.props.time, 10)
        }
    }

    isPlay() {
        this.setState({
            isPlay: false
        })
    }

    componentDidMount() {
        const audio = this.audio;
        audio.addEventListener("ended", this.isPlay.bind(this), false)
    }

    componentWillUnmount() {
        const audio = this.audio;
        audio.removeEventListener("ended", this.isPlay.bind(this), false)
    }

    play() {
        // console.log(this.refs.audio);
        if(this.state.isPlay) {
            this.audio.pause();
            this.audio.play();
            this.setState({
                isPlay: false
            });
        } else {
            this.audio.play();
            this.setState({
                isPlay: true
            });
        }
    }

    render() {
        const time = this.props.time;
        const subfix = time.substr(time.length -1);
        const fixTime = Math.ceil(parseFloat(time, 10));
        return (
            <div className={styles.container}>
                <audio ref={audio=>this.audio=audio} src={this.props.src}>您的浏览器不支持 audio 标签。</audio>
                <div className={styles.audio_container} style={{width: (50 + this.state.time*5)}} onClick={this.play}>
                    {/* <div className={styles.dymaticImg}></div>
                    <Icon type="shengyin" style={{fontSize: 16, color: '#ccc', marginLeft: 7, marginTop: 6}}></Icon> */}
                    {
                        this.state.isPlay?<div className={styles.dymaticImg}></div> : <Icon type="shengyin" style={{fontSize: 16, color: '#fff', marginLeft: 8}}></Icon>
                    }
                </div>
                <span>{`${fixTime}${subfix}`}</span>

            </div>
        );
    }
}

export default Audio;
