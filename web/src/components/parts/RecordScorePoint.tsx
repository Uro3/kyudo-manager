import * as React from 'react';
import RecordScorePointView from './RecordScorePointView';
import { RecordScorePointStatus } from '../../domains/recordScorePointStatus';

type Props = {
  id: number;
  value: RecordScorePointStatus;
  scoreId: number;
  update?: (scoreId: number, index: number) => void;
};

const RecordScorePoint: React.FC<Props> = props => {
  const onClick = () => {
    if (props.update) {
      props.update(props.scoreId, props.id);
    }
  };

  return (
    <RecordScorePointView value={props.value} onClick={onClick} />
  );
};

export default RecordScorePoint;
