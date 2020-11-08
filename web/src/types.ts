import { RecordScorePointStatus } from './domains/recordScorePointStatus';

export type RecordScoreData = {
  id: number
  values: RecordScorePointStatus[]
  memo: string
}

export type RecordData = {
  scores: RecordScoreData[]
}
