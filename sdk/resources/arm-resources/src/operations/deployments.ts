import "@azure/core-paging";
import { PagedAsyncIterableIterator } from "@azure/core-paging";
import { Deployments } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { ResourceManagementClientContext } from "../resourceManagementClientContext";
import { LROPoller, shouldDeserializeLRO } from "../lro";
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
  DeploymentsListAtScopeNextNextOptionalParams,
  DeploymentsListAtTenantScopeNextNextOptionalParams,
  DeploymentsListAtManagementGroupScopeNextNextOptionalParams,
  DeploymentsListAtSubscriptionScopeNextNextOptionalParams,
  DeploymentsListByResourceGroupNextNextOptionalParams,
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
  DeploymentsListAtScopeResponse,
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
  DeploymentsListAtTenantScopeResponse,
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
  DeploymentsListAtManagementGroupScopeResponse,
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
  DeploymentsListAtSubscriptionScopeResponse,
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
  DeploymentsListByResourceGroupResponse,
  DeploymentsCalculateTemplateHashOptionalParams,
  DeploymentsCalculateTemplateHashResponse,
  DeploymentsListAtScopeNextResponse,
  DeploymentsListAtTenantScopeNextResponse,
  DeploymentsListAtManagementGroupScopeNextResponse,
  DeploymentsListAtSubscriptionScopeNextResponse,
  DeploymentsListByResourceGroupNextResponse,
  DeploymentsListAtScopeNextNextResponse,
  DeploymentsListAtTenantScopeNextNextResponse,
  DeploymentsListAtManagementGroupScopeNextNextResponse,
  DeploymentsListAtSubscriptionScopeNextNextResponse,
  DeploymentsListByResourceGroupNextNextResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Class representing a Deployments. */
export class DeploymentsImpl implements Deployments {
  private readonly client: ResourceManagementClientContext;

  /**
   * Initialize a new instance of the class Deployments class.
   * @param client Reference to the service client
   */
  constructor(client: ResourceManagementClientContext) {
    this.client = client;
  }

  /**
   * Get all the deployments at the given scope.
   * @param scope The resource scope.
   * @param options The options parameters.
   */
  public listAtScope(
    scope: string,
    options?: DeploymentsListAtScopeOptionalParams
  ): PagedAsyncIterableIterator<DeploymentExtended> {
    const iter = this.listAtScopePagingAll(scope, options);
    return {
      next() {
        return iter.next();
      },
      [Symbol.asyncIterator]() {
        return this;
      },
      byPage: () => {
        return this.listAtScopePagingPage(scope, options);
      }
    };
  }

  private async *listAtScopePagingPage(
    scope: string,
    options?: DeploymentsListAtScopeOptionalParams
  ): AsyncIterableIterator<DeploymentExtended[]> {
    let result = await this._listAtScope(scope, options);
    yield result.value || [];
    let continuationToken = result.nextLink;
    while (continuationToken) {
      result = await this._listAtScopeNext(scope, continuationToken, options);
      continuationToken = result.nextLink;
      yield result.value || [];
    }
  }

  private async *listAtScopePagingAll(
    scope: string,
    options?: DeploymentsListAtScopeOptionalParams
  ): AsyncIterableIterator<DeploymentExtended> {
    for await (const page of this.listAtScopePagingPage(scope, options)) {
      yield* page;
    }
  }

  /**
   * Get all the deployments at the tenant scope.
   * @param options The options parameters.
   */
  public listAtTenantScope(
    options?: DeploymentsListAtTenantScopeOptionalParams
  ): PagedAsyncIterableIterator<DeploymentExtended> {
    const iter = this.listAtTenantScopePagingAll(options);
    return {
      next() {
        return iter.next();
      },
      [Symbol.asyncIterator]() {
        return this;
      },
      byPage: () => {
        return this.listAtTenantScopePagingPage(options);
      }
    };
  }

  private async *listAtTenantScopePagingPage(
    options?: DeploymentsListAtTenantScopeOptionalParams
  ): AsyncIterableIterator<DeploymentExtended[]> {
    let result = await this._listAtTenantScope(options);
    yield result.value || [];
    let continuationToken = result.nextLink;
    while (continuationToken) {
      result = await this._listAtTenantScopeNext(continuationToken, options);
      continuationToken = result.nextLink;
      yield result.value || [];
    }
  }

  private async *listAtTenantScopePagingAll(
    options?: DeploymentsListAtTenantScopeOptionalParams
  ): AsyncIterableIterator<DeploymentExtended> {
    for await (const page of this.listAtTenantScopePagingPage(options)) {
      yield* page;
    }
  }

  /**
   * Get all the deployments for a management group.
   * @param groupId The management group ID.
   * @param options The options parameters.
   */
  public listAtManagementGroupScope(
    groupId: string,
    options?: DeploymentsListAtManagementGroupScopeOptionalParams
  ): PagedAsyncIterableIterator<DeploymentExtended> {
    const iter = this.listAtManagementGroupScopePagingAll(groupId, options);
    return {
      next() {
        return iter.next();
      },
      [Symbol.asyncIterator]() {
        return this;
      },
      byPage: () => {
        return this.listAtManagementGroupScopePagingPage(groupId, options);
      }
    };
  }

  private async *listAtManagementGroupScopePagingPage(
    groupId: string,
    options?: DeploymentsListAtManagementGroupScopeOptionalParams
  ): AsyncIterableIterator<DeploymentExtended[]> {
    let result = await this._listAtManagementGroupScope(groupId, options);
    yield result.value || [];
    let continuationToken = result.nextLink;
    while (continuationToken) {
      result = await this._listAtManagementGroupScopeNext(
        groupId,
        continuationToken,
        options
      );
      continuationToken = result.nextLink;
      yield result.value || [];
    }
  }

  private async *listAtManagementGroupScopePagingAll(
    groupId: string,
    options?: DeploymentsListAtManagementGroupScopeOptionalParams
  ): AsyncIterableIterator<DeploymentExtended> {
    for await (const page of this.listAtManagementGroupScopePagingPage(
      groupId,
      options
    )) {
      yield* page;
    }
  }

  /**
   * Get all the deployments for a subscription.
   * @param options The options parameters.
   */
  public listAtSubscriptionScope(
    options?: DeploymentsListAtSubscriptionScopeOptionalParams
  ): PagedAsyncIterableIterator<DeploymentExtended> {
    const iter = this.listAtSubscriptionScopePagingAll(options);
    return {
      next() {
        return iter.next();
      },
      [Symbol.asyncIterator]() {
        return this;
      },
      byPage: () => {
        return this.listAtSubscriptionScopePagingPage(options);
      }
    };
  }

  private async *listAtSubscriptionScopePagingPage(
    options?: DeploymentsListAtSubscriptionScopeOptionalParams
  ): AsyncIterableIterator<DeploymentExtended[]> {
    let result = await this._listAtSubscriptionScope(options);
    yield result.value || [];
    let continuationToken = result.nextLink;
    while (continuationToken) {
      result = await this._listAtSubscriptionScopeNext(
        continuationToken,
        options
      );
      continuationToken = result.nextLink;
      yield result.value || [];
    }
  }

  private async *listAtSubscriptionScopePagingAll(
    options?: DeploymentsListAtSubscriptionScopeOptionalParams
  ): AsyncIterableIterator<DeploymentExtended> {
    for await (const page of this.listAtSubscriptionScopePagingPage(options)) {
      yield* page;
    }
  }

  /**
   * Get all the deployments for a resource group.
   * @param resourceGroupName The name of the resource group with the deployments to get. The name is
   *                          case insensitive.
   * @param options The options parameters.
   */
  public listByResourceGroup(
    resourceGroupName: string,
    options?: DeploymentsListByResourceGroupOptionalParams
  ): PagedAsyncIterableIterator<DeploymentExtended> {
    const iter = this.listByResourceGroupPagingAll(resourceGroupName, options);
    return {
      next() {
        return iter.next();
      },
      [Symbol.asyncIterator]() {
        return this;
      },
      byPage: () => {
        return this.listByResourceGroupPagingPage(resourceGroupName, options);
      }
    };
  }

  private async *listByResourceGroupPagingPage(
    resourceGroupName: string,
    options?: DeploymentsListByResourceGroupOptionalParams
  ): AsyncIterableIterator<DeploymentExtended[]> {
    let result = await this._listByResourceGroup(resourceGroupName, options);
    yield result.value || [];
    let continuationToken = result.nextLink;
    while (continuationToken) {
      result = await this._listByResourceGroupNext(
        resourceGroupName,
        continuationToken,
        options
      );
      continuationToken = result.nextLink;
      yield result.value || [];
    }
  }

  private async *listByResourceGroupPagingAll(
    resourceGroupName: string,
    options?: DeploymentsListByResourceGroupOptionalParams
  ): AsyncIterableIterator<DeploymentExtended> {
    for await (const page of this.listByResourceGroupPagingPage(
      resourceGroupName,
      options
    )) {
      yield* page;
    }
  }

  /**
   * ListAtScopeNext
   * @param scope The resource scope.
   * @param nextLink The nextLink from the previous successful call to the ListAtScope method.
   * @param options The options parameters.
   */
  public listAtScopeNext(
    scope: string,
    nextLink: string,
    options?: DeploymentsListAtScopeNextOptionalParams
  ): PagedAsyncIterableIterator<DeploymentExtended> {
    const iter = this.listAtScopeNextPagingAll(scope, nextLink, options);
    return {
      next() {
        return iter.next();
      },
      [Symbol.asyncIterator]() {
        return this;
      },
      byPage: () => {
        return this.listAtScopeNextPagingPage(scope, nextLink, options);
      }
    };
  }

  private async *listAtScopeNextPagingPage(
    scope: string,
    nextLink: string,
    options?: DeploymentsListAtScopeNextOptionalParams
  ): AsyncIterableIterator<DeploymentExtended[]> {
    let result = await this._listAtScopeNext(scope, nextLink, options);
    yield result.value || [];
    let continuationToken = result.nextLink;
    while (continuationToken) {
      result = await this._listAtScopeNextNext(
        scope,
        continuationToken,
        options
      );
      continuationToken = result.nextLink;
      yield result.value || [];
    }
  }

  private async *listAtScopeNextPagingAll(
    scope: string,
    nextLink: string,
    options?: DeploymentsListAtScopeNextOptionalParams
  ): AsyncIterableIterator<DeploymentExtended> {
    for await (const page of this.listAtScopeNextPagingPage(
      scope,
      nextLink,
      options
    )) {
      yield* page;
    }
  }

  /**
   * ListAtTenantScopeNext
   * @param nextLink The nextLink from the previous successful call to the ListAtTenantScope method.
   * @param options The options parameters.
   */
  public listAtTenantScopeNext(
    nextLink: string,
    options?: DeploymentsListAtTenantScopeNextOptionalParams
  ): PagedAsyncIterableIterator<DeploymentExtended> {
    const iter = this.listAtTenantScopeNextPagingAll(nextLink, options);
    return {
      next() {
        return iter.next();
      },
      [Symbol.asyncIterator]() {
        return this;
      },
      byPage: () => {
        return this.listAtTenantScopeNextPagingPage(nextLink, options);
      }
    };
  }

  private async *listAtTenantScopeNextPagingPage(
    nextLink: string,
    options?: DeploymentsListAtTenantScopeNextOptionalParams
  ): AsyncIterableIterator<DeploymentExtended[]> {
    let result = await this._listAtTenantScopeNext(nextLink, options);
    yield result.value || [];
    let continuationToken = result.nextLink;
    while (continuationToken) {
      result = await this._listAtTenantScopeNextNext(
        continuationToken,
        options
      );
      continuationToken = result.nextLink;
      yield result.value || [];
    }
  }

  private async *listAtTenantScopeNextPagingAll(
    nextLink: string,
    options?: DeploymentsListAtTenantScopeNextOptionalParams
  ): AsyncIterableIterator<DeploymentExtended> {
    for await (const page of this.listAtTenantScopeNextPagingPage(
      nextLink,
      options
    )) {
      yield* page;
    }
  }

  /**
   * ListAtManagementGroupScopeNext
   * @param groupId The management group ID.
   * @param nextLink The nextLink from the previous successful call to the ListAtManagementGroupScope
   *                 method.
   * @param options The options parameters.
   */
  public listAtManagementGroupScopeNext(
    groupId: string,
    nextLink: string,
    options?: DeploymentsListAtManagementGroupScopeNextOptionalParams
  ): PagedAsyncIterableIterator<DeploymentExtended> {
    const iter = this.listAtManagementGroupScopeNextPagingAll(
      groupId,
      nextLink,
      options
    );
    return {
      next() {
        return iter.next();
      },
      [Symbol.asyncIterator]() {
        return this;
      },
      byPage: () => {
        return this.listAtManagementGroupScopeNextPagingPage(
          groupId,
          nextLink,
          options
        );
      }
    };
  }

  private async *listAtManagementGroupScopeNextPagingPage(
    groupId: string,
    nextLink: string,
    options?: DeploymentsListAtManagementGroupScopeNextOptionalParams
  ): AsyncIterableIterator<DeploymentExtended[]> {
    let result = await this._listAtManagementGroupScopeNext(
      groupId,
      nextLink,
      options
    );
    yield result.value || [];
    let continuationToken = result.nextLink;
    while (continuationToken) {
      result = await this._listAtManagementGroupScopeNextNext(
        groupId,
        continuationToken,
        options
      );
      continuationToken = result.nextLink;
      yield result.value || [];
    }
  }

  private async *listAtManagementGroupScopeNextPagingAll(
    groupId: string,
    nextLink: string,
    options?: DeploymentsListAtManagementGroupScopeNextOptionalParams
  ): AsyncIterableIterator<DeploymentExtended> {
    for await (const page of this.listAtManagementGroupScopeNextPagingPage(
      groupId,
      nextLink,
      options
    )) {
      yield* page;
    }
  }

  /**
   * ListAtSubscriptionScopeNext
   * @param nextLink The nextLink from the previous successful call to the ListAtSubscriptionScope
   *                 method.
   * @param options The options parameters.
   */
  public listAtSubscriptionScopeNext(
    nextLink: string,
    options?: DeploymentsListAtSubscriptionScopeNextOptionalParams
  ): PagedAsyncIterableIterator<DeploymentExtended> {
    const iter = this.listAtSubscriptionScopeNextPagingAll(nextLink, options);
    return {
      next() {
        return iter.next();
      },
      [Symbol.asyncIterator]() {
        return this;
      },
      byPage: () => {
        return this.listAtSubscriptionScopeNextPagingPage(nextLink, options);
      }
    };
  }

  private async *listAtSubscriptionScopeNextPagingPage(
    nextLink: string,
    options?: DeploymentsListAtSubscriptionScopeNextOptionalParams
  ): AsyncIterableIterator<DeploymentExtended[]> {
    let result = await this._listAtSubscriptionScopeNext(nextLink, options);
    yield result.value || [];
    let continuationToken = result.nextLink;
    while (continuationToken) {
      result = await this._listAtSubscriptionScopeNextNext(
        continuationToken,
        options
      );
      continuationToken = result.nextLink;
      yield result.value || [];
    }
  }

  private async *listAtSubscriptionScopeNextPagingAll(
    nextLink: string,
    options?: DeploymentsListAtSubscriptionScopeNextOptionalParams
  ): AsyncIterableIterator<DeploymentExtended> {
    for await (const page of this.listAtSubscriptionScopeNextPagingPage(
      nextLink,
      options
    )) {
      yield* page;
    }
  }

  /**
   * ListByResourceGroupNext
   * @param resourceGroupName The name of the resource group with the deployments to get. The name is
   *                          case insensitive.
   * @param nextLink The nextLink from the previous successful call to the ListByResourceGroup method.
   * @param options The options parameters.
   */
  public listByResourceGroupNext(
    resourceGroupName: string,
    nextLink: string,
    options?: DeploymentsListByResourceGroupNextOptionalParams
  ): PagedAsyncIterableIterator<DeploymentExtended> {
    const iter = this.listByResourceGroupNextPagingAll(
      resourceGroupName,
      nextLink,
      options
    );
    return {
      next() {
        return iter.next();
      },
      [Symbol.asyncIterator]() {
        return this;
      },
      byPage: () => {
        return this.listByResourceGroupNextPagingPage(
          resourceGroupName,
          nextLink,
          options
        );
      }
    };
  }

  private async *listByResourceGroupNextPagingPage(
    resourceGroupName: string,
    nextLink: string,
    options?: DeploymentsListByResourceGroupNextOptionalParams
  ): AsyncIterableIterator<DeploymentExtended[]> {
    let result = await this._listByResourceGroupNext(
      resourceGroupName,
      nextLink,
      options
    );
    yield result.value || [];
    let continuationToken = result.nextLink;
    while (continuationToken) {
      result = await this._listByResourceGroupNextNext(
        resourceGroupName,
        continuationToken,
        options
      );
      continuationToken = result.nextLink;
      yield result.value || [];
    }
  }

  private async *listByResourceGroupNextPagingAll(
    resourceGroupName: string,
    nextLink: string,
    options?: DeploymentsListByResourceGroupNextOptionalParams
  ): AsyncIterableIterator<DeploymentExtended> {
    for await (const page of this.listByResourceGroupNextPagingPage(
      resourceGroupName,
      nextLink,
      options
    )) {
      yield* page;
    }
  }

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
  async beginDeleteAtScope(
    scope: string,
    deploymentName: string,
    options?: DeploymentsDeleteAtScopeOptionalParams
  ): Promise<PollerLike<PollOperationState<void>, void>> {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ): Promise<void> => {
      return this.client.sendOperationRequest(args, spec);
    };
    const sendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ) => {
      let currentRawResponse:
        | coreClient.FullOperationResponse
        | undefined = undefined;
      const providedCallback = args.options?.onResponse;
      const callback: coreClient.RawResponseCallback = (
        rawResponse: coreClient.FullOperationResponse,
        flatResponse: unknown
      ) => {
        currentRawResponse = rawResponse;
        providedCallback?.(rawResponse, flatResponse);
      };
      const updatedArgs = {
        ...args,
        options: {
          ...args.options,
          onResponse: callback
        }
      };
      const flatResponse = await directSendOperation(updatedArgs, spec);
      return { flatResponse, rawResponse: currentRawResponse! };
    };

    return new LROPoller(
      { intervalInMs: options?.updateIntervalInMs },
      { scope, deploymentName, options },
      deleteAtScopeOperationSpec,
      sendOperation
    );
  }

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
  async beginDeleteAtScopeAndWait(
    scope: string,
    deploymentName: string,
    options?: DeploymentsDeleteAtScopeOptionalParams
  ): Promise<void> {
    const poller = await this.beginDeleteAtScope(
      scope,
      deploymentName,
      options
    );
    return poller.pollUntilDone();
  }

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
  ): Promise<void> {
    return this.client.sendOperationRequest(
      { scope, deploymentName, options },
      checkExistenceAtScopeOperationSpec
    );
  }

  /**
   * You can provide the template and parameters directly in the request or link to JSON files.
   * @param scope The resource scope.
   * @param deploymentName The name of the deployment.
   * @param parameters Additional parameters supplied to the operation.
   * @param options The options parameters.
   */
  async beginCreateOrUpdateAtScope(
    scope: string,
    deploymentName: string,
    parameters: Deployment,
    options?: DeploymentsCreateOrUpdateAtScopeOptionalParams
  ): Promise<
    PollerLike<
      PollOperationState<DeploymentsCreateOrUpdateAtScopeResponse>,
      DeploymentsCreateOrUpdateAtScopeResponse
    >
  > {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ): Promise<DeploymentsCreateOrUpdateAtScopeResponse> => {
      return this.client.sendOperationRequest(args, spec);
    };
    const sendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ) => {
      let currentRawResponse:
        | coreClient.FullOperationResponse
        | undefined = undefined;
      const providedCallback = args.options?.onResponse;
      const callback: coreClient.RawResponseCallback = (
        rawResponse: coreClient.FullOperationResponse,
        flatResponse: unknown
      ) => {
        currentRawResponse = rawResponse;
        providedCallback?.(rawResponse, flatResponse);
      };
      const updatedArgs = {
        ...args,
        options: {
          ...args.options,
          onResponse: callback
        }
      };
      const flatResponse = await directSendOperation(updatedArgs, spec);
      return { flatResponse, rawResponse: currentRawResponse! };
    };

    return new LROPoller(
      { intervalInMs: options?.updateIntervalInMs },
      { scope, deploymentName, parameters, options },
      createOrUpdateAtScopeOperationSpec,
      sendOperation
    );
  }

  /**
   * You can provide the template and parameters directly in the request or link to JSON files.
   * @param scope The resource scope.
   * @param deploymentName The name of the deployment.
   * @param parameters Additional parameters supplied to the operation.
   * @param options The options parameters.
   */
  async beginCreateOrUpdateAtScopeAndWait(
    scope: string,
    deploymentName: string,
    parameters: Deployment,
    options?: DeploymentsCreateOrUpdateAtScopeOptionalParams
  ): Promise<DeploymentsCreateOrUpdateAtScopeResponse> {
    const poller = await this.beginCreateOrUpdateAtScope(
      scope,
      deploymentName,
      parameters,
      options
    );
    return poller.pollUntilDone();
  }

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
  ): Promise<DeploymentsGetAtScopeResponse> {
    return this.client.sendOperationRequest(
      { scope, deploymentName, options },
      getAtScopeOperationSpec
    );
  }

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
  ): Promise<void> {
    return this.client.sendOperationRequest(
      { scope, deploymentName, options },
      cancelAtScopeOperationSpec
    );
  }

  /**
   * Validates whether the specified template is syntactically correct and will be accepted by Azure
   * Resource Manager..
   * @param scope The resource scope.
   * @param deploymentName The name of the deployment.
   * @param parameters Parameters to validate.
   * @param options The options parameters.
   */
  async beginValidateAtScope(
    scope: string,
    deploymentName: string,
    parameters: Deployment,
    options?: DeploymentsValidateAtScopeOptionalParams
  ): Promise<
    PollerLike<
      PollOperationState<DeploymentsValidateAtScopeResponse>,
      DeploymentsValidateAtScopeResponse
    >
  > {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ): Promise<DeploymentsValidateAtScopeResponse> => {
      return this.client.sendOperationRequest(args, spec);
    };
    const sendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ) => {
      let currentRawResponse:
        | coreClient.FullOperationResponse
        | undefined = undefined;
      const providedCallback = args.options?.onResponse;
      const callback: coreClient.RawResponseCallback = (
        rawResponse: coreClient.FullOperationResponse,
        flatResponse: unknown
      ) => {
        currentRawResponse = rawResponse;
        providedCallback?.(rawResponse, flatResponse);
      };
      const updatedArgs = {
        ...args,
        options: {
          ...args.options,
          onResponse: callback
        }
      };
      const flatResponse = await directSendOperation(updatedArgs, spec);
      return { flatResponse, rawResponse: currentRawResponse! };
    };

    return new LROPoller(
      { intervalInMs: options?.updateIntervalInMs },
      { scope, deploymentName, parameters, options },
      validateAtScopeOperationSpec,
      sendOperation
    );
  }

  /**
   * Validates whether the specified template is syntactically correct and will be accepted by Azure
   * Resource Manager..
   * @param scope The resource scope.
   * @param deploymentName The name of the deployment.
   * @param parameters Parameters to validate.
   * @param options The options parameters.
   */
  async beginValidateAtScopeAndWait(
    scope: string,
    deploymentName: string,
    parameters: Deployment,
    options?: DeploymentsValidateAtScopeOptionalParams
  ): Promise<DeploymentsValidateAtScopeResponse> {
    const poller = await this.beginValidateAtScope(
      scope,
      deploymentName,
      parameters,
      options
    );
    return poller.pollUntilDone();
  }

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
  ): Promise<DeploymentsExportTemplateAtScopeResponse> {
    return this.client.sendOperationRequest(
      { scope, deploymentName, options },
      exportTemplateAtScopeOperationSpec
    );
  }

  /**
   * Get all the deployments at the given scope.
   * @param scope The resource scope.
   * @param options The options parameters.
   */
  private _listAtScope(
    scope: string,
    options?: DeploymentsListAtScopeOptionalParams
  ): Promise<DeploymentsListAtScopeResponse> {
    return this.client.sendOperationRequest(
      { scope, options },
      listAtScopeOperationSpec
    );
  }

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
  async beginDeleteAtTenantScope(
    deploymentName: string,
    options?: DeploymentsDeleteAtTenantScopeOptionalParams
  ): Promise<PollerLike<PollOperationState<void>, void>> {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ): Promise<void> => {
      return this.client.sendOperationRequest(args, spec);
    };
    const sendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ) => {
      let currentRawResponse:
        | coreClient.FullOperationResponse
        | undefined = undefined;
      const providedCallback = args.options?.onResponse;
      const callback: coreClient.RawResponseCallback = (
        rawResponse: coreClient.FullOperationResponse,
        flatResponse: unknown
      ) => {
        currentRawResponse = rawResponse;
        providedCallback?.(rawResponse, flatResponse);
      };
      const updatedArgs = {
        ...args,
        options: {
          ...args.options,
          onResponse: callback
        }
      };
      const flatResponse = await directSendOperation(updatedArgs, spec);
      return { flatResponse, rawResponse: currentRawResponse! };
    };

    return new LROPoller(
      { intervalInMs: options?.updateIntervalInMs },
      { deploymentName, options },
      deleteAtTenantScopeOperationSpec,
      sendOperation
    );
  }

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
  async beginDeleteAtTenantScopeAndWait(
    deploymentName: string,
    options?: DeploymentsDeleteAtTenantScopeOptionalParams
  ): Promise<void> {
    const poller = await this.beginDeleteAtTenantScope(deploymentName, options);
    return poller.pollUntilDone();
  }

  /**
   * Checks whether the deployment exists.
   * @param deploymentName The name of the deployment.
   * @param options The options parameters.
   */
  checkExistenceAtTenantScope(
    deploymentName: string,
    options?: DeploymentsCheckExistenceAtTenantScopeOptionalParams
  ): Promise<void> {
    return this.client.sendOperationRequest(
      { deploymentName, options },
      checkExistenceAtTenantScopeOperationSpec
    );
  }

  /**
   * You can provide the template and parameters directly in the request or link to JSON files.
   * @param deploymentName The name of the deployment.
   * @param parameters Additional parameters supplied to the operation.
   * @param options The options parameters.
   */
  async beginCreateOrUpdateAtTenantScope(
    deploymentName: string,
    parameters: ScopedDeployment,
    options?: DeploymentsCreateOrUpdateAtTenantScopeOptionalParams
  ): Promise<
    PollerLike<
      PollOperationState<DeploymentsCreateOrUpdateAtTenantScopeResponse>,
      DeploymentsCreateOrUpdateAtTenantScopeResponse
    >
  > {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ): Promise<DeploymentsCreateOrUpdateAtTenantScopeResponse> => {
      return this.client.sendOperationRequest(args, spec);
    };
    const sendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ) => {
      let currentRawResponse:
        | coreClient.FullOperationResponse
        | undefined = undefined;
      const providedCallback = args.options?.onResponse;
      const callback: coreClient.RawResponseCallback = (
        rawResponse: coreClient.FullOperationResponse,
        flatResponse: unknown
      ) => {
        currentRawResponse = rawResponse;
        providedCallback?.(rawResponse, flatResponse);
      };
      const updatedArgs = {
        ...args,
        options: {
          ...args.options,
          onResponse: callback
        }
      };
      const flatResponse = await directSendOperation(updatedArgs, spec);
      return { flatResponse, rawResponse: currentRawResponse! };
    };

    return new LROPoller(
      { intervalInMs: options?.updateIntervalInMs },
      { deploymentName, parameters, options },
      createOrUpdateAtTenantScopeOperationSpec,
      sendOperation
    );
  }

  /**
   * You can provide the template and parameters directly in the request or link to JSON files.
   * @param deploymentName The name of the deployment.
   * @param parameters Additional parameters supplied to the operation.
   * @param options The options parameters.
   */
  async beginCreateOrUpdateAtTenantScopeAndWait(
    deploymentName: string,
    parameters: ScopedDeployment,
    options?: DeploymentsCreateOrUpdateAtTenantScopeOptionalParams
  ): Promise<DeploymentsCreateOrUpdateAtTenantScopeResponse> {
    const poller = await this.beginCreateOrUpdateAtTenantScope(
      deploymentName,
      parameters,
      options
    );
    return poller.pollUntilDone();
  }

  /**
   * Gets a deployment.
   * @param deploymentName The name of the deployment.
   * @param options The options parameters.
   */
  getAtTenantScope(
    deploymentName: string,
    options?: DeploymentsGetAtTenantScopeOptionalParams
  ): Promise<DeploymentsGetAtTenantScopeResponse> {
    return this.client.sendOperationRequest(
      { deploymentName, options },
      getAtTenantScopeOperationSpec
    );
  }

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
  ): Promise<void> {
    return this.client.sendOperationRequest(
      { deploymentName, options },
      cancelAtTenantScopeOperationSpec
    );
  }

  /**
   * Validates whether the specified template is syntactically correct and will be accepted by Azure
   * Resource Manager..
   * @param deploymentName The name of the deployment.
   * @param parameters Parameters to validate.
   * @param options The options parameters.
   */
  async beginValidateAtTenantScope(
    deploymentName: string,
    parameters: ScopedDeployment,
    options?: DeploymentsValidateAtTenantScopeOptionalParams
  ): Promise<
    PollerLike<
      PollOperationState<DeploymentsValidateAtTenantScopeResponse>,
      DeploymentsValidateAtTenantScopeResponse
    >
  > {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ): Promise<DeploymentsValidateAtTenantScopeResponse> => {
      return this.client.sendOperationRequest(args, spec);
    };
    const sendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ) => {
      let currentRawResponse:
        | coreClient.FullOperationResponse
        | undefined = undefined;
      const providedCallback = args.options?.onResponse;
      const callback: coreClient.RawResponseCallback = (
        rawResponse: coreClient.FullOperationResponse,
        flatResponse: unknown
      ) => {
        currentRawResponse = rawResponse;
        providedCallback?.(rawResponse, flatResponse);
      };
      const updatedArgs = {
        ...args,
        options: {
          ...args.options,
          onResponse: callback
        }
      };
      const flatResponse = await directSendOperation(updatedArgs, spec);
      return { flatResponse, rawResponse: currentRawResponse! };
    };

    return new LROPoller(
      { intervalInMs: options?.updateIntervalInMs },
      { deploymentName, parameters, options },
      validateAtTenantScopeOperationSpec,
      sendOperation
    );
  }

  /**
   * Validates whether the specified template is syntactically correct and will be accepted by Azure
   * Resource Manager..
   * @param deploymentName The name of the deployment.
   * @param parameters Parameters to validate.
   * @param options The options parameters.
   */
  async beginValidateAtTenantScopeAndWait(
    deploymentName: string,
    parameters: ScopedDeployment,
    options?: DeploymentsValidateAtTenantScopeOptionalParams
  ): Promise<DeploymentsValidateAtTenantScopeResponse> {
    const poller = await this.beginValidateAtTenantScope(
      deploymentName,
      parameters,
      options
    );
    return poller.pollUntilDone();
  }

  /**
   * Returns changes that will be made by the deployment if executed at the scope of the tenant group.
   * @param deploymentName The name of the deployment.
   * @param parameters Parameters to validate.
   * @param options The options parameters.
   */
  async beginWhatIfAtTenantScope(
    deploymentName: string,
    parameters: ScopedDeploymentWhatIf,
    options?: DeploymentsWhatIfAtTenantScopeOptionalParams
  ): Promise<
    PollerLike<
      PollOperationState<DeploymentsWhatIfAtTenantScopeResponse>,
      DeploymentsWhatIfAtTenantScopeResponse
    >
  > {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ): Promise<DeploymentsWhatIfAtTenantScopeResponse> => {
      return this.client.sendOperationRequest(args, spec);
    };
    const sendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ) => {
      let currentRawResponse:
        | coreClient.FullOperationResponse
        | undefined = undefined;
      const providedCallback = args.options?.onResponse;
      const callback: coreClient.RawResponseCallback = (
        rawResponse: coreClient.FullOperationResponse,
        flatResponse: unknown
      ) => {
        currentRawResponse = rawResponse;
        providedCallback?.(rawResponse, flatResponse);
      };
      const updatedArgs = {
        ...args,
        options: {
          ...args.options,
          onResponse: callback
        }
      };
      const flatResponse = await directSendOperation(updatedArgs, spec);
      return { flatResponse, rawResponse: currentRawResponse! };
    };

    return new LROPoller(
      { intervalInMs: options?.updateIntervalInMs },
      { deploymentName, parameters, options },
      whatIfAtTenantScopeOperationSpec,
      sendOperation,
      "location"
    );
  }

  /**
   * Returns changes that will be made by the deployment if executed at the scope of the tenant group.
   * @param deploymentName The name of the deployment.
   * @param parameters Parameters to validate.
   * @param options The options parameters.
   */
  async beginWhatIfAtTenantScopeAndWait(
    deploymentName: string,
    parameters: ScopedDeploymentWhatIf,
    options?: DeploymentsWhatIfAtTenantScopeOptionalParams
  ): Promise<DeploymentsWhatIfAtTenantScopeResponse> {
    const poller = await this.beginWhatIfAtTenantScope(
      deploymentName,
      parameters,
      options
    );
    return poller.pollUntilDone();
  }

  /**
   * Exports the template used for specified deployment.
   * @param deploymentName The name of the deployment.
   * @param options The options parameters.
   */
  exportTemplateAtTenantScope(
    deploymentName: string,
    options?: DeploymentsExportTemplateAtTenantScopeOptionalParams
  ): Promise<DeploymentsExportTemplateAtTenantScopeResponse> {
    return this.client.sendOperationRequest(
      { deploymentName, options },
      exportTemplateAtTenantScopeOperationSpec
    );
  }

  /**
   * Get all the deployments at the tenant scope.
   * @param options The options parameters.
   */
  private _listAtTenantScope(
    options?: DeploymentsListAtTenantScopeOptionalParams
  ): Promise<DeploymentsListAtTenantScopeResponse> {
    return this.client.sendOperationRequest(
      { options },
      listAtTenantScopeOperationSpec
    );
  }

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
  async beginDeleteAtManagementGroupScope(
    groupId: string,
    deploymentName: string,
    options?: DeploymentsDeleteAtManagementGroupScopeOptionalParams
  ): Promise<PollerLike<PollOperationState<void>, void>> {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ): Promise<void> => {
      return this.client.sendOperationRequest(args, spec);
    };
    const sendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ) => {
      let currentRawResponse:
        | coreClient.FullOperationResponse
        | undefined = undefined;
      const providedCallback = args.options?.onResponse;
      const callback: coreClient.RawResponseCallback = (
        rawResponse: coreClient.FullOperationResponse,
        flatResponse: unknown
      ) => {
        currentRawResponse = rawResponse;
        providedCallback?.(rawResponse, flatResponse);
      };
      const updatedArgs = {
        ...args,
        options: {
          ...args.options,
          onResponse: callback
        }
      };
      const flatResponse = await directSendOperation(updatedArgs, spec);
      return { flatResponse, rawResponse: currentRawResponse! };
    };

    return new LROPoller(
      { intervalInMs: options?.updateIntervalInMs },
      { groupId, deploymentName, options },
      deleteAtManagementGroupScopeOperationSpec,
      sendOperation
    );
  }

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
  async beginDeleteAtManagementGroupScopeAndWait(
    groupId: string,
    deploymentName: string,
    options?: DeploymentsDeleteAtManagementGroupScopeOptionalParams
  ): Promise<void> {
    const poller = await this.beginDeleteAtManagementGroupScope(
      groupId,
      deploymentName,
      options
    );
    return poller.pollUntilDone();
  }

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
  ): Promise<void> {
    return this.client.sendOperationRequest(
      { groupId, deploymentName, options },
      checkExistenceAtManagementGroupScopeOperationSpec
    );
  }

  /**
   * You can provide the template and parameters directly in the request or link to JSON files.
   * @param groupId The management group ID.
   * @param deploymentName The name of the deployment.
   * @param parameters Additional parameters supplied to the operation.
   * @param options The options parameters.
   */
  async beginCreateOrUpdateAtManagementGroupScope(
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
  > {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ): Promise<DeploymentsCreateOrUpdateAtManagementGroupScopeResponse> => {
      return this.client.sendOperationRequest(args, spec);
    };
    const sendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ) => {
      let currentRawResponse:
        | coreClient.FullOperationResponse
        | undefined = undefined;
      const providedCallback = args.options?.onResponse;
      const callback: coreClient.RawResponseCallback = (
        rawResponse: coreClient.FullOperationResponse,
        flatResponse: unknown
      ) => {
        currentRawResponse = rawResponse;
        providedCallback?.(rawResponse, flatResponse);
      };
      const updatedArgs = {
        ...args,
        options: {
          ...args.options,
          onResponse: callback
        }
      };
      const flatResponse = await directSendOperation(updatedArgs, spec);
      return { flatResponse, rawResponse: currentRawResponse! };
    };

    return new LROPoller(
      { intervalInMs: options?.updateIntervalInMs },
      { groupId, deploymentName, parameters, options },
      createOrUpdateAtManagementGroupScopeOperationSpec,
      sendOperation
    );
  }

  /**
   * You can provide the template and parameters directly in the request or link to JSON files.
   * @param groupId The management group ID.
   * @param deploymentName The name of the deployment.
   * @param parameters Additional parameters supplied to the operation.
   * @param options The options parameters.
   */
  async beginCreateOrUpdateAtManagementGroupScopeAndWait(
    groupId: string,
    deploymentName: string,
    parameters: ScopedDeployment,
    options?: DeploymentsCreateOrUpdateAtManagementGroupScopeOptionalParams
  ): Promise<DeploymentsCreateOrUpdateAtManagementGroupScopeResponse> {
    const poller = await this.beginCreateOrUpdateAtManagementGroupScope(
      groupId,
      deploymentName,
      parameters,
      options
    );
    return poller.pollUntilDone();
  }

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
  ): Promise<DeploymentsGetAtManagementGroupScopeResponse> {
    return this.client.sendOperationRequest(
      { groupId, deploymentName, options },
      getAtManagementGroupScopeOperationSpec
    );
  }

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
  ): Promise<void> {
    return this.client.sendOperationRequest(
      { groupId, deploymentName, options },
      cancelAtManagementGroupScopeOperationSpec
    );
  }

  /**
   * Validates whether the specified template is syntactically correct and will be accepted by Azure
   * Resource Manager..
   * @param groupId The management group ID.
   * @param deploymentName The name of the deployment.
   * @param parameters Parameters to validate.
   * @param options The options parameters.
   */
  async beginValidateAtManagementGroupScope(
    groupId: string,
    deploymentName: string,
    parameters: ScopedDeployment,
    options?: DeploymentsValidateAtManagementGroupScopeOptionalParams
  ): Promise<
    PollerLike<
      PollOperationState<DeploymentsValidateAtManagementGroupScopeResponse>,
      DeploymentsValidateAtManagementGroupScopeResponse
    >
  > {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ): Promise<DeploymentsValidateAtManagementGroupScopeResponse> => {
      return this.client.sendOperationRequest(args, spec);
    };
    const sendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ) => {
      let currentRawResponse:
        | coreClient.FullOperationResponse
        | undefined = undefined;
      const providedCallback = args.options?.onResponse;
      const callback: coreClient.RawResponseCallback = (
        rawResponse: coreClient.FullOperationResponse,
        flatResponse: unknown
      ) => {
        currentRawResponse = rawResponse;
        providedCallback?.(rawResponse, flatResponse);
      };
      const updatedArgs = {
        ...args,
        options: {
          ...args.options,
          onResponse: callback
        }
      };
      const flatResponse = await directSendOperation(updatedArgs, spec);
      return { flatResponse, rawResponse: currentRawResponse! };
    };

    return new LROPoller(
      { intervalInMs: options?.updateIntervalInMs },
      { groupId, deploymentName, parameters, options },
      validateAtManagementGroupScopeOperationSpec,
      sendOperation
    );
  }

  /**
   * Validates whether the specified template is syntactically correct and will be accepted by Azure
   * Resource Manager..
   * @param groupId The management group ID.
   * @param deploymentName The name of the deployment.
   * @param parameters Parameters to validate.
   * @param options The options parameters.
   */
  async beginValidateAtManagementGroupScopeAndWait(
    groupId: string,
    deploymentName: string,
    parameters: ScopedDeployment,
    options?: DeploymentsValidateAtManagementGroupScopeOptionalParams
  ): Promise<DeploymentsValidateAtManagementGroupScopeResponse> {
    const poller = await this.beginValidateAtManagementGroupScope(
      groupId,
      deploymentName,
      parameters,
      options
    );
    return poller.pollUntilDone();
  }

  /**
   * Returns changes that will be made by the deployment if executed at the scope of the management
   * group.
   * @param groupId The management group ID.
   * @param deploymentName The name of the deployment.
   * @param parameters Parameters to validate.
   * @param options The options parameters.
   */
  async beginWhatIfAtManagementGroupScope(
    groupId: string,
    deploymentName: string,
    parameters: ScopedDeploymentWhatIf,
    options?: DeploymentsWhatIfAtManagementGroupScopeOptionalParams
  ): Promise<
    PollerLike<
      PollOperationState<DeploymentsWhatIfAtManagementGroupScopeResponse>,
      DeploymentsWhatIfAtManagementGroupScopeResponse
    >
  > {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ): Promise<DeploymentsWhatIfAtManagementGroupScopeResponse> => {
      return this.client.sendOperationRequest(args, spec);
    };
    const sendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ) => {
      let currentRawResponse:
        | coreClient.FullOperationResponse
        | undefined = undefined;
      const providedCallback = args.options?.onResponse;
      const callback: coreClient.RawResponseCallback = (
        rawResponse: coreClient.FullOperationResponse,
        flatResponse: unknown
      ) => {
        currentRawResponse = rawResponse;
        providedCallback?.(rawResponse, flatResponse);
      };
      const updatedArgs = {
        ...args,
        options: {
          ...args.options,
          onResponse: callback
        }
      };
      const flatResponse = await directSendOperation(updatedArgs, spec);
      return { flatResponse, rawResponse: currentRawResponse! };
    };

    return new LROPoller(
      { intervalInMs: options?.updateIntervalInMs },
      { groupId, deploymentName, parameters, options },
      whatIfAtManagementGroupScopeOperationSpec,
      sendOperation,
      "location"
    );
  }

  /**
   * Returns changes that will be made by the deployment if executed at the scope of the management
   * group.
   * @param groupId The management group ID.
   * @param deploymentName The name of the deployment.
   * @param parameters Parameters to validate.
   * @param options The options parameters.
   */
  async beginWhatIfAtManagementGroupScopeAndWait(
    groupId: string,
    deploymentName: string,
    parameters: ScopedDeploymentWhatIf,
    options?: DeploymentsWhatIfAtManagementGroupScopeOptionalParams
  ): Promise<DeploymentsWhatIfAtManagementGroupScopeResponse> {
    const poller = await this.beginWhatIfAtManagementGroupScope(
      groupId,
      deploymentName,
      parameters,
      options
    );
    return poller.pollUntilDone();
  }

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
  ): Promise<DeploymentsExportTemplateAtManagementGroupScopeResponse> {
    return this.client.sendOperationRequest(
      { groupId, deploymentName, options },
      exportTemplateAtManagementGroupScopeOperationSpec
    );
  }

  /**
   * Get all the deployments for a management group.
   * @param groupId The management group ID.
   * @param options The options parameters.
   */
  private _listAtManagementGroupScope(
    groupId: string,
    options?: DeploymentsListAtManagementGroupScopeOptionalParams
  ): Promise<DeploymentsListAtManagementGroupScopeResponse> {
    return this.client.sendOperationRequest(
      { groupId, options },
      listAtManagementGroupScopeOperationSpec
    );
  }

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
  async beginDeleteAtSubscriptionScope(
    deploymentName: string,
    options?: DeploymentsDeleteAtSubscriptionScopeOptionalParams
  ): Promise<PollerLike<PollOperationState<void>, void>> {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ): Promise<void> => {
      return this.client.sendOperationRequest(args, spec);
    };
    const sendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ) => {
      let currentRawResponse:
        | coreClient.FullOperationResponse
        | undefined = undefined;
      const providedCallback = args.options?.onResponse;
      const callback: coreClient.RawResponseCallback = (
        rawResponse: coreClient.FullOperationResponse,
        flatResponse: unknown
      ) => {
        currentRawResponse = rawResponse;
        providedCallback?.(rawResponse, flatResponse);
      };
      const updatedArgs = {
        ...args,
        options: {
          ...args.options,
          onResponse: callback
        }
      };
      const flatResponse = await directSendOperation(updatedArgs, spec);
      return { flatResponse, rawResponse: currentRawResponse! };
    };

    return new LROPoller(
      { intervalInMs: options?.updateIntervalInMs },
      { deploymentName, options },
      deleteAtSubscriptionScopeOperationSpec,
      sendOperation
    );
  }

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
  async beginDeleteAtSubscriptionScopeAndWait(
    deploymentName: string,
    options?: DeploymentsDeleteAtSubscriptionScopeOptionalParams
  ): Promise<void> {
    const poller = await this.beginDeleteAtSubscriptionScope(
      deploymentName,
      options
    );
    return poller.pollUntilDone();
  }

  /**
   * Checks whether the deployment exists.
   * @param deploymentName The name of the deployment.
   * @param options The options parameters.
   */
  checkExistenceAtSubscriptionScope(
    deploymentName: string,
    options?: DeploymentsCheckExistenceAtSubscriptionScopeOptionalParams
  ): Promise<void> {
    return this.client.sendOperationRequest(
      { deploymentName, options },
      checkExistenceAtSubscriptionScopeOperationSpec
    );
  }

  /**
   * You can provide the template and parameters directly in the request or link to JSON files.
   * @param deploymentName The name of the deployment.
   * @param parameters Additional parameters supplied to the operation.
   * @param options The options parameters.
   */
  async beginCreateOrUpdateAtSubscriptionScope(
    deploymentName: string,
    parameters: Deployment,
    options?: DeploymentsCreateOrUpdateAtSubscriptionScopeOptionalParams
  ): Promise<
    PollerLike<
      PollOperationState<DeploymentsCreateOrUpdateAtSubscriptionScopeResponse>,
      DeploymentsCreateOrUpdateAtSubscriptionScopeResponse
    >
  > {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ): Promise<DeploymentsCreateOrUpdateAtSubscriptionScopeResponse> => {
      return this.client.sendOperationRequest(args, spec);
    };
    const sendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ) => {
      let currentRawResponse:
        | coreClient.FullOperationResponse
        | undefined = undefined;
      const providedCallback = args.options?.onResponse;
      const callback: coreClient.RawResponseCallback = (
        rawResponse: coreClient.FullOperationResponse,
        flatResponse: unknown
      ) => {
        currentRawResponse = rawResponse;
        providedCallback?.(rawResponse, flatResponse);
      };
      const updatedArgs = {
        ...args,
        options: {
          ...args.options,
          onResponse: callback
        }
      };
      const flatResponse = await directSendOperation(updatedArgs, spec);
      return { flatResponse, rawResponse: currentRawResponse! };
    };

    return new LROPoller(
      { intervalInMs: options?.updateIntervalInMs },
      { deploymentName, parameters, options },
      createOrUpdateAtSubscriptionScopeOperationSpec,
      sendOperation
    );
  }

  /**
   * You can provide the template and parameters directly in the request or link to JSON files.
   * @param deploymentName The name of the deployment.
   * @param parameters Additional parameters supplied to the operation.
   * @param options The options parameters.
   */
  async beginCreateOrUpdateAtSubscriptionScopeAndWait(
    deploymentName: string,
    parameters: Deployment,
    options?: DeploymentsCreateOrUpdateAtSubscriptionScopeOptionalParams
  ): Promise<DeploymentsCreateOrUpdateAtSubscriptionScopeResponse> {
    const poller = await this.beginCreateOrUpdateAtSubscriptionScope(
      deploymentName,
      parameters,
      options
    );
    return poller.pollUntilDone();
  }

  /**
   * Gets a deployment.
   * @param deploymentName The name of the deployment.
   * @param options The options parameters.
   */
  getAtSubscriptionScope(
    deploymentName: string,
    options?: DeploymentsGetAtSubscriptionScopeOptionalParams
  ): Promise<DeploymentsGetAtSubscriptionScopeResponse> {
    return this.client.sendOperationRequest(
      { deploymentName, options },
      getAtSubscriptionScopeOperationSpec
    );
  }

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
  ): Promise<void> {
    return this.client.sendOperationRequest(
      { deploymentName, options },
      cancelAtSubscriptionScopeOperationSpec
    );
  }

  /**
   * Validates whether the specified template is syntactically correct and will be accepted by Azure
   * Resource Manager..
   * @param deploymentName The name of the deployment.
   * @param parameters Parameters to validate.
   * @param options The options parameters.
   */
  async beginValidateAtSubscriptionScope(
    deploymentName: string,
    parameters: Deployment,
    options?: DeploymentsValidateAtSubscriptionScopeOptionalParams
  ): Promise<
    PollerLike<
      PollOperationState<DeploymentsValidateAtSubscriptionScopeResponse>,
      DeploymentsValidateAtSubscriptionScopeResponse
    >
  > {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ): Promise<DeploymentsValidateAtSubscriptionScopeResponse> => {
      return this.client.sendOperationRequest(args, spec);
    };
    const sendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ) => {
      let currentRawResponse:
        | coreClient.FullOperationResponse
        | undefined = undefined;
      const providedCallback = args.options?.onResponse;
      const callback: coreClient.RawResponseCallback = (
        rawResponse: coreClient.FullOperationResponse,
        flatResponse: unknown
      ) => {
        currentRawResponse = rawResponse;
        providedCallback?.(rawResponse, flatResponse);
      };
      const updatedArgs = {
        ...args,
        options: {
          ...args.options,
          onResponse: callback
        }
      };
      const flatResponse = await directSendOperation(updatedArgs, spec);
      return { flatResponse, rawResponse: currentRawResponse! };
    };

    return new LROPoller(
      { intervalInMs: options?.updateIntervalInMs },
      { deploymentName, parameters, options },
      validateAtSubscriptionScopeOperationSpec,
      sendOperation
    );
  }

  /**
   * Validates whether the specified template is syntactically correct and will be accepted by Azure
   * Resource Manager..
   * @param deploymentName The name of the deployment.
   * @param parameters Parameters to validate.
   * @param options The options parameters.
   */
  async beginValidateAtSubscriptionScopeAndWait(
    deploymentName: string,
    parameters: Deployment,
    options?: DeploymentsValidateAtSubscriptionScopeOptionalParams
  ): Promise<DeploymentsValidateAtSubscriptionScopeResponse> {
    const poller = await this.beginValidateAtSubscriptionScope(
      deploymentName,
      parameters,
      options
    );
    return poller.pollUntilDone();
  }

  /**
   * Returns changes that will be made by the deployment if executed at the scope of the subscription.
   * @param deploymentName The name of the deployment.
   * @param parameters Parameters to What If.
   * @param options The options parameters.
   */
  async beginWhatIfAtSubscriptionScope(
    deploymentName: string,
    parameters: DeploymentWhatIf,
    options?: DeploymentsWhatIfAtSubscriptionScopeOptionalParams
  ): Promise<
    PollerLike<
      PollOperationState<DeploymentsWhatIfAtSubscriptionScopeResponse>,
      DeploymentsWhatIfAtSubscriptionScopeResponse
    >
  > {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ): Promise<DeploymentsWhatIfAtSubscriptionScopeResponse> => {
      return this.client.sendOperationRequest(args, spec);
    };
    const sendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ) => {
      let currentRawResponse:
        | coreClient.FullOperationResponse
        | undefined = undefined;
      const providedCallback = args.options?.onResponse;
      const callback: coreClient.RawResponseCallback = (
        rawResponse: coreClient.FullOperationResponse,
        flatResponse: unknown
      ) => {
        currentRawResponse = rawResponse;
        providedCallback?.(rawResponse, flatResponse);
      };
      const updatedArgs = {
        ...args,
        options: {
          ...args.options,
          onResponse: callback
        }
      };
      const flatResponse = await directSendOperation(updatedArgs, spec);
      return { flatResponse, rawResponse: currentRawResponse! };
    };

    return new LROPoller(
      { intervalInMs: options?.updateIntervalInMs },
      { deploymentName, parameters, options },
      whatIfAtSubscriptionScopeOperationSpec,
      sendOperation,
      "location"
    );
  }

  /**
   * Returns changes that will be made by the deployment if executed at the scope of the subscription.
   * @param deploymentName The name of the deployment.
   * @param parameters Parameters to What If.
   * @param options The options parameters.
   */
  async beginWhatIfAtSubscriptionScopeAndWait(
    deploymentName: string,
    parameters: DeploymentWhatIf,
    options?: DeploymentsWhatIfAtSubscriptionScopeOptionalParams
  ): Promise<DeploymentsWhatIfAtSubscriptionScopeResponse> {
    const poller = await this.beginWhatIfAtSubscriptionScope(
      deploymentName,
      parameters,
      options
    );
    return poller.pollUntilDone();
  }

  /**
   * Exports the template used for specified deployment.
   * @param deploymentName The name of the deployment.
   * @param options The options parameters.
   */
  exportTemplateAtSubscriptionScope(
    deploymentName: string,
    options?: DeploymentsExportTemplateAtSubscriptionScopeOptionalParams
  ): Promise<DeploymentsExportTemplateAtSubscriptionScopeResponse> {
    return this.client.sendOperationRequest(
      { deploymentName, options },
      exportTemplateAtSubscriptionScopeOperationSpec
    );
  }

  /**
   * Get all the deployments for a subscription.
   * @param options The options parameters.
   */
  private _listAtSubscriptionScope(
    options?: DeploymentsListAtSubscriptionScopeOptionalParams
  ): Promise<DeploymentsListAtSubscriptionScopeResponse> {
    return this.client.sendOperationRequest(
      { options },
      listAtSubscriptionScopeOperationSpec
    );
  }

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
  async beginDelete(
    resourceGroupName: string,
    deploymentName: string,
    options?: DeploymentsDeleteOptionalParams
  ): Promise<PollerLike<PollOperationState<void>, void>> {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ): Promise<void> => {
      return this.client.sendOperationRequest(args, spec);
    };
    const sendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ) => {
      let currentRawResponse:
        | coreClient.FullOperationResponse
        | undefined = undefined;
      const providedCallback = args.options?.onResponse;
      const callback: coreClient.RawResponseCallback = (
        rawResponse: coreClient.FullOperationResponse,
        flatResponse: unknown
      ) => {
        currentRawResponse = rawResponse;
        providedCallback?.(rawResponse, flatResponse);
      };
      const updatedArgs = {
        ...args,
        options: {
          ...args.options,
          onResponse: callback
        }
      };
      const flatResponse = await directSendOperation(updatedArgs, spec);
      return { flatResponse, rawResponse: currentRawResponse! };
    };

    return new LROPoller(
      { intervalInMs: options?.updateIntervalInMs },
      { resourceGroupName, deploymentName, options },
      deleteOperationSpec,
      sendOperation
    );
  }

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
  async beginDeleteAndWait(
    resourceGroupName: string,
    deploymentName: string,
    options?: DeploymentsDeleteOptionalParams
  ): Promise<void> {
    const poller = await this.beginDelete(
      resourceGroupName,
      deploymentName,
      options
    );
    return poller.pollUntilDone();
  }

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
  ): Promise<void> {
    return this.client.sendOperationRequest(
      { resourceGroupName, deploymentName, options },
      checkExistenceOperationSpec
    );
  }

  /**
   * You can provide the template and parameters directly in the request or link to JSON files.
   * @param resourceGroupName The name of the resource group to deploy the resources to. The name is case
   *                          insensitive. The resource group must already exist.
   * @param deploymentName The name of the deployment.
   * @param parameters Additional parameters supplied to the operation.
   * @param options The options parameters.
   */
  async beginCreateOrUpdate(
    resourceGroupName: string,
    deploymentName: string,
    parameters: Deployment,
    options?: DeploymentsCreateOrUpdateOptionalParams
  ): Promise<
    PollerLike<
      PollOperationState<DeploymentsCreateOrUpdateResponse>,
      DeploymentsCreateOrUpdateResponse
    >
  > {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ): Promise<DeploymentsCreateOrUpdateResponse> => {
      return this.client.sendOperationRequest(args, spec);
    };
    const sendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ) => {
      let currentRawResponse:
        | coreClient.FullOperationResponse
        | undefined = undefined;
      const providedCallback = args.options?.onResponse;
      const callback: coreClient.RawResponseCallback = (
        rawResponse: coreClient.FullOperationResponse,
        flatResponse: unknown
      ) => {
        currentRawResponse = rawResponse;
        providedCallback?.(rawResponse, flatResponse);
      };
      const updatedArgs = {
        ...args,
        options: {
          ...args.options,
          onResponse: callback
        }
      };
      const flatResponse = await directSendOperation(updatedArgs, spec);
      return { flatResponse, rawResponse: currentRawResponse! };
    };

    return new LROPoller(
      { intervalInMs: options?.updateIntervalInMs },
      { resourceGroupName, deploymentName, parameters, options },
      createOrUpdateOperationSpec,
      sendOperation
    );
  }

  /**
   * You can provide the template and parameters directly in the request or link to JSON files.
   * @param resourceGroupName The name of the resource group to deploy the resources to. The name is case
   *                          insensitive. The resource group must already exist.
   * @param deploymentName The name of the deployment.
   * @param parameters Additional parameters supplied to the operation.
   * @param options The options parameters.
   */
  async beginCreateOrUpdateAndWait(
    resourceGroupName: string,
    deploymentName: string,
    parameters: Deployment,
    options?: DeploymentsCreateOrUpdateOptionalParams
  ): Promise<DeploymentsCreateOrUpdateResponse> {
    const poller = await this.beginCreateOrUpdate(
      resourceGroupName,
      deploymentName,
      parameters,
      options
    );
    return poller.pollUntilDone();
  }

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
  ): Promise<DeploymentsGetResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, deploymentName, options },
      getOperationSpec
    );
  }

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
  ): Promise<void> {
    return this.client.sendOperationRequest(
      { resourceGroupName, deploymentName, options },
      cancelOperationSpec
    );
  }

  /**
   * Validates whether the specified template is syntactically correct and will be accepted by Azure
   * Resource Manager..
   * @param resourceGroupName The name of the resource group the template will be deployed to. The name
   *                          is case insensitive.
   * @param deploymentName The name of the deployment.
   * @param parameters Parameters to validate.
   * @param options The options parameters.
   */
  async beginValidate(
    resourceGroupName: string,
    deploymentName: string,
    parameters: Deployment,
    options?: DeploymentsValidateOptionalParams
  ): Promise<
    PollerLike<
      PollOperationState<DeploymentsValidateResponse>,
      DeploymentsValidateResponse
    >
  > {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ): Promise<DeploymentsValidateResponse> => {
      return this.client.sendOperationRequest(args, spec);
    };
    const sendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ) => {
      let currentRawResponse:
        | coreClient.FullOperationResponse
        | undefined = undefined;
      const providedCallback = args.options?.onResponse;
      const callback: coreClient.RawResponseCallback = (
        rawResponse: coreClient.FullOperationResponse,
        flatResponse: unknown
      ) => {
        currentRawResponse = rawResponse;
        providedCallback?.(rawResponse, flatResponse);
      };
      const updatedArgs = {
        ...args,
        options: {
          ...args.options,
          onResponse: callback
        }
      };
      const flatResponse = await directSendOperation(updatedArgs, spec);
      return { flatResponse, rawResponse: currentRawResponse! };
    };

    return new LROPoller(
      { intervalInMs: options?.updateIntervalInMs },
      { resourceGroupName, deploymentName, parameters, options },
      validateOperationSpec,
      sendOperation
    );
  }

  /**
   * Validates whether the specified template is syntactically correct and will be accepted by Azure
   * Resource Manager..
   * @param resourceGroupName The name of the resource group the template will be deployed to. The name
   *                          is case insensitive.
   * @param deploymentName The name of the deployment.
   * @param parameters Parameters to validate.
   * @param options The options parameters.
   */
  async beginValidateAndWait(
    resourceGroupName: string,
    deploymentName: string,
    parameters: Deployment,
    options?: DeploymentsValidateOptionalParams
  ): Promise<DeploymentsValidateResponse> {
    const poller = await this.beginValidate(
      resourceGroupName,
      deploymentName,
      parameters,
      options
    );
    return poller.pollUntilDone();
  }

  /**
   * Returns changes that will be made by the deployment if executed at the scope of the resource group.
   * @param resourceGroupName The name of the resource group the template will be deployed to. The name
   *                          is case insensitive.
   * @param deploymentName The name of the deployment.
   * @param parameters Parameters to validate.
   * @param options The options parameters.
   */
  async beginWhatIf(
    resourceGroupName: string,
    deploymentName: string,
    parameters: DeploymentWhatIf,
    options?: DeploymentsWhatIfOptionalParams
  ): Promise<
    PollerLike<
      PollOperationState<DeploymentsWhatIfResponse>,
      DeploymentsWhatIfResponse
    >
  > {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ): Promise<DeploymentsWhatIfResponse> => {
      return this.client.sendOperationRequest(args, spec);
    };
    const sendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ) => {
      let currentRawResponse:
        | coreClient.FullOperationResponse
        | undefined = undefined;
      const providedCallback = args.options?.onResponse;
      const callback: coreClient.RawResponseCallback = (
        rawResponse: coreClient.FullOperationResponse,
        flatResponse: unknown
      ) => {
        currentRawResponse = rawResponse;
        providedCallback?.(rawResponse, flatResponse);
      };
      const updatedArgs = {
        ...args,
        options: {
          ...args.options,
          onResponse: callback
        }
      };
      const flatResponse = await directSendOperation(updatedArgs, spec);
      return { flatResponse, rawResponse: currentRawResponse! };
    };

    return new LROPoller(
      { intervalInMs: options?.updateIntervalInMs },
      { resourceGroupName, deploymentName, parameters, options },
      whatIfOperationSpec,
      sendOperation,
      "location"
    );
  }

  /**
   * Returns changes that will be made by the deployment if executed at the scope of the resource group.
   * @param resourceGroupName The name of the resource group the template will be deployed to. The name
   *                          is case insensitive.
   * @param deploymentName The name of the deployment.
   * @param parameters Parameters to validate.
   * @param options The options parameters.
   */
  async beginWhatIfAndWait(
    resourceGroupName: string,
    deploymentName: string,
    parameters: DeploymentWhatIf,
    options?: DeploymentsWhatIfOptionalParams
  ): Promise<DeploymentsWhatIfResponse> {
    const poller = await this.beginWhatIf(
      resourceGroupName,
      deploymentName,
      parameters,
      options
    );
    return poller.pollUntilDone();
  }

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
  ): Promise<DeploymentsExportTemplateResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, deploymentName, options },
      exportTemplateOperationSpec
    );
  }

  /**
   * Get all the deployments for a resource group.
   * @param resourceGroupName The name of the resource group with the deployments to get. The name is
   *                          case insensitive.
   * @param options The options parameters.
   */
  private _listByResourceGroup(
    resourceGroupName: string,
    options?: DeploymentsListByResourceGroupOptionalParams
  ): Promise<DeploymentsListByResourceGroupResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, options },
      listByResourceGroupOperationSpec
    );
  }

  /**
   * Calculate the hash of the given template.
   * @param template The template provided to calculate hash.
   * @param options The options parameters.
   */
  calculateTemplateHash(
    template: Record<string, unknown>,
    options?: DeploymentsCalculateTemplateHashOptionalParams
  ): Promise<DeploymentsCalculateTemplateHashResponse> {
    return this.client.sendOperationRequest(
      { template, options },
      calculateTemplateHashOperationSpec
    );
  }

  /**
   * ListAtScopeNext
   * @param scope The resource scope.
   * @param nextLink The nextLink from the previous successful call to the ListAtScope method.
   * @param options The options parameters.
   */
  private _listAtScopeNext(
    scope: string,
    nextLink: string,
    options?: DeploymentsListAtScopeNextOptionalParams
  ): Promise<DeploymentsListAtScopeNextResponse> {
    return this.client.sendOperationRequest(
      { scope, nextLink, options },
      listAtScopeNextOperationSpec
    );
  }

  /**
   * ListAtTenantScopeNext
   * @param nextLink The nextLink from the previous successful call to the ListAtTenantScope method.
   * @param options The options parameters.
   */
  private _listAtTenantScopeNext(
    nextLink: string,
    options?: DeploymentsListAtTenantScopeNextOptionalParams
  ): Promise<DeploymentsListAtTenantScopeNextResponse> {
    return this.client.sendOperationRequest(
      { nextLink, options },
      listAtTenantScopeNextOperationSpec
    );
  }

  /**
   * ListAtManagementGroupScopeNext
   * @param groupId The management group ID.
   * @param nextLink The nextLink from the previous successful call to the ListAtManagementGroupScope
   *                 method.
   * @param options The options parameters.
   */
  private _listAtManagementGroupScopeNext(
    groupId: string,
    nextLink: string,
    options?: DeploymentsListAtManagementGroupScopeNextOptionalParams
  ): Promise<DeploymentsListAtManagementGroupScopeNextResponse> {
    return this.client.sendOperationRequest(
      { groupId, nextLink, options },
      listAtManagementGroupScopeNextOperationSpec
    );
  }

  /**
   * ListAtSubscriptionScopeNext
   * @param nextLink The nextLink from the previous successful call to the ListAtSubscriptionScope
   *                 method.
   * @param options The options parameters.
   */
  private _listAtSubscriptionScopeNext(
    nextLink: string,
    options?: DeploymentsListAtSubscriptionScopeNextOptionalParams
  ): Promise<DeploymentsListAtSubscriptionScopeNextResponse> {
    return this.client.sendOperationRequest(
      { nextLink, options },
      listAtSubscriptionScopeNextOperationSpec
    );
  }

  /**
   * ListByResourceGroupNext
   * @param resourceGroupName The name of the resource group with the deployments to get. The name is
   *                          case insensitive.
   * @param nextLink The nextLink from the previous successful call to the ListByResourceGroup method.
   * @param options The options parameters.
   */
  private _listByResourceGroupNext(
    resourceGroupName: string,
    nextLink: string,
    options?: DeploymentsListByResourceGroupNextOptionalParams
  ): Promise<DeploymentsListByResourceGroupNextResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, nextLink, options },
      listByResourceGroupNextOperationSpec
    );
  }

  /**
   * ListAtScopeNextNext
   * @param scope The resource scope.
   * @param nextLink The nextLink from the previous successful call to the ListAtScopeNext method.
   * @param options The options parameters.
   */
  private _listAtScopeNextNext(
    scope: string,
    nextLink: string,
    options?: DeploymentsListAtScopeNextNextOptionalParams
  ): Promise<DeploymentsListAtScopeNextNextResponse> {
    return this.client.sendOperationRequest(
      { scope, nextLink, options },
      listAtScopeNextNextOperationSpec
    );
  }

  /**
   * ListAtTenantScopeNextNext
   * @param nextLink The nextLink from the previous successful call to the ListAtTenantScopeNext method.
   * @param options The options parameters.
   */
  private _listAtTenantScopeNextNext(
    nextLink: string,
    options?: DeploymentsListAtTenantScopeNextNextOptionalParams
  ): Promise<DeploymentsListAtTenantScopeNextNextResponse> {
    return this.client.sendOperationRequest(
      { nextLink, options },
      listAtTenantScopeNextNextOperationSpec
    );
  }

  /**
   * ListAtManagementGroupScopeNextNext
   * @param groupId The management group ID.
   * @param nextLink The nextLink from the previous successful call to the ListAtManagementGroupScopeNext
   *                 method.
   * @param options The options parameters.
   */
  private _listAtManagementGroupScopeNextNext(
    groupId: string,
    nextLink: string,
    options?: DeploymentsListAtManagementGroupScopeNextNextOptionalParams
  ): Promise<DeploymentsListAtManagementGroupScopeNextNextResponse> {
    return this.client.sendOperationRequest(
      { groupId, nextLink, options },
      listAtManagementGroupScopeNextNextOperationSpec
    );
  }

  /**
   * ListAtSubscriptionScopeNextNext
   * @param nextLink The nextLink from the previous successful call to the ListAtSubscriptionScopeNext
   *                 method.
   * @param options The options parameters.
   */
  private _listAtSubscriptionScopeNextNext(
    nextLink: string,
    options?: DeploymentsListAtSubscriptionScopeNextNextOptionalParams
  ): Promise<DeploymentsListAtSubscriptionScopeNextNextResponse> {
    return this.client.sendOperationRequest(
      { nextLink, options },
      listAtSubscriptionScopeNextNextOperationSpec
    );
  }

  /**
   * ListByResourceGroupNextNext
   * @param resourceGroupName The name of the resource group with the deployments to get. The name is
   *                          case insensitive.
   * @param nextLink The nextLink from the previous successful call to the ListByResourceGroupNext
   *                 method.
   * @param options The options parameters.
   */
  private _listByResourceGroupNextNext(
    resourceGroupName: string,
    nextLink: string,
    options?: DeploymentsListByResourceGroupNextNextOptionalParams
  ): Promise<DeploymentsListByResourceGroupNextNextResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, nextLink, options },
      listByResourceGroupNextNextOperationSpec
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const deleteAtScopeOperationSpec: coreClient.OperationSpec = {
  path: "/{scope}/providers/Microsoft.Resources/deployments/{deploymentName}",
  httpMethod: "DELETE",
  responses: {
    200: {},
    201: {},
    202: {},
    204: {},
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.scope,
    Parameters.deploymentName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const checkExistenceAtScopeOperationSpec: coreClient.OperationSpec = {
  path: "/{scope}/providers/Microsoft.Resources/deployments/{deploymentName}",
  httpMethod: "HEAD",
  responses: {
    204: {},
    404: {},
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.scope,
    Parameters.deploymentName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const createOrUpdateAtScopeOperationSpec: coreClient.OperationSpec = {
  path: "/{scope}/providers/Microsoft.Resources/deployments/{deploymentName}",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper: Mappers.DeploymentExtended
    },
    201: {
      bodyMapper: Mappers.DeploymentExtended
    },
    202: {
      bodyMapper: Mappers.DeploymentExtended
    },
    204: {
      bodyMapper: Mappers.DeploymentExtended
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  requestBody: Parameters.parameters,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.scope,
    Parameters.deploymentName
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const getAtScopeOperationSpec: coreClient.OperationSpec = {
  path: "/{scope}/providers/Microsoft.Resources/deployments/{deploymentName}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.DeploymentExtended
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.scope,
    Parameters.deploymentName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const cancelAtScopeOperationSpec: coreClient.OperationSpec = {
  path:
    "/{scope}/providers/Microsoft.Resources/deployments/{deploymentName}/cancel",
  httpMethod: "POST",
  responses: {
    204: {},
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.scope,
    Parameters.deploymentName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const validateAtScopeOperationSpec: coreClient.OperationSpec = {
  path:
    "/{scope}/providers/Microsoft.Resources/deployments/{deploymentName}/validate",
  httpMethod: "POST",
  responses: {
    200: {
      bodyMapper: Mappers.DeploymentValidateResult
    },
    201: {
      bodyMapper: Mappers.DeploymentValidateResult
    },
    202: {
      bodyMapper: Mappers.DeploymentValidateResult
    },
    204: {
      bodyMapper: Mappers.DeploymentValidateResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  requestBody: Parameters.parameters,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.scope,
    Parameters.deploymentName
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const exportTemplateAtScopeOperationSpec: coreClient.OperationSpec = {
  path:
    "/{scope}/providers/Microsoft.Resources/deployments/{deploymentName}/exportTemplate",
  httpMethod: "POST",
  responses: {
    200: {
      bodyMapper: Mappers.DeploymentExportResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.scope,
    Parameters.deploymentName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listAtScopeOperationSpec: coreClient.OperationSpec = {
  path: "/{scope}/providers/Microsoft.Resources/deployments/",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.DeploymentListResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.apiVersion, Parameters.filter, Parameters.top],
  urlParameters: [Parameters.$host, Parameters.scope],
  headerParameters: [Parameters.accept],
  serializer
};
const deleteAtTenantScopeOperationSpec: coreClient.OperationSpec = {
  path: "/providers/Microsoft.Resources/deployments/{deploymentName}",
  httpMethod: "DELETE",
  responses: {
    200: {},
    201: {},
    202: {},
    204: {},
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [Parameters.$host, Parameters.deploymentName],
  headerParameters: [Parameters.accept],
  serializer
};
const checkExistenceAtTenantScopeOperationSpec: coreClient.OperationSpec = {
  path: "/providers/Microsoft.Resources/deployments/{deploymentName}",
  httpMethod: "HEAD",
  responses: {
    204: {},
    404: {},
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [Parameters.$host, Parameters.deploymentName],
  headerParameters: [Parameters.accept],
  serializer
};
const createOrUpdateAtTenantScopeOperationSpec: coreClient.OperationSpec = {
  path: "/providers/Microsoft.Resources/deployments/{deploymentName}",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper: Mappers.DeploymentExtended
    },
    201: {
      bodyMapper: Mappers.DeploymentExtended
    },
    202: {
      bodyMapper: Mappers.DeploymentExtended
    },
    204: {
      bodyMapper: Mappers.DeploymentExtended
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  requestBody: Parameters.parameters1,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [Parameters.$host, Parameters.deploymentName],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const getAtTenantScopeOperationSpec: coreClient.OperationSpec = {
  path: "/providers/Microsoft.Resources/deployments/{deploymentName}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.DeploymentExtended
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [Parameters.$host, Parameters.deploymentName],
  headerParameters: [Parameters.accept],
  serializer
};
const cancelAtTenantScopeOperationSpec: coreClient.OperationSpec = {
  path: "/providers/Microsoft.Resources/deployments/{deploymentName}/cancel",
  httpMethod: "POST",
  responses: {
    204: {},
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [Parameters.$host, Parameters.deploymentName],
  headerParameters: [Parameters.accept],
  serializer
};
const validateAtTenantScopeOperationSpec: coreClient.OperationSpec = {
  path: "/providers/Microsoft.Resources/deployments/{deploymentName}/validate",
  httpMethod: "POST",
  responses: {
    200: {
      bodyMapper: Mappers.DeploymentValidateResult
    },
    201: {
      bodyMapper: Mappers.DeploymentValidateResult
    },
    202: {
      bodyMapper: Mappers.DeploymentValidateResult
    },
    204: {
      bodyMapper: Mappers.DeploymentValidateResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  requestBody: Parameters.parameters1,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [Parameters.$host, Parameters.deploymentName],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const whatIfAtTenantScopeOperationSpec: coreClient.OperationSpec = {
  path: "/providers/Microsoft.Resources/deployments/{deploymentName}/whatIf",
  httpMethod: "POST",
  responses: {
    200: {
      bodyMapper: Mappers.WhatIfOperationResult
    },
    201: {
      bodyMapper: Mappers.WhatIfOperationResult
    },
    202: {
      bodyMapper: Mappers.WhatIfOperationResult
    },
    204: {
      bodyMapper: Mappers.WhatIfOperationResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  requestBody: Parameters.parameters2,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [Parameters.$host, Parameters.deploymentName],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const exportTemplateAtTenantScopeOperationSpec: coreClient.OperationSpec = {
  path:
    "/providers/Microsoft.Resources/deployments/{deploymentName}/exportTemplate",
  httpMethod: "POST",
  responses: {
    200: {
      bodyMapper: Mappers.DeploymentExportResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [Parameters.$host, Parameters.deploymentName],
  headerParameters: [Parameters.accept],
  serializer
};
const listAtTenantScopeOperationSpec: coreClient.OperationSpec = {
  path: "/providers/Microsoft.Resources/deployments/",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.DeploymentListResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.apiVersion, Parameters.filter, Parameters.top],
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.accept],
  serializer
};
const deleteAtManagementGroupScopeOperationSpec: coreClient.OperationSpec = {
  path:
    "/providers/Microsoft.Management/managementGroups/{groupId}/providers/Microsoft.Resources/deployments/{deploymentName}",
  httpMethod: "DELETE",
  responses: {
    200: {},
    201: {},
    202: {},
    204: {},
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.deploymentName,
    Parameters.groupId
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const checkExistenceAtManagementGroupScopeOperationSpec: coreClient.OperationSpec = {
  path:
    "/providers/Microsoft.Management/managementGroups/{groupId}/providers/Microsoft.Resources/deployments/{deploymentName}",
  httpMethod: "HEAD",
  responses: {
    204: {},
    404: {},
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.deploymentName,
    Parameters.groupId
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const createOrUpdateAtManagementGroupScopeOperationSpec: coreClient.OperationSpec = {
  path:
    "/providers/Microsoft.Management/managementGroups/{groupId}/providers/Microsoft.Resources/deployments/{deploymentName}",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper: Mappers.DeploymentExtended
    },
    201: {
      bodyMapper: Mappers.DeploymentExtended
    },
    202: {
      bodyMapper: Mappers.DeploymentExtended
    },
    204: {
      bodyMapper: Mappers.DeploymentExtended
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  requestBody: Parameters.parameters1,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.deploymentName,
    Parameters.groupId
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const getAtManagementGroupScopeOperationSpec: coreClient.OperationSpec = {
  path:
    "/providers/Microsoft.Management/managementGroups/{groupId}/providers/Microsoft.Resources/deployments/{deploymentName}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.DeploymentExtended
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.deploymentName,
    Parameters.groupId
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const cancelAtManagementGroupScopeOperationSpec: coreClient.OperationSpec = {
  path:
    "/providers/Microsoft.Management/managementGroups/{groupId}/providers/Microsoft.Resources/deployments/{deploymentName}/cancel",
  httpMethod: "POST",
  responses: {
    204: {},
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.deploymentName,
    Parameters.groupId
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const validateAtManagementGroupScopeOperationSpec: coreClient.OperationSpec = {
  path:
    "/providers/Microsoft.Management/managementGroups/{groupId}/providers/Microsoft.Resources/deployments/{deploymentName}/validate",
  httpMethod: "POST",
  responses: {
    200: {
      bodyMapper: Mappers.DeploymentValidateResult
    },
    201: {
      bodyMapper: Mappers.DeploymentValidateResult
    },
    202: {
      bodyMapper: Mappers.DeploymentValidateResult
    },
    204: {
      bodyMapper: Mappers.DeploymentValidateResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  requestBody: Parameters.parameters1,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.deploymentName,
    Parameters.groupId
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const whatIfAtManagementGroupScopeOperationSpec: coreClient.OperationSpec = {
  path:
    "/providers/Microsoft.Management/managementGroups/{groupId}/providers/Microsoft.Resources/deployments/{deploymentName}/whatIf",
  httpMethod: "POST",
  responses: {
    200: {
      bodyMapper: Mappers.WhatIfOperationResult
    },
    201: {
      bodyMapper: Mappers.WhatIfOperationResult
    },
    202: {
      bodyMapper: Mappers.WhatIfOperationResult
    },
    204: {
      bodyMapper: Mappers.WhatIfOperationResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  requestBody: Parameters.parameters2,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.deploymentName,
    Parameters.groupId
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const exportTemplateAtManagementGroupScopeOperationSpec: coreClient.OperationSpec = {
  path:
    "/providers/Microsoft.Management/managementGroups/{groupId}/providers/Microsoft.Resources/deployments/{deploymentName}/exportTemplate",
  httpMethod: "POST",
  responses: {
    200: {
      bodyMapper: Mappers.DeploymentExportResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.deploymentName,
    Parameters.groupId
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listAtManagementGroupScopeOperationSpec: coreClient.OperationSpec = {
  path:
    "/providers/Microsoft.Management/managementGroups/{groupId}/providers/Microsoft.Resources/deployments/",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.DeploymentListResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.apiVersion, Parameters.filter, Parameters.top],
  urlParameters: [Parameters.$host, Parameters.groupId],
  headerParameters: [Parameters.accept],
  serializer
};
const deleteAtSubscriptionScopeOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/providers/Microsoft.Resources/deployments/{deploymentName}",
  httpMethod: "DELETE",
  responses: {
    200: {},
    201: {},
    202: {},
    204: {},
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.deploymentName,
    Parameters.subscriptionId
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const checkExistenceAtSubscriptionScopeOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/providers/Microsoft.Resources/deployments/{deploymentName}",
  httpMethod: "HEAD",
  responses: {
    204: {},
    404: {},
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.deploymentName,
    Parameters.subscriptionId
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const createOrUpdateAtSubscriptionScopeOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/providers/Microsoft.Resources/deployments/{deploymentName}",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper: Mappers.DeploymentExtended
    },
    201: {
      bodyMapper: Mappers.DeploymentExtended
    },
    202: {
      bodyMapper: Mappers.DeploymentExtended
    },
    204: {
      bodyMapper: Mappers.DeploymentExtended
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  requestBody: Parameters.parameters,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.deploymentName,
    Parameters.subscriptionId
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const getAtSubscriptionScopeOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/providers/Microsoft.Resources/deployments/{deploymentName}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.DeploymentExtended
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.deploymentName,
    Parameters.subscriptionId
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const cancelAtSubscriptionScopeOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/providers/Microsoft.Resources/deployments/{deploymentName}/cancel",
  httpMethod: "POST",
  responses: {
    204: {},
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.deploymentName,
    Parameters.subscriptionId
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const validateAtSubscriptionScopeOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/providers/Microsoft.Resources/deployments/{deploymentName}/validate",
  httpMethod: "POST",
  responses: {
    200: {
      bodyMapper: Mappers.DeploymentValidateResult
    },
    201: {
      bodyMapper: Mappers.DeploymentValidateResult
    },
    202: {
      bodyMapper: Mappers.DeploymentValidateResult
    },
    204: {
      bodyMapper: Mappers.DeploymentValidateResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  requestBody: Parameters.parameters,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.deploymentName,
    Parameters.subscriptionId
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const whatIfAtSubscriptionScopeOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/providers/Microsoft.Resources/deployments/{deploymentName}/whatIf",
  httpMethod: "POST",
  responses: {
    200: {
      bodyMapper: Mappers.WhatIfOperationResult
    },
    201: {
      bodyMapper: Mappers.WhatIfOperationResult
    },
    202: {
      bodyMapper: Mappers.WhatIfOperationResult
    },
    204: {
      bodyMapper: Mappers.WhatIfOperationResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  requestBody: Parameters.parameters3,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.deploymentName,
    Parameters.subscriptionId
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const exportTemplateAtSubscriptionScopeOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/providers/Microsoft.Resources/deployments/{deploymentName}/exportTemplate",
  httpMethod: "POST",
  responses: {
    200: {
      bodyMapper: Mappers.DeploymentExportResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.deploymentName,
    Parameters.subscriptionId
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listAtSubscriptionScopeOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/providers/Microsoft.Resources/deployments/",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.DeploymentListResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.apiVersion, Parameters.filter, Parameters.top],
  urlParameters: [Parameters.$host, Parameters.subscriptionId],
  headerParameters: [Parameters.accept],
  serializer
};
const deleteOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}/providers/Microsoft.Resources/deployments/{deploymentName}",
  httpMethod: "DELETE",
  responses: {
    200: {},
    201: {},
    202: {},
    204: {},
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.deploymentName,
    Parameters.subscriptionId,
    Parameters.resourceGroupName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const checkExistenceOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}/providers/Microsoft.Resources/deployments/{deploymentName}",
  httpMethod: "HEAD",
  responses: {
    204: {},
    404: {},
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.deploymentName,
    Parameters.subscriptionId,
    Parameters.resourceGroupName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const createOrUpdateOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}/providers/Microsoft.Resources/deployments/{deploymentName}",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper: Mappers.DeploymentExtended
    },
    201: {
      bodyMapper: Mappers.DeploymentExtended
    },
    202: {
      bodyMapper: Mappers.DeploymentExtended
    },
    204: {
      bodyMapper: Mappers.DeploymentExtended
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  requestBody: Parameters.parameters,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.deploymentName,
    Parameters.subscriptionId,
    Parameters.resourceGroupName
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const getOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}/providers/Microsoft.Resources/deployments/{deploymentName}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.DeploymentExtended
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.deploymentName,
    Parameters.subscriptionId,
    Parameters.resourceGroupName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const cancelOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}/providers/Microsoft.Resources/deployments/{deploymentName}/cancel",
  httpMethod: "POST",
  responses: {
    204: {},
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.deploymentName,
    Parameters.subscriptionId,
    Parameters.resourceGroupName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const validateOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}/providers/Microsoft.Resources/deployments/{deploymentName}/validate",
  httpMethod: "POST",
  responses: {
    200: {
      bodyMapper: Mappers.DeploymentValidateResult
    },
    201: {
      bodyMapper: Mappers.DeploymentValidateResult
    },
    202: {
      bodyMapper: Mappers.DeploymentValidateResult
    },
    204: {
      bodyMapper: Mappers.DeploymentValidateResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  requestBody: Parameters.parameters,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.deploymentName,
    Parameters.subscriptionId,
    Parameters.resourceGroupName
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const whatIfOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}/providers/Microsoft.Resources/deployments/{deploymentName}/whatIf",
  httpMethod: "POST",
  responses: {
    200: {
      bodyMapper: Mappers.WhatIfOperationResult
    },
    201: {
      bodyMapper: Mappers.WhatIfOperationResult
    },
    202: {
      bodyMapper: Mappers.WhatIfOperationResult
    },
    204: {
      bodyMapper: Mappers.WhatIfOperationResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  requestBody: Parameters.parameters3,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.deploymentName,
    Parameters.subscriptionId,
    Parameters.resourceGroupName
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const exportTemplateOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}/providers/Microsoft.Resources/deployments/{deploymentName}/exportTemplate",
  httpMethod: "POST",
  responses: {
    200: {
      bodyMapper: Mappers.DeploymentExportResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.deploymentName,
    Parameters.subscriptionId,
    Parameters.resourceGroupName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listByResourceGroupOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}/providers/Microsoft.Resources/deployments/",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.DeploymentListResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.apiVersion, Parameters.filter, Parameters.top],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const calculateTemplateHashOperationSpec: coreClient.OperationSpec = {
  path: "/providers/Microsoft.Resources/calculateTemplateHash",
  httpMethod: "POST",
  responses: {
    200: {
      bodyMapper: Mappers.TemplateHashResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  requestBody: Parameters.template,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const listAtScopeNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.DeploymentListResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.apiVersion, Parameters.filter, Parameters.top],
  urlParameters: [Parameters.$host, Parameters.nextLink, Parameters.scope],
  headerParameters: [Parameters.accept],
  serializer
};
const listAtTenantScopeNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.DeploymentListResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.apiVersion, Parameters.filter, Parameters.top],
  urlParameters: [Parameters.$host, Parameters.nextLink],
  headerParameters: [Parameters.accept],
  serializer
};
const listAtManagementGroupScopeNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.DeploymentListResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.apiVersion, Parameters.filter, Parameters.top],
  urlParameters: [Parameters.$host, Parameters.nextLink, Parameters.groupId],
  headerParameters: [Parameters.accept],
  serializer
};
const listAtSubscriptionScopeNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.DeploymentListResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.apiVersion, Parameters.filter, Parameters.top],
  urlParameters: [
    Parameters.$host,
    Parameters.nextLink,
    Parameters.subscriptionId
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listByResourceGroupNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.DeploymentListResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.apiVersion, Parameters.filter, Parameters.top],
  urlParameters: [
    Parameters.$host,
    Parameters.nextLink,
    Parameters.subscriptionId,
    Parameters.resourceGroupName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listAtScopeNextNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.DeploymentListResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.apiVersion, Parameters.filter, Parameters.top],
  urlParameters: [Parameters.$host, Parameters.nextLink, Parameters.scope],
  headerParameters: [Parameters.accept],
  serializer
};
const listAtTenantScopeNextNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.DeploymentListResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.apiVersion, Parameters.filter, Parameters.top],
  urlParameters: [Parameters.$host, Parameters.nextLink],
  headerParameters: [Parameters.accept],
  serializer
};
const listAtManagementGroupScopeNextNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.DeploymentListResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.apiVersion, Parameters.filter, Parameters.top],
  urlParameters: [Parameters.$host, Parameters.nextLink, Parameters.groupId],
  headerParameters: [Parameters.accept],
  serializer
};
const listAtSubscriptionScopeNextNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.DeploymentListResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.apiVersion, Parameters.filter, Parameters.top],
  urlParameters: [
    Parameters.$host,
    Parameters.nextLink,
    Parameters.subscriptionId
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listByResourceGroupNextNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.DeploymentListResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.apiVersion, Parameters.filter, Parameters.top],
  urlParameters: [
    Parameters.$host,
    Parameters.nextLink,
    Parameters.subscriptionId,
    Parameters.resourceGroupName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
