import {IIdentity} from '@essential-projects/iam_contracts';

import {LogEntry} from './log_entry';
import {LogLevel} from './log_level';

/**
 * Contains functions for writing and retrieving content from logfiles.
 * Each logfile relates to a specific process model and correlation.
 */
export interface ILoggingService {

  /**
   * Retrieves the logs for a specific correlation.
   * @async
   * @param identity       The identity of the requesting user.
   * @param correlationId  The id of the correlation for which to retrieve the logs.
   * @param logLevel       Optional: If set, only logs with a matching log level are returned.
   *                       If not set, all logs will be returned.
   * @returns              A list of log entries.
   */
  getLogsForCorrelation(identity: IIdentity, correlationId: string, logLevel?: LogLevel): Promise<Array<LogEntry>>;

  /**
   * Retrieves the logs for a specific process model of a given correlation.
   * @async
   * @param identity       The identity of the requesting user.
   * @param processModelId The id of process model for which to retrieve the logs.
   * @param correlationId  The id of the correlation for which to retrieve the logs.
   * @param logLevel       Optional: If set, only logs with a matching log level are returned.
   *                       If not set, all logs will be returned.
   * @returns              A list of log entries.
   */
  getLogsForProcessInstance(identity: IIdentity, processModelId: string, correlationId: string, logLevel?: LogLevel): Promise<Array<LogEntry>>;

  /**
   * Writes a log entry for a specific process model of a correlation.
   * @async
   * @param processModelId The id of process model for which to create a log entry.
   * @param correlationId  The id of the correlation to which the process model belongs.
   * @param logLevel       The loglevel to use (debug, info, warning, error).
   * @param message        The message to write into the log entry.
   */
  writeLogForProcessModel(processModelId: string, correlationId: string, logLevel: LogLevel, message: string): Promise<void>;

  /**
   * Writes a log entry for a specific flow node instance of a process model within a correlation.
   * @async
   * @param processModelId      The id of process model to which the flow node instance belongs.
   * @param correlationId       The id of the correlation to which the process model belongs.
   * @param flowNodeInstanceId  The id of flow node instance for which to create a log entry.
   * @param logLevel            The loglevel to use (debug, info, warning, error).
   * @param message             The message to write into the log entry.
   */
  writeLogForFlowNodeInstance(processModelId: string,
                              correlationId: string,
                              flowNodeInstanceId: string,
                              logLevel: LogLevel,
                              message: string): Promise<void>;
}
