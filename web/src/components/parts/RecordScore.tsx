import * as React from 'react';
import styled from 'styled-components';
import RecordScorePoint from './RecordScorePoint';
import { RecordScoreData } from '../../types';

type Props = {
  data: RecordScoreData;
  update?: (scoreId: number, index: number) => void;
  className?: string;
};

const RecordScore: React.FC<Props> = props => {
  const scorePoints = props.data.values.map((value, index) => 
    <RecordScorePoint key={index} id={index} value={value} scoreId={props.data.id} update={props.update} />
  );

  return (
    <div className={props.className}>
      {scorePoints}
    </div>
  );
};

const StyledRecordScore = styled(RecordScore)`
  & + & {
    margin-top: 1rem;
  }
`;

export default StyledRecordScore;
