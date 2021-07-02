import * as coreClient from "@azure/core-client";

export const OperationListResult: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "OperationListResult",
    modelProperties: {
      value: {
        serializedName: "value",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "Operation"
            }
          }
        }
      },
      nextLink: {
        serializedName: "nextLink",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const Operation: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "Operation",
    modelProperties: {
      name: {
        serializedName: "name",
        type: {
          name: "String"
        }
      },
      display: {
        serializedName: "display",
        type: {
          name: "Composite",
          className: "OperationDisplay"
        }
      }
    }
  }
};

export const OperationDisplay: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "OperationDisplay",
    modelProperties: {
      provider: {
        serializedName: "provider",
        type: {
          name: "String"
        }
      },
      resource: {
        serializedName: "resource",
        type: {
          name: "String"
        }
      },
      operation: {
        serializedName: "operation",
        type: {
          name: "String"
        }
      },
      description: {
        serializedName: "description",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const CloudError: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "CloudError",
    modelProperties: {
      error: {
        serializedName: "error",
        type: {
          name: "Composite",
          className: "ErrorResponse"
        }
      }
    }
  }
};

export const ErrorResponse: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ErrorResponse",
    modelProperties: {
      code: {
        serializedName: "code",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      message: {
        serializedName: "message",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      target: {
        serializedName: "target",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      details: {
        serializedName: "details",
        readOnly: true,
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "ErrorResponse"
            }
          }
        }
      },
      additionalInfo: {
        serializedName: "additionalInfo",
        readOnly: true,
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "ErrorAdditionalInfo"
            }
          }
        }
      }
    }
  }
};

export const ErrorAdditionalInfo: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ErrorAdditionalInfo",
    modelProperties: {
      type: {
        serializedName: "type",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      info: {
        serializedName: "info",
        readOnly: true,
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      }
    }
  }
};

export const Deployment: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "Deployment",
    modelProperties: {
      location: {
        serializedName: "location",
        type: {
          name: "String"
        }
      },
      properties: {
        serializedName: "properties",
        type: {
          name: "Composite",
          className: "DeploymentProperties"
        }
      },
      tags: {
        serializedName: "tags",
        type: {
          name: "Dictionary",
          value: { type: { name: "String" } }
        }
      }
    }
  }
};

export const DeploymentProperties: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "DeploymentProperties",
    modelProperties: {
      template: {
        serializedName: "template",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      templateLink: {
        serializedName: "templateLink",
        type: {
          name: "Composite",
          className: "TemplateLink"
        }
      },
      parameters: {
        serializedName: "parameters",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      parametersLink: {
        serializedName: "parametersLink",
        type: {
          name: "Composite",
          className: "ParametersLink"
        }
      },
      mode: {
        serializedName: "mode",
        required: true,
        type: {
          name: "Enum",
          allowedValues: ["Incremental", "Complete"]
        }
      },
      debugSetting: {
        serializedName: "debugSetting",
        type: {
          name: "Composite",
          className: "DebugSetting"
        }
      },
      onErrorDeployment: {
        serializedName: "onErrorDeployment",
        type: {
          name: "Composite",
          className: "OnErrorDeployment"
        }
      },
      expressionEvaluationOptions: {
        serializedName: "expressionEvaluationOptions",
        type: {
          name: "Composite",
          className: "ExpressionEvaluationOptions"
        }
      }
    }
  }
};

export const TemplateLink: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "TemplateLink",
    modelProperties: {
      uri: {
        serializedName: "uri",
        type: {
          name: "String"
        }
      },
      id: {
        serializedName: "id",
        type: {
          name: "String"
        }
      },
      relativePath: {
        serializedName: "relativePath",
        type: {
          name: "String"
        }
      },
      contentVersion: {
        serializedName: "contentVersion",
        type: {
          name: "String"
        }
      },
      queryString: {
        serializedName: "queryString",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const ParametersLink: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ParametersLink",
    modelProperties: {
      uri: {
        serializedName: "uri",
        required: true,
        type: {
          name: "String"
        }
      },
      contentVersion: {
        serializedName: "contentVersion",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const DebugSetting: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "DebugSetting",
    modelProperties: {
      detailLevel: {
        serializedName: "detailLevel",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const OnErrorDeployment: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "OnErrorDeployment",
    modelProperties: {
      type: {
        serializedName: "type",
        type: {
          name: "Enum",
          allowedValues: ["LastSuccessful", "SpecificDeployment"]
        }
      },
      deploymentName: {
        serializedName: "deploymentName",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const ExpressionEvaluationOptions: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ExpressionEvaluationOptions",
    modelProperties: {
      scope: {
        serializedName: "scope",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const DeploymentExtended: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "DeploymentExtended",
    modelProperties: {
      id: {
        serializedName: "id",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      name: {
        serializedName: "name",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      type: {
        serializedName: "type",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      location: {
        serializedName: "location",
        type: {
          name: "String"
        }
      },
      properties: {
        serializedName: "properties",
        type: {
          name: "Composite",
          className: "DeploymentPropertiesExtended"
        }
      },
      tags: {
        serializedName: "tags",
        type: {
          name: "Dictionary",
          value: { type: { name: "String" } }
        }
      }
    }
  }
};

export const DeploymentPropertiesExtended: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "DeploymentPropertiesExtended",
    modelProperties: {
      provisioningState: {
        serializedName: "provisioningState",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      correlationId: {
        serializedName: "correlationId",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      timestamp: {
        serializedName: "timestamp",
        readOnly: true,
        type: {
          name: "DateTime"
        }
      },
      duration: {
        serializedName: "duration",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      outputs: {
        serializedName: "outputs",
        readOnly: true,
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      providers: {
        serializedName: "providers",
        readOnly: true,
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "Provider"
            }
          }
        }
      },
      dependencies: {
        serializedName: "dependencies",
        readOnly: true,
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "Dependency"
            }
          }
        }
      },
      templateLink: {
        serializedName: "templateLink",
        type: {
          name: "Composite",
          className: "TemplateLink"
        }
      },
      parameters: {
        serializedName: "parameters",
        readOnly: true,
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      parametersLink: {
        serializedName: "parametersLink",
        type: {
          name: "Composite",
          className: "ParametersLink"
        }
      },
      mode: {
        serializedName: "mode",
        readOnly: true,
        type: {
          name: "Enum",
          allowedValues: ["Incremental", "Complete"]
        }
      },
      debugSetting: {
        serializedName: "debugSetting",
        type: {
          name: "Composite",
          className: "DebugSetting"
        }
      },
      onErrorDeployment: {
        serializedName: "onErrorDeployment",
        type: {
          name: "Composite",
          className: "OnErrorDeploymentExtended"
        }
      },
      templateHash: {
        serializedName: "templateHash",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      outputResources: {
        serializedName: "outputResources",
        readOnly: true,
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "ResourceReference"
            }
          }
        }
      },
      validatedResources: {
        serializedName: "validatedResources",
        readOnly: true,
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "ResourceReference"
            }
          }
        }
      },
      error: {
        serializedName: "error",
        type: {
          name: "Composite",
          className: "ErrorResponse"
        }
      }
    }
  }
};

export const Provider: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "Provider",
    modelProperties: {
      id: {
        serializedName: "id",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      namespace: {
        serializedName: "namespace",
        type: {
          name: "String"
        }
      },
      registrationState: {
        serializedName: "registrationState",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      registrationPolicy: {
        serializedName: "registrationPolicy",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      resourceTypes: {
        serializedName: "resourceTypes",
        readOnly: true,
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "ProviderResourceType"
            }
          }
        }
      },
      providerAuthorizationConsentState: {
        serializedName: "providerAuthorizationConsentState",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const ProviderResourceType: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ProviderResourceType",
    modelProperties: {
      resourceType: {
        serializedName: "resourceType",
        type: {
          name: "String"
        }
      },
      locations: {
        serializedName: "locations",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "String"
            }
          }
        }
      },
      locationMappings: {
        serializedName: "locationMappings",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "ProviderExtendedLocation"
            }
          }
        }
      },
      aliases: {
        serializedName: "aliases",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "Alias"
            }
          }
        }
      },
      apiVersions: {
        serializedName: "apiVersions",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "String"
            }
          }
        }
      },
      defaultApiVersion: {
        serializedName: "defaultApiVersion",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      apiProfiles: {
        serializedName: "apiProfiles",
        readOnly: true,
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "ApiProfile"
            }
          }
        }
      },
      capabilities: {
        serializedName: "capabilities",
        type: {
          name: "String"
        }
      },
      properties: {
        serializedName: "properties",
        type: {
          name: "Dictionary",
          value: { type: { name: "String" } }
        }
      }
    }
  }
};

export const ProviderExtendedLocation: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ProviderExtendedLocation",
    modelProperties: {
      location: {
        serializedName: "location",
        type: {
          name: "String"
        }
      },
      type: {
        serializedName: "type",
        type: {
          name: "String"
        }
      },
      extendedLocations: {
        serializedName: "extendedLocations",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "String"
            }
          }
        }
      }
    }
  }
};

export const Alias: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "Alias",
    modelProperties: {
      name: {
        serializedName: "name",
        type: {
          name: "String"
        }
      },
      paths: {
        serializedName: "paths",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "AliasPath"
            }
          }
        }
      },
      type: {
        serializedName: "type",
        type: {
          name: "Enum",
          allowedValues: ["NotSpecified", "PlainText", "Mask"]
        }
      },
      defaultPath: {
        serializedName: "defaultPath",
        type: {
          name: "String"
        }
      },
      defaultPattern: {
        serializedName: "defaultPattern",
        type: {
          name: "Composite",
          className: "AliasPattern"
        }
      },
      defaultMetadata: {
        serializedName: "defaultMetadata",
        type: {
          name: "Composite",
          className: "AliasPathMetadata"
        }
      }
    }
  }
};

export const AliasPath: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "AliasPath",
    modelProperties: {
      path: {
        serializedName: "path",
        type: {
          name: "String"
        }
      },
      apiVersions: {
        serializedName: "apiVersions",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "String"
            }
          }
        }
      },
      pattern: {
        serializedName: "pattern",
        type: {
          name: "Composite",
          className: "AliasPattern"
        }
      },
      metadata: {
        serializedName: "metadata",
        type: {
          name: "Composite",
          className: "AliasPathMetadata"
        }
      }
    }
  }
};

export const AliasPattern: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "AliasPattern",
    modelProperties: {
      phrase: {
        serializedName: "phrase",
        type: {
          name: "String"
        }
      },
      variable: {
        serializedName: "variable",
        type: {
          name: "String"
        }
      },
      type: {
        serializedName: "type",
        type: {
          name: "Enum",
          allowedValues: ["NotSpecified", "Extract"]
        }
      }
    }
  }
};

export const AliasPathMetadata: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "AliasPathMetadata",
    modelProperties: {
      type: {
        serializedName: "type",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      attributes: {
        serializedName: "attributes",
        readOnly: true,
        type: {
          name: "String"
        }
      }
    }
  }
};

export const ApiProfile: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ApiProfile",
    modelProperties: {
      profileVersion: {
        serializedName: "profileVersion",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      apiVersion: {
        serializedName: "apiVersion",
        readOnly: true,
        type: {
          name: "String"
        }
      }
    }
  }
};

export const Dependency: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "Dependency",
    modelProperties: {
      dependsOn: {
        serializedName: "dependsOn",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "BasicDependency"
            }
          }
        }
      },
      id: {
        serializedName: "id",
        type: {
          name: "String"
        }
      },
      resourceType: {
        serializedName: "resourceType",
        type: {
          name: "String"
        }
      },
      resourceName: {
        serializedName: "resourceName",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const BasicDependency: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "BasicDependency",
    modelProperties: {
      id: {
        serializedName: "id",
        type: {
          name: "String"
        }
      },
      resourceType: {
        serializedName: "resourceType",
        type: {
          name: "String"
        }
      },
      resourceName: {
        serializedName: "resourceName",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const OnErrorDeploymentExtended: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "OnErrorDeploymentExtended",
    modelProperties: {
      provisioningState: {
        serializedName: "provisioningState",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      type: {
        serializedName: "type",
        type: {
          name: "Enum",
          allowedValues: ["LastSuccessful", "SpecificDeployment"]
        }
      },
      deploymentName: {
        serializedName: "deploymentName",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const ResourceReference: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ResourceReference",
    modelProperties: {
      id: {
        serializedName: "id",
        readOnly: true,
        type: {
          name: "String"
        }
      }
    }
  }
};

export const DeploymentValidateResult: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "DeploymentValidateResult",
    modelProperties: {
      error: {
        serializedName: "error",
        type: {
          name: "Composite",
          className: "ErrorResponse"
        }
      },
      properties: {
        serializedName: "properties",
        type: {
          name: "Composite",
          className: "DeploymentPropertiesExtended"
        }
      }
    }
  }
};

export const DeploymentExportResult: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "DeploymentExportResult",
    modelProperties: {
      template: {
        serializedName: "template",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      }
    }
  }
};

export const DeploymentListResult: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "DeploymentListResult",
    modelProperties: {
      value: {
        serializedName: "value",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "DeploymentExtended"
            }
          }
        }
      },
      nextLink: {
        serializedName: "nextLink",
        readOnly: true,
        type: {
          name: "String"
        }
      }
    }
  }
};

export const ScopedDeployment: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ScopedDeployment",
    modelProperties: {
      location: {
        serializedName: "location",
        required: true,
        type: {
          name: "String"
        }
      },
      properties: {
        serializedName: "properties",
        type: {
          name: "Composite",
          className: "DeploymentProperties"
        }
      },
      tags: {
        serializedName: "tags",
        type: {
          name: "Dictionary",
          value: { type: { name: "String" } }
        }
      }
    }
  }
};

export const ScopedDeploymentWhatIf: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ScopedDeploymentWhatIf",
    modelProperties: {
      location: {
        serializedName: "location",
        required: true,
        type: {
          name: "String"
        }
      },
      properties: {
        serializedName: "properties",
        type: {
          name: "Composite",
          className: "DeploymentWhatIfProperties"
        }
      }
    }
  }
};

export const DeploymentWhatIfSettings: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "DeploymentWhatIfSettings",
    modelProperties: {
      resultFormat: {
        serializedName: "resultFormat",
        type: {
          name: "Enum",
          allowedValues: ["ResourceIdOnly", "FullResourcePayloads"]
        }
      }
    }
  }
};

export const WhatIfOperationResult: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "WhatIfOperationResult",
    modelProperties: {
      status: {
        serializedName: "status",
        type: {
          name: "String"
        }
      },
      error: {
        serializedName: "error",
        type: {
          name: "Composite",
          className: "ErrorResponse"
        }
      },
      changes: {
        serializedName: "properties.changes",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "WhatIfChange"
            }
          }
        }
      }
    }
  }
};

export const WhatIfChange: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "WhatIfChange",
    modelProperties: {
      resourceId: {
        serializedName: "resourceId",
        required: true,
        type: {
          name: "String"
        }
      },
      changeType: {
        serializedName: "changeType",
        required: true,
        type: {
          name: "Enum",
          allowedValues: [
            "Create",
            "Delete",
            "Ignore",
            "Deploy",
            "NoChange",
            "Modify",
            "Unsupported"
          ]
        }
      },
      unsupportedReason: {
        serializedName: "unsupportedReason",
        type: {
          name: "String"
        }
      },
      before: {
        serializedName: "before",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      after: {
        serializedName: "after",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      delta: {
        serializedName: "delta",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "WhatIfPropertyChange"
            }
          }
        }
      }
    }
  }
};

export const WhatIfPropertyChange: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "WhatIfPropertyChange",
    modelProperties: {
      path: {
        serializedName: "path",
        required: true,
        type: {
          name: "String"
        }
      },
      propertyChangeType: {
        serializedName: "propertyChangeType",
        required: true,
        type: {
          name: "Enum",
          allowedValues: ["Create", "Delete", "Modify", "Array", "NoEffect"]
        }
      },
      before: {
        serializedName: "before",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      after: {
        serializedName: "after",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      children: {
        serializedName: "children",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "WhatIfPropertyChange"
            }
          }
        }
      }
    }
  }
};

export const DeploymentWhatIf: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "DeploymentWhatIf",
    modelProperties: {
      location: {
        serializedName: "location",
        type: {
          name: "String"
        }
      },
      properties: {
        serializedName: "properties",
        type: {
          name: "Composite",
          className: "DeploymentWhatIfProperties"
        }
      }
    }
  }
};

export const ProviderPermissionListResult: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ProviderPermissionListResult",
    modelProperties: {
      value: {
        serializedName: "value",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "ProviderPermission"
            }
          }
        }
      },
      nextLink: {
        serializedName: "nextLink",
        readOnly: true,
        type: {
          name: "String"
        }
      }
    }
  }
};

export const ProviderPermission: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ProviderPermission",
    modelProperties: {
      applicationId: {
        serializedName: "applicationId",
        type: {
          name: "String"
        }
      },
      roleDefinition: {
        serializedName: "roleDefinition",
        type: {
          name: "Composite",
          className: "RoleDefinition"
        }
      },
      managedByRoleDefinition: {
        serializedName: "managedByRoleDefinition",
        type: {
          name: "Composite",
          className: "RoleDefinition"
        }
      },
      providerAuthorizationConsentState: {
        serializedName: "providerAuthorizationConsentState",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const RoleDefinition: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "RoleDefinition",
    modelProperties: {
      id: {
        serializedName: "id",
        type: {
          name: "String"
        }
      },
      name: {
        serializedName: "name",
        type: {
          name: "String"
        }
      },
      isServiceRole: {
        serializedName: "isServiceRole",
        type: {
          name: "Boolean"
        }
      },
      permissions: {
        serializedName: "permissions",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "Permission"
            }
          }
        }
      },
      scopes: {
        serializedName: "scopes",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "String"
            }
          }
        }
      }
    }
  }
};

export const Permission: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "Permission",
    modelProperties: {
      actions: {
        serializedName: "actions",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "String"
            }
          }
        }
      },
      notActions: {
        serializedName: "notActions",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "String"
            }
          }
        }
      },
      dataActions: {
        serializedName: "dataActions",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "String"
            }
          }
        }
      },
      notDataActions: {
        serializedName: "notDataActions",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "String"
            }
          }
        }
      }
    }
  }
};

export const ProviderRegistrationRequest: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ProviderRegistrationRequest",
    modelProperties: {
      thirdPartyProviderConsent: {
        serializedName: "thirdPartyProviderConsent",
        type: {
          name: "Composite",
          className: "ProviderConsentDefinition"
        }
      }
    }
  }
};

export const ProviderConsentDefinition: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ProviderConsentDefinition",
    modelProperties: {
      consentToAuthorization: {
        serializedName: "consentToAuthorization",
        type: {
          name: "Boolean"
        }
      }
    }
  }
};

export const ProviderListResult: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ProviderListResult",
    modelProperties: {
      value: {
        serializedName: "value",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "Provider"
            }
          }
        }
      },
      nextLink: {
        serializedName: "nextLink",
        readOnly: true,
        type: {
          name: "String"
        }
      }
    }
  }
};

export const ProviderResourceTypeListResult: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ProviderResourceTypeListResult",
    modelProperties: {
      value: {
        serializedName: "value",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "ProviderResourceType"
            }
          }
        }
      },
      nextLink: {
        serializedName: "nextLink",
        readOnly: true,
        type: {
          name: "String"
        }
      }
    }
  }
};

export const ResourceListResult: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ResourceListResult",
    modelProperties: {
      value: {
        serializedName: "value",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "GenericResourceExpanded"
            }
          }
        }
      },
      nextLink: {
        serializedName: "nextLink",
        readOnly: true,
        type: {
          name: "String"
        }
      }
    }
  }
};

export const Resource: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "Resource",
    modelProperties: {
      id: {
        serializedName: "id",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      name: {
        serializedName: "name",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      type: {
        serializedName: "type",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      location: {
        serializedName: "location",
        type: {
          name: "String"
        }
      },
      extendedLocation: {
        serializedName: "extendedLocation",
        type: {
          name: "Composite",
          className: "ExtendedLocation"
        }
      },
      tags: {
        serializedName: "tags",
        type: {
          name: "Dictionary",
          value: { type: { name: "String" } }
        }
      }
    }
  }
};

export const ExtendedLocation: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ExtendedLocation",
    modelProperties: {
      type: {
        serializedName: "type",
        type: {
          name: "String"
        }
      },
      name: {
        serializedName: "name",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const Plan: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "Plan",
    modelProperties: {
      name: {
        serializedName: "name",
        type: {
          name: "String"
        }
      },
      publisher: {
        serializedName: "publisher",
        type: {
          name: "String"
        }
      },
      product: {
        serializedName: "product",
        type: {
          name: "String"
        }
      },
      promotionCode: {
        serializedName: "promotionCode",
        type: {
          name: "String"
        }
      },
      version: {
        serializedName: "version",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const Sku: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "Sku",
    modelProperties: {
      name: {
        serializedName: "name",
        type: {
          name: "String"
        }
      },
      tier: {
        serializedName: "tier",
        type: {
          name: "String"
        }
      },
      size: {
        serializedName: "size",
        type: {
          name: "String"
        }
      },
      family: {
        serializedName: "family",
        type: {
          name: "String"
        }
      },
      model: {
        serializedName: "model",
        type: {
          name: "String"
        }
      },
      capacity: {
        serializedName: "capacity",
        type: {
          name: "Number"
        }
      }
    }
  }
};

export const Identity: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "Identity",
    modelProperties: {
      principalId: {
        serializedName: "principalId",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      tenantId: {
        serializedName: "tenantId",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      type: {
        serializedName: "type",
        type: {
          name: "Enum",
          allowedValues: [
            "SystemAssigned",
            "UserAssigned",
            "SystemAssigned, UserAssigned",
            "None"
          ]
        }
      },
      userAssignedIdentities: {
        serializedName: "userAssignedIdentities",
        type: {
          name: "Dictionary",
          value: {
            type: {
              name: "Composite",
              className: "IdentityUserAssignedIdentitiesValue"
            }
          }
        }
      }
    }
  }
};

export const IdentityUserAssignedIdentitiesValue: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "IdentityUserAssignedIdentitiesValue",
    modelProperties: {
      principalId: {
        serializedName: "principalId",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      clientId: {
        serializedName: "clientId",
        readOnly: true,
        type: {
          name: "String"
        }
      }
    }
  }
};

export const ResourceGroup: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ResourceGroup",
    modelProperties: {
      id: {
        serializedName: "id",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      name: {
        serializedName: "name",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      type: {
        serializedName: "type",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      properties: {
        serializedName: "properties",
        type: {
          name: "Composite",
          className: "ResourceGroupProperties"
        }
      },
      location: {
        serializedName: "location",
        required: true,
        type: {
          name: "String"
        }
      },
      managedBy: {
        serializedName: "managedBy",
        type: {
          name: "String"
        }
      },
      tags: {
        serializedName: "tags",
        type: {
          name: "Dictionary",
          value: { type: { name: "String" } }
        }
      }
    }
  }
};

export const ResourceGroupProperties: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ResourceGroupProperties",
    modelProperties: {
      provisioningState: {
        serializedName: "provisioningState",
        readOnly: true,
        type: {
          name: "String"
        }
      }
    }
  }
};

export const ResourceGroupPatchable: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ResourceGroupPatchable",
    modelProperties: {
      name: {
        serializedName: "name",
        type: {
          name: "String"
        }
      },
      properties: {
        serializedName: "properties",
        type: {
          name: "Composite",
          className: "ResourceGroupProperties"
        }
      },
      managedBy: {
        serializedName: "managedBy",
        type: {
          name: "String"
        }
      },
      tags: {
        serializedName: "tags",
        type: {
          name: "Dictionary",
          value: { type: { name: "String" } }
        }
      }
    }
  }
};

export const ExportTemplateRequest: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ExportTemplateRequest",
    modelProperties: {
      resources: {
        serializedName: "resources",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "String"
            }
          }
        }
      },
      options: {
        serializedName: "options",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const ResourceGroupExportResult: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ResourceGroupExportResult",
    modelProperties: {
      template: {
        serializedName: "template",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      error: {
        serializedName: "error",
        type: {
          name: "Composite",
          className: "ErrorResponse"
        }
      }
    }
  }
};

export const ResourceGroupListResult: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ResourceGroupListResult",
    modelProperties: {
      value: {
        serializedName: "value",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "ResourceGroup"
            }
          }
        }
      },
      nextLink: {
        serializedName: "nextLink",
        readOnly: true,
        type: {
          name: "String"
        }
      }
    }
  }
};

export const ResourcesMoveInfo: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ResourcesMoveInfo",
    modelProperties: {
      resources: {
        serializedName: "resources",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "String"
            }
          }
        }
      },
      targetResourceGroup: {
        serializedName: "targetResourceGroup",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const TagValue: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "TagValue",
    modelProperties: {
      id: {
        serializedName: "id",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      tagValue: {
        serializedName: "tagValue",
        type: {
          name: "String"
        }
      },
      count: {
        serializedName: "count",
        type: {
          name: "Composite",
          className: "TagCount"
        }
      }
    }
  }
};

export const TagCount: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "TagCount",
    modelProperties: {
      type: {
        serializedName: "type",
        type: {
          name: "String"
        }
      },
      value: {
        serializedName: "value",
        type: {
          name: "Number"
        }
      }
    }
  }
};

export const TagDetails: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "TagDetails",
    modelProperties: {
      id: {
        serializedName: "id",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      tagName: {
        serializedName: "tagName",
        type: {
          name: "String"
        }
      },
      count: {
        serializedName: "count",
        type: {
          name: "Composite",
          className: "TagCount"
        }
      },
      values: {
        serializedName: "values",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "TagValue"
            }
          }
        }
      }
    }
  }
};

export const TagsListResult: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "TagsListResult",
    modelProperties: {
      value: {
        serializedName: "value",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "TagDetails"
            }
          }
        }
      },
      nextLink: {
        serializedName: "nextLink",
        readOnly: true,
        type: {
          name: "String"
        }
      }
    }
  }
};

export const DeploymentOperation: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "DeploymentOperation",
    modelProperties: {
      id: {
        serializedName: "id",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      operationId: {
        serializedName: "operationId",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      properties: {
        serializedName: "properties",
        type: {
          name: "Composite",
          className: "DeploymentOperationProperties"
        }
      }
    }
  }
};

export const DeploymentOperationProperties: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "DeploymentOperationProperties",
    modelProperties: {
      provisioningOperation: {
        serializedName: "provisioningOperation",
        readOnly: true,
        type: {
          name: "Enum",
          allowedValues: [
            "NotSpecified",
            "Create",
            "Delete",
            "Waiting",
            "AzureAsyncOperationWaiting",
            "ResourceCacheWaiting",
            "Action",
            "Read",
            "EvaluateDeploymentOutput",
            "DeploymentCleanup"
          ]
        }
      },
      provisioningState: {
        serializedName: "provisioningState",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      timestamp: {
        serializedName: "timestamp",
        readOnly: true,
        type: {
          name: "DateTime"
        }
      },
      duration: {
        serializedName: "duration",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      serviceRequestId: {
        serializedName: "serviceRequestId",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      statusCode: {
        serializedName: "statusCode",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      statusMessage: {
        serializedName: "statusMessage",
        type: {
          name: "Composite",
          className: "StatusMessage"
        }
      },
      targetResource: {
        serializedName: "targetResource",
        type: {
          name: "Composite",
          className: "TargetResource"
        }
      },
      request: {
        serializedName: "request",
        type: {
          name: "Composite",
          className: "HttpMessage"
        }
      },
      response: {
        serializedName: "response",
        type: {
          name: "Composite",
          className: "HttpMessage"
        }
      }
    }
  }
};

export const StatusMessage: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "StatusMessage",
    modelProperties: {
      status: {
        serializedName: "status",
        type: {
          name: "String"
        }
      },
      error: {
        serializedName: "error",
        type: {
          name: "Composite",
          className: "ErrorResponse"
        }
      }
    }
  }
};

export const TargetResource: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "TargetResource",
    modelProperties: {
      id: {
        serializedName: "id",
        type: {
          name: "String"
        }
      },
      resourceName: {
        serializedName: "resourceName",
        type: {
          name: "String"
        }
      },
      resourceType: {
        serializedName: "resourceType",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const HttpMessage: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "HttpMessage",
    modelProperties: {
      content: {
        serializedName: "content",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      }
    }
  }
};

export const DeploymentOperationsListResult: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "DeploymentOperationsListResult",
    modelProperties: {
      value: {
        serializedName: "value",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "DeploymentOperation"
            }
          }
        }
      },
      nextLink: {
        serializedName: "nextLink",
        readOnly: true,
        type: {
          name: "String"
        }
      }
    }
  }
};

export const TemplateHashResult: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "TemplateHashResult",
    modelProperties: {
      minifiedTemplate: {
        serializedName: "minifiedTemplate",
        type: {
          name: "String"
        }
      },
      templateHash: {
        serializedName: "templateHash",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const TagsResource: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "TagsResource",
    modelProperties: {
      id: {
        serializedName: "id",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      name: {
        serializedName: "name",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      type: {
        serializedName: "type",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      properties: {
        serializedName: "properties",
        type: {
          name: "Composite",
          className: "Tags"
        }
      }
    }
  }
};

export const Tags: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "Tags",
    modelProperties: {
      tags: {
        serializedName: "tags",
        type: {
          name: "Dictionary",
          value: { type: { name: "String" } }
        }
      }
    }
  }
};

export const TagsPatchResource: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "TagsPatchResource",
    modelProperties: {
      operation: {
        serializedName: "operation",
        type: {
          name: "String"
        }
      },
      properties: {
        serializedName: "properties",
        type: {
          name: "Composite",
          className: "Tags"
        }
      }
    }
  }
};

export const DeploymentExtendedFilter: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "DeploymentExtendedFilter",
    modelProperties: {
      provisioningState: {
        serializedName: "provisioningState",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const GenericResourceFilter: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "GenericResourceFilter",
    modelProperties: {
      resourceType: {
        serializedName: "resourceType",
        type: {
          name: "String"
        }
      },
      tagname: {
        serializedName: "tagname",
        type: {
          name: "String"
        }
      },
      tagvalue: {
        serializedName: "tagvalue",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const ResourceGroupFilter: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ResourceGroupFilter",
    modelProperties: {
      tagName: {
        serializedName: "tagName",
        type: {
          name: "String"
        }
      },
      tagValue: {
        serializedName: "tagValue",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const ResourceProviderOperationDisplayProperties: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ResourceProviderOperationDisplayProperties",
    modelProperties: {
      publisher: {
        serializedName: "publisher",
        type: {
          name: "String"
        }
      },
      provider: {
        serializedName: "provider",
        type: {
          name: "String"
        }
      },
      resource: {
        serializedName: "resource",
        type: {
          name: "String"
        }
      },
      operation: {
        serializedName: "operation",
        type: {
          name: "String"
        }
      },
      description: {
        serializedName: "description",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const SubResource: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "SubResource",
    modelProperties: {
      id: {
        serializedName: "id",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const DeploymentWhatIfProperties: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "DeploymentWhatIfProperties",
    modelProperties: {
      ...DeploymentProperties.type.modelProperties,
      whatIfSettings: {
        serializedName: "whatIfSettings",
        type: {
          name: "Composite",
          className: "DeploymentWhatIfSettings"
        }
      }
    }
  }
};

export const GenericResource: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "GenericResource",
    modelProperties: {
      ...Resource.type.modelProperties,
      plan: {
        serializedName: "plan",
        type: {
          name: "Composite",
          className: "Plan"
        }
      },
      properties: {
        serializedName: "properties",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      kind: {
        constraints: {
          Pattern: new RegExp("^[-\\w\\._,\\(\\)]+$")
        },
        serializedName: "kind",
        type: {
          name: "String"
        }
      },
      managedBy: {
        serializedName: "managedBy",
        type: {
          name: "String"
        }
      },
      sku: {
        serializedName: "sku",
        type: {
          name: "Composite",
          className: "Sku"
        }
      },
      identity: {
        serializedName: "identity",
        type: {
          name: "Composite",
          className: "Identity"
        }
      }
    }
  }
};

export const GenericResourceExpanded: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "GenericResourceExpanded",
    modelProperties: {
      ...GenericResource.type.modelProperties,
      createdTime: {
        serializedName: "createdTime",
        readOnly: true,
        type: {
          name: "DateTime"
        }
      },
      changedTime: {
        serializedName: "changedTime",
        readOnly: true,
        type: {
          name: "DateTime"
        }
      },
      provisioningState: {
        serializedName: "provisioningState",
        readOnly: true,
        type: {
          name: "String"
        }
      }
    }
  }
};

export const DeploymentsWhatIfAtTenantScopeHeaders: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "DeploymentsWhatIfAtTenantScopeHeaders",
    modelProperties: {
      location: {
        serializedName: "location",
        type: {
          name: "String"
        }
      },
      retryAfter: {
        serializedName: "retry-after",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const DeploymentsWhatIfAtManagementGroupScopeHeaders: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "DeploymentsWhatIfAtManagementGroupScopeHeaders",
    modelProperties: {
      location: {
        serializedName: "location",
        type: {
          name: "String"
        }
      },
      retryAfter: {
        serializedName: "retry-after",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const DeploymentsWhatIfAtSubscriptionScopeHeaders: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "DeploymentsWhatIfAtSubscriptionScopeHeaders",
    modelProperties: {
      location: {
        serializedName: "location",
        type: {
          name: "String"
        }
      },
      retryAfter: {
        serializedName: "retry-after",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const DeploymentsWhatIfHeaders: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "DeploymentsWhatIfHeaders",
    modelProperties: {
      location: {
        serializedName: "location",
        type: {
          name: "String"
        }
      },
      retryAfter: {
        serializedName: "retry-after",
        type: {
          name: "String"
        }
      }
    }
  }
};
