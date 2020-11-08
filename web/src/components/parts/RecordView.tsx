import * as React from 'react';
import RecordScore from './RecordScore';
import { RecordData } from '../../types';

type Props = {
  data: RecordData;
  update?: (scoreId: number, index: number) => void;
};

const Record: React.FC<Props> = props => {
  const scores = props.data.scores.map((score) => 
    <RecordScore key={score.id} data={score} update={props.update} />
  );
  return (
    <>
      {scores}
    </>
  );
};

export default Record;
