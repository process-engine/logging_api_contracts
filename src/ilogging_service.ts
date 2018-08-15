import {LogEntry} from './log_entry';
import {LogLevel} from './log_level';

import {IIdentity} from '@essential-projects/iam_contracts';

export interface ILoggingService {
  getLogsForProcessInstance(identity: IIdentity, processModelId: string, correlationId: string, logLevel?: LogLevel): Array<LogEntry>;
  writeLogForProcessModel(processModelId: string, correlationId: string, logLevel: LogLevel, message: string): Promise<void>;
  writeLogForFlowNodeInstance(processModelId: string,
                              correlationId: string,
                              flowNodeInstanceId: string,
                              logLevel: LogLevel,
                              message: string): Promise<void>;
}
