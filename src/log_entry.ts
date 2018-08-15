import {LogLevel} from './log_level';

export class LogEntry {
  public processModelId: string;
  public correlationId: string;
  public flowNodeInstanceId?: string;
  public logLevel: LogLevel;
  public message: string;
  public timeStamp: Date;
}
