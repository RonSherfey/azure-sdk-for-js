import "@azure/core-paging";
import { PagedAsyncIterableIterator } from "@azure/core-paging";
import {
  DeploymentOperation,
  DeploymentOperationsListAtScopeNextOptionalParams,
  DeploymentOperationsListAtScopeOptionalParams,
  DeploymentOperationsListAtTenantScopeNextOptionalParams,
  DeploymentOperationsListAtTenantScopeOptionalParams,
  DeploymentOperationsListAtManagementGroupScopeNextOptionalParams,
  DeploymentOperationsListAtManagementGroupScopeOptionalParams,
  DeploymentOperationsListAtSubscriptionScopeNextOptionalParams,
  DeploymentOperationsListAtSubscriptionScopeOptionalParams,
  DeploymentOperationsListNextOptionalParams,
  DeploymentOperationsListOptionalParams,
  DeploymentOperationsGetAtScopeOptionalParams,
  DeploymentOperationsGetAtScopeResponse,
  DeploymentOperationsGetAtTenantScopeOptionalParams,
  DeploymentOperationsGetAtTenantScopeResponse,
  DeploymentOperationsGetAtManagementGroupScopeOptionalParams,
  DeploymentOperationsGetAtManagementGroupScopeResponse,
  DeploymentOperationsGetAtSubscriptionScopeOptionalParams,
  DeploymentOperationsGetAtSubscriptionScopeResponse,
  DeploymentOperationsGetOptionalParams,
  DeploymentOperationsGetResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a DeploymentOperations. */
export interface DeploymentOperations {
  /**
   * Gets all deployments operations for a deployment.
   * @param scope The resource scope.
   * @param deploymentName The name of the deployment.
   * @param options The options parameters.
   */
  listAtScope(
    scope: string,
    deploymentName: string,
    options?: DeploymentOperationsListAtScopeOptionalParams
  ): PagedAsyncIterableIterator<DeploymentOperation>;
  /**
   * Gets all deployments operations for a deployment.
   * @param deploymentName The name of the deployment.
   * @param options The options parameters.
   */
  listAtTenantScope(
    deploymentName: string,
    options?: DeploymentOperationsListAtTenantScopeOptionalParams
  ): PagedAsyncIterableIterator<DeploymentOperation>;
  /**
   * Gets all deployments operations for a deployment.
   * @param groupId The management group ID.
   * @param deploymentName The name of the deployment.
   * @param options The options parameters.
   */
  listAtManagementGroupScope(
    groupId: string,
    deploymentName: string,
    options?: DeploymentOperationsListAtManagementGroupScopeOptionalParams
  ): PagedAsyncIterableIterator<DeploymentOperation>;
  /**
   * Gets all deployments operations for a deployment.
   * @param deploymentName The name of the deployment.
   * @param options The options parameters.
   */
  listAtSubscriptionScope(
    deploymentName: string,
    options?: DeploymentOperationsListAtSubscriptionScopeOptionalParams
  ): PagedAsyncIterableIterator<DeploymentOperation>;
  /**
   * Gets all deployments operations for a deployment.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param deploymentName The name of the deployment.
   * @param options The options parameters.
   */
  list(
    resourceGroupName: string,
    deploymentName: string,
    options?: DeploymentOperationsListOptionalParams
  ): PagedAsyncIterableIterator<DeploymentOperation>;
  /**
   * ListAtScopeNext
   * @param scope The resource scope.
   * @param deploymentName The name of the deployment.
   * @param nextLink The nextLink from the previous successful call to the ListAtScope method.
   * @param options The options parameters.
   */
  listAtScopeNext(
    scope: string,
    deploymentName: string,
    nextLink: string,
    options?: DeploymentOperationsListAtScopeNextOptionalParams
  ): PagedAsyncIterableIterator<DeploymentOperation>;
  /**
   * ListAtTenantScopeNext
   * @param deploymentName The name of the deployment.
   * @param nextLink The nextLink from the previous successful call to the ListAtTenantScope method.
   * @param options The options parameters.
   */
  listAtTenantScopeNext(
    deploymentName: string,
    nextLink: string,
    options?: DeploymentOperationsListAtTenantScopeNextOptionalParams
  ): PagedAsyncIterableIterator<DeploymentOperation>;
  /**
   * ListAtManagementGroupScopeNext
   * @param groupId The management group ID.
   * @param deploymentName The name of the deployment.
   * @param nextLink The nextLink from the previous successful call to the ListAtManagementGroupScope
   *                 method.
   * @param options The options parameters.
   */
  listAtManagementGroupScopeNext(
    groupId: string,
    deploymentName: string,
    nextLink: string,
    options?: DeploymentOperationsListAtManagementGroupScopeNextOptionalParams
  ): PagedAsyncIterableIterator<DeploymentOperation>;
  /**
   * ListAtSubscriptionScopeNext
   * @param deploymentName The name of the deployment.
   * @param nextLink The nextLink from the previous successful call to the ListAtSubscriptionScope
   *                 method.
   * @param options The options parameters.
   */
  listAtSubscriptionScopeNext(
    deploymentName: string,
    nextLink: string,
    options?: DeploymentOperationsListAtSubscriptionScopeNextOptionalParams
  ): PagedAsyncIterableIterator<DeploymentOperation>;
  /**
   * ListNext
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param deploymentName The name of the deployment.
   * @param nextLink The nextLink from the previous successful call to the List method.
   * @param options The options parameters.
   */
  listNext(
    resourceGroupName: string,
    deploymentName: string,
    nextLink: string,
    options?: DeploymentOperationsListNextOptionalParams
  ): PagedAsyncIterableIterator<DeploymentOperation>;
  /**
   * Gets a deployments operation.
   * @param scope The resource scope.
   * @param deploymentName The name of the deployment.
   * @param operationId The ID of the operation to get.
   * @param options The options parameters.
   */
  getAtScope(
    scope: string,
    deploymentName: string,
    operationId: string,
    options?: DeploymentOperationsGetAtScopeOptionalParams
  ): Promise<DeploymentOperationsGetAtScopeResponse>;
  /**
   * Gets a deployments operation.
   * @param deploymentName The name of the deployment.
   * @param operationId The ID of the operation to get.
   * @param options The options parameters.
   */
  getAtTenantScope(
    deploymentName: string,
    operationId: string,
    options?: DeploymentOperationsGetAtTenantScopeOptionalParams
  ): Promise<DeploymentOperationsGetAtTenantScopeResponse>;
  /**
   * Gets a deployments operation.
   * @param groupId The management group ID.
   * @param deploymentName The name of the deployment.
   * @param operationId The ID of the operation to get.
   * @param options The options parameters.
   */
  getAtManagementGroupScope(
    groupId: string,
    deploymentName: string,
    operationId: string,
    options?: DeploymentOperationsGetAtManagementGroupScopeOptionalParams
  ): Promise<DeploymentOperationsGetAtManagementGroupScopeResponse>;
  /**
   * Gets a deployments operation.
   * @param deploymentName The name of the deployment.
   * @param operationId The ID of the operation to get.
   * @param options The options parameters.
   */
  getAtSubscriptionScope(
    deploymentName: string,
    operationId: string,
    options?: DeploymentOperationsGetAtSubscriptionScopeOptionalParams
  ): Promise<DeploymentOperationsGetAtSubscriptionScopeResponse>;
  /**
   * Gets a deployments operation.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param deploymentName The name of the deployment.
   * @param operationId The ID of the operation to get.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    deploymentName: string,
    operationId: string,
    options?: DeploymentOperationsGetOptionalParams
  ): Promise<DeploymentOperationsGetResponse>;
}
