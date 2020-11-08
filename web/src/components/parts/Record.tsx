import * as React from 'react';
import RecordView from './RecordView';
import VSpace from './VSpace';
import { switchStatus } from '../../domains/recordScorePointStatus';
import { RecordData, RecordScoreData } from '../../types';

type Props = {
  data: RecordData;
  update: (data: RecordData) => void;
  save: (data: RecordData) => void;
};

const Record: React.FC<Props> = props => {
  const updateRecord = (scoreId: number, index: number) => {
    const newScores = props.data.scores.map(score => {
      if (score.id === scoreId) {
        score.values[index] = switchStatus(score.values[index]);
      }
      return score;
    });
    const newRecord: RecordData = {
      ...props.data,
      scores: newScores,
    }
    props.update(newRecord);
  };

  const onClickAdd = (): void => {
    const scores = props.data.scores;
    const lastId = Math.max(...scores.map(score => score.id));
    const newScore: RecordScoreData = {
      id: lastId + 1,
      values: [0, 0, 0, 0],
      memo: ''
    };
    const newRecord: RecordData = {
      ...props.data,
      scores: [...props.data.scores, newScore],
    }
    props.update(newRecord);
  };

  const onClickSave = (): void => {
    props.save(props.data);
  };

  return (
    <>
      <RecordView data={props.data} update={updateRecord} />
      <VSpace />
      <button className="button is-small" onClick={onClickAdd}>追加</button>
      <VSpace />
      <button className="button is-small" onClick={onClickSave}>保存</button>
    </>
  );
};

export default Record;
