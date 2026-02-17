export { default as ShortUniqueId } from 'short-unique-id';

declare const randomUUID: (uuidLength?: number) => string;
declare const sequentialUUID: () => string;
declare const generateUUIDWithTimestamp: (finalLength: number, date?: Date) => string;
declare const parseUUIDWithTimestamp: (suid: string, format?: string) => Date;
declare const formattedUUIDWithTimestamp: (format: string, date?: Date) => string;

declare function newId(): string;

export { formattedUUIDWithTimestamp, generateUUIDWithTimestamp, newId, parseUUIDWithTimestamp, randomUUID, sequentialUUID };
