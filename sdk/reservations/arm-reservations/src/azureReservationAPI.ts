/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

import * as msRest from "@azure/ms-rest-js";
import { TokenCredential } from "@azure/core-auth";
import * as Models from "./models";
import * as Mappers from "./models/mappers";
import * as Parameters from "./models/parameters";
import * as operations from "./operations";
import { AzureReservationAPIContext } from "./azureReservationAPIContext";


class AzureReservationAPI extends AzureReservationAPIContext {
  // Operation groups
  reservation: operations.Reservation;
  reservationOrder: operations.ReservationOrder;
  operation: operations.Operation;
  calculateExchange: operations.CalculateExchange;
  exchange: operations.Exchange;
  quota: operations.Quota;
  quotaRequestStatus: operations.QuotaRequestStatus;

  /**
   * Initializes a new instance of the AzureReservationAPI class.
   * @param credentials Credentials needed for the client to connect to Azure. Credentials
   * implementing the TokenCredential interface from the @azure/identity package are recommended. For
   * more information about these credentials, see
   * {@link https://www.npmjs.com/package/@azure/identity}. Credentials implementing the
   * ServiceClientCredentials interface from the older packages @azure/ms-rest-nodeauth and
   * @azure/ms-rest-browserauth are also supported.
   * @param [options] The parameter options
   */
  constructor(credentials: msRest.ServiceClientCredentials | TokenCredential, options?: Models.AzureReservationAPIOptions) {
    super(credentials, options);
    this.reservation = new operations.Reservation(this);
    this.reservationOrder = new operations.ReservationOrder(this);
    this.operation = new operations.Operation(this);
    this.calculateExchange = new operations.CalculateExchange(this);
    this.exchange = new operations.Exchange(this);
    this.quota = new operations.Quota(this);
    this.quotaRequestStatus = new operations.QuotaRequestStatus(this);
  }

  /**
   * @summary Get the regions and skus that are available for RI purchase for the specified Azure
   * subscription.
   * @param subscriptionId Id of the subscription
   * @param reservedResourceType The type of the resource for which the skus should be provided.
   * @param [options] The optional parameters
   * @returns Promise<Models.GetCatalogResponse>
   */
  getCatalog(subscriptionId: string, reservedResourceType: string, options?: Models.AzureReservationAPIGetCatalogOptionalParams): Promise<Models.GetCatalogResponse>;
  /**
   * @param subscriptionId Id of the subscription
   * @param reservedResourceType The type of the resource for which the skus should be provided.
   * @param callback The callback
   */
  getCatalog(subscriptionId: string, reservedResourceType: string, callback: msRest.ServiceCallback<Models.Catalog[]>): void;
  /**
   * @param subscriptionId Id of the subscription
   * @param reservedResourceType The type of the resource for which the skus should be provided.
   * @param options The optional parameters
   * @param callback The callback
   */
  getCatalog(subscriptionId: string, reservedResourceType: string, options: Models.AzureReservationAPIGetCatalogOptionalParams, callback: msRest.ServiceCallback<Models.Catalog[]>): void;
  getCatalog(subscriptionId: string, reservedResourceType: string, options?: Models.AzureReservationAPIGetCatalogOptionalParams | msRest.ServiceCallback<Models.Catalog[]>, callback?: msRest.ServiceCallback<Models.Catalog[]>): Promise<Models.GetCatalogResponse> {
    return this.sendOperationRequest(
      {
        subscriptionId,
        reservedResourceType,
        options
      },
      getCatalogOperationSpec,
      callback) as Promise<Models.GetCatalogResponse>;
  }

  /**
   * Get applicable `Reservation`s that are applied to this subscription or a resource group under
   * this subscription.
   * @summary Get list of applicable `Reservation`s.
   * @param subscriptionId Id of the subscription
   * @param [options] The optional parameters
   * @returns Promise<Models.GetAppliedReservationListResponse>
   */
  getAppliedReservationList(subscriptionId: string, options?: msRest.RequestOptionsBase): Promise<Models.GetAppliedReservationListResponse>;
  /**
   * @param subscriptionId Id of the subscription
   * @param callback The callback
   */
  getAppliedReservationList(subscriptionId: string, callback: msRest.ServiceCallback<Models.AppliedReservations>): void;
  /**
   * @param subscriptionId Id of the subscription
   * @param options The optional parameters
   * @param callback The callback
   */
  getAppliedReservationList(subscriptionId: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.AppliedReservations>): void;
  getAppliedReservationList(subscriptionId: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.AppliedReservations>, callback?: msRest.ServiceCallback<Models.AppliedReservations>): Promise<Models.GetAppliedReservationListResponse> {
    return this.sendOperationRequest(
      {
        subscriptionId,
        options
      },
      getAppliedReservationListOperationSpec,
      callback) as Promise<Models.GetAppliedReservationListResponse>;
  }
}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const getCatalogOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/providers/Microsoft.Capacity/catalogs",
  urlParameters: [
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.apiVersion0,
    Parameters.reservedResourceType,
    Parameters.location0
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: {
        serializedName: "parsedResponse",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "Catalog"
            }
          }
        }
      }
    },
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  serializer
};

const getAppliedReservationListOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/providers/Microsoft.Capacity/appliedReservations",
  urlParameters: [
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.apiVersion0
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.AppliedReservations
    },
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  serializer
};

export {
  AzureReservationAPI,
  AzureReservationAPIContext,
  Models as AzureReservationAPIModels,
  Mappers as AzureReservationAPIMappers
};
export * from "./operations";
