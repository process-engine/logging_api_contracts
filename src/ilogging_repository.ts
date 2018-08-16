import {LogEntry} from './log_entry';
import {LogLevel} from './log_level';

/**
 * Contains functions for writing and retrieving content from logfiles.
 * Each logfile relates to a specific process model and correlation.
 */
export interface ILoggingRepository {

  /**
   * Retrieves the logs for a specific correlation.
   * @async
   * @param correlationId  The id of the correlation for which to retrieve the logs.
   * @param logLevel       Optional: If set, only logs with a matching log level are returned.
   *                       If not set, all logs will be returned.
   * @returns              A list of log entries.
   */
  getLogsForCorrelation(correlationId: string, logLevel?: LogLevel): Promise<Array<LogEntry>>;

  /**
   * Retrieves the logs for a specific process model of a given correlation.
   * @async
   * @param correlationId  The id of the correlation for which to retrieve the logs.
   * @param processModelId The id of process model for which to retrieve the logs.
   * @param logLevel       Optional: If set, only logs with a matching log level are returned.
   *                       If not set, all logs will be returned.
   * @returns              A list of log entries.
   */
  getLogsForProcessInstance(correlationId: string, processModelId: string, logLevel?: LogLevel): Promise<Array<LogEntry>>;

  /**
   * Writes a log entry for a specific process model of a correlation.
   * @async
   * @param correlationId  The id of the correlation to which the process model belongs.
   * @param processModelId The id of process model for which to create a log entry.
   * @param logLevel       The loglevel to use (debug, info, warning, error).
   * @param message        The message to write into the log entry.
   */
  writeLogForProcessInstance(correlationId: string, processModelId: string, logLevel: LogLevel, message: string): Promise<void>;

  /**
   * Writes a log entry for a specific flow node instance of a process model within a correlation.
   * @async
   * @param correlationId       The id of the correlation to which the process model belongs.
   * @param processModelId      The id of process model to which the flow node instance belongs.
   * @param flowNodeInstanceId  The id of flow node instance for which to create a log entry.
   * @param logLevel            The loglevel to use (debug, info, warning, error).
   * @param message             The message to write into the log entry.
   */
  writeLogForFlowNodeInstance(correlationId: string,
                              processModelId: string,
                              flowNodeInstanceId: string,
                              logLevel: LogLevel,
                              message: string): Promise<void>;
}
