import {IIdentity} from '@essential-projects/iam_contracts';

import {LogEntry} from './log_entry';
import {LogLevel} from './log_level';

/**
 * Contains functions for writing and retrieving content from logfiles.
 * Each logfile relates to a specific Process Model and Correlation.
 */
export interface ILoggingApiService {

  /**
   * Retrieves the logs for a specific Correlation.
   * @async
   * @param identity       The identity of the requesting user.
   * @param correlationId  The ID of the Correlation for which to retrieve the logs.
   *                       If not set, all logs will be returned.
   * @returns              A list of log entries.
   */
  getLogsForCorrelation(identity: IIdentity, correlationId: string): Promise<Array<LogEntry>>;

  /**
   * Retrieves the logs for a specific Process Model of a given Correlation.
   * @async
   * @param identity       The identity of the requesting user.
   * @param correlationId  The ID of the Correlation for which to retrieve the logs.
   * @param processModelId The ID of Process Model for which to retrieve the logs.
   *                       If not set, all logs will be returned.
   * @returns              A list of log entries.
   */
  getLogsForProcessModel(identity: IIdentity, correlationId: string, processModelId: string): Promise<Array<LogEntry>>;

  /**
   * Writes a log entry for a specific Process Model of a Correlation.
   * @async
   * @param correlationId  The ID of the Correlation to which the Process Model belongs.
   * @param processModelId The ID of Process Model for which to create a log entry.
   * @param logLevel       The loglevel to use.
   * @param message        The message to write into the log entry.
   * @param timestamp      Optional: The timestamp to use for the log entry. Defaults to "now".
   */
  writeLogForProcessModel(correlationId: string,
                          processModelId: string,
                          logLevel: LogLevel,
                          message: string,
                          timestamp?: Date): Promise<void>;

  /**
   * Writes a log entry for a specific Flow Node of a Process Model within a Correlation.
   * @async
   * @param correlationId  The ID of the Correlation to which the Process Model belongs.
   * @param processModelId The ID of Process Model to which the Flow Node belongs.
   * @param flowNodeId     The ID of Flow Node for which to create a log entry.
   * @param logLevel       The loglevel to use.
   * @param message        The message to write into the log entry.
   * @param timestamp      Optional: The timestamp to use for the log entry. Defaults to "now".
   */
  writeLogForFlowNode(correlationId: string,
                      processModelId: string,
                      flowNodeId: string,
                      logLevel: LogLevel,
                      message: string,
                      timestamp?: Date): Promise<void>;
}
