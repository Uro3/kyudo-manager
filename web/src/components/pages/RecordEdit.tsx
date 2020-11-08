import * as React from 'react';
import Record from '../parts/Record';
import { RecordData } from '../../types';

const initialRecordData: RecordData = {
  scores: [{
    id: 1,
    values: [0, 0, 0, 0],
    memo: ''
  }]
};

const RecordEdit: React.FC = () => {
  const [recordData, setRecordData] = React.useState(initialRecordData);

  const updateRecord = (data: RecordData) => {
    setRecordData(data);
  };

  const saveRecord = (data: RecordData) => {};

  return (
    <div className="container">
      <Record data={recordData} update={updateRecord} save={saveRecord} />
    </div>
  );
};

export default RecordEdit;
