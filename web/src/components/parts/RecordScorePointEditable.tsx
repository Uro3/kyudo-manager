import * as React from 'react';
import RecordScorePoint from './RecordScorePoint';
import { RecordScorePointStatus } from '../../constants';

type Props = {
  id: number;
  parentId: number;
  value: RecordScorePointStatus;
};

const RecordScorePointEditable: React.FC<Props> = props => {
  const onClick = (): void => {
    // props.update(props.id);
  };

  return (
    <RecordScorePoint value={props.value} onClick={onClick} />
  );
};

export default RecordScorePointEditable;
