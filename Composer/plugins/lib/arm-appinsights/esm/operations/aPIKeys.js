/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */
import { __assign } from "tslib";
import * as msRest from "@azure/ms-rest-js";
import * as Mappers from "../models/aPIKeysMappers";
import * as Parameters from "../models/parameters";
/** Class representing a APIKeys. */
var APIKeys = /** @class */ (function () {
    /**
     * Create a APIKeys.
     * @param {ApplicationInsightsManagementClientContext} client Reference to the service client.
     */
    function APIKeys(client) {
        this.client = client;
    }
    APIKeys.prototype.list = function (resourceGroupName, resourceName, options, callback) {
        return this.client.sendOperationRequest({
            resourceGroupName: resourceGroupName,
            resourceName: resourceName,
            options: options
        }, listOperationSpec, callback);
    };
    APIKeys.prototype.create = function (resourceGroupName, resourceName, aPIKeyProperties, options, callback) {
        return this.client.sendOperationRequest({
            resourceGroupName: resourceGroupName,
            resourceName: resourceName,
            aPIKeyProperties: aPIKeyProperties,
            options: options
        }, createOperationSpec, callback);
    };
    APIKeys.prototype.deleteMethod = function (resourceGroupName, resourceName, keyId, options, callback) {
        return this.client.sendOperationRequest({
            resourceGroupName: resourceGroupName,
            resourceName: resourceName,
            keyId: keyId,
            options: options
        }, deleteMethodOperationSpec, callback);
    };
    APIKeys.prototype.get = function (resourceGroupName, resourceName, keyId, options, callback) {
        return this.client.sendOperationRequest({
            resourceGroupName: resourceGroupName,
            resourceName: resourceName,
            keyId: keyId,
            options: options
        }, getOperationSpec, callback);
    };
    return APIKeys;
}());
export { APIKeys };
// Operation Specifications
var serializer = new msRest.Serializer(Mappers);
var listOperationSpec = {
    httpMethod: "GET",
    path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Insights/components/{resourceName}/ApiKeys",
    urlParameters: [
        Parameters.resourceGroupName,
        Parameters.subscriptionId,
        Parameters.resourceName
    ],
    queryParameters: [
        Parameters.apiVersion
    ],
    headerParameters: [
        Parameters.acceptLanguage
    ],
    responses: {
        200: {
            bodyMapper: Mappers.ApplicationInsightsComponentAPIKeyListResult
        },
        default: {
            bodyMapper: Mappers.CloudError
        }
    },
    serializer: serializer
};
var createOperationSpec = {
    httpMethod: "POST",
    path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Insights/components/{resourceName}/ApiKeys",
    urlParameters: [
        Parameters.resourceGroupName,
        Parameters.subscriptionId,
        Parameters.resourceName
    ],
    queryParameters: [
        Parameters.apiVersion
    ],
    headerParameters: [
        Parameters.acceptLanguage
    ],
    requestBody: {
        parameterPath: "aPIKeyProperties",
        mapper: __assign(__assign({}, Mappers.APIKeyRequest), { required: true })
    },
    responses: {
        200: {
            bodyMapper: Mappers.ApplicationInsightsComponentAPIKey
        },
        default: {
            bodyMapper: Mappers.CloudError
        }
    },
    serializer: serializer
};
var deleteMethodOperationSpec = {
    httpMethod: "DELETE",
    path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Insights/components/{resourceName}/APIKeys/{keyId}",
    urlParameters: [
        Parameters.resourceGroupName,
        Parameters.subscriptionId,
        Parameters.resourceName,
        Parameters.keyId
    ],
    queryParameters: [
        Parameters.apiVersion
    ],
    headerParameters: [
        Parameters.acceptLanguage
    ],
    responses: {
        200: {
            bodyMapper: Mappers.ApplicationInsightsComponentAPIKey
        },
        default: {
            bodyMapper: Mappers.CloudError
        }
    },
    serializer: serializer
};
var getOperationSpec = {
    httpMethod: "GET",
    path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Insights/components/{resourceName}/APIKeys/{keyId}",
    urlParameters: [
        Parameters.resourceGroupName,
        Parameters.subscriptionId,
        Parameters.resourceName,
        Parameters.keyId
    ],
    queryParameters: [
        Parameters.apiVersion
    ],
    headerParameters: [
        Parameters.acceptLanguage
    ],
    responses: {
        200: {
            bodyMapper: Mappers.ApplicationInsightsComponentAPIKey
        },
        default: {
            bodyMapper: Mappers.CloudError
        }
    },
    serializer: serializer
};
//# sourceMappingURL=aPIKeys.js.map