import "@azure/core-paging";
import { PagedAsyncIterableIterator } from "@azure/core-paging";
import { Providers } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { ResourceManagementClientContext } from "../resourceManagementClientContext";
import {
  Provider,
  ProvidersListNextOptionalParams,
  ProvidersListOptionalParams,
  ProvidersListAtTenantScopeNextOptionalParams,
  ProvidersListAtTenantScopeOptionalParams,
  ProvidersListNextNextOptionalParams,
  ProvidersListAtTenantScopeNextNextOptionalParams,
  ProvidersUnregisterOptionalParams,
  ProvidersUnregisterResponse,
  ProvidersRegisterAtManagementGroupScopeOptionalParams,
  ProvidersProviderPermissionsOptionalParams,
  ProvidersProviderPermissionsResponse,
  ProvidersRegisterOptionalParams,
  ProvidersRegisterResponse,
  ProvidersListResponse,
  ProvidersListAtTenantScopeResponse,
  ProvidersGetOptionalParams,
  ProvidersGetResponse,
  ProvidersGetAtTenantScopeOptionalParams,
  ProvidersGetAtTenantScopeResponse,
  ProvidersListNextResponse,
  ProvidersListAtTenantScopeNextResponse,
  ProvidersListNextNextResponse,
  ProvidersListAtTenantScopeNextNextResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Class representing a Providers. */
export class ProvidersImpl implements Providers {
  private readonly client: ResourceManagementClientContext;

  /**
   * Initialize a new instance of the class Providers class.
   * @param client Reference to the service client
   */
  constructor(client: ResourceManagementClientContext) {
    this.client = client;
  }

  /**
   * Gets all resource providers for a subscription.
   * @param options The options parameters.
   */
  public list(
    options?: ProvidersListOptionalParams
  ): PagedAsyncIterableIterator<Provider> {
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
    options?: ProvidersListOptionalParams
  ): AsyncIterableIterator<Provider[]> {
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
    options?: ProvidersListOptionalParams
  ): AsyncIterableIterator<Provider> {
    for await (const page of this.listPagingPage(options)) {
      yield* page;
    }
  }

  /**
   * Gets all resource providers for the tenant.
   * @param options The options parameters.
   */
  public listAtTenantScope(
    options?: ProvidersListAtTenantScopeOptionalParams
  ): PagedAsyncIterableIterator<Provider> {
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
    options?: ProvidersListAtTenantScopeOptionalParams
  ): AsyncIterableIterator<Provider[]> {
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
    options?: ProvidersListAtTenantScopeOptionalParams
  ): AsyncIterableIterator<Provider> {
    for await (const page of this.listAtTenantScopePagingPage(options)) {
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
    options?: ProvidersListNextOptionalParams
  ): PagedAsyncIterableIterator<Provider> {
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
    options?: ProvidersListNextOptionalParams
  ): AsyncIterableIterator<Provider[]> {
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
    options?: ProvidersListNextOptionalParams
  ): AsyncIterableIterator<Provider> {
    for await (const page of this.listNextPagingPage(nextLink, options)) {
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
    options?: ProvidersListAtTenantScopeNextOptionalParams
  ): PagedAsyncIterableIterator<Provider> {
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
    options?: ProvidersListAtTenantScopeNextOptionalParams
  ): AsyncIterableIterator<Provider[]> {
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
    options?: ProvidersListAtTenantScopeNextOptionalParams
  ): AsyncIterableIterator<Provider> {
    for await (const page of this.listAtTenantScopeNextPagingPage(
      nextLink,
      options
    )) {
      yield* page;
    }
  }

  /**
   * Unregisters a subscription from a resource provider.
   * @param resourceProviderNamespace The namespace of the resource provider to unregister.
   * @param options The options parameters.
   */
  unregister(
    resourceProviderNamespace: string,
    options?: ProvidersUnregisterOptionalParams
  ): Promise<ProvidersUnregisterResponse> {
    return this.client.sendOperationRequest(
      { resourceProviderNamespace, options },
      unregisterOperationSpec
    );
  }

  /**
   * Registers a management group with a resource provider.
   * @param resourceProviderNamespace The namespace of the resource provider to register.
   * @param groupId The management group ID.
   * @param options The options parameters.
   */
  registerAtManagementGroupScope(
    resourceProviderNamespace: string,
    groupId: string,
    options?: ProvidersRegisterAtManagementGroupScopeOptionalParams
  ): Promise<void> {
    return this.client.sendOperationRequest(
      { resourceProviderNamespace, groupId, options },
      registerAtManagementGroupScopeOperationSpec
    );
  }

  /**
   * Get the provider permissions.
   * @param resourceProviderNamespace The namespace of the resource provider.
   * @param options The options parameters.
   */
  providerPermissions(
    resourceProviderNamespace: string,
    options?: ProvidersProviderPermissionsOptionalParams
  ): Promise<ProvidersProviderPermissionsResponse> {
    return this.client.sendOperationRequest(
      { resourceProviderNamespace, options },
      providerPermissionsOperationSpec
    );
  }

  /**
   * Registers a subscription with a resource provider.
   * @param resourceProviderNamespace The namespace of the resource provider to register.
   * @param options The options parameters.
   */
  register(
    resourceProviderNamespace: string,
    options?: ProvidersRegisterOptionalParams
  ): Promise<ProvidersRegisterResponse> {
    return this.client.sendOperationRequest(
      { resourceProviderNamespace, options },
      registerOperationSpec
    );
  }

  /**
   * Gets all resource providers for a subscription.
   * @param options The options parameters.
   */
  private _list(
    options?: ProvidersListOptionalParams
  ): Promise<ProvidersListResponse> {
    return this.client.sendOperationRequest({ options }, listOperationSpec);
  }

  /**
   * Gets all resource providers for the tenant.
   * @param options The options parameters.
   */
  private _listAtTenantScope(
    options?: ProvidersListAtTenantScopeOptionalParams
  ): Promise<ProvidersListAtTenantScopeResponse> {
    return this.client.sendOperationRequest(
      { options },
      listAtTenantScopeOperationSpec
    );
  }

  /**
   * Gets the specified resource provider.
   * @param resourceProviderNamespace The namespace of the resource provider.
   * @param options The options parameters.
   */
  get(
    resourceProviderNamespace: string,
    options?: ProvidersGetOptionalParams
  ): Promise<ProvidersGetResponse> {
    return this.client.sendOperationRequest(
      { resourceProviderNamespace, options },
      getOperationSpec
    );
  }

  /**
   * Gets the specified resource provider at the tenant level.
   * @param resourceProviderNamespace The namespace of the resource provider.
   * @param options The options parameters.
   */
  getAtTenantScope(
    resourceProviderNamespace: string,
    options?: ProvidersGetAtTenantScopeOptionalParams
  ): Promise<ProvidersGetAtTenantScopeResponse> {
    return this.client.sendOperationRequest(
      { resourceProviderNamespace, options },
      getAtTenantScopeOperationSpec
    );
  }

  /**
   * ListNext
   * @param nextLink The nextLink from the previous successful call to the List method.
   * @param options The options parameters.
   */
  private _listNext(
    nextLink: string,
    options?: ProvidersListNextOptionalParams
  ): Promise<ProvidersListNextResponse> {
    return this.client.sendOperationRequest(
      { nextLink, options },
      listNextOperationSpec
    );
  }

  /**
   * ListAtTenantScopeNext
   * @param nextLink The nextLink from the previous successful call to the ListAtTenantScope method.
   * @param options The options parameters.
   */
  private _listAtTenantScopeNext(
    nextLink: string,
    options?: ProvidersListAtTenantScopeNextOptionalParams
  ): Promise<ProvidersListAtTenantScopeNextResponse> {
    return this.client.sendOperationRequest(
      { nextLink, options },
      listAtTenantScopeNextOperationSpec
    );
  }

  /**
   * ListNextNext
   * @param nextLink The nextLink from the previous successful call to the ListNext method.
   * @param options The options parameters.
   */
  private _listNextNext(
    nextLink: string,
    options?: ProvidersListNextNextOptionalParams
  ): Promise<ProvidersListNextNextResponse> {
    return this.client.sendOperationRequest(
      { nextLink, options },
      listNextNextOperationSpec
    );
  }

  /**
   * ListAtTenantScopeNextNext
   * @param nextLink The nextLink from the previous successful call to the ListAtTenantScopeNext method.
   * @param options The options parameters.
   */
  private _listAtTenantScopeNextNext(
    nextLink: string,
    options?: ProvidersListAtTenantScopeNextNextOptionalParams
  ): Promise<ProvidersListAtTenantScopeNextNextResponse> {
    return this.client.sendOperationRequest(
      { nextLink, options },
      listAtTenantScopeNextNextOperationSpec
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const unregisterOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/providers/{resourceProviderNamespace}/unregister",
  httpMethod: "POST",
  responses: {
    200: {
      bodyMapper: Mappers.Provider
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceProviderNamespace
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const registerAtManagementGroupScopeOperationSpec: coreClient.OperationSpec = {
  path:
    "/providers/Microsoft.Management/managementGroups/{groupId}/providers/{resourceProviderNamespace}/register",
  httpMethod: "POST",
  responses: {
    200: {},
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.groupId,
    Parameters.resourceProviderNamespace
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const providerPermissionsOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/providers/{resourceProviderNamespace}/providerPermissions",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ProviderPermissionListResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceProviderNamespace
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const registerOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/providers/{resourceProviderNamespace}/register",
  httpMethod: "POST",
  responses: {
    200: {
      bodyMapper: Mappers.Provider
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  requestBody: Parameters.properties,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceProviderNamespace
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const listOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/providers",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ProviderListResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.apiVersion, Parameters.top, Parameters.expand],
  urlParameters: [Parameters.$host, Parameters.subscriptionId],
  headerParameters: [Parameters.accept],
  serializer
};
const listAtTenantScopeOperationSpec: coreClient.OperationSpec = {
  path: "/providers",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ProviderListResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.apiVersion, Parameters.top, Parameters.expand],
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.accept],
  serializer
};
const getOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/providers/{resourceProviderNamespace}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.Provider
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.apiVersion, Parameters.expand],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceProviderNamespace
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const getAtTenantScopeOperationSpec: coreClient.OperationSpec = {
  path: "/providers/{resourceProviderNamespace}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.Provider
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.apiVersion, Parameters.expand],
  urlParameters: [Parameters.$host, Parameters.resourceProviderNamespace],
  headerParameters: [Parameters.accept],
  serializer
};
const listNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ProviderListResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.apiVersion, Parameters.top, Parameters.expand],
  urlParameters: [
    Parameters.$host,
    Parameters.nextLink,
    Parameters.subscriptionId
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listAtTenantScopeNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ProviderListResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.apiVersion, Parameters.top, Parameters.expand],
  urlParameters: [Parameters.$host, Parameters.nextLink],
  headerParameters: [Parameters.accept],
  serializer
};
const listNextNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ProviderListResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.apiVersion, Parameters.top, Parameters.expand],
  urlParameters: [
    Parameters.$host,
    Parameters.nextLink,
    Parameters.subscriptionId
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listAtTenantScopeNextNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ProviderListResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.apiVersion, Parameters.top, Parameters.expand],
  urlParameters: [Parameters.$host, Parameters.nextLink],
  headerParameters: [Parameters.accept],
  serializer
};
