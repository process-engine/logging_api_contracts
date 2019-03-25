// tslint:disable:typedef
const params = {
  processModelId: ':process_model_id',
  processInstanceId: ':process_instance_id',
};

const paths = {
  getLogForProcessModel: `/process_model/${params.processModelId}`,
  getLogForProcessInstance: `/process_model/${params.processModelId}/process_instance/${params.processInstanceId}`,
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
