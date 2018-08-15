import {LogLevel} from './log_level';

/**
 * Describes a single log entry.
 */
export class LogEntry {
  /**
   * The id of the process model to which the log entry pertains.
   */
  public processModelId: string;

  /**
   * The id of the correlation to which the log entry pertains.
   */
  public correlationId: string;

  /**
   * The id of the flow node instance to which the log entry pertains.
   */
  public flowNodeInstanceId?: string;

  /**
   * The log level.
   */
  public logLevel: LogLevel;

  /**
   * The log message.
   */
  public message: string;

  /**
   * The date and time at which the log entry was recorded..
   */
  public timeStamp: Date;
}
