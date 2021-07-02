import "@azure/core-paging";
import { PagedAsyncIterableIterator } from "@azure/core-paging";
import { TagsOperations } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { ResourceManagementClientContext } from "../resourceManagementClientContext";
import {
  TagDetails,
  TagsOperationsListNextOptionalParams,
  TagsOperationsListOptionalParams,
  TagsOperationsListNextNextOptionalParams,
  TagsOperationsDeleteValueOptionalParams,
  TagsOperationsCreateOrUpdateValueOptionalParams,
  TagsOperationsCreateOrUpdateValueResponse,
  TagsOperationsCreateOrUpdateOptionalParams,
  TagsOperationsCreateOrUpdateResponse,
  TagsOperationsDeleteOptionalParams,
  TagsOperationsListResponse,
  TagsResource,
  TagsOperationsCreateOrUpdateAtScopeOptionalParams,
  TagsOperationsCreateOrUpdateAtScopeResponse,
  TagsPatchResource,
  TagsOperationsUpdateAtScopeOptionalParams,
  TagsOperationsUpdateAtScopeResponse,
  TagsOperationsGetAtScopeOptionalParams,
  TagsOperationsGetAtScopeResponse,
  TagsOperationsDeleteAtScopeOptionalParams,
  TagsOperationsListNextResponse,
  TagsOperationsListNextNextResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Class representing a TagsOperations. */
export class TagsOperationsImpl implements TagsOperations {
  private readonly client: ResourceManagementClientContext;

  /**
   * Initialize a new instance of the class TagsOperations class.
   * @param client Reference to the service client
   */
  constructor(client: ResourceManagementClientContext) {
    this.client = client;
  }

  /**
   * This operation performs a union of predefined tags, resource tags, resource group tags and
   * subscription tags, and returns a summary of usage for each tag name and value under the given
   * subscription. In case of a large number of tags, this operation may return a previously cached
   * result.
   * @param options The options parameters.
   */
  public list(
    options?: TagsOperationsListOptionalParams
  ): PagedAsyncIterableIterator<TagDetails> {
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
    options?: TagsOperationsListOptionalParams
  ): AsyncIterableIterator<TagDetails[]> {
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
    options?: TagsOperationsListOptionalParams
  ): AsyncIterableIterator<TagDetails> {
    for await (const page of this.listPagingPage(options)) {
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
    options?: TagsOperationsListNextOptionalParams
  ): PagedAsyncIterableIterator<TagDetails> {
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
    options?: TagsOperationsListNextOptionalParams
  ): AsyncIterableIterator<TagDetails[]> {
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
    options?: TagsOperationsListNextOptionalParams
  ): AsyncIterableIterator<TagDetails> {
    for await (const page of this.listNextPagingPage(nextLink, options)) {
      yield* page;
    }
  }

  /**
   * This operation allows deleting a value from the list of predefined values for an existing predefined
   * tag name. The value being deleted must not be in use as a tag value for the given tag name for any
   * resource.
   * @param tagName The name of the tag.
   * @param tagValue The value of the tag to delete.
   * @param options The options parameters.
   */
  deleteValue(
    tagName: string,
    tagValue: string,
    options?: TagsOperationsDeleteValueOptionalParams
  ): Promise<void> {
    return this.client.sendOperationRequest(
      { tagName, tagValue, options },
      deleteValueOperationSpec
    );
  }

  /**
   * This operation allows adding a value to the list of predefined values for an existing predefined tag
   * name. A tag value can have a maximum of 256 characters.
   * @param tagName The name of the tag.
   * @param tagValue The value of the tag to create.
   * @param options The options parameters.
   */
  createOrUpdateValue(
    tagName: string,
    tagValue: string,
    options?: TagsOperationsCreateOrUpdateValueOptionalParams
  ): Promise<TagsOperationsCreateOrUpdateValueResponse> {
    return this.client.sendOperationRequest(
      { tagName, tagValue, options },
      createOrUpdateValueOperationSpec
    );
  }

  /**
   * This operation allows adding a name to the list of predefined tag names for the given subscription.
   * A tag name can have a maximum of 512 characters and is case-insensitive. Tag names cannot have the
   * following prefixes which are reserved for Azure use: 'microsoft', 'azure', 'windows'.
   * @param tagName The name of the tag to create.
   * @param options The options parameters.
   */
  createOrUpdate(
    tagName: string,
    options?: TagsOperationsCreateOrUpdateOptionalParams
  ): Promise<TagsOperationsCreateOrUpdateResponse> {
    return this.client.sendOperationRequest(
      { tagName, options },
      createOrUpdateOperationSpec
    );
  }

  /**
   * This operation allows deleting a name from the list of predefined tag names for the given
   * subscription. The name being deleted must not be in use as a tag name for any resource. All
   * predefined values for the given name must have already been deleted.
   * @param tagName The name of the tag.
   * @param options The options parameters.
   */
  delete(
    tagName: string,
    options?: TagsOperationsDeleteOptionalParams
  ): Promise<void> {
    return this.client.sendOperationRequest(
      { tagName, options },
      deleteOperationSpec
    );
  }

  /**
   * This operation performs a union of predefined tags, resource tags, resource group tags and
   * subscription tags, and returns a summary of usage for each tag name and value under the given
   * subscription. In case of a large number of tags, this operation may return a previously cached
   * result.
   * @param options The options parameters.
   */
  private _list(
    options?: TagsOperationsListOptionalParams
  ): Promise<TagsOperationsListResponse> {
    return this.client.sendOperationRequest({ options }, listOperationSpec);
  }

  /**
   * This operation allows adding or replacing the entire set of tags on the specified resource or
   * subscription. The specified entity can have a maximum of 50 tags.
   * @param scope The resource scope.
   * @param parameters Wrapper resource for tags API requests and responses.
   * @param options The options parameters.
   */
  createOrUpdateAtScope(
    scope: string,
    parameters: TagsResource,
    options?: TagsOperationsCreateOrUpdateAtScopeOptionalParams
  ): Promise<TagsOperationsCreateOrUpdateAtScopeResponse> {
    return this.client.sendOperationRequest(
      { scope, parameters, options },
      createOrUpdateAtScopeOperationSpec
    );
  }

  /**
   * This operation allows replacing, merging or selectively deleting tags on the specified resource or
   * subscription. The specified entity can have a maximum of 50 tags at the end of the operation. The
   * 'replace' option replaces the entire set of existing tags with a new set. The 'merge' option allows
   * adding tags with new names and updating the values of tags with existing names. The 'delete' option
   * allows selectively deleting tags based on given names or name/value pairs.
   * @param scope The resource scope.
   * @param parameters Wrapper resource for tags patch API request only.
   * @param options The options parameters.
   */
  updateAtScope(
    scope: string,
    parameters: TagsPatchResource,
    options?: TagsOperationsUpdateAtScopeOptionalParams
  ): Promise<TagsOperationsUpdateAtScopeResponse> {
    return this.client.sendOperationRequest(
      { scope, parameters, options },
      updateAtScopeOperationSpec
    );
  }

  /**
   * Gets the entire set of tags on a resource or subscription.
   * @param scope The resource scope.
   * @param options The options parameters.
   */
  getAtScope(
    scope: string,
    options?: TagsOperationsGetAtScopeOptionalParams
  ): Promise<TagsOperationsGetAtScopeResponse> {
    return this.client.sendOperationRequest(
      { scope, options },
      getAtScopeOperationSpec
    );
  }

  /**
   * Deletes the entire set of tags on a resource or subscription.
   * @param scope The resource scope.
   * @param options The options parameters.
   */
  deleteAtScope(
    scope: string,
    options?: TagsOperationsDeleteAtScopeOptionalParams
  ): Promise<void> {
    return this.client.sendOperationRequest(
      { scope, options },
      deleteAtScopeOperationSpec
    );
  }

  /**
   * ListNext
   * @param nextLink The nextLink from the previous successful call to the List method.
   * @param options The options parameters.
   */
  private _listNext(
    nextLink: string,
    options?: TagsOperationsListNextOptionalParams
  ): Promise<TagsOperationsListNextResponse> {
    return this.client.sendOperationRequest(
      { nextLink, options },
      listNextOperationSpec
    );
  }

  /**
   * ListNextNext
   * @param nextLink The nextLink from the previous successful call to the ListNext method.
   * @param options The options parameters.
   */
  private _listNextNext(
    nextLink: string,
    options?: TagsOperationsListNextNextOptionalParams
  ): Promise<TagsOperationsListNextNextResponse> {
    return this.client.sendOperationRequest(
      { nextLink, options },
      listNextNextOperationSpec
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const deleteValueOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/tagNames/{tagName}/tagValues/{tagValue}",
  httpMethod: "DELETE",
  responses: {
    200: {},
    204: {},
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.tagName,
    Parameters.tagValue
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const createOrUpdateValueOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/tagNames/{tagName}/tagValues/{tagValue}",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper: Mappers.TagValue
    },
    201: {
      bodyMapper: Mappers.TagValue
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.tagName,
    Parameters.tagValue
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const createOrUpdateOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/tagNames/{tagName}",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper: Mappers.TagDetails
    },
    201: {
      bodyMapper: Mappers.TagDetails
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.tagName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const deleteOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/tagNames/{tagName}",
  httpMethod: "DELETE",
  responses: {
    200: {},
    204: {},
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.tagName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/tagNames",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.TagsListResult
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
const createOrUpdateAtScopeOperationSpec: coreClient.OperationSpec = {
  path: "/{scope}/providers/Microsoft.Resources/tags/default",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper: Mappers.TagsResource
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  requestBody: Parameters.parameters9,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [Parameters.$host, Parameters.scope],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const updateAtScopeOperationSpec: coreClient.OperationSpec = {
  path: "/{scope}/providers/Microsoft.Resources/tags/default",
  httpMethod: "PATCH",
  responses: {
    200: {
      bodyMapper: Mappers.TagsResource
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  requestBody: Parameters.parameters10,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [Parameters.$host, Parameters.scope],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const getAtScopeOperationSpec: coreClient.OperationSpec = {
  path: "/{scope}/providers/Microsoft.Resources/tags/default",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.TagsResource
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [Parameters.$host, Parameters.scope],
  headerParameters: [Parameters.accept],
  serializer
};
const deleteAtScopeOperationSpec: coreClient.OperationSpec = {
  path: "/{scope}/providers/Microsoft.Resources/tags/default",
  httpMethod: "DELETE",
  responses: {
    200: {},
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [Parameters.$host, Parameters.scope],
  headerParameters: [Parameters.accept],
  serializer
};
const listNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.TagsListResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.nextLink,
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
      bodyMapper: Mappers.TagsListResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.nextLink,
    Parameters.subscriptionId
  ],
  headerParameters: [Parameters.accept],
  serializer
};
