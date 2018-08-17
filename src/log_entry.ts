import {LogLevel} from './log_level';

/**
 * Describes a single log entry.
 * Contains information about the correlation, process model and flow node instance to which the entry belongs,
 * aswell as a timestamp, log level and the concrete message that was logged.
 */
export class LogEntry {
  public processModelId: string;
  public correlationId: string;
  public flowNodeInstanceId?: string;
  public logLevel: LogLevel;
  public message: string;
  public timeStamp: Date;
}
