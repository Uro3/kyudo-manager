import * as React from 'react';
import Record from '../parts/Record';
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
      <Record data={initialRecordData} editable={false} />
    </div>
  );
};

export default RecordList;
