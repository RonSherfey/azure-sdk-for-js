import "@azure/core-paging";
import { PagedAsyncIterableIterator } from "@azure/core-paging";
import { PollerLike, PollOperationState } from "@azure/core-lro";
import {
  DeploymentExtended,
  DeploymentsListAtScopeNextOptionalParams,
  DeploymentsListAtScopeOptionalParams,
  DeploymentsListAtTenantScopeNextOptionalParams,
  DeploymentsListAtTenantScopeOptionalParams,
  DeploymentsListAtManagementGroupScopeNextOptionalParams,
  DeploymentsListAtManagementGroupScopeOptionalParams,
  DeploymentsListAtSubscriptionScopeNextOptionalParams,
  DeploymentsListAtSubscriptionScopeOptionalParams,
  DeploymentsListByResourceGroupNextOptionalParams,
  DeploymentsListByResourceGroupOptionalParams,
  DeploymentsDeleteAtScopeOptionalParams,
  DeploymentsCheckExistenceAtScopeOptionalParams,
  Deployment,
  DeploymentsCreateOrUpdateAtScopeOptionalParams,
  DeploymentsCreateOrUpdateAtScopeResponse,
  DeploymentsGetAtScopeOptionalParams,
  DeploymentsGetAtScopeResponse,
  DeploymentsCancelAtScopeOptionalParams,
  DeploymentsValidateAtScopeOptionalParams,
  DeploymentsValidateAtScopeResponse,
  DeploymentsExportTemplateAtScopeOptionalParams,
  DeploymentsExportTemplateAtScopeResponse,
  DeploymentsDeleteAtTenantScopeOptionalParams,
  DeploymentsCheckExistenceAtTenantScopeOptionalParams,
  ScopedDeployment,
  DeploymentsCreateOrUpdateAtTenantScopeOptionalParams,
  DeploymentsCreateOrUpdateAtTenantScopeResponse,
  DeploymentsGetAtTenantScopeOptionalParams,
  DeploymentsGetAtTenantScopeResponse,
  DeploymentsCancelAtTenantScopeOptionalParams,
  DeploymentsValidateAtTenantScopeOptionalParams,
  DeploymentsValidateAtTenantScopeResponse,
  ScopedDeploymentWhatIf,
  DeploymentsWhatIfAtTenantScopeOptionalParams,
  DeploymentsWhatIfAtTenantScopeResponse,
  DeploymentsExportTemplateAtTenantScopeOptionalParams,
  DeploymentsExportTemplateAtTenantScopeResponse,
  DeploymentsDeleteAtManagementGroupScopeOptionalParams,
  DeploymentsCheckExistenceAtManagementGroupScopeOptionalParams,
  DeploymentsCreateOrUpdateAtManagementGroupScopeOptionalParams,
  DeploymentsCreateOrUpdateAtManagementGroupScopeResponse,
  DeploymentsGetAtManagementGroupScopeOptionalParams,
  DeploymentsGetAtManagementGroupScopeResponse,
  DeploymentsCancelAtManagementGroupScopeOptionalParams,
  DeploymentsValidateAtManagementGroupScopeOptionalParams,
  DeploymentsValidateAtManagementGroupScopeResponse,
  DeploymentsWhatIfAtManagementGroupScopeOptionalParams,
  DeploymentsWhatIfAtManagementGroupScopeResponse,
  DeploymentsExportTemplateAtManagementGroupScopeOptionalParams,
  DeploymentsExportTemplateAtManagementGroupScopeResponse,
  DeploymentsDeleteAtSubscriptionScopeOptionalParams,
  DeploymentsCheckExistenceAtSubscriptionScopeOptionalParams,
  DeploymentsCreateOrUpdateAtSubscriptionScopeOptionalParams,
  DeploymentsCreateOrUpdateAtSubscriptionScopeResponse,
  DeploymentsGetAtSubscriptionScopeOptionalParams,
  DeploymentsGetAtSubscriptionScopeResponse,
  DeploymentsCancelAtSubscriptionScopeOptionalParams,
  DeploymentsValidateAtSubscriptionScopeOptionalParams,
  DeploymentsValidateAtSubscriptionScopeResponse,
  DeploymentWhatIf,
  DeploymentsWhatIfAtSubscriptionScopeOptionalParams,
  DeploymentsWhatIfAtSubscriptionScopeResponse,
  DeploymentsExportTemplateAtSubscriptionScopeOptionalParams,
  DeploymentsExportTemplateAtSubscriptionScopeResponse,
  DeploymentsDeleteOptionalParams,
  DeploymentsCheckExistenceOptionalParams,
  DeploymentsCreateOrUpdateOptionalParams,
  DeploymentsCreateOrUpdateResponse,
  DeploymentsGetOptionalParams,
  DeploymentsGetResponse,
  DeploymentsCancelOptionalParams,
  DeploymentsValidateOptionalParams,
  DeploymentsValidateResponse,
  DeploymentsWhatIfOptionalParams,
  DeploymentsWhatIfResponse,
  DeploymentsExportTemplateOptionalParams,
  DeploymentsExportTemplateResponse,
  DeploymentsCalculateTemplateHashOptionalParams,
  DeploymentsCalculateTemplateHashResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a Deployments. */
export interface Deployments {
  /**
   * Get all the deployments at the given scope.
   * @param scope The resource scope.
   * @param options The options parameters.
   */
  listAtScope(
    scope: string,
    options?: DeploymentsListAtScopeOptionalParams
  ): PagedAsyncIterableIterator<DeploymentExtended>;
  /**
   * Get all the deployments at the tenant scope.
   * @param options The options parameters.
   */
  listAtTenantScope(
    options?: DeploymentsListAtTenantScopeOptionalParams
  ): PagedAsyncIterableIterator<DeploymentExtended>;
  /**
   * Get all the deployments for a management group.
   * @param groupId The management group ID.
   * @param options The options parameters.
   */
  listAtManagementGroupScope(
    groupId: string,
    options?: DeploymentsListAtManagementGroupScopeOptionalParams
  ): PagedAsyncIterableIterator<DeploymentExtended>;
  /**
   * Get all the deployments for a subscription.
   * @param options The options parameters.
   */
  listAtSubscriptionScope(
    options?: DeploymentsListAtSubscriptionScopeOptionalParams
  ): PagedAsyncIterableIterator<DeploymentExtended>;
  /**
   * Get all the deployments for a resource group.
   * @param resourceGroupName The name of the resource group with the deployments to get. The name is
   *                          case insensitive.
   * @param options The options parameters.
   */
  listByResourceGroup(
    resourceGroupName: string,
    options?: DeploymentsListByResourceGroupOptionalParams
  ): PagedAsyncIterableIterator<DeploymentExtended>;
  /**
   * ListAtScopeNext
   * @param scope The resource scope.
   * @param nextLink The nextLink from the previous successful call to the ListAtScope method.
   * @param options The options parameters.
   */
  listAtScopeNext(
    scope: string,
    nextLink: string,
    options?: DeploymentsListAtScopeNextOptionalParams
  ): PagedAsyncIterableIterator<DeploymentExtended>;
  /**
   * ListAtTenantScopeNext
   * @param nextLink The nextLink from the previous successful call to the ListAtTenantScope method.
   * @param options The options parameters.
   */
  listAtTenantScopeNext(
    nextLink: string,
    options?: DeploymentsListAtTenantScopeNextOptionalParams
  ): PagedAsyncIterableIterator<DeploymentExtended>;
  /**
   * ListAtManagementGroupScopeNext
   * @param groupId The management group ID.
   * @param nextLink The nextLink from the previous successful call to the ListAtManagementGroupScope
   *                 method.
   * @param options The options parameters.
   */
  listAtManagementGroupScopeNext(
    groupId: string,
    nextLink: string,
    options?: DeploymentsListAtManagementGroupScopeNextOptionalParams
  ): PagedAsyncIterableIterator<DeploymentExtended>;
  /**
   * ListAtSubscriptionScopeNext
   * @param nextLink The nextLink from the previous successful call to the ListAtSubscriptionScope
   *                 method.
   * @param options The options parameters.
   */
  listAtSubscriptionScopeNext(
    nextLink: string,
    options?: DeploymentsListAtSubscriptionScopeNextOptionalParams
  ): PagedAsyncIterableIterator<DeploymentExtended>;
  /**
   * ListByResourceGroupNext
   * @param resourceGroupName The name of the resource group with the deployments to get. The name is
   *                          case insensitive.
   * @param nextLink The nextLink from the previous successful call to the ListByResourceGroup method.
   * @param options The options parameters.
   */
  listByResourceGroupNext(
    resourceGroupName: string,
    nextLink: string,
    options?: DeploymentsListByResourceGroupNextOptionalParams
  ): PagedAsyncIterableIterator<DeploymentExtended>;
  /**
   * A template deployment that is currently running cannot be deleted. Deleting a template deployment
   * removes the associated deployment operations. This is an asynchronous operation that returns a
   * status of 202 until the template deployment is successfully deleted. The Location response header
   * contains the URI that is used to obtain the status of the process. While the process is running, a
   * call to the URI in the Location header returns a status of 202. When the process finishes, the URI
   * in the Location header returns a status of 204 on success. If the asynchronous request failed, the
   * URI in the Location header returns an error-level status code.
   * @param scope The resource scope.
   * @param deploymentName The name of the deployment.
   * @param options The options parameters.
   */
  beginDeleteAtScope(
    scope: string,
    deploymentName: string,
    options?: DeploymentsDeleteAtScopeOptionalParams
  ): Promise<PollerLike<PollOperationState<void>, void>>;
  /**
   * A template deployment that is currently running cannot be deleted. Deleting a template deployment
   * removes the associated deployment operations. This is an asynchronous operation that returns a
   * status of 202 until the template deployment is successfully deleted. The Location response header
   * contains the URI that is used to obtain the status of the process. While the process is running, a
   * call to the URI in the Location header returns a status of 202. When the process finishes, the URI
   * in the Location header returns a status of 204 on success. If the asynchronous request failed, the
   * URI in the Location header returns an error-level status code.
   * @param scope The resource scope.
   * @param deploymentName The name of the deployment.
   * @param options The options parameters.
   */
  beginDeleteAtScopeAndWait(
    scope: string,
    deploymentName: string,
    options?: DeploymentsDeleteAtScopeOptionalParams
  ): Promise<void>;
  /**
   * Checks whether the deployment exists.
   * @param scope The resource scope.
   * @param deploymentName The name of the deployment.
   * @param options The options parameters.
   */
  checkExistenceAtScope(
    scope: string,
    deploymentName: string,
    options?: DeploymentsCheckExistenceAtScopeOptionalParams
  ): Promise<void>;
  /**
   * You can provide the template and parameters directly in the request or link to JSON files.
   * @param scope The resource scope.
   * @param deploymentName The name of the deployment.
   * @param parameters Additional parameters supplied to the operation.
   * @param options The options parameters.
   */
  beginCreateOrUpdateAtScope(
    scope: string,
    deploymentName: string,
    parameters: Deployment,
    options?: DeploymentsCreateOrUpdateAtScopeOptionalParams
  ): Promise<
    PollerLike<
      PollOperationState<DeploymentsCreateOrUpdateAtScopeResponse>,
      DeploymentsCreateOrUpdateAtScopeResponse
    >
  >;
  /**
   * You can provide the template and parameters directly in the request or link to JSON files.
   * @param scope The resource scope.
   * @param deploymentName The name of the deployment.
   * @param parameters Additional parameters supplied to the operation.
   * @param options The options parameters.
   */
  beginCreateOrUpdateAtScopeAndWait(
    scope: string,
    deploymentName: string,
    parameters: Deployment,
    options?: DeploymentsCreateOrUpdateAtScopeOptionalParams
  ): Promise<DeploymentsCreateOrUpdateAtScopeResponse>;
  /**
   * Gets a deployment.
   * @param scope The resource scope.
   * @param deploymentName The name of the deployment.
   * @param options The options parameters.
   */
  getAtScope(
    scope: string,
    deploymentName: string,
    options?: DeploymentsGetAtScopeOptionalParams
  ): Promise<DeploymentsGetAtScopeResponse>;
  /**
   * You can cancel a deployment only if the provisioningState is Accepted or Running. After the
   * deployment is canceled, the provisioningState is set to Canceled. Canceling a template deployment
   * stops the currently running template deployment and leaves the resources partially deployed.
   * @param scope The resource scope.
   * @param deploymentName The name of the deployment.
   * @param options The options parameters.
   */
  cancelAtScope(
    scope: string,
    deploymentName: string,
    options?: DeploymentsCancelAtScopeOptionalParams
  ): Promise<void>;
  /**
   * Validates whether the specified template is syntactically correct and will be accepted by Azure
   * Resource Manager..
   * @param scope The resource scope.
   * @param deploymentName The name of the deployment.
   * @param parameters Parameters to validate.
   * @param options The options parameters.
   */
  beginValidateAtScope(
    scope: string,
    deploymentName: string,
    parameters: Deployment,
    options?: DeploymentsValidateAtScopeOptionalParams
  ): Promise<
    PollerLike<
      PollOperationState<DeploymentsValidateAtScopeResponse>,
      DeploymentsValidateAtScopeResponse
    >
  >;
  /**
   * Validates whether the specified template is syntactically correct and will be accepted by Azure
   * Resource Manager..
   * @param scope The resource scope.
   * @param deploymentName The name of the deployment.
   * @param parameters Parameters to validate.
   * @param options The options parameters.
   */
  beginValidateAtScopeAndWait(
    scope: string,
    deploymentName: string,
    parameters: Deployment,
    options?: DeploymentsValidateAtScopeOptionalParams
  ): Promise<DeploymentsValidateAtScopeResponse>;
  /**
   * Exports the template used for specified deployment.
   * @param scope The resource scope.
   * @param deploymentName The name of the deployment.
   * @param options The options parameters.
   */
  exportTemplateAtScope(
    scope: string,
    deploymentName: string,
    options?: DeploymentsExportTemplateAtScopeOptionalParams
  ): Promise<DeploymentsExportTemplateAtScopeResponse>;
  /**
   * A template deployment that is currently running cannot be deleted. Deleting a template deployment
   * removes the associated deployment operations. This is an asynchronous operation that returns a
   * status of 202 until the template deployment is successfully deleted. The Location response header
   * contains the URI that is used to obtain the status of the process. While the process is running, a
   * call to the URI in the Location header returns a status of 202. When the process finishes, the URI
   * in the Location header returns a status of 204 on success. If the asynchronous request failed, the
   * URI in the Location header returns an error-level status code.
   * @param deploymentName The name of the deployment.
   * @param options The options parameters.
   */
  beginDeleteAtTenantScope(
    deploymentName: string,
    options?: DeploymentsDeleteAtTenantScopeOptionalParams
  ): Promise<PollerLike<PollOperationState<void>, void>>;
  /**
   * A template deployment that is currently running cannot be deleted. Deleting a template deployment
   * removes the associated deployment operations. This is an asynchronous operation that returns a
   * status of 202 until the template deployment is successfully deleted. The Location response header
   * contains the URI that is used to obtain the status of the process. While the process is running, a
   * call to the URI in the Location header returns a status of 202. When the process finishes, the URI
   * in the Location header returns a status of 204 on success. If the asynchronous request failed, the
   * URI in the Location header returns an error-level status code.
   * @param deploymentName The name of the deployment.
   * @param options The options parameters.
   */
  beginDeleteAtTenantScopeAndWait(
    deploymentName: string,
    options?: DeploymentsDeleteAtTenantScopeOptionalParams
  ): Promise<void>;
  /**
   * Checks whether the deployment exists.
   * @param deploymentName The name of the deployment.
   * @param options The options parameters.
   */
  checkExistenceAtTenantScope(
    deploymentName: string,
    options?: DeploymentsCheckExistenceAtTenantScopeOptionalParams
  ): Promise<void>;
  /**
   * You can provide the template and parameters directly in the request or link to JSON files.
   * @param deploymentName The name of the deployment.
   * @param parameters Additional parameters supplied to the operation.
   * @param options The options parameters.
   */
  beginCreateOrUpdateAtTenantScope(
    deploymentName: string,
    parameters: ScopedDeployment,
    options?: DeploymentsCreateOrUpdateAtTenantScopeOptionalParams
  ): Promise<
    PollerLike<
      PollOperationState<DeploymentsCreateOrUpdateAtTenantScopeResponse>,
      DeploymentsCreateOrUpdateAtTenantScopeResponse
    >
  >;
  /**
   * You can provide the template and parameters directly in the request or link to JSON files.
   * @param deploymentName The name of the deployment.
   * @param parameters Additional parameters supplied to the operation.
   * @param options The options parameters.
   */
  beginCreateOrUpdateAtTenantScopeAndWait(
    deploymentName: string,
    parameters: ScopedDeployment,
    options?: DeploymentsCreateOrUpdateAtTenantScopeOptionalParams
  ): Promise<DeploymentsCreateOrUpdateAtTenantScopeResponse>;
  /**
   * Gets a deployment.
   * @param deploymentName The name of the deployment.
   * @param options The options parameters.
   */
  getAtTenantScope(
    deploymentName: string,
    options?: DeploymentsGetAtTenantScopeOptionalParams
  ): Promise<DeploymentsGetAtTenantScopeResponse>;
  /**
   * You can cancel a deployment only if the provisioningState is Accepted or Running. After the
   * deployment is canceled, the provisioningState is set to Canceled. Canceling a template deployment
   * stops the currently running template deployment and leaves the resources partially deployed.
   * @param deploymentName The name of the deployment.
   * @param options The options parameters.
   */
  cancelAtTenantScope(
    deploymentName: string,
    options?: DeploymentsCancelAtTenantScopeOptionalParams
  ): Promise<void>;
  /**
   * Validates whether the specified template is syntactically correct and will be accepted by Azure
   * Resource Manager..
   * @param deploymentName The name of the deployment.
   * @param parameters Parameters to validate.
   * @param options The options parameters.
   */
  beginValidateAtTenantScope(
    deploymentName: string,
    parameters: ScopedDeployment,
    options?: DeploymentsValidateAtTenantScopeOptionalParams
  ): Promise<
    PollerLike<
      PollOperationState<DeploymentsValidateAtTenantScopeResponse>,
      DeploymentsValidateAtTenantScopeResponse
    >
  >;
  /**
   * Validates whether the specified template is syntactically correct and will be accepted by Azure
   * Resource Manager..
   * @param deploymentName The name of the deployment.
   * @param parameters Parameters to validate.
   * @param options The options parameters.
   */
  beginValidateAtTenantScopeAndWait(
    deploymentName: string,
    parameters: ScopedDeployment,
    options?: DeploymentsValidateAtTenantScopeOptionalParams
  ): Promise<DeploymentsValidateAtTenantScopeResponse>;
  /**
   * Returns changes that will be made by the deployment if executed at the scope of the tenant group.
   * @param deploymentName The name of the deployment.
   * @param parameters Parameters to validate.
   * @param options The options parameters.
   */
  beginWhatIfAtTenantScope(
    deploymentName: string,
    parameters: ScopedDeploymentWhatIf,
    options?: DeploymentsWhatIfAtTenantScopeOptionalParams
  ): Promise<
    PollerLike<
      PollOperationState<DeploymentsWhatIfAtTenantScopeResponse>,
      DeploymentsWhatIfAtTenantScopeResponse
    >
  >;
  /**
   * Returns changes that will be made by the deployment if executed at the scope of the tenant group.
   * @param deploymentName The name of the deployment.
   * @param parameters Parameters to validate.
   * @param options The options parameters.
   */
  beginWhatIfAtTenantScopeAndWait(
    deploymentName: string,
    parameters: ScopedDeploymentWhatIf,
    options?: DeploymentsWhatIfAtTenantScopeOptionalParams
  ): Promise<DeploymentsWhatIfAtTenantScopeResponse>;
  /**
   * Exports the template used for specified deployment.
   * @param deploymentName The name of the deployment.
   * @param options The options parameters.
   */
  exportTemplateAtTenantScope(
    deploymentName: string,
    options?: DeploymentsExportTemplateAtTenantScopeOptionalParams
  ): Promise<DeploymentsExportTemplateAtTenantScopeResponse>;
  /**
   * A template deployment that is currently running cannot be deleted. Deleting a template deployment
   * removes the associated deployment operations. This is an asynchronous operation that returns a
   * status of 202 until the template deployment is successfully deleted. The Location response header
   * contains the URI that is used to obtain the status of the process. While the process is running, a
   * call to the URI in the Location header returns a status of 202. When the process finishes, the URI
   * in the Location header returns a status of 204 on success. If the asynchronous request failed, the
   * URI in the Location header returns an error-level status code.
   * @param groupId The management group ID.
   * @param deploymentName The name of the deployment.
   * @param options The options parameters.
   */
  beginDeleteAtManagementGroupScope(
    groupId: string,
    deploymentName: string,
    options?: DeploymentsDeleteAtManagementGroupScopeOptionalParams
  ): Promise<PollerLike<PollOperationState<void>, void>>;
  /**
   * A template deployment that is currently running cannot be deleted. Deleting a template deployment
   * removes the associated deployment operations. This is an asynchronous operation that returns a
   * status of 202 until the template deployment is successfully deleted. The Location response header
   * contains the URI that is used to obtain the status of the process. While the process is running, a
   * call to the URI in the Location header returns a status of 202. When the process finishes, the URI
   * in the Location header returns a status of 204 on success. If the asynchronous request failed, the
   * URI in the Location header returns an error-level status code.
   * @param groupId The management group ID.
   * @param deploymentName The name of the deployment.
   * @param options The options parameters.
   */
  beginDeleteAtManagementGroupScopeAndWait(
    groupId: string,
    deploymentName: string,
    options?: DeploymentsDeleteAtManagementGroupScopeOptionalParams
  ): Promise<void>;
  /**
   * Checks whether the deployment exists.
   * @param groupId The management group ID.
   * @param deploymentName The name of the deployment.
   * @param options The options parameters.
   */
  checkExistenceAtManagementGroupScope(
    groupId: string,
    deploymentName: string,
    options?: DeploymentsCheckExistenceAtManagementGroupScopeOptionalParams
  ): Promise<void>;
  /**
   * You can provide the template and parameters directly in the request or link to JSON files.
   * @param groupId The management group ID.
   * @param deploymentName The name of the deployment.
   * @param parameters Additional parameters supplied to the operation.
   * @param options The options parameters.
   */
  beginCreateOrUpdateAtManagementGroupScope(
    groupId: string,
    deploymentName: string,
    parameters: ScopedDeployment,
    options?: DeploymentsCreateOrUpdateAtManagementGroupScopeOptionalParams
  ): Promise<
    PollerLike<
      PollOperationState<
        DeploymentsCreateOrUpdateAtManagementGroupScopeResponse
      >,
      DeploymentsCreateOrUpdateAtManagementGroupScopeResponse
    >
  >;
  /**
   * You can provide the template and parameters directly in the request or link to JSON files.
   * @param groupId The management group ID.
   * @param deploymentName The name of the deployment.
   * @param parameters Additional parameters supplied to the operation.
   * @param options The options parameters.
   */
  beginCreateOrUpdateAtManagementGroupScopeAndWait(
    groupId: string,
    deploymentName: string,
    parameters: ScopedDeployment,
    options?: DeploymentsCreateOrUpdateAtManagementGroupScopeOptionalParams
  ): Promise<DeploymentsCreateOrUpdateAtManagementGroupScopeResponse>;
  /**
   * Gets a deployment.
   * @param groupId The management group ID.
   * @param deploymentName The name of the deployment.
   * @param options The options parameters.
   */
  getAtManagementGroupScope(
    groupId: string,
    deploymentName: string,
    options?: DeploymentsGetAtManagementGroupScopeOptionalParams
  ): Promise<DeploymentsGetAtManagementGroupScopeResponse>;
  /**
   * You can cancel a deployment only if the provisioningState is Accepted or Running. After the
   * deployment is canceled, the provisioningState is set to Canceled. Canceling a template deployment
   * stops the currently running template deployment and leaves the resources partially deployed.
   * @param groupId The management group ID.
   * @param deploymentName The name of the deployment.
   * @param options The options parameters.
   */
  cancelAtManagementGroupScope(
    groupId: string,
    deploymentName: string,
    options?: DeploymentsCancelAtManagementGroupScopeOptionalParams
  ): Promise<void>;
  /**
   * Validates whether the specified template is syntactically correct and will be accepted by Azure
   * Resource Manager..
   * @param groupId The management group ID.
   * @param deploymentName The name of the deployment.
   * @param parameters Parameters to validate.
   * @param options The options parameters.
   */
  beginValidateAtManagementGroupScope(
    groupId: string,
    deploymentName: string,
    parameters: ScopedDeployment,
    options?: DeploymentsValidateAtManagementGroupScopeOptionalParams
  ): Promise<
    PollerLike<
      PollOperationState<DeploymentsValidateAtManagementGroupScopeResponse>,
      DeploymentsValidateAtManagementGroupScopeResponse
    >
  >;
  /**
   * Validates whether the specified template is syntactically correct and will be accepted by Azure
   * Resource Manager..
   * @param groupId The management group ID.
   * @param deploymentName The name of the deployment.
   * @param parameters Parameters to validate.
   * @param options The options parameters.
   */
  beginValidateAtManagementGroupScopeAndWait(
    groupId: string,
    deploymentName: string,
    parameters: ScopedDeployment,
    options?: DeploymentsValidateAtManagementGroupScopeOptionalParams
  ): Promise<DeploymentsValidateAtManagementGroupScopeResponse>;
  /**
   * Returns changes that will be made by the deployment if executed at the scope of the management
   * group.
   * @param groupId The management group ID.
   * @param deploymentName The name of the deployment.
   * @param parameters Parameters to validate.
   * @param options The options parameters.
   */
  beginWhatIfAtManagementGroupScope(
    groupId: string,
    deploymentName: string,
    parameters: ScopedDeploymentWhatIf,
    options?: DeploymentsWhatIfAtManagementGroupScopeOptionalParams
  ): Promise<
    PollerLike<
      PollOperationState<DeploymentsWhatIfAtManagementGroupScopeResponse>,
      DeploymentsWhatIfAtManagementGroupScopeResponse
    >
  >;
  /**
   * Returns changes that will be made by the deployment if executed at the scope of the management
   * group.
   * @param groupId The management group ID.
   * @param deploymentName The name of the deployment.
   * @param parameters Parameters to validate.
   * @param options The options parameters.
   */
  beginWhatIfAtManagementGroupScopeAndWait(
    groupId: string,
    deploymentName: string,
    parameters: ScopedDeploymentWhatIf,
    options?: DeploymentsWhatIfAtManagementGroupScopeOptionalParams
  ): Promise<DeploymentsWhatIfAtManagementGroupScopeResponse>;
  /**
   * Exports the template used for specified deployment.
   * @param groupId The management group ID.
   * @param deploymentName The name of the deployment.
   * @param options The options parameters.
   */
  exportTemplateAtManagementGroupScope(
    groupId: string,
    deploymentName: string,
    options?: DeploymentsExportTemplateAtManagementGroupScopeOptionalParams
  ): Promise<DeploymentsExportTemplateAtManagementGroupScopeResponse>;
  /**
   * A template deployment that is currently running cannot be deleted. Deleting a template deployment
   * removes the associated deployment operations. This is an asynchronous operation that returns a
   * status of 202 until the template deployment is successfully deleted. The Location response header
   * contains the URI that is used to obtain the status of the process. While the process is running, a
   * call to the URI in the Location header returns a status of 202. When the process finishes, the URI
   * in the Location header returns a status of 204 on success. If the asynchronous request failed, the
   * URI in the Location header returns an error-level status code.
   * @param deploymentName The name of the deployment.
   * @param options The options parameters.
   */
  beginDeleteAtSubscriptionScope(
    deploymentName: string,
    options?: DeploymentsDeleteAtSubscriptionScopeOptionalParams
  ): Promise<PollerLike<PollOperationState<void>, void>>;
  /**
   * A template deployment that is currently running cannot be deleted. Deleting a template deployment
   * removes the associated deployment operations. This is an asynchronous operation that returns a
   * status of 202 until the template deployment is successfully deleted. The Location response header
   * contains the URI that is used to obtain the status of the process. While the process is running, a
   * call to the URI in the Location header returns a status of 202. When the process finishes, the URI
   * in the Location header returns a status of 204 on success. If the asynchronous request failed, the
   * URI in the Location header returns an error-level status code.
   * @param deploymentName The name of the deployment.
   * @param options The options parameters.
   */
  beginDeleteAtSubscriptionScopeAndWait(
    deploymentName: string,
    options?: DeploymentsDeleteAtSubscriptionScopeOptionalParams
  ): Promise<void>;
  /**
   * Checks whether the deployment exists.
   * @param deploymentName The name of the deployment.
   * @param options The options parameters.
   */
  checkExistenceAtSubscriptionScope(
    deploymentName: string,
    options?: DeploymentsCheckExistenceAtSubscriptionScopeOptionalParams
  ): Promise<void>;
  /**
   * You can provide the template and parameters directly in the request or link to JSON files.
   * @param deploymentName The name of the deployment.
   * @param parameters Additional parameters supplied to the operation.
   * @param options The options parameters.
   */
  beginCreateOrUpdateAtSubscriptionScope(
    deploymentName: string,
    parameters: Deployment,
    options?: DeploymentsCreateOrUpdateAtSubscriptionScopeOptionalParams
  ): Promise<
    PollerLike<
      PollOperationState<DeploymentsCreateOrUpdateAtSubscriptionScopeResponse>,
      DeploymentsCreateOrUpdateAtSubscriptionScopeResponse
    >
  >;
  /**
   * You can provide the template and parameters directly in the request or link to JSON files.
   * @param deploymentName The name of the deployment.
   * @param parameters Additional parameters supplied to the operation.
   * @param options The options parameters.
   */
  beginCreateOrUpdateAtSubscriptionScopeAndWait(
    deploymentName: string,
    parameters: Deployment,
    options?: DeploymentsCreateOrUpdateAtSubscriptionScopeOptionalParams
  ): Promise<DeploymentsCreateOrUpdateAtSubscriptionScopeResponse>;
  /**
   * Gets a deployment.
   * @param deploymentName The name of the deployment.
   * @param options The options parameters.
   */
  getAtSubscriptionScope(
    deploymentName: string,
    options?: DeploymentsGetAtSubscriptionScopeOptionalParams
  ): Promise<DeploymentsGetAtSubscriptionScopeResponse>;
  /**
   * You can cancel a deployment only if the provisioningState is Accepted or Running. After the
   * deployment is canceled, the provisioningState is set to Canceled. Canceling a template deployment
   * stops the currently running template deployment and leaves the resources partially deployed.
   * @param deploymentName The name of the deployment.
   * @param options The options parameters.
   */
  cancelAtSubscriptionScope(
    deploymentName: string,
    options?: DeploymentsCancelAtSubscriptionScopeOptionalParams
  ): Promise<void>;
  /**
   * Validates whether the specified template is syntactically correct and will be accepted by Azure
   * Resource Manager..
   * @param deploymentName The name of the deployment.
   * @param parameters Parameters to validate.
   * @param options The options parameters.
   */
  beginValidateAtSubscriptionScope(
    deploymentName: string,
    parameters: Deployment,
    options?: DeploymentsValidateAtSubscriptionScopeOptionalParams
  ): Promise<
    PollerLike<
      PollOperationState<DeploymentsValidateAtSubscriptionScopeResponse>,
      DeploymentsValidateAtSubscriptionScopeResponse
    >
  >;
  /**
   * Validates whether the specified template is syntactically correct and will be accepted by Azure
   * Resource Manager..
   * @param deploymentName The name of the deployment.
   * @param parameters Parameters to validate.
   * @param options The options parameters.
   */
  beginValidateAtSubscriptionScopeAndWait(
    deploymentName: string,
    parameters: Deployment,
    options?: DeploymentsValidateAtSubscriptionScopeOptionalParams
  ): Promise<DeploymentsValidateAtSubscriptionScopeResponse>;
  /**
   * Returns changes that will be made by the deployment if executed at the scope of the subscription.
   * @param deploymentName The name of the deployment.
   * @param parameters Parameters to What If.
   * @param options The options parameters.
   */
  beginWhatIfAtSubscriptionScope(
    deploymentName: string,
    parameters: DeploymentWhatIf,
    options?: DeploymentsWhatIfAtSubscriptionScopeOptionalParams
  ): Promise<
    PollerLike<
      PollOperationState<DeploymentsWhatIfAtSubscriptionScopeResponse>,
      DeploymentsWhatIfAtSubscriptionScopeResponse
    >
  >;
  /**
   * Returns changes that will be made by the deployment if executed at the scope of the subscription.
   * @param deploymentName The name of the deployment.
   * @param parameters Parameters to What If.
   * @param options The options parameters.
   */
  beginWhatIfAtSubscriptionScopeAndWait(
    deploymentName: string,
    parameters: DeploymentWhatIf,
    options?: DeploymentsWhatIfAtSubscriptionScopeOptionalParams
  ): Promise<DeploymentsWhatIfAtSubscriptionScopeResponse>;
  /**
   * Exports the template used for specified deployment.
   * @param deploymentName The name of the deployment.
   * @param options The options parameters.
   */
  exportTemplateAtSubscriptionScope(
    deploymentName: string,
    options?: DeploymentsExportTemplateAtSubscriptionScopeOptionalParams
  ): Promise<DeploymentsExportTemplateAtSubscriptionScopeResponse>;
  /**
   * A template deployment that is currently running cannot be deleted. Deleting a template deployment
   * removes the associated deployment operations. Deleting a template deployment does not affect the
   * state of the resource group. This is an asynchronous operation that returns a status of 202 until
   * the template deployment is successfully deleted. The Location response header contains the URI that
   * is used to obtain the status of the process. While the process is running, a call to the URI in the
   * Location header returns a status of 202. When the process finishes, the URI in the Location header
   * returns a status of 204 on success. If the asynchronous request failed, the URI in the Location
   * header returns an error-level status code.
   * @param resourceGroupName The name of the resource group with the deployment to delete. The name is
   *                          case insensitive.
   * @param deploymentName The name of the deployment.
   * @param options The options parameters.
   */
  beginDelete(
    resourceGroupName: string,
    deploymentName: string,
    options?: DeploymentsDeleteOptionalParams
  ): Promise<PollerLike<PollOperationState<void>, void>>;
  /**
   * A template deployment that is currently running cannot be deleted. Deleting a template deployment
   * removes the associated deployment operations. Deleting a template deployment does not affect the
   * state of the resource group. This is an asynchronous operation that returns a status of 202 until
   * the template deployment is successfully deleted. The Location response header contains the URI that
   * is used to obtain the status of the process. While the process is running, a call to the URI in the
   * Location header returns a status of 202. When the process finishes, the URI in the Location header
   * returns a status of 204 on success. If the asynchronous request failed, the URI in the Location
   * header returns an error-level status code.
   * @param resourceGroupName The name of the resource group with the deployment to delete. The name is
   *                          case insensitive.
   * @param deploymentName The name of the deployment.
   * @param options The options parameters.
   */
  beginDeleteAndWait(
    resourceGroupName: string,
    deploymentName: string,
    options?: DeploymentsDeleteOptionalParams
  ): Promise<void>;
  /**
   * Checks whether the deployment exists.
   * @param resourceGroupName The name of the resource group with the deployment to check. The name is
   *                          case insensitive.
   * @param deploymentName The name of the deployment.
   * @param options The options parameters.
   */
  checkExistence(
    resourceGroupName: string,
    deploymentName: string,
    options?: DeploymentsCheckExistenceOptionalParams
  ): Promise<void>;
  /**
   * You can provide the template and parameters directly in the request or link to JSON files.
   * @param resourceGroupName The name of the resource group to deploy the resources to. The name is case
   *                          insensitive. The resource group must already exist.
   * @param deploymentName The name of the deployment.
   * @param parameters Additional parameters supplied to the operation.
   * @param options The options parameters.
   */
  beginCreateOrUpdate(
    resourceGroupName: string,
    deploymentName: string,
    parameters: Deployment,
    options?: DeploymentsCreateOrUpdateOptionalParams
  ): Promise<
    PollerLike<
      PollOperationState<DeploymentsCreateOrUpdateResponse>,
      DeploymentsCreateOrUpdateResponse
    >
  >;
  /**
   * You can provide the template and parameters directly in the request or link to JSON files.
   * @param resourceGroupName The name of the resource group to deploy the resources to. The name is case
   *                          insensitive. The resource group must already exist.
   * @param deploymentName The name of the deployment.
   * @param parameters Additional parameters supplied to the operation.
   * @param options The options parameters.
   */
  beginCreateOrUpdateAndWait(
    resourceGroupName: string,
    deploymentName: string,
    parameters: Deployment,
    options?: DeploymentsCreateOrUpdateOptionalParams
  ): Promise<DeploymentsCreateOrUpdateResponse>;
  /**
   * Gets a deployment.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param deploymentName The name of the deployment.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    deploymentName: string,
    options?: DeploymentsGetOptionalParams
  ): Promise<DeploymentsGetResponse>;
  /**
   * You can cancel a deployment only if the provisioningState is Accepted or Running. After the
   * deployment is canceled, the provisioningState is set to Canceled. Canceling a template deployment
   * stops the currently running template deployment and leaves the resource group partially deployed.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param deploymentName The name of the deployment.
   * @param options The options parameters.
   */
  cancel(
    resourceGroupName: string,
    deploymentName: string,
    options?: DeploymentsCancelOptionalParams
  ): Promise<void>;
  /**
   * Validates whether the specified template is syntactically correct and will be accepted by Azure
   * Resource Manager..
   * @param resourceGroupName The name of the resource group the template will be deployed to. The name
   *                          is case insensitive.
   * @param deploymentName The name of the deployment.
   * @param parameters Parameters to validate.
   * @param options The options parameters.
   */
  beginValidate(
    resourceGroupName: string,
    deploymentName: string,
    parameters: Deployment,
    options?: DeploymentsValidateOptionalParams
  ): Promise<
    PollerLike<
      PollOperationState<DeploymentsValidateResponse>,
      DeploymentsValidateResponse
    >
  >;
  /**
   * Validates whether the specified template is syntactically correct and will be accepted by Azure
   * Resource Manager..
   * @param resourceGroupName The name of the resource group the template will be deployed to. The name
   *                          is case insensitive.
   * @param deploymentName The name of the deployment.
   * @param parameters Parameters to validate.
   * @param options The options parameters.
   */
  beginValidateAndWait(
    resourceGroupName: string,
    deploymentName: string,
    parameters: Deployment,
    options?: DeploymentsValidateOptionalParams
  ): Promise<DeploymentsValidateResponse>;
  /**
   * Returns changes that will be made by the deployment if executed at the scope of the resource group.
   * @param resourceGroupName The name of the resource group the template will be deployed to. The name
   *                          is case insensitive.
   * @param deploymentName The name of the deployment.
   * @param parameters Parameters to validate.
   * @param options The options parameters.
   */
  beginWhatIf(
    resourceGroupName: string,
    deploymentName: string,
    parameters: DeploymentWhatIf,
    options?: DeploymentsWhatIfOptionalParams
  ): Promise<
    PollerLike<
      PollOperationState<DeploymentsWhatIfResponse>,
      DeploymentsWhatIfResponse
    >
  >;
  /**
   * Returns changes that will be made by the deployment if executed at the scope of the resource group.
   * @param resourceGroupName The name of the resource group the template will be deployed to. The name
   *                          is case insensitive.
   * @param deploymentName The name of the deployment.
   * @param parameters Parameters to validate.
   * @param options The options parameters.
   */
  beginWhatIfAndWait(
    resourceGroupName: string,
    deploymentName: string,
    parameters: DeploymentWhatIf,
    options?: DeploymentsWhatIfOptionalParams
  ): Promise<DeploymentsWhatIfResponse>;
  /**
   * Exports the template used for specified deployment.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param deploymentName The name of the deployment.
   * @param options The options parameters.
   */
  exportTemplate(
    resourceGroupName: string,
    deploymentName: string,
    options?: DeploymentsExportTemplateOptionalParams
  ): Promise<DeploymentsExportTemplateResponse>;
  /**
   * Calculate the hash of the given template.
   * @param template The template provided to calculate hash.
   * @param options The options parameters.
   */
  calculateTemplateHash(
    template: Record<string, unknown>,
    options?: DeploymentsCalculateTemplateHashOptionalParams
  ): Promise<DeploymentsCalculateTemplateHashResponse>;
}
