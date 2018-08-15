import {LogLevel} from "./log_level";
import {LogEntry} from "./log_entry";

export interface ILoggingService {
  writeLogForProcessModel(processModelId: string, correlationId: string, logLevel: LogLevel, message: string): Promise<void>;
  writeLogForFlowNodeInstance(processModelId: string, correlationId: string, flowNodeInstanceId: string, logLevel: LogLevel, message: string): Promise<void>;
  getLogsForProcessInstance(processModelId: string, correlationId: string, logLevel?: LogLevel): Array<LogEntry>;
}
