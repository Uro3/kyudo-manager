import * as React from 'react';
import RecordScorePoint from './RecordScorePoint';
import { RecordScoreData } from '../../types';

type Props = {
  data: RecordScoreData;
  update?: (scoreId: number, index: number) => void;
};

const RecordScore: React.FC<Props> = props => {
  const scorePoints = props.data.values.map((value, index) => 
    <RecordScorePoint key={index} id={index} value={value} scoreId={props.data.id} update={props.update} />
  );

  return (
    <div className="og-score-row">
      {scorePoints}
    </div>
  );
};

export default RecordScore;
