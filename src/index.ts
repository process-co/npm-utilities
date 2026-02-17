import { v4 } from 'uuid';
import _ShortUniqueId from 'short-unique-id'

const { randomUUID, sequentialUUID, stamp: generateUUIDWithTimestamp, parseStamp: parseUUIDWithTimestamp, formattedUUID: formattedUUIDWithTimestamp } = new _ShortUniqueId();

export { randomUUID, sequentialUUID, generateUUIDWithTimestamp, parseUUIDWithTimestamp, formattedUUIDWithTimestamp, _ShortUniqueId as ShortUniqueId }

export function newId() {
  return generateUUIDWithTimestamp(16);
}