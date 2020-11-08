import * as React from 'react';
import RecordView from '../parts/RecordView';
import { RecordData } from '../../types';
// import dateUtil from '~/lib/dateUtil';

const initialRecordData: RecordData = {
  scores: [{
    id: 1,
    values: [0, 0, 0, 0],
    memo: ''
  }]
};

const RecordList: React.FC = () => {
  // const [date, setDate] = React.useState(dateUtil.today);

  // const onDateChanged = (event: React.ChangeEvent<HTMLInputElement>): void => {
  //   setDate(event.target.value);
  // };

  return (
    <div className="container">
      {/* <input className="input is-small og-input-date" type="date" value={date} onChange={onDateChanged} /> */}
      <RecordView data={initialRecordData} />
    </div>
  );
};

export default RecordList;
