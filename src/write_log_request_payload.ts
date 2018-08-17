import {LogLevel} from './log_level';

/**
 * Describes the payload that gets send with a HTTP request for writing a log entry.
 */
export class WriteLogRequestPayload {
  public logLevel: LogLevel;
  public message: string;
  public timestamp?: Date;
}
