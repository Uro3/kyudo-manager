import * as React from 'react';
import RecordScorePoint from './RecordScorePoint';
import RecordScorePointEditable from './RecordScorePointEditable';
import { RecordScoreData } from '../../types';

type Props = {
  data: RecordScoreData;
  editable: boolean;
};

const RecordScore: React.FC<Props> = props => {
  let scorePoints: JSX.Element[];
  if (props.editable) {
    scorePoints = props.data.values.map((value, index) => 
      <RecordScorePointEditable key={index} id={index} value={value} parentId={props.data.id} />
    );
  } else {
    scorePoints = props.data.values.map((value, index) => 
      <RecordScorePoint key={index} value={value} />
    );
  }

  return (
    <div className="og-score-row">
      {scorePoints}
    </div>
  );
};

export default RecordScore;
