import * as React from 'react';
import styled from 'styled-components';
import { RecordScorePointStatus } from '../../domains/recordScorePointStatus';

const statusTextMap = new Map<RecordScorePointStatus, String>([
  [RecordScorePointStatus.None, '-'],
  [RecordScorePointStatus.Hit, '○'],
  [RecordScorePointStatus.Miss, '×'],
  [RecordScorePointStatus.Unknown, '?']
]);

type Props = {
  value: RecordScorePointStatus;
  onClick?: () => void;
  className?: string;
};

const RecordScorePointView: React.FC<Props> = props => {
  const statusText = statusTextMap.get(props.value);
  const statusClass = props.value === RecordScorePointStatus.None ? `${props.className}__transparent` : '';

  return (
    <button className={props.className} onClick={props.onClick}>
      <span className={statusClass}>
        {statusText}
      </span>
    </button>
  );
};

const StyledRecordScorePointView = styled(RecordScorePointView)`
  width: 2rem;
  height: 2rem;
  padding: 0;
  margin: 0 0.1rem;
  background-color: #fff;
  font-size: 1rem;
  font-weight: bold;
  border-width: 0.1rem;
  border-style: solid;
  border-color: #555;

  &__transparent {
    opacity: 0;
  }
`;

export default StyledRecordScorePointView;
