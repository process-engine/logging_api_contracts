const params = {
  processModelId: ':process_model_id',
};

const paths = {
  getLogForProcessModel: `/process_model/${params.processModelId}`,
};

export const restSettings = {
  params: params,
  paths: paths,
};
