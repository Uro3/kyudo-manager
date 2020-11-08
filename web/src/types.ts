import { RecordScorePointStatus } from './constants';

export type RecordScoreData = {
  id: number
  values: RecordScorePointStatus[]
  memo: string
}

export type RecordData = {
  scores: RecordScoreData[]
}
