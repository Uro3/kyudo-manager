/* eslint @typescript-eslint/no-redeclare: 0 */

export const RecordScorePointStatus = {
  None: 0,
  Hit: 1,
  Miss: 2,
  Unknown: 3
} as const;
export type RecordScorePointStatus = typeof RecordScorePointStatus[keyof typeof RecordScorePointStatus];
