import "@azure/core-paging";
import { PagedAsyncIterableIterator } from "@azure/core-paging";
import { DeploymentOperations } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { ResourceManagementClientContext } from "../resourceManagementClientContext";
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
  DeploymentOperationsListAtScopeNextNextOptionalParams,
  DeploymentOperationsListAtTenantScopeNextNextOptionalParams,
  DeploymentOperationsListAtManagementGroupScopeNextNextOptionalParams,
  DeploymentOperationsListAtSubscriptionScopeNextNextOptionalParams,
  DeploymentOperationsListNextNextOptionalParams,
  DeploymentOperationsGetAtScopeOptionalParams,
  DeploymentOperationsGetAtScopeResponse,
  DeploymentOperationsListAtScopeResponse,
  DeploymentOperationsGetAtTenantScopeOptionalParams,
  DeploymentOperationsGetAtTenantScopeResponse,
  DeploymentOperationsListAtTenantScopeResponse,
  DeploymentOperationsGetAtManagementGroupScopeOptionalParams,
  DeploymentOperationsGetAtManagementGroupScopeResponse,
  DeploymentOperationsListAtManagementGroupScopeResponse,
  DeploymentOperationsGetAtSubscriptionScopeOptionalParams,
  DeploymentOperationsGetAtSubscriptionScopeResponse,
  DeploymentOperationsListAtSubscriptionScopeResponse,
  DeploymentOperationsGetOptionalParams,
  DeploymentOperationsGetResponse,
  DeploymentOperationsListResponse,
  DeploymentOperationsListAtScopeNextResponse,
  DeploymentOperationsListAtTenantScopeNextResponse,
  DeploymentOperationsListAtManagementGroupScopeNextResponse,
  DeploymentOperationsListAtSubscriptionScopeNextResponse,
  DeploymentOperationsListNextResponse,
  DeploymentOperationsListAtScopeNextNextResponse,
  DeploymentOperationsListAtTenantScopeNextNextResponse,
  DeploymentOperationsListAtManagementGroupScopeNextNextResponse,
  DeploymentOperationsListAtSubscriptionScopeNextNextResponse,
  DeploymentOperationsListNextNextResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Class representing a DeploymentOperations. */
export class DeploymentOperationsImpl implements DeploymentOperations {
  private readonly client: ResourceManagementClientContext;

  /**
   * Initialize a new instance of the class DeploymentOperations class.
   * @param client Reference to the service client
   */
  constructor(client: ResourceManagementClientContext) {
    this.client = client;
  }

  /**
   * Gets all deployments operations for a deployment.
   * @param scope The resource scope.
   * @param deploymentName The name of the deployment.
   * @param options The options parameters.
   */
  public listAtScope(
    scope: string,
    deploymentName: string,
    options?: DeploymentOperationsListAtScopeOptionalParams
  ): PagedAsyncIterableIterator<DeploymentOperation> {
    const iter = this.listAtScopePagingAll(scope, deploymentName, options);
    return {
      next() {
        return iter.next();
      },
      [Symbol.asyncIterator]() {
        return this;
      },
      byPage: () => {
        return this.listAtScopePagingPage(scope, deploymentName, options);
      }
    };
  }

  private async *listAtScopePagingPage(
    scope: string,
    deploymentName: string,
    options?: DeploymentOperationsListAtScopeOptionalParams
  ): AsyncIterableIterator<DeploymentOperation[]> {
    let result = await this._listAtScope(scope, deploymentName, options);
    yield result.value || [];
    let continuationToken = result.nextLink;
    while (continuationToken) {
      result = await this._listAtScopeNext(
        scope,
        deploymentName,
        continuationToken,
        options
      );
      continuationToken = result.nextLink;
      yield result.value || [];
    }
  }

  private async *listAtScopePagingAll(
    scope: string,
    deploymentName: string,
    options?: DeploymentOperationsListAtScopeOptionalParams
  ): AsyncIterableIterator<DeploymentOperation> {
    for await (const page of this.listAtScopePagingPage(
      scope,
      deploymentName,
      options
    )) {
      yield* page;
    }
  }

  /**
   * Gets all deployments operations for a deployment.
   * @param deploymentName The name of the deployment.
   * @param options The options parameters.
   */
  public listAtTenantScope(
    deploymentName: string,
    options?: DeploymentOperationsListAtTenantScopeOptionalParams
  ): PagedAsyncIterableIterator<DeploymentOperation> {
    const iter = this.listAtTenantScopePagingAll(deploymentName, options);
    return {
      next() {
        return iter.next();
      },
      [Symbol.asyncIterator]() {
        return this;
      },
      byPage: () => {
        return this.listAtTenantScopePagingPage(deploymentName, options);
      }
    };
  }

  private async *listAtTenantScopePagingPage(
    deploymentName: string,
    options?: DeploymentOperationsListAtTenantScopeOptionalParams
  ): AsyncIterableIterator<DeploymentOperation[]> {
    let result = await this._listAtTenantScope(deploymentName, options);
    yield result.value || [];
    let continuationToken = result.nextLink;
    while (continuationToken) {
      result = await this._listAtTenantScopeNext(
        deploymentName,
        continuationToken,
        options
      );
      continuationToken = result.nextLink;
      yield result.value || [];
    }
  }

  private async *listAtTenantScopePagingAll(
    deploymentName: string,
    options?: DeploymentOperationsListAtTenantScopeOptionalParams
  ): AsyncIterableIterator<DeploymentOperation> {
    for await (const page of this.listAtTenantScopePagingPage(
      deploymentName,
      options
    )) {
      yield* page;
    }
  }

  /**
   * Gets all deployments operations for a deployment.
   * @param groupId The management group ID.
   * @param deploymentName The name of the deployment.
   * @param options The options parameters.
   */
  public listAtManagementGroupScope(
    groupId: string,
    deploymentName: string,
    options?: DeploymentOperationsListAtManagementGroupScopeOptionalParams
  ): PagedAsyncIterableIterator<DeploymentOperation> {
    const iter = this.listAtManagementGroupScopePagingAll(
      groupId,
      deploymentName,
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
        return this.listAtManagementGroupScopePagingPage(
          groupId,
          deploymentName,
          options
        );
      }
    };
  }

  private async *listAtManagementGroupScopePagingPage(
    groupId: string,
    deploymentName: string,
    options?: DeploymentOperationsListAtManagementGroupScopeOptionalParams
  ): AsyncIterableIterator<DeploymentOperation[]> {
    let result = await this._listAtManagementGroupScope(
      groupId,
      deploymentName,
      options
    );
    yield result.value || [];
    let continuationToken = result.nextLink;
    while (continuationToken) {
      result = await this._listAtManagementGroupScopeNext(
        groupId,
        deploymentName,
        continuationToken,
        options
      );
      continuationToken = result.nextLink;
      yield result.value || [];
    }
  }

  private async *listAtManagementGroupScopePagingAll(
    groupId: string,
    deploymentName: string,
    options?: DeploymentOperationsListAtManagementGroupScopeOptionalParams
  ): AsyncIterableIterator<DeploymentOperation> {
    for await (const page of this.listAtManagementGroupScopePagingPage(
      groupId,
      deploymentName,
      options
    )) {
      yield* page;
    }
  }

  /**
   * Gets all deployments operations for a deployment.
   * @param deploymentName The name of the deployment.
   * @param options The options parameters.
   */
  public listAtSubscriptionScope(
    deploymentName: string,
    options?: DeploymentOperationsListAtSubscriptionScopeOptionalParams
  ): PagedAsyncIterableIterator<DeploymentOperation> {
    const iter = this.listAtSubscriptionScopePagingAll(deploymentName, options);
    return {
      next() {
        return iter.next();
      },
      [Symbol.asyncIterator]() {
        return this;
      },
      byPage: () => {
        return this.listAtSubscriptionScopePagingPage(deploymentName, options);
      }
    };
  }

  private async *listAtSubscriptionScopePagingPage(
    deploymentName: string,
    options?: DeploymentOperationsListAtSubscriptionScopeOptionalParams
  ): AsyncIterableIterator<DeploymentOperation[]> {
    let result = await this._listAtSubscriptionScope(deploymentName, options);
    yield result.value || [];
    let continuationToken = result.nextLink;
    while (continuationToken) {
      result = await this._listAtSubscriptionScopeNext(
        deploymentName,
        continuationToken,
        options
      );
      continuationToken = result.nextLink;
      yield result.value || [];
    }
  }

  private async *listAtSubscriptionScopePagingAll(
    deploymentName: string,
    options?: DeploymentOperationsListAtSubscriptionScopeOptionalParams
  ): AsyncIterableIterator<DeploymentOperation> {
    for await (const page of this.listAtSubscriptionScopePagingPage(
      deploymentName,
      options
    )) {
      yield* page;
    }
  }

  /**
   * Gets all deployments operations for a deployment.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param deploymentName The name of the deployment.
   * @param options The options parameters.
   */
  public list(
    resourceGroupName: string,
    deploymentName: string,
    options?: DeploymentOperationsListOptionalParams
  ): PagedAsyncIterableIterator<DeploymentOperation> {
    const iter = this.listPagingAll(resourceGroupName, deploymentName, options);
    return {
      next() {
        return iter.next();
      },
      [Symbol.asyncIterator]() {
        return this;
      },
      byPage: () => {
        return this.listPagingPage(resourceGroupName, deploymentName, options);
      }
    };
  }

  private async *listPagingPage(
    resourceGroupName: string,
    deploymentName: string,
    options?: DeploymentOperationsListOptionalParams
  ): AsyncIterableIterator<DeploymentOperation[]> {
    let result = await this._list(resourceGroupName, deploymentName, options);
    yield result.value || [];
    let continuationToken = result.nextLink;
    while (continuationToken) {
      result = await this._listNext(
        resourceGroupName,
        deploymentName,
        continuationToken,
        options
      );
      continuationToken = result.nextLink;
      yield result.value || [];
    }
  }

  private async *listPagingAll(
    resourceGroupName: string,
    deploymentName: string,
    options?: DeploymentOperationsListOptionalParams
  ): AsyncIterableIterator<DeploymentOperation> {
    for await (const page of this.listPagingPage(
      resourceGroupName,
      deploymentName,
      options
    )) {
      yield* page;
    }
  }

  /**
   * ListAtScopeNext
   * @param scope The resource scope.
   * @param deploymentName The name of the deployment.
   * @param nextLink The nextLink from the previous successful call to the ListAtScope method.
   * @param options The options parameters.
   */
  public listAtScopeNext(
    scope: string,
    deploymentName: string,
    nextLink: string,
    options?: DeploymentOperationsListAtScopeNextOptionalParams
  ): PagedAsyncIterableIterator<DeploymentOperation> {
    const iter = this.listAtScopeNextPagingAll(
      scope,
      deploymentName,
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
        return this.listAtScopeNextPagingPage(
          scope,
          deploymentName,
          nextLink,
          options
        );
      }
    };
  }

  private async *listAtScopeNextPagingPage(
    scope: string,
    deploymentName: string,
    nextLink: string,
    options?: DeploymentOperationsListAtScopeNextOptionalParams
  ): AsyncIterableIterator<DeploymentOperation[]> {
    let result = await this._listAtScopeNext(
      scope,
      deploymentName,
      nextLink,
      options
    );
    yield result.value || [];
    let continuationToken = result.nextLink;
    while (continuationToken) {
      result = await this._listAtScopeNextNext(
        scope,
        deploymentName,
        continuationToken,
        options
      );
      continuationToken = result.nextLink;
      yield result.value || [];
    }
  }

  private async *listAtScopeNextPagingAll(
    scope: string,
    deploymentName: string,
    nextLink: string,
    options?: DeploymentOperationsListAtScopeNextOptionalParams
  ): AsyncIterableIterator<DeploymentOperation> {
    for await (const page of this.listAtScopeNextPagingPage(
      scope,
      deploymentName,
      nextLink,
      options
    )) {
      yield* page;
    }
  }

  /**
   * ListAtTenantScopeNext
   * @param deploymentName The name of the deployment.
   * @param nextLink The nextLink from the previous successful call to the ListAtTenantScope method.
   * @param options The options parameters.
   */
  public listAtTenantScopeNext(
    deploymentName: string,
    nextLink: string,
    options?: DeploymentOperationsListAtTenantScopeNextOptionalParams
  ): PagedAsyncIterableIterator<DeploymentOperation> {
    const iter = this.listAtTenantScopeNextPagingAll(
      deploymentName,
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
        return this.listAtTenantScopeNextPagingPage(
          deploymentName,
          nextLink,
          options
        );
      }
    };
  }

  private async *listAtTenantScopeNextPagingPage(
    deploymentName: string,
    nextLink: string,
    options?: DeploymentOperationsListAtTenantScopeNextOptionalParams
  ): AsyncIterableIterator<DeploymentOperation[]> {
    let result = await this._listAtTenantScopeNext(
      deploymentName,
      nextLink,
      options
    );
    yield result.value || [];
    let continuationToken = result.nextLink;
    while (continuationToken) {
      result = await this._listAtTenantScopeNextNext(
        deploymentName,
        continuationToken,
        options
      );
      continuationToken = result.nextLink;
      yield result.value || [];
    }
  }

  private async *listAtTenantScopeNextPagingAll(
    deploymentName: string,
    nextLink: string,
    options?: DeploymentOperationsListAtTenantScopeNextOptionalParams
  ): AsyncIterableIterator<DeploymentOperation> {
    for await (const page of this.listAtTenantScopeNextPagingPage(
      deploymentName,
      nextLink,
      options
    )) {
      yield* page;
    }
  }

  /**
   * ListAtManagementGroupScopeNext
   * @param groupId The management group ID.
   * @param deploymentName The name of the deployment.
   * @param nextLink The nextLink from the previous successful call to the ListAtManagementGroupScope
   *                 method.
   * @param options The options parameters.
   */
  public listAtManagementGroupScopeNext(
    groupId: string,
    deploymentName: string,
    nextLink: string,
    options?: DeploymentOperationsListAtManagementGroupScopeNextOptionalParams
  ): PagedAsyncIterableIterator<DeploymentOperation> {
    const iter = this.listAtManagementGroupScopeNextPagingAll(
      groupId,
      deploymentName,
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
          deploymentName,
          nextLink,
          options
        );
      }
    };
  }

  private async *listAtManagementGroupScopeNextPagingPage(
    groupId: string,
    deploymentName: string,
    nextLink: string,
    options?: DeploymentOperationsListAtManagementGroupScopeNextOptionalParams
  ): AsyncIterableIterator<DeploymentOperation[]> {
    let result = await this._listAtManagementGroupScopeNext(
      groupId,
      deploymentName,
      nextLink,
      options
    );
    yield result.value || [];
    let continuationToken = result.nextLink;
    while (continuationToken) {
      result = await this._listAtManagementGroupScopeNextNext(
        groupId,
        deploymentName,
        continuationToken,
        options
      );
      continuationToken = result.nextLink;
      yield result.value || [];
    }
  }

  private async *listAtManagementGroupScopeNextPagingAll(
    groupId: string,
    deploymentName: string,
    nextLink: string,
    options?: DeploymentOperationsListAtManagementGroupScopeNextOptionalParams
  ): AsyncIterableIterator<DeploymentOperation> {
    for await (const page of this.listAtManagementGroupScopeNextPagingPage(
      groupId,
      deploymentName,
      nextLink,
      options
    )) {
      yield* page;
    }
  }

  /**
   * ListAtSubscriptionScopeNext
   * @param deploymentName The name of the deployment.
   * @param nextLink The nextLink from the previous successful call to the ListAtSubscriptionScope
   *                 method.
   * @param options The options parameters.
   */
  public listAtSubscriptionScopeNext(
    deploymentName: string,
    nextLink: string,
    options?: DeploymentOperationsListAtSubscriptionScopeNextOptionalParams
  ): PagedAsyncIterableIterator<DeploymentOperation> {
    const iter = this.listAtSubscriptionScopeNextPagingAll(
      deploymentName,
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
        return this.listAtSubscriptionScopeNextPagingPage(
          deploymentName,
          nextLink,
          options
        );
      }
    };
  }

  private async *listAtSubscriptionScopeNextPagingPage(
    deploymentName: string,
    nextLink: string,
    options?: DeploymentOperationsListAtSubscriptionScopeNextOptionalParams
  ): AsyncIterableIterator<DeploymentOperation[]> {
    let result = await this._listAtSubscriptionScopeNext(
      deploymentName,
      nextLink,
      options
    );
    yield result.value || [];
    let continuationToken = result.nextLink;
    while (continuationToken) {
      result = await this._listAtSubscriptionScopeNextNext(
        deploymentName,
        continuationToken,
        options
      );
      continuationToken = result.nextLink;
      yield result.value || [];
    }
  }

  private async *listAtSubscriptionScopeNextPagingAll(
    deploymentName: string,
    nextLink: string,
    options?: DeploymentOperationsListAtSubscriptionScopeNextOptionalParams
  ): AsyncIterableIterator<DeploymentOperation> {
    for await (const page of this.listAtSubscriptionScopeNextPagingPage(
      deploymentName,
      nextLink,
      options
    )) {
      yield* page;
    }
  }

  /**
   * ListNext
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param deploymentName The name of the deployment.
   * @param nextLink The nextLink from the previous successful call to the List method.
   * @param options The options parameters.
   */
  public listNext(
    resourceGroupName: string,
    deploymentName: string,
    nextLink: string,
    options?: DeploymentOperationsListNextOptionalParams
  ): PagedAsyncIterableIterator<DeploymentOperation> {
    const iter = this.listNextPagingAll(
      resourceGroupName,
      deploymentName,
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
        return this.listNextPagingPage(
          resourceGroupName,
          deploymentName,
          nextLink,
          options
        );
      }
    };
  }

  private async *listNextPagingPage(
    resourceGroupName: string,
    deploymentName: string,
    nextLink: string,
    options?: DeploymentOperationsListNextOptionalParams
  ): AsyncIterableIterator<DeploymentOperation[]> {
    let result = await this._listNext(
      resourceGroupName,
      deploymentName,
      nextLink,
      options
    );
    yield result.value || [];
    let continuationToken = result.nextLink;
    while (continuationToken) {
      result = await this._listNextNext(
        resourceGroupName,
        deploymentName,
        continuationToken,
        options
      );
      continuationToken = result.nextLink;
      yield result.value || [];
    }
  }

  private async *listNextPagingAll(
    resourceGroupName: string,
    deploymentName: string,
    nextLink: string,
    options?: DeploymentOperationsListNextOptionalParams
  ): AsyncIterableIterator<DeploymentOperation> {
    for await (const page of this.listNextPagingPage(
      resourceGroupName,
      deploymentName,
      nextLink,
      options
    )) {
      yield* page;
    }
  }

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
  ): Promise<DeploymentOperationsGetAtScopeResponse> {
    return this.client.sendOperationRequest(
      { scope, deploymentName, operationId, options },
      getAtScopeOperationSpec
    );
  }

  /**
   * Gets all deployments operations for a deployment.
   * @param scope The resource scope.
   * @param deploymentName The name of the deployment.
   * @param options The options parameters.
   */
  private _listAtScope(
    scope: string,
    deploymentName: string,
    options?: DeploymentOperationsListAtScopeOptionalParams
  ): Promise<DeploymentOperationsListAtScopeResponse> {
    return this.client.sendOperationRequest(
      { scope, deploymentName, options },
      listAtScopeOperationSpec
    );
  }

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
  ): Promise<DeploymentOperationsGetAtTenantScopeResponse> {
    return this.client.sendOperationRequest(
      { deploymentName, operationId, options },
      getAtTenantScopeOperationSpec
    );
  }

  /**
   * Gets all deployments operations for a deployment.
   * @param deploymentName The name of the deployment.
   * @param options The options parameters.
   */
  private _listAtTenantScope(
    deploymentName: string,
    options?: DeploymentOperationsListAtTenantScopeOptionalParams
  ): Promise<DeploymentOperationsListAtTenantScopeResponse> {
    return this.client.sendOperationRequest(
      { deploymentName, options },
      listAtTenantScopeOperationSpec
    );
  }

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
  ): Promise<DeploymentOperationsGetAtManagementGroupScopeResponse> {
    return this.client.sendOperationRequest(
      { groupId, deploymentName, operationId, options },
      getAtManagementGroupScopeOperationSpec
    );
  }

  /**
   * Gets all deployments operations for a deployment.
   * @param groupId The management group ID.
   * @param deploymentName The name of the deployment.
   * @param options The options parameters.
   */
  private _listAtManagementGroupScope(
    groupId: string,
    deploymentName: string,
    options?: DeploymentOperationsListAtManagementGroupScopeOptionalParams
  ): Promise<DeploymentOperationsListAtManagementGroupScopeResponse> {
    return this.client.sendOperationRequest(
      { groupId, deploymentName, options },
      listAtManagementGroupScopeOperationSpec
    );
  }

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
  ): Promise<DeploymentOperationsGetAtSubscriptionScopeResponse> {
    return this.client.sendOperationRequest(
      { deploymentName, operationId, options },
      getAtSubscriptionScopeOperationSpec
    );
  }

  /**
   * Gets all deployments operations for a deployment.
   * @param deploymentName The name of the deployment.
   * @param options The options parameters.
   */
  private _listAtSubscriptionScope(
    deploymentName: string,
    options?: DeploymentOperationsListAtSubscriptionScopeOptionalParams
  ): Promise<DeploymentOperationsListAtSubscriptionScopeResponse> {
    return this.client.sendOperationRequest(
      { deploymentName, options },
      listAtSubscriptionScopeOperationSpec
    );
  }

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
  ): Promise<DeploymentOperationsGetResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, deploymentName, operationId, options },
      getOperationSpec
    );
  }

  /**
   * Gets all deployments operations for a deployment.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param deploymentName The name of the deployment.
   * @param options The options parameters.
   */
  private _list(
    resourceGroupName: string,
    deploymentName: string,
    options?: DeploymentOperationsListOptionalParams
  ): Promise<DeploymentOperationsListResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, deploymentName, options },
      listOperationSpec
    );
  }

  /**
   * ListAtScopeNext
   * @param scope The resource scope.
   * @param deploymentName The name of the deployment.
   * @param nextLink The nextLink from the previous successful call to the ListAtScope method.
   * @param options The options parameters.
   */
  private _listAtScopeNext(
    scope: string,
    deploymentName: string,
    nextLink: string,
    options?: DeploymentOperationsListAtScopeNextOptionalParams
  ): Promise<DeploymentOperationsListAtScopeNextResponse> {
    return this.client.sendOperationRequest(
      { scope, deploymentName, nextLink, options },
      listAtScopeNextOperationSpec
    );
  }

  /**
   * ListAtTenantScopeNext
   * @param deploymentName The name of the deployment.
   * @param nextLink The nextLink from the previous successful call to the ListAtTenantScope method.
   * @param options The options parameters.
   */
  private _listAtTenantScopeNext(
    deploymentName: string,
    nextLink: string,
    options?: DeploymentOperationsListAtTenantScopeNextOptionalParams
  ): Promise<DeploymentOperationsListAtTenantScopeNextResponse> {
    return this.client.sendOperationRequest(
      { deploymentName, nextLink, options },
      listAtTenantScopeNextOperationSpec
    );
  }

  /**
   * ListAtManagementGroupScopeNext
   * @param groupId The management group ID.
   * @param deploymentName The name of the deployment.
   * @param nextLink The nextLink from the previous successful call to the ListAtManagementGroupScope
   *                 method.
   * @param options The options parameters.
   */
  private _listAtManagementGroupScopeNext(
    groupId: string,
    deploymentName: string,
    nextLink: string,
    options?: DeploymentOperationsListAtManagementGroupScopeNextOptionalParams
  ): Promise<DeploymentOperationsListAtManagementGroupScopeNextResponse> {
    return this.client.sendOperationRequest(
      { groupId, deploymentName, nextLink, options },
      listAtManagementGroupScopeNextOperationSpec
    );
  }

  /**
   * ListAtSubscriptionScopeNext
   * @param deploymentName The name of the deployment.
   * @param nextLink The nextLink from the previous successful call to the ListAtSubscriptionScope
   *                 method.
   * @param options The options parameters.
   */
  private _listAtSubscriptionScopeNext(
    deploymentName: string,
    nextLink: string,
    options?: DeploymentOperationsListAtSubscriptionScopeNextOptionalParams
  ): Promise<DeploymentOperationsListAtSubscriptionScopeNextResponse> {
    return this.client.sendOperationRequest(
      { deploymentName, nextLink, options },
      listAtSubscriptionScopeNextOperationSpec
    );
  }

  /**
   * ListNext
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param deploymentName The name of the deployment.
   * @param nextLink The nextLink from the previous successful call to the List method.
   * @param options The options parameters.
   */
  private _listNext(
    resourceGroupName: string,
    deploymentName: string,
    nextLink: string,
    options?: DeploymentOperationsListNextOptionalParams
  ): Promise<DeploymentOperationsListNextResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, deploymentName, nextLink, options },
      listNextOperationSpec
    );
  }

  /**
   * ListAtScopeNextNext
   * @param scope The resource scope.
   * @param deploymentName The name of the deployment.
   * @param nextLink The nextLink from the previous successful call to the ListAtScopeNext method.
   * @param options The options parameters.
   */
  private _listAtScopeNextNext(
    scope: string,
    deploymentName: string,
    nextLink: string,
    options?: DeploymentOperationsListAtScopeNextNextOptionalParams
  ): Promise<DeploymentOperationsListAtScopeNextNextResponse> {
    return this.client.sendOperationRequest(
      { scope, deploymentName, nextLink, options },
      listAtScopeNextNextOperationSpec
    );
  }

  /**
   * ListAtTenantScopeNextNext
   * @param deploymentName The name of the deployment.
   * @param nextLink The nextLink from the previous successful call to the ListAtTenantScopeNext method.
   * @param options The options parameters.
   */
  private _listAtTenantScopeNextNext(
    deploymentName: string,
    nextLink: string,
    options?: DeploymentOperationsListAtTenantScopeNextNextOptionalParams
  ): Promise<DeploymentOperationsListAtTenantScopeNextNextResponse> {
    return this.client.sendOperationRequest(
      { deploymentName, nextLink, options },
      listAtTenantScopeNextNextOperationSpec
    );
  }

  /**
   * ListAtManagementGroupScopeNextNext
   * @param groupId The management group ID.
   * @param deploymentName The name of the deployment.
   * @param nextLink The nextLink from the previous successful call to the ListAtManagementGroupScopeNext
   *                 method.
   * @param options The options parameters.
   */
  private _listAtManagementGroupScopeNextNext(
    groupId: string,
    deploymentName: string,
    nextLink: string,
    options?: DeploymentOperationsListAtManagementGroupScopeNextNextOptionalParams
  ): Promise<DeploymentOperationsListAtManagementGroupScopeNextNextResponse> {
    return this.client.sendOperationRequest(
      { groupId, deploymentName, nextLink, options },
      listAtManagementGroupScopeNextNextOperationSpec
    );
  }

  /**
   * ListAtSubscriptionScopeNextNext
   * @param deploymentName The name of the deployment.
   * @param nextLink The nextLink from the previous successful call to the ListAtSubscriptionScopeNext
   *                 method.
   * @param options The options parameters.
   */
  private _listAtSubscriptionScopeNextNext(
    deploymentName: string,
    nextLink: string,
    options?: DeploymentOperationsListAtSubscriptionScopeNextNextOptionalParams
  ): Promise<DeploymentOperationsListAtSubscriptionScopeNextNextResponse> {
    return this.client.sendOperationRequest(
      { deploymentName, nextLink, options },
      listAtSubscriptionScopeNextNextOperationSpec
    );
  }

  /**
   * ListNextNext
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param deploymentName The name of the deployment.
   * @param nextLink The nextLink from the previous successful call to the ListNext method.
   * @param options The options parameters.
   */
  private _listNextNext(
    resourceGroupName: string,
    deploymentName: string,
    nextLink: string,
    options?: DeploymentOperationsListNextNextOptionalParams
  ): Promise<DeploymentOperationsListNextNextResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, deploymentName, nextLink, options },
      listNextNextOperationSpec
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const getAtScopeOperationSpec: coreClient.OperationSpec = {
  path:
    "/{scope}/providers/Microsoft.Resources/deployments/{deploymentName}/operations/{operationId}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.DeploymentOperation
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.scope,
    Parameters.deploymentName,
    Parameters.operationId
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listAtScopeOperationSpec: coreClient.OperationSpec = {
  path:
    "/{scope}/providers/Microsoft.Resources/deployments/{deploymentName}/operations",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.DeploymentOperationsListResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.apiVersion, Parameters.top],
  urlParameters: [
    Parameters.$host,
    Parameters.scope,
    Parameters.deploymentName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const getAtTenantScopeOperationSpec: coreClient.OperationSpec = {
  path:
    "/providers/Microsoft.Resources/deployments/{deploymentName}/operations/{operationId}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.DeploymentOperation
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.deploymentName,
    Parameters.operationId
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listAtTenantScopeOperationSpec: coreClient.OperationSpec = {
  path:
    "/providers/Microsoft.Resources/deployments/{deploymentName}/operations",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.DeploymentOperationsListResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.apiVersion, Parameters.top],
  urlParameters: [Parameters.$host, Parameters.deploymentName],
  headerParameters: [Parameters.accept],
  serializer
};
const getAtManagementGroupScopeOperationSpec: coreClient.OperationSpec = {
  path:
    "/providers/Microsoft.Management/managementGroups/{groupId}/providers/Microsoft.Resources/deployments/{deploymentName}/operations/{operationId}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.DeploymentOperation
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.deploymentName,
    Parameters.groupId,
    Parameters.operationId
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listAtManagementGroupScopeOperationSpec: coreClient.OperationSpec = {
  path:
    "/providers/Microsoft.Management/managementGroups/{groupId}/providers/Microsoft.Resources/deployments/{deploymentName}/operations",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.DeploymentOperationsListResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.apiVersion, Parameters.top],
  urlParameters: [
    Parameters.$host,
    Parameters.deploymentName,
    Parameters.groupId
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const getAtSubscriptionScopeOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/providers/Microsoft.Resources/deployments/{deploymentName}/operations/{operationId}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.DeploymentOperation
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
    Parameters.operationId
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listAtSubscriptionScopeOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/providers/Microsoft.Resources/deployments/{deploymentName}/operations",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.DeploymentOperationsListResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.apiVersion, Parameters.top],
  urlParameters: [
    Parameters.$host,
    Parameters.deploymentName,
    Parameters.subscriptionId
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const getOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}/deployments/{deploymentName}/operations/{operationId}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.DeploymentOperation
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
    Parameters.resourceGroupName,
    Parameters.operationId
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}/deployments/{deploymentName}/operations",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.DeploymentOperationsListResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.apiVersion, Parameters.top],
  urlParameters: [
    Parameters.$host,
    Parameters.deploymentName,
    Parameters.subscriptionId,
    Parameters.resourceGroupName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listAtScopeNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.DeploymentOperationsListResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.apiVersion, Parameters.top],
  urlParameters: [
    Parameters.$host,
    Parameters.nextLink,
    Parameters.scope,
    Parameters.deploymentName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listAtTenantScopeNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.DeploymentOperationsListResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.apiVersion, Parameters.top],
  urlParameters: [
    Parameters.$host,
    Parameters.nextLink,
    Parameters.deploymentName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listAtManagementGroupScopeNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.DeploymentOperationsListResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.apiVersion, Parameters.top],
  urlParameters: [
    Parameters.$host,
    Parameters.nextLink,
    Parameters.deploymentName,
    Parameters.groupId
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listAtSubscriptionScopeNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.DeploymentOperationsListResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.apiVersion, Parameters.top],
  urlParameters: [
    Parameters.$host,
    Parameters.nextLink,
    Parameters.deploymentName,
    Parameters.subscriptionId
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.DeploymentOperationsListResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.apiVersion, Parameters.top],
  urlParameters: [
    Parameters.$host,
    Parameters.nextLink,
    Parameters.deploymentName,
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
      bodyMapper: Mappers.DeploymentOperationsListResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.apiVersion, Parameters.top],
  urlParameters: [
    Parameters.$host,
    Parameters.nextLink,
    Parameters.scope,
    Parameters.deploymentName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listAtTenantScopeNextNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.DeploymentOperationsListResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.apiVersion, Parameters.top],
  urlParameters: [
    Parameters.$host,
    Parameters.nextLink,
    Parameters.deploymentName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listAtManagementGroupScopeNextNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.DeploymentOperationsListResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.apiVersion, Parameters.top],
  urlParameters: [
    Parameters.$host,
    Parameters.nextLink,
    Parameters.deploymentName,
    Parameters.groupId
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listAtSubscriptionScopeNextNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.DeploymentOperationsListResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.apiVersion, Parameters.top],
  urlParameters: [
    Parameters.$host,
    Parameters.nextLink,
    Parameters.deploymentName,
    Parameters.subscriptionId
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listNextNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.DeploymentOperationsListResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.apiVersion, Parameters.top],
  urlParameters: [
    Parameters.$host,
    Parameters.nextLink,
    Parameters.deploymentName,
    Parameters.subscriptionId,
    Parameters.resourceGroupName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
