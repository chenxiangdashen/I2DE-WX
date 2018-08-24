import React from 'react';
import less from './less.less';
import Avater from '../common/avater';
import ProblemContent from '../common/problemContent';
import StatusView from '../common/status';
import SolutionCutOffDateView from '../common/solutionCutOffDate';
import RespondentView from '../common/respondent';
import ProblemPropsView from '../common/problemProps';
import PriorityView from '../common/priority';
import TagsView from '../common/tags';
import LatestAnswerView from '../common/latestAnswer';
import DiscusserView from '../common/discusser';
import AssociatedPartView from '../common/associatedPart';
import LoggersView from '../common/loggers';
import {injectIntl} from 'react-intl';


class Problem extends React.Component {


  constructor(props){
    super(props)
    this.state = {

    }
  }



  render() {

    console.log(this.props)

    const {intl , data } = this.props;

    return (
      <div>
        {
          data?
            <div className={less.content}>

              <div className={less.head}>
                <Avater text={data.owner.firstName}/>
                <div className={less.nameText}>
                  {data.owner.firstName}
                </div>
                <div className={less.dateText}>
                  {data.dateCreated}
                </div>
              </div>

              <div className={less.title}>
                {data.title}
              </div>

              <div className={less.body}>
                <ProblemContent data={data.contents}/>
              </div>


              <div className={less.property}>
                <StatusView data={data}/>

                <RespondentView solver={data.solver} worker={data.worker}/>

                <PriorityView data={data.importance}/>

                <SolutionCutOffDateView data={data.solutionCutOffDate}/>

                <ProblemPropsView propertys={data.propertys} propertyColumns={data.propertyColumns}/>
              </div>

              <div className={less.tags}>

                {
                  data.issueTags ?
                    <TagsView data={data.issueTags || []}/>
                    :null
                }


                <AssociatedPartView data={data.relates}/>
              </div>

              <div className={less.tags}>
                <LatestAnswerView data={data.leastSolution}/>
              </div>

              <div className={less.tags}>
                <DiscusserView data={data}/>
              </div>

              <LoggersView data={data.logs}/>


            </div>

            :null

        }


      </div>
    );
  }
}

export default injectIntl(Problem)
