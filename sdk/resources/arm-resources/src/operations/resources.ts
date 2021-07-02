import "@azure/core-paging";
import { PagedAsyncIterableIterator } from "@azure/core-paging";
import { Resources } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { ResourceManagementClientContext } from "../resourceManagementClientContext";
import { LROPoller, shouldDeserializeLRO } from "../lro";
import { PollerLike, PollOperationState } from "@azure/core-lro";
import {
  GenericResourceExpanded,
  ResourcesListByResourceGroupNextOptionalParams,
  ResourcesListByResourceGroupOptionalParams,
  ResourcesListNextOptionalParams,
  ResourcesListOptionalParams,
  ResourcesListByResourceGroupNextNextOptionalParams,
  ResourcesListNextNextOptionalParams,
  ResourcesListByResourceGroupResponse,
  ResourcesMoveInfo,
  ResourcesMoveResourcesOptionalParams,
  ResourcesValidateMoveResourcesOptionalParams,
  ResourcesListResponse,
  ResourcesCheckExistenceOptionalParams,
  ResourcesDeleteOptionalParams,
  GenericResource,
  ResourcesCreateOrUpdateOptionalParams,
  ResourcesCreateOrUpdateResponse,
  ResourcesUpdateOptionalParams,
  ResourcesUpdateResponse,
  ResourcesGetOptionalParams,
  ResourcesGetResponse,
  ResourcesCheckExistenceByIdOptionalParams,
  ResourcesDeleteByIdOptionalParams,
  ResourcesCreateOrUpdateByIdOptionalParams,
  ResourcesCreateOrUpdateByIdResponse,
  ResourcesUpdateByIdOptionalParams,
  ResourcesUpdateByIdResponse,
  ResourcesGetByIdOptionalParams,
  ResourcesGetByIdResponse,
  ResourcesListByResourceGroupNextResponse,
  ResourcesListNextResponse,
  ResourcesListByResourceGroupNextNextResponse,
  ResourcesListNextNextResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Class representing a Resources. */
export class ResourcesImpl implements Resources {
  private readonly client: ResourceManagementClientContext;

  /**
   * Initialize a new instance of the class Resources class.
   * @param client Reference to the service client
   */
  constructor(client: ResourceManagementClientContext) {
    this.client = client;
  }

  /**
   * Get all the resources for a resource group.
   * @param resourceGroupName The resource group with the resources to get.
   * @param options The options parameters.
   */
  public listByResourceGroup(
    resourceGroupName: string,
    options?: ResourcesListByResourceGroupOptionalParams
  ): PagedAsyncIterableIterator<GenericResourceExpanded> {
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
    options?: ResourcesListByResourceGroupOptionalParams
  ): AsyncIterableIterator<GenericResourceExpanded[]> {
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
    options?: ResourcesListByResourceGroupOptionalParams
  ): AsyncIterableIterator<GenericResourceExpanded> {
    for await (const page of this.listByResourceGroupPagingPage(
      resourceGroupName,
      options
    )) {
      yield* page;
    }
  }

  /**
   * Get all the resources in a subscription.
   * @param options The options parameters.
   */
  public list(
    options?: ResourcesListOptionalParams
  ): PagedAsyncIterableIterator<GenericResourceExpanded> {
    const iter = this.listPagingAll(options);
    return {
      next() {
        return iter.next();
      },
      [Symbol.asyncIterator]() {
        return this;
      },
      byPage: () => {
        return this.listPagingPage(options);
      }
    };
  }

  private async *listPagingPage(
    options?: ResourcesListOptionalParams
  ): AsyncIterableIterator<GenericResourceExpanded[]> {
    let result = await this._list(options);
    yield result.value || [];
    let continuationToken = result.nextLink;
    while (continuationToken) {
      result = await this._listNext(continuationToken, options);
      continuationToken = result.nextLink;
      yield result.value || [];
    }
  }

  private async *listPagingAll(
    options?: ResourcesListOptionalParams
  ): AsyncIterableIterator<GenericResourceExpanded> {
    for await (const page of this.listPagingPage(options)) {
      yield* page;
    }
  }

  /**
   * ListByResourceGroupNext
   * @param resourceGroupName The resource group with the resources to get.
   * @param nextLink The nextLink from the previous successful call to the ListByResourceGroup method.
   * @param options The options parameters.
   */
  public listByResourceGroupNext(
    resourceGroupName: string,
    nextLink: string,
    options?: ResourcesListByResourceGroupNextOptionalParams
  ): PagedAsyncIterableIterator<GenericResourceExpanded> {
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
    options?: ResourcesListByResourceGroupNextOptionalParams
  ): AsyncIterableIterator<GenericResourceExpanded[]> {
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
    options?: ResourcesListByResourceGroupNextOptionalParams
  ): AsyncIterableIterator<GenericResourceExpanded> {
    for await (const page of this.listByResourceGroupNextPagingPage(
      resourceGroupName,
      nextLink,
      options
    )) {
      yield* page;
    }
  }

  /**
   * ListNext
   * @param nextLink The nextLink from the previous successful call to the List method.
   * @param options The options parameters.
   */
  public listNext(
    nextLink: string,
    options?: ResourcesListNextOptionalParams
  ): PagedAsyncIterableIterator<GenericResourceExpanded> {
    const iter = this.listNextPagingAll(nextLink, options);
    return {
      next() {
        return iter.next();
      },
      [Symbol.asyncIterator]() {
        return this;
      },
      byPage: () => {
        return this.listNextPagingPage(nextLink, options);
      }
    };
  }

  private async *listNextPagingPage(
    nextLink: string,
    options?: ResourcesListNextOptionalParams
  ): AsyncIterableIterator<GenericResourceExpanded[]> {
    let result = await this._listNext(nextLink, options);
    yield result.value || [];
    let continuationToken = result.nextLink;
    while (continuationToken) {
      result = await this._listNextNext(continuationToken, options);
      continuationToken = result.nextLink;
      yield result.value || [];
    }
  }

  private async *listNextPagingAll(
    nextLink: string,
    options?: ResourcesListNextOptionalParams
  ): AsyncIterableIterator<GenericResourceExpanded> {
    for await (const page of this.listNextPagingPage(nextLink, options)) {
      yield* page;
    }
  }

  /**
   * Get all the resources for a resource group.
   * @param resourceGroupName The resource group with the resources to get.
   * @param options The options parameters.
   */
  private _listByResourceGroup(
    resourceGroupName: string,
    options?: ResourcesListByResourceGroupOptionalParams
  ): Promise<ResourcesListByResourceGroupResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, options },
      listByResourceGroupOperationSpec
    );
  }

  /**
   * The resources to be moved must be in the same source resource group in the source subscription being
   * used. The target resource group may be in a different subscription. When moving resources, both the
   * source group and the target group are locked for the duration of the operation. Write and delete
   * operations are blocked on the groups until the move completes.
   * @param sourceResourceGroupName The name of the resource group from the source subscription
   *                                containing the resources to be moved.
   * @param parameters Parameters for moving resources.
   * @param options The options parameters.
   */
  async beginMoveResources(
    sourceResourceGroupName: string,
    parameters: ResourcesMoveInfo,
    options?: ResourcesMoveResourcesOptionalParams
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
      { sourceResourceGroupName, parameters, options },
      moveResourcesOperationSpec,
      sendOperation
    );
  }

  /**
   * The resources to be moved must be in the same source resource group in the source subscription being
   * used. The target resource group may be in a different subscription. When moving resources, both the
   * source group and the target group are locked for the duration of the operation. Write and delete
   * operations are blocked on the groups until the move completes.
   * @param sourceResourceGroupName The name of the resource group from the source subscription
   *                                containing the resources to be moved.
   * @param parameters Parameters for moving resources.
   * @param options The options parameters.
   */
  async beginMoveResourcesAndWait(
    sourceResourceGroupName: string,
    parameters: ResourcesMoveInfo,
    options?: ResourcesMoveResourcesOptionalParams
  ): Promise<void> {
    const poller = await this.beginMoveResources(
      sourceResourceGroupName,
      parameters,
      options
    );
    return poller.pollUntilDone();
  }

  /**
   * This operation checks whether the specified resources can be moved to the target. The resources to
   * be moved must be in the same source resource group in the source subscription being used. The target
   * resource group may be in a different subscription. If validation succeeds, it returns HTTP response
   * code 204 (no content). If validation fails, it returns HTTP response code 409 (Conflict) with an
   * error message. Retrieve the URL in the Location header value to check the result of the long-running
   * operation.
   * @param sourceResourceGroupName The name of the resource group from the source subscription
   *                                containing the resources to be validated for move.
   * @param parameters Parameters for moving resources.
   * @param options The options parameters.
   */
  async beginValidateMoveResources(
    sourceResourceGroupName: string,
    parameters: ResourcesMoveInfo,
    options?: ResourcesValidateMoveResourcesOptionalParams
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
      { sourceResourceGroupName, parameters, options },
      validateMoveResourcesOperationSpec,
      sendOperation
    );
  }

  /**
   * This operation checks whether the specified resources can be moved to the target. The resources to
   * be moved must be in the same source resource group in the source subscription being used. The target
   * resource group may be in a different subscription. If validation succeeds, it returns HTTP response
   * code 204 (no content). If validation fails, it returns HTTP response code 409 (Conflict) with an
   * error message. Retrieve the URL in the Location header value to check the result of the long-running
   * operation.
   * @param sourceResourceGroupName The name of the resource group from the source subscription
   *                                containing the resources to be validated for move.
   * @param parameters Parameters for moving resources.
   * @param options The options parameters.
   */
  async beginValidateMoveResourcesAndWait(
    sourceResourceGroupName: string,
    parameters: ResourcesMoveInfo,
    options?: ResourcesValidateMoveResourcesOptionalParams
  ): Promise<void> {
    const poller = await this.beginValidateMoveResources(
      sourceResourceGroupName,
      parameters,
      options
    );
    return poller.pollUntilDone();
  }

  /**
   * Get all the resources in a subscription.
   * @param options The options parameters.
   */
  private _list(
    options?: ResourcesListOptionalParams
  ): Promise<ResourcesListResponse> {
    return this.client.sendOperationRequest({ options }, listOperationSpec);
  }

  /**
   * Checks whether a resource exists.
   * @param resourceGroupName The name of the resource group containing the resource to check. The name
   *                          is case insensitive.
   * @param resourceProviderNamespace The resource provider of the resource to check.
   * @param parentResourcePath The parent resource identity.
   * @param resourceType The resource type.
   * @param resourceName The name of the resource to check whether it exists.
   * @param apiVersion The API version to use for the operation.
   * @param options The options parameters.
   */
  checkExistence(
    resourceGroupName: string,
    resourceProviderNamespace: string,
    parentResourcePath: string,
    resourceType: string,
    resourceName: string,
    apiVersion: string,
    options?: ResourcesCheckExistenceOptionalParams
  ): Promise<void> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        resourceProviderNamespace,
        parentResourcePath,
        resourceType,
        resourceName,
        apiVersion,
        options
      },
      checkExistenceOperationSpec
    );
  }

  /**
   * Deletes a resource.
   * @param resourceGroupName The name of the resource group that contains the resource to delete. The
   *                          name is case insensitive.
   * @param resourceProviderNamespace The namespace of the resource provider.
   * @param parentResourcePath The parent resource identity.
   * @param resourceType The resource type.
   * @param resourceName The name of the resource to delete.
   * @param apiVersion The API version to use for the operation.
   * @param options The options parameters.
   */
  async beginDelete(
    resourceGroupName: string,
    resourceProviderNamespace: string,
    parentResourcePath: string,
    resourceType: string,
    resourceName: string,
    apiVersion: string,
    options?: ResourcesDeleteOptionalParams
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
      {
        resourceGroupName,
        resourceProviderNamespace,
        parentResourcePath,
        resourceType,
        resourceName,
        apiVersion,
        options
      },
      deleteOperationSpec,
      sendOperation
    );
  }

  /**
   * Deletes a resource.
   * @param resourceGroupName The name of the resource group that contains the resource to delete. The
   *                          name is case insensitive.
   * @param resourceProviderNamespace The namespace of the resource provider.
   * @param parentResourcePath The parent resource identity.
   * @param resourceType The resource type.
   * @param resourceName The name of the resource to delete.
   * @param apiVersion The API version to use for the operation.
   * @param options The options parameters.
   */
  async beginDeleteAndWait(
    resourceGroupName: string,
    resourceProviderNamespace: string,
    parentResourcePath: string,
    resourceType: string,
    resourceName: string,
    apiVersion: string,
    options?: ResourcesDeleteOptionalParams
  ): Promise<void> {
    const poller = await this.beginDelete(
      resourceGroupName,
      resourceProviderNamespace,
      parentResourcePath,
      resourceType,
      resourceName,
      apiVersion,
      options
    );
    return poller.pollUntilDone();
  }

  /**
   * Creates a resource.
   * @param resourceGroupName The name of the resource group for the resource. The name is case
   *                          insensitive.
   * @param resourceProviderNamespace The namespace of the resource provider.
   * @param parentResourcePath The parent resource identity.
   * @param resourceType The resource type of the resource to create.
   * @param resourceName The name of the resource to create.
   * @param apiVersion The API version to use for the operation.
   * @param parameters Parameters for creating or updating the resource.
   * @param options The options parameters.
   */
  async beginCreateOrUpdate(
    resourceGroupName: string,
    resourceProviderNamespace: string,
    parentResourcePath: string,
    resourceType: string,
    resourceName: string,
    apiVersion: string,
    parameters: GenericResource,
    options?: ResourcesCreateOrUpdateOptionalParams
  ): Promise<
    PollerLike<
      PollOperationState<ResourcesCreateOrUpdateResponse>,
      ResourcesCreateOrUpdateResponse
    >
  > {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ): Promise<ResourcesCreateOrUpdateResponse> => {
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
      {
        resourceGroupName,
        resourceProviderNamespace,
        parentResourcePath,
        resourceType,
        resourceName,
        apiVersion,
        parameters,
        options
      },
      createOrUpdateOperationSpec,
      sendOperation
    );
  }

  /**
   * Creates a resource.
   * @param resourceGroupName The name of the resource group for the resource. The name is case
   *                          insensitive.
   * @param resourceProviderNamespace The namespace of the resource provider.
   * @param parentResourcePath The parent resource identity.
   * @param resourceType The resource type of the resource to create.
   * @param resourceName The name of the resource to create.
   * @param apiVersion The API version to use for the operation.
   * @param parameters Parameters for creating or updating the resource.
   * @param options The options parameters.
   */
  async beginCreateOrUpdateAndWait(
    resourceGroupName: string,
    resourceProviderNamespace: string,
    parentResourcePath: string,
    resourceType: string,
    resourceName: string,
    apiVersion: string,
    parameters: GenericResource,
    options?: ResourcesCreateOrUpdateOptionalParams
  ): Promise<ResourcesCreateOrUpdateResponse> {
    const poller = await this.beginCreateOrUpdate(
      resourceGroupName,
      resourceProviderNamespace,
      parentResourcePath,
      resourceType,
      resourceName,
      apiVersion,
      parameters,
      options
    );
    return poller.pollUntilDone();
  }

  /**
   * Updates a resource.
   * @param resourceGroupName The name of the resource group for the resource. The name is case
   *                          insensitive.
   * @param resourceProviderNamespace The namespace of the resource provider.
   * @param parentResourcePath The parent resource identity.
   * @param resourceType The resource type of the resource to update.
   * @param resourceName The name of the resource to update.
   * @param apiVersion The API version to use for the operation.
   * @param parameters Parameters for updating the resource.
   * @param options The options parameters.
   */
  async beginUpdate(
    resourceGroupName: string,
    resourceProviderNamespace: string,
    parentResourcePath: string,
    resourceType: string,
    resourceName: string,
    apiVersion: string,
    parameters: GenericResource,
    options?: ResourcesUpdateOptionalParams
  ): Promise<
    PollerLike<
      PollOperationState<ResourcesUpdateResponse>,
      ResourcesUpdateResponse
    >
  > {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ): Promise<ResourcesUpdateResponse> => {
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
      {
        resourceGroupName,
        resourceProviderNamespace,
        parentResourcePath,
        resourceType,
        resourceName,
        apiVersion,
        parameters,
        options
      },
      updateOperationSpec,
      sendOperation
    );
  }

  /**
   * Updates a resource.
   * @param resourceGroupName The name of the resource group for the resource. The name is case
   *                          insensitive.
   * @param resourceProviderNamespace The namespace of the resource provider.
   * @param parentResourcePath The parent resource identity.
   * @param resourceType The resource type of the resource to update.
   * @param resourceName The name of the resource to update.
   * @param apiVersion The API version to use for the operation.
   * @param parameters Parameters for updating the resource.
   * @param options The options parameters.
   */
  async beginUpdateAndWait(
    resourceGroupName: string,
    resourceProviderNamespace: string,
    parentResourcePath: string,
    resourceType: string,
    resourceName: string,
    apiVersion: string,
    parameters: GenericResource,
    options?: ResourcesUpdateOptionalParams
  ): Promise<ResourcesUpdateResponse> {
    const poller = await this.beginUpdate(
      resourceGroupName,
      resourceProviderNamespace,
      parentResourcePath,
      resourceType,
      resourceName,
      apiVersion,
      parameters,
      options
    );
    return poller.pollUntilDone();
  }

  /**
   * Gets a resource.
   * @param resourceGroupName The name of the resource group containing the resource to get. The name is
   *                          case insensitive.
   * @param resourceProviderNamespace The namespace of the resource provider.
   * @param parentResourcePath The parent resource identity.
   * @param resourceType The resource type of the resource.
   * @param resourceName The name of the resource to get.
   * @param apiVersion The API version to use for the operation.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    resourceProviderNamespace: string,
    parentResourcePath: string,
    resourceType: string,
    resourceName: string,
    apiVersion: string,
    options?: ResourcesGetOptionalParams
  ): Promise<ResourcesGetResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        resourceProviderNamespace,
        parentResourcePath,
        resourceType,
        resourceName,
        apiVersion,
        options
      },
      getOperationSpec
    );
  }

  /**
   * Checks by ID whether a resource exists.
   * @param resourceId The fully qualified ID of the resource, including the resource name and resource
   *                   type. Use the format,
   *                   /subscriptions/{guid}/resourceGroups/{resource-group-name}/{resource-provider-namespace}/{resource-type}/{resource-name}
   * @param apiVersion The API version to use for the operation.
   * @param options The options parameters.
   */
  checkExistenceById(
    resourceId: string,
    apiVersion: string,
    options?: ResourcesCheckExistenceByIdOptionalParams
  ): Promise<void> {
    return this.client.sendOperationRequest(
      { resourceId, apiVersion, options },
      checkExistenceByIdOperationSpec
    );
  }

  /**
   * Deletes a resource by ID.
   * @param resourceId The fully qualified ID of the resource, including the resource name and resource
   *                   type. Use the format,
   *                   /subscriptions/{guid}/resourceGroups/{resource-group-name}/{resource-provider-namespace}/{resource-type}/{resource-name}
   * @param apiVersion The API version to use for the operation.
   * @param options The options parameters.
   */
  async beginDeleteById(
    resourceId: string,
    apiVersion: string,
    options?: ResourcesDeleteByIdOptionalParams
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
      { resourceId, apiVersion, options },
      deleteByIdOperationSpec,
      sendOperation
    );
  }

  /**
   * Deletes a resource by ID.
   * @param resourceId The fully qualified ID of the resource, including the resource name and resource
   *                   type. Use the format,
   *                   /subscriptions/{guid}/resourceGroups/{resource-group-name}/{resource-provider-namespace}/{resource-type}/{resource-name}
   * @param apiVersion The API version to use for the operation.
   * @param options The options parameters.
   */
  async beginDeleteByIdAndWait(
    resourceId: string,
    apiVersion: string,
    options?: ResourcesDeleteByIdOptionalParams
  ): Promise<void> {
    const poller = await this.beginDeleteById(resourceId, apiVersion, options);
    return poller.pollUntilDone();
  }

  /**
   * Create a resource by ID.
   * @param resourceId The fully qualified ID of the resource, including the resource name and resource
   *                   type. Use the format,
   *                   /subscriptions/{guid}/resourceGroups/{resource-group-name}/{resource-provider-namespace}/{resource-type}/{resource-name}
   * @param apiVersion The API version to use for the operation.
   * @param parameters Create or update resource parameters.
   * @param options The options parameters.
   */
  async beginCreateOrUpdateById(
    resourceId: string,
    apiVersion: string,
    parameters: GenericResource,
    options?: ResourcesCreateOrUpdateByIdOptionalParams
  ): Promise<
    PollerLike<
      PollOperationState<ResourcesCreateOrUpdateByIdResponse>,
      ResourcesCreateOrUpdateByIdResponse
    >
  > {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ): Promise<ResourcesCreateOrUpdateByIdResponse> => {
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
      { resourceId, apiVersion, parameters, options },
      createOrUpdateByIdOperationSpec,
      sendOperation
    );
  }

  /**
   * Create a resource by ID.
   * @param resourceId The fully qualified ID of the resource, including the resource name and resource
   *                   type. Use the format,
   *                   /subscriptions/{guid}/resourceGroups/{resource-group-name}/{resource-provider-namespace}/{resource-type}/{resource-name}
   * @param apiVersion The API version to use for the operation.
   * @param parameters Create or update resource parameters.
   * @param options The options parameters.
   */
  async beginCreateOrUpdateByIdAndWait(
    resourceId: string,
    apiVersion: string,
    parameters: GenericResource,
    options?: ResourcesCreateOrUpdateByIdOptionalParams
  ): Promise<ResourcesCreateOrUpdateByIdResponse> {
    const poller = await this.beginCreateOrUpdateById(
      resourceId,
      apiVersion,
      parameters,
      options
    );
    return poller.pollUntilDone();
  }

  /**
   * Updates a resource by ID.
   * @param resourceId The fully qualified ID of the resource, including the resource name and resource
   *                   type. Use the format,
   *                   /subscriptions/{guid}/resourceGroups/{resource-group-name}/{resource-provider-namespace}/{resource-type}/{resource-name}
   * @param apiVersion The API version to use for the operation.
   * @param parameters Update resource parameters.
   * @param options The options parameters.
   */
  async beginUpdateById(
    resourceId: string,
    apiVersion: string,
    parameters: GenericResource,
    options?: ResourcesUpdateByIdOptionalParams
  ): Promise<
    PollerLike<
      PollOperationState<ResourcesUpdateByIdResponse>,
      ResourcesUpdateByIdResponse
    >
  > {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ): Promise<ResourcesUpdateByIdResponse> => {
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
      { resourceId, apiVersion, parameters, options },
      updateByIdOperationSpec,
      sendOperation
    );
  }

  /**
   * Updates a resource by ID.
   * @param resourceId The fully qualified ID of the resource, including the resource name and resource
   *                   type. Use the format,
   *                   /subscriptions/{guid}/resourceGroups/{resource-group-name}/{resource-provider-namespace}/{resource-type}/{resource-name}
   * @param apiVersion The API version to use for the operation.
   * @param parameters Update resource parameters.
   * @param options The options parameters.
   */
  async beginUpdateByIdAndWait(
    resourceId: string,
    apiVersion: string,
    parameters: GenericResource,
    options?: ResourcesUpdateByIdOptionalParams
  ): Promise<ResourcesUpdateByIdResponse> {
    const poller = await this.beginUpdateById(
      resourceId,
      apiVersion,
      parameters,
      options
    );
    return poller.pollUntilDone();
  }

  /**
   * Gets a resource by ID.
   * @param resourceId The fully qualified ID of the resource, including the resource name and resource
   *                   type. Use the format,
   *                   /subscriptions/{guid}/resourceGroups/{resource-group-name}/{resource-provider-namespace}/{resource-type}/{resource-name}
   * @param apiVersion The API version to use for the operation.
   * @param options The options parameters.
   */
  getById(
    resourceId: string,
    apiVersion: string,
    options?: ResourcesGetByIdOptionalParams
  ): Promise<ResourcesGetByIdResponse> {
    return this.client.sendOperationRequest(
      { resourceId, apiVersion, options },
      getByIdOperationSpec
    );
  }

  /**
   * ListByResourceGroupNext
   * @param resourceGroupName The resource group with the resources to get.
   * @param nextLink The nextLink from the previous successful call to the ListByResourceGroup method.
   * @param options The options parameters.
   */
  private _listByResourceGroupNext(
    resourceGroupName: string,
    nextLink: string,
    options?: ResourcesListByResourceGroupNextOptionalParams
  ): Promise<ResourcesListByResourceGroupNextResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, nextLink, options },
      listByResourceGroupNextOperationSpec
    );
  }

  /**
   * ListNext
   * @param nextLink The nextLink from the previous successful call to the List method.
   * @param options The options parameters.
   */
  private _listNext(
    nextLink: string,
    options?: ResourcesListNextOptionalParams
  ): Promise<ResourcesListNextResponse> {
    return this.client.sendOperationRequest(
      { nextLink, options },
      listNextOperationSpec
    );
  }

  /**
   * ListByResourceGroupNextNext
   * @param resourceGroupName The resource group with the resources to get.
   * @param nextLink The nextLink from the previous successful call to the ListByResourceGroupNext
   *                 method.
   * @param options The options parameters.
   */
  private _listByResourceGroupNextNext(
    resourceGroupName: string,
    nextLink: string,
    options?: ResourcesListByResourceGroupNextNextOptionalParams
  ): Promise<ResourcesListByResourceGroupNextNextResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, nextLink, options },
      listByResourceGroupNextNextOperationSpec
    );
  }

  /**
   * ListNextNext
   * @param nextLink The nextLink from the previous successful call to the ListNext method.
   * @param options The options parameters.
   */
  private _listNextNext(
    nextLink: string,
    options?: ResourcesListNextNextOptionalParams
  ): Promise<ResourcesListNextNextResponse> {
    return this.client.sendOperationRequest(
      { nextLink, options },
      listNextNextOperationSpec
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const listByResourceGroupOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/resources",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ResourceListResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [
    Parameters.apiVersion,
    Parameters.filter,
    Parameters.top,
    Parameters.expand
  ],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const moveResourcesOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{sourceResourceGroupName}/moveResources",
  httpMethod: "POST",
  responses: {
    200: {},
    201: {},
    202: {},
    204: {},
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  requestBody: Parameters.parameters4,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.sourceResourceGroupName
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const validateMoveResourcesOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{sourceResourceGroupName}/validateMoveResources",
  httpMethod: "POST",
  responses: {
    200: {},
    201: {},
    202: {},
    204: {},
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  requestBody: Parameters.parameters4,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.sourceResourceGroupName
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const listOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resources",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ResourceListResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [
    Parameters.apiVersion,
    Parameters.filter,
    Parameters.top,
    Parameters.expand
  ],
  urlParameters: [Parameters.$host, Parameters.subscriptionId],
  headerParameters: [Parameters.accept],
  serializer
};
const checkExistenceOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{parentResourcePath}/{resourceType}/{resourceName}",
  httpMethod: "HEAD",
  responses: {
    204: {},
    404: {},
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.apiVersion1],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.resourceProviderNamespace,
    Parameters.parentResourcePath,
    Parameters.resourceType,
    Parameters.resourceName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const deleteOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{parentResourcePath}/{resourceType}/{resourceName}",
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
  queryParameters: [Parameters.apiVersion1],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.resourceProviderNamespace,
    Parameters.parentResourcePath,
    Parameters.resourceType,
    Parameters.resourceName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const createOrUpdateOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{parentResourcePath}/{resourceType}/{resourceName}",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper: Mappers.GenericResource
    },
    201: {
      bodyMapper: Mappers.GenericResource
    },
    202: {
      bodyMapper: Mappers.GenericResource
    },
    204: {
      bodyMapper: Mappers.GenericResource
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  requestBody: Parameters.parameters5,
  queryParameters: [Parameters.apiVersion1],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.resourceProviderNamespace,
    Parameters.parentResourcePath,
    Parameters.resourceType,
    Parameters.resourceName
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const updateOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{parentResourcePath}/{resourceType}/{resourceName}",
  httpMethod: "PATCH",
  responses: {
    200: {
      bodyMapper: Mappers.GenericResource
    },
    201: {
      bodyMapper: Mappers.GenericResource
    },
    202: {
      bodyMapper: Mappers.GenericResource
    },
    204: {
      bodyMapper: Mappers.GenericResource
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  requestBody: Parameters.parameters5,
  queryParameters: [Parameters.apiVersion1],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.resourceProviderNamespace,
    Parameters.parentResourcePath,
    Parameters.resourceType,
    Parameters.resourceName
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const getOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{parentResourcePath}/{resourceType}/{resourceName}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.GenericResource
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.apiVersion1],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.resourceProviderNamespace,
    Parameters.parentResourcePath,
    Parameters.resourceType,
    Parameters.resourceName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const checkExistenceByIdOperationSpec: coreClient.OperationSpec = {
  path: "/{resourceId}",
  httpMethod: "HEAD",
  responses: {
    204: {},
    404: {},
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.apiVersion1],
  urlParameters: [Parameters.$host, Parameters.resourceId],
  headerParameters: [Parameters.accept],
  serializer
};
const deleteByIdOperationSpec: coreClient.OperationSpec = {
  path: "/{resourceId}",
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
  queryParameters: [Parameters.apiVersion1],
  urlParameters: [Parameters.$host, Parameters.resourceId],
  headerParameters: [Parameters.accept],
  serializer
};
const createOrUpdateByIdOperationSpec: coreClient.OperationSpec = {
  path: "/{resourceId}",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper: Mappers.GenericResource
    },
    201: {
      bodyMapper: Mappers.GenericResource
    },
    202: {
      bodyMapper: Mappers.GenericResource
    },
    204: {
      bodyMapper: Mappers.GenericResource
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  requestBody: Parameters.parameters5,
  queryParameters: [Parameters.apiVersion1],
  urlParameters: [Parameters.$host, Parameters.resourceId],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const updateByIdOperationSpec: coreClient.OperationSpec = {
  path: "/{resourceId}",
  httpMethod: "PATCH",
  responses: {
    200: {
      bodyMapper: Mappers.GenericResource
    },
    201: {
      bodyMapper: Mappers.GenericResource
    },
    202: {
      bodyMapper: Mappers.GenericResource
    },
    204: {
      bodyMapper: Mappers.GenericResource
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  requestBody: Parameters.parameters5,
  queryParameters: [Parameters.apiVersion1],
  urlParameters: [Parameters.$host, Parameters.resourceId],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const getByIdOperationSpec: coreClient.OperationSpec = {
  path: "/{resourceId}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.GenericResource
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.apiVersion1],
  urlParameters: [Parameters.$host, Parameters.resourceId],
  headerParameters: [Parameters.accept],
  serializer
};
const listByResourceGroupNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ResourceListResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [
    Parameters.apiVersion,
    Parameters.filter,
    Parameters.top,
    Parameters.expand
  ],
  urlParameters: [
    Parameters.$host,
    Parameters.nextLink,
    Parameters.subscriptionId,
    Parameters.resourceGroupName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ResourceListResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [
    Parameters.apiVersion,
    Parameters.filter,
    Parameters.top,
    Parameters.expand
  ],
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
      bodyMapper: Mappers.ResourceListResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [
    Parameters.apiVersion,
    Parameters.filter,
    Parameters.top,
    Parameters.expand
  ],
  urlParameters: [
    Parameters.$host,
    Parameters.nextLink,
    Parameters.subscriptionId,
    Parameters.resourceGroupName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listNextNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ResourceListResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [
    Parameters.apiVersion,
    Parameters.filter,
    Parameters.top,
    Parameters.expand
  ],
  urlParameters: [
    Parameters.$host,
    Parameters.nextLink,
    Parameters.subscriptionId
  ],
  headerParameters: [Parameters.accept],
  serializer
};
