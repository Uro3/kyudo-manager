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

  return (
    <div className="container">
      <Record data={recordData} editable={true} update={updateRecord} />
    </div>
  );
};

export default RecordEdit;
