import { ProviderResourceTypes } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { ResourceManagementClientContext } from "../resourceManagementClientContext";
import {
  ProviderResourceTypesListOptionalParams,
  ProviderResourceTypesListResponse
} from "../models";

/** Class representing a ProviderResourceTypes. */
export class ProviderResourceTypesImpl implements ProviderResourceTypes {
  private readonly client: ResourceManagementClientContext;

  /**
   * Initialize a new instance of the class ProviderResourceTypes class.
   * @param client Reference to the service client
   */
  constructor(client: ResourceManagementClientContext) {
    this.client = client;
  }

  /**
   * List the resource types for a specified resource provider.
   * @param resourceProviderNamespace The namespace of the resource provider.
   * @param options The options parameters.
   */
  list(
    resourceProviderNamespace: string,
    options?: ProviderResourceTypesListOptionalParams
  ): Promise<ProviderResourceTypesListResponse> {
    return this.client.sendOperationRequest(
      { resourceProviderNamespace, options },
      listOperationSpec
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const listOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/providers/{resourceProviderNamespace}/resourceTypes",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ProviderResourceTypeListResult
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
