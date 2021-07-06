/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import "@azure/core-paging";
import { PagedAsyncIterableIterator } from "@azure/core-paging";
import { RestorePointCollections } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { ComputeManagementClientContext } from "../computeManagementClientContext";
import { LROPoller, shouldDeserializeLRO } from "../lro";
import { PollerLike, PollOperationState } from "@azure/core-lro";
import {
  RestorePointCollection,
  RestorePointCollectionsListNextOptionalParams,
  RestorePointCollectionsListOptionalParams,
  RestorePointCollectionsListAllNextOptionalParams,
  RestorePointCollectionsListAllOptionalParams,
  RestorePointCollectionsCreateOrUpdateOptionalParams,
  RestorePointCollectionsCreateOrUpdateResponse,
  RestorePointCollectionUpdate,
  RestorePointCollectionsUpdateOptionalParams,
  RestorePointCollectionsUpdateResponse,
  RestorePointCollectionsDeleteOptionalParams,
  RestorePointCollectionsGetOptionalParams,
  RestorePointCollectionsGetResponse,
  RestorePointCollectionsListResponse,
  RestorePointCollectionsListAllResponse,
  RestorePointCollectionsListNextResponse,
  RestorePointCollectionsListAllNextResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Class representing a RestorePointCollections. */
export class RestorePointCollectionsImpl implements RestorePointCollections {
  private readonly client: ComputeManagementClientContext;

  /**
   * Initialize a new instance of the class RestorePointCollections class.
   * @param client Reference to the service client
   */
  constructor(client: ComputeManagementClientContext) {
    this.client = client;
  }

  /**
   * Gets the list of restore point collections in a resource group.
   * @param resourceGroupName The name of the resource group.
   * @param options The options parameters.
   */
  public list(
    resourceGroupName: string,
    options?: RestorePointCollectionsListOptionalParams
  ): PagedAsyncIterableIterator<RestorePointCollection> {
    const iter = this.listPagingAll(resourceGroupName, options);
    return {
      next() {
        return iter.next();
      },
      [Symbol.asyncIterator]() {
        return this;
      },
      byPage: () => {
        return this.listPagingPage(resourceGroupName, options);
      }
    };
  }

  private async *listPagingPage(
    resourceGroupName: string,
    options?: RestorePointCollectionsListOptionalParams
  ): AsyncIterableIterator<RestorePointCollection[]> {
    let result = await this._list(resourceGroupName, options);
    yield result.value || [];
    let continuationToken = result.nextLink;
    while (continuationToken) {
      result = await this._listNext(
        resourceGroupName,
        continuationToken,
        options
      );
      continuationToken = result.nextLink;
      yield result.value || [];
    }
  }

  private async *listPagingAll(
    resourceGroupName: string,
    options?: RestorePointCollectionsListOptionalParams
  ): AsyncIterableIterator<RestorePointCollection> {
    for await (const page of this.listPagingPage(resourceGroupName, options)) {
      yield* page;
    }
  }

  /**
   * Gets the list of restore point collections in the subscription. Use nextLink property in the
   * response to get the next page of restore point collections. Do this till nextLink is not null to
   * fetch all the restore point collections.
   * @param options The options parameters.
   */
  public listAll(
    options?: RestorePointCollectionsListAllOptionalParams
  ): PagedAsyncIterableIterator<RestorePointCollection> {
    const iter = this.listAllPagingAll(options);
    return {
      next() {
        return iter.next();
      },
      [Symbol.asyncIterator]() {
        return this;
      },
      byPage: () => {
        return this.listAllPagingPage(options);
      }
    };
  }

  private async *listAllPagingPage(
    options?: RestorePointCollectionsListAllOptionalParams
  ): AsyncIterableIterator<RestorePointCollection[]> {
    let result = await this._listAll(options);
    yield result.value || [];
    let continuationToken = result.nextLink;
    while (continuationToken) {
      result = await this._listAllNext(continuationToken, options);
      continuationToken = result.nextLink;
      yield result.value || [];
    }
  }

  private async *listAllPagingAll(
    options?: RestorePointCollectionsListAllOptionalParams
  ): AsyncIterableIterator<RestorePointCollection> {
    for await (const page of this.listAllPagingPage(options)) {
      yield* page;
    }
  }

  /**
   * The operation to create or update the restore point collection. Please refer to
   * https://aka.ms/RestorePoints for more details. When updating a restore point collection, only tags
   * may be modified.
   * @param resourceGroupName The name of the resource group.
   * @param restorePointCollectionName The name of the restore point collection.
   * @param parameters Parameters supplied to the Create or Update restore point collection operation.
   * @param options The options parameters.
   */
  createOrUpdate(
    resourceGroupName: string,
    restorePointCollectionName: string,
    parameters: RestorePointCollection,
    options?: RestorePointCollectionsCreateOrUpdateOptionalParams
  ): Promise<RestorePointCollectionsCreateOrUpdateResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, restorePointCollectionName, parameters, options },
      createOrUpdateOperationSpec
    );
  }

  /**
   * The operation to update the restore point collection.
   * @param resourceGroupName The name of the resource group.
   * @param restorePointCollectionName The name of the restore point collection.
   * @param parameters Parameters supplied to the Update restore point collection operation.
   * @param options The options parameters.
   */
  update(
    resourceGroupName: string,
    restorePointCollectionName: string,
    parameters: RestorePointCollectionUpdate,
    options?: RestorePointCollectionsUpdateOptionalParams
  ): Promise<RestorePointCollectionsUpdateResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, restorePointCollectionName, parameters, options },
      updateOperationSpec
    );
  }

  /**
   * The operation to delete the restore point collection. This operation will also delete all the
   * contained restore points.
   * @param resourceGroupName The name of the resource group.
   * @param restorePointCollectionName The name of the Restore Point Collection.
   * @param options The options parameters.
   */
  async beginDelete(
    resourceGroupName: string,
    restorePointCollectionName: string,
    options?: RestorePointCollectionsDeleteOptionalParams
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
      { resourceGroupName, restorePointCollectionName, options },
      deleteOperationSpec,
      sendOperation
    );
  }

  /**
   * The operation to delete the restore point collection. This operation will also delete all the
   * contained restore points.
   * @param resourceGroupName The name of the resource group.
   * @param restorePointCollectionName The name of the Restore Point Collection.
   * @param options The options parameters.
   */
  async beginDeleteAndWait(
    resourceGroupName: string,
    restorePointCollectionName: string,
    options?: RestorePointCollectionsDeleteOptionalParams
  ): Promise<void> {
    const poller = await this.beginDelete(
      resourceGroupName,
      restorePointCollectionName,
      options
    );
    return poller.pollUntilDone();
  }

  /**
   * The operation to get the restore point collection.
   * @param resourceGroupName The name of the resource group.
   * @param restorePointCollectionName The name of the restore point collection.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    restorePointCollectionName: string,
    options?: RestorePointCollectionsGetOptionalParams
  ): Promise<RestorePointCollectionsGetResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, restorePointCollectionName, options },
      getOperationSpec
    );
  }

  /**
   * Gets the list of restore point collections in a resource group.
   * @param resourceGroupName The name of the resource group.
   * @param options The options parameters.
   */
  private _list(
    resourceGroupName: string,
    options?: RestorePointCollectionsListOptionalParams
  ): Promise<RestorePointCollectionsListResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, options },
      listOperationSpec
    );
  }

  /**
   * Gets the list of restore point collections in the subscription. Use nextLink property in the
   * response to get the next page of restore point collections. Do this till nextLink is not null to
   * fetch all the restore point collections.
   * @param options The options parameters.
   */
  private _listAll(
    options?: RestorePointCollectionsListAllOptionalParams
  ): Promise<RestorePointCollectionsListAllResponse> {
    return this.client.sendOperationRequest({ options }, listAllOperationSpec);
  }

  /**
   * ListNext
   * @param resourceGroupName The name of the resource group.
   * @param nextLink The nextLink from the previous successful call to the List method.
   * @param options The options parameters.
   */
  private _listNext(
    resourceGroupName: string,
    nextLink: string,
    options?: RestorePointCollectionsListNextOptionalParams
  ): Promise<RestorePointCollectionsListNextResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, nextLink, options },
      listNextOperationSpec
    );
  }

  /**
   * ListAllNext
   * @param nextLink The nextLink from the previous successful call to the ListAll method.
   * @param options The options parameters.
   */
  private _listAllNext(
    nextLink: string,
    options?: RestorePointCollectionsListAllNextOptionalParams
  ): Promise<RestorePointCollectionsListAllNextResponse> {
    return this.client.sendOperationRequest(
      { nextLink, options },
      listAllNextOperationSpec
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const createOrUpdateOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/restorePointCollections/{restorePointCollectionName}",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper: Mappers.RestorePointCollection
    },
    201: {
      bodyMapper: Mappers.RestorePointCollection
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  requestBody: Parameters.parameters21,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.restorePointCollectionName
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const updateOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/restorePointCollections/{restorePointCollectionName}",
  httpMethod: "PATCH",
  responses: {
    200: {
      bodyMapper: Mappers.RestorePointCollection
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  requestBody: Parameters.parameters22,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.restorePointCollectionName
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const deleteOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/restorePointCollections/{restorePointCollectionName}",
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
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.restorePointCollectionName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const getOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/restorePointCollections/{restorePointCollectionName}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.RestorePointCollection
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.apiVersion, Parameters.expand3],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.restorePointCollectionName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/restorePointCollections",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.RestorePointCollectionListResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.subscriptionId
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listAllOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/providers/Microsoft.Compute/restorePointCollections",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.RestorePointCollectionListResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [Parameters.$host, Parameters.subscriptionId],
  headerParameters: [Parameters.accept],
  serializer
};
const listNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.RestorePointCollectionListResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.nextLink
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listAllNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.RestorePointCollectionListResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.nextLink
  ],
  headerParameters: [Parameters.accept],
  serializer
};
