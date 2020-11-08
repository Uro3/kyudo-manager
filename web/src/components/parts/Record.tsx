import * as React from 'react';
import RecordScore from './RecordScore';
import { RecordData } from '../../types';

type Props = {
  data: RecordData;
  editable: boolean;
  update?: (data: RecordData) => void;
  save?: (data: RecordData) => void;
};

const Record: React.FC<Props> = props => {
  const scores = props.data.scores.map((score) => 
    <RecordScore key={score.id} data={score} editable={props.editable} />
  );

  let controlElement = <></>;
  if (props.editable) {
    const onClickAdd = (): void => {
      if (props.update) {
        props.update(props.data);
      }
    };
    const onClickSave = (): void => {
      if (props.save) {
        props.save(props.data);
      }
    };
    controlElement = (
      <>
        <div className="og-vspace">
          <button className="button is-small" onClick={onClickAdd}>追加</button>
        </div>
        <div className="og-vspace">
          <button className="button is-small" onClick={onClickSave}>保存</button>
        </div>
      </>
    )
  }

  return (
    <>
      {scores}
      {controlElement}
    </>
  );
};

export default Record;
