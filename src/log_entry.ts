import {LogLevel} from "./log_level";

export class LogEntry {
  processModelId: string;
  correlationId: string;
  flowNodeInstanceId?: string;
  logLevel: LogLevel;
  message: string;
  timeStamp: Date;
}
