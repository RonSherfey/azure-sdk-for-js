/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

import * as msRest from "@azure/ms-rest-js";
import * as Models from "../models";
import * as Mappers from "../models/virtualNetworkSubnetUsageMappers";
import * as Parameters from "../models/parameters";
import { PostgreSQLManagementClientContext } from "../postgreSQLManagementClientContext";

/** Class representing a VirtualNetworkSubnetUsage. */
export class VirtualNetworkSubnetUsage {
  private readonly client: PostgreSQLManagementClientContext;

  /**
   * Create a VirtualNetworkSubnetUsage.
   * @param {PostgreSQLManagementClientContext} client Reference to the service client.
   */
  constructor(client: PostgreSQLManagementClientContext) {
    this.client = client;
  }

  /**
   * Get virtual network subnet usage for a given vNet resource id.
   * @param locationName The name of the location.
   * @param parameters The required parameters for creating or updating a server.
   * @param [options] The optional parameters
   * @returns Promise<Models.VirtualNetworkSubnetUsageExecuteResponse>
   */
  execute(locationName: string, parameters: Models.VirtualNetworkSubnetUsageParameter, options?: msRest.RequestOptionsBase): Promise<Models.VirtualNetworkSubnetUsageExecuteResponse>;
  /**
   * @param locationName The name of the location.
   * @param parameters The required parameters for creating or updating a server.
   * @param callback The callback
   */
  execute(locationName: string, parameters: Models.VirtualNetworkSubnetUsageParameter, callback: msRest.ServiceCallback<Models.VirtualNetworkSubnetUsageResult>): void;
  /**
   * @param locationName The name of the location.
   * @param parameters The required parameters for creating or updating a server.
   * @param options The optional parameters
   * @param callback The callback
   */
  execute(locationName: string, parameters: Models.VirtualNetworkSubnetUsageParameter, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.VirtualNetworkSubnetUsageResult>): void;
  execute(locationName: string, parameters: Models.VirtualNetworkSubnetUsageParameter, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.VirtualNetworkSubnetUsageResult>, callback?: msRest.ServiceCallback<Models.VirtualNetworkSubnetUsageResult>): Promise<Models.VirtualNetworkSubnetUsageExecuteResponse> {
    return this.client.sendOperationRequest(
      {
        locationName,
        parameters,
        options
      },
      executeOperationSpec,
      callback) as Promise<Models.VirtualNetworkSubnetUsageExecuteResponse>;
  }
}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const executeOperationSpec: msRest.OperationSpec = {
  httpMethod: "POST",
  path: "subscriptions/{subscriptionId}/providers/Microsoft.DBForPostgreSql/locations/{locationName}/checkVirtualNetworkSubnetUsage",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.locationName
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  requestBody: {
    parameterPath: "parameters",
    mapper: {
      ...Mappers.VirtualNetworkSubnetUsageParameter,
      required: true
    }
  },
  responses: {
    200: {
      bodyMapper: Mappers.VirtualNetworkSubnetUsageResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};
