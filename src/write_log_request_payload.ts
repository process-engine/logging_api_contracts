import {LogLevel} from './log_level';

export class WriteLogRequestPayload {
  public logLevel: LogLevel;
  public message: string;
}
