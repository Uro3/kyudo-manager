/* eslint @typescript-eslint/no-redeclare: 0 */

export const RecordScorePointStatus = {
  None: 0,
  Hit: 1,
  Miss: 2,
  Unknown: 3
} as const;
export type RecordScorePointStatus = typeof RecordScorePointStatus[keyof typeof RecordScorePointStatus];

export const switchStatus = (status: RecordScorePointStatus): RecordScorePointStatus => {
  switch (status) {
    case RecordScorePointStatus.None:
      return RecordScorePointStatus.Hit;
    case RecordScorePointStatus.Hit:
      return RecordScorePointStatus.Miss;
    case RecordScorePointStatus.Miss:
      return RecordScorePointStatus.Unknown;
    case RecordScorePointStatus.Unknown:
      return RecordScorePointStatus.None;
  }
};
