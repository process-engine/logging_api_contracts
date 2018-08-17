// tslint:disable:typedef
const params = {
  processModelId: ':process_model_id',
  correlationId: ':correlation_id',
  flowNodeId: ':flow_node_id',
};

const paths = {
  getLogsForCorrelation: `/correlation/${params.correlationId}`,
  getLogsForProcessModel: `/correlation/${params.correlationId}/process_model/${params.processModelId}`,
  writeLogForProcessModel: `/correlation/${params.correlationId}/process_model/${params.processModelId}`,
  writeLogForFlowNode: `/correlation/${params.correlationId}/process_model/${params.processModelId}/flow_node/${params.flowNodeId}`,
};

/**
 * Contains the endpoints and various rest parameters used by the logging API.
 */
export const restSettings = {
  /**
   * A collection of all URL parameters employed by the logging API.
   */
  params: params,
  /**
   * A collection of all URLs employed by the logging API.
   */
  paths: paths,
};
