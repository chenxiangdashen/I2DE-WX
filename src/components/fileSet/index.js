import React from 'react';
import less from './less.less';
import './index.css';
import {injectIntl} from 'react-intl';

import PropsView from '../props'

import {Icon} from 'antd';

import {TabBar} from 'antd-mobile';

class FileSetComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTab: 'blueTab',
      hidden: false,
      fullScreen: false,
    };
  }

  renderContent(pageText) {
    return (
      <div style={{height: 100, backgroundColor: 'white', textAlign: 'center'}}>
        <div style={{paddingTop: 60}}>Clicked “{pageText}” tab， show “{pageText}” information</div>

      </div>
    );
  }

  render() {

    console.log(this.props)
    let {data , intl} = this.props;

    let rowData = data.data || [];
    let columns = data.columns || [];

    return (
      <div className={less.div_div}>
        <TabBar
          unselectedTintColor="#84848a"
          tintColor="#5e8bff"
          barTintColor="white"
          hidden={this.state.hidden}
        >
          <TabBar.Item
            title= {intl.messages.attributes}
            key="attributes"
            icon={<Icon type="lingjianshuxing" style={{fontSize: 21, color: '#84848a'}}/>}
            selectedIcon={<Icon type="lingjianshuxing" style={{fontSize: 21, color: '#5e8bff'}}/>}
            selected={this.state.selectedTab === 'blueTab'}
            onPress={() => {
              this.setState({
                selectedTab: 'blueTab',
              });
            }}
            data-seed="logId"
          >

            <PropsView data={rowData} columns={columns}/>

          </TabBar.Item>
          <TabBar.Item

            icon={<Icon type="lingjiansanwei" style={{fontSize: 21, color: '#84848a'}}/>}
            selectedIcon={<Icon type="lingjiansanwei" style={{fontSize: 21, color: '#5e8bff'}}/>}
            title={intl.messages.threeD}
            key="threeD"
            selected={this.state.selectedTab === 'redTab'}
            onPress={() => {
              this.setState({
                selectedTab: 'redTab',
              });
            }}
            data-seed="logId1"
          >
            {this.renderContent('Koubei')}
          </TabBar.Item>
          <TabBar.Item
            icon={<Icon type="lingjianBOM" style={{fontSize: 21, color: '#84848a'}}/>}
            selectedIcon={<Icon type="lingjianBOM" style={{fontSize: 21, color: '#5e8bff'}}/>}
            title="BOM"
            key="BOM"
            selected={this.state.selectedTab === 'greenTab'}
            onPress={() => {
              this.setState({
                selectedTab: 'greenTab',
              });
            }}
          >
            {this.renderContent('Friend')}
          </TabBar.Item>
          <TabBar.Item
            icon={<Icon type="lingjianpinglun" style={{fontSize: 21, color: '#84848a'}}/>}
            selectedIcon={<Icon type="lingjianpinglun" style={{fontSize: 21, color: '#5e8bff'}}/>}
            title={intl.messages.commented}
            key="commented"
            selected={this.state.selectedTab === 'yellowTab'}
            onPress={() => {
              this.setState({
                selectedTab: 'yellowTab',
              });
            }}
          >

          </TabBar.Item>
        </TabBar>
      </div>
    );
  }
}

export default injectIntl(FileSetComponent)
