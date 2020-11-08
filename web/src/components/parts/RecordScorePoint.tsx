import * as React from 'react';
import { RecordScorePointStatus } from '../../constants';

const statusTextMap = new Map<RecordScorePointStatus, String>([
  [RecordScorePointStatus.None, '-'],
  [RecordScorePointStatus.Hit, '○'],
  [RecordScorePointStatus.Miss, '×'],
  [RecordScorePointStatus.Unknown, '?']
]);

type Props = {
  value: RecordScorePointStatus;
  onClick?: () => void;
};

const RecordScorePoint: React.FC<Props> = props => {
  const statusText = statusTextMap.get(props.value);
  const statusClass = props.value === RecordScorePointStatus.None ? 'og-transparent' : '';

  return (
    <button className="og-score" onClick={props.onClick}>
      <span className={statusClass}>
        {statusText}
      </span>
    </button>
  );
};

export default RecordScorePoint;
