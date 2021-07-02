import {
  OperationParameter,
  OperationURLParameter,
  OperationQueryParameter
} from "@azure/core-client";
import {
  Deployment as DeploymentMapper,
  ScopedDeployment as ScopedDeploymentMapper,
  ScopedDeploymentWhatIf as ScopedDeploymentWhatIfMapper,
  DeploymentWhatIf as DeploymentWhatIfMapper,
  ProviderRegistrationRequest as ProviderRegistrationRequestMapper,
  ResourcesMoveInfo as ResourcesMoveInfoMapper,
  GenericResource as GenericResourceMapper,
  ResourceGroup as ResourceGroupMapper,
  ResourceGroupPatchable as ResourceGroupPatchableMapper,
  ExportTemplateRequest as ExportTemplateRequestMapper,
  TagsResource as TagsResourceMapper,
  TagsPatchResource as TagsPatchResourceMapper
} from "../models/mappers";

export const accept: OperationParameter = {
  parameterPath: "accept",
  mapper: {
    defaultValue: "application/json",
    isConstant: true,
    serializedName: "Accept",
    type: {
      name: "String"
    }
  }
};

export const $host: OperationURLParameter = {
  parameterPath: "$host",
  mapper: {
    serializedName: "$host",
    required: true,
    type: {
      name: "String"
    }
  },
  skipEncoding: true
};

export const apiVersion: OperationQueryParameter = {
  parameterPath: "apiVersion",
  mapper: {
    defaultValue: "2021-04-01",
    isConstant: true,
    serializedName: "api-version",
    type: {
      name: "String"
    }
  }
};

export const nextLink: OperationURLParameter = {
  parameterPath: "nextLink",
  mapper: {
    serializedName: "nextLink",
    required: true,
    type: {
      name: "String"
    }
  },
  skipEncoding: true
};

export const scope: OperationURLParameter = {
  parameterPath: "scope",
  mapper: {
    serializedName: "scope",
    required: true,
    type: {
      name: "String"
    }
  },
  skipEncoding: true
};

export const deploymentName: OperationURLParameter = {
  parameterPath: "deploymentName",
  mapper: {
    constraints: {
      Pattern: new RegExp("^[-\\w\\._\\(\\)]+$"),
      MaxLength: 64,
      MinLength: 1
    },
    serializedName: "deploymentName",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const contentType: OperationParameter = {
  parameterPath: ["options", "contentType"],
  mapper: {
    defaultValue: "application/json",
    isConstant: true,
    serializedName: "Content-Type",
    type: {
      name: "String"
    }
  }
};

export const parameters: OperationParameter = {
  parameterPath: "parameters",
  mapper: DeploymentMapper
};

export const filter: OperationQueryParameter = {
  parameterPath: ["options", "filter"],
  mapper: {
    serializedName: "$filter",
    type: {
      name: "String"
    }
  }
};

export const top: OperationQueryParameter = {
  parameterPath: ["options", "top"],
  mapper: {
    serializedName: "$top",
    type: {
      name: "Number"
    }
  }
};

export const parameters1: OperationParameter = {
  parameterPath: "parameters",
  mapper: ScopedDeploymentMapper
};

export const parameters2: OperationParameter = {
  parameterPath: "parameters",
  mapper: ScopedDeploymentWhatIfMapper
};

export const groupId: OperationURLParameter = {
  parameterPath: "groupId",
  mapper: {
    constraints: {
      MaxLength: 90,
      MinLength: 1
    },
    serializedName: "groupId",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const subscriptionId: OperationURLParameter = {
  parameterPath: "subscriptionId",
  mapper: {
    serializedName: "subscriptionId",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const parameters3: OperationParameter = {
  parameterPath: "parameters",
  mapper: DeploymentWhatIfMapper
};

export const resourceGroupName: OperationURLParameter = {
  parameterPath: "resourceGroupName",
  mapper: {
    constraints: {
      Pattern: new RegExp("^[-\\w\\._\\(\\)]+$"),
      MaxLength: 90,
      MinLength: 1
    },
    serializedName: "resourceGroupName",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const template: OperationParameter = {
  parameterPath: "template",
  mapper: {
    serializedName: "template",
    required: true,
    type: {
      name: "Dictionary",
      value: { type: { name: "any" } }
    }
  }
};

export const resourceProviderNamespace: OperationURLParameter = {
  parameterPath: "resourceProviderNamespace",
  mapper: {
    serializedName: "resourceProviderNamespace",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const properties: OperationParameter = {
  parameterPath: ["options", "properties"],
  mapper: ProviderRegistrationRequestMapper
};

export const expand: OperationQueryParameter = {
  parameterPath: ["options", "expand"],
  mapper: {
    serializedName: "$expand",
    type: {
      name: "String"
    }
  }
};

export const parameters4: OperationParameter = {
  parameterPath: "parameters",
  mapper: ResourcesMoveInfoMapper
};

export const sourceResourceGroupName: OperationURLParameter = {
  parameterPath: "sourceResourceGroupName",
  mapper: {
    constraints: {
      Pattern: new RegExp("^[-\\w\\._\\(\\)]+$"),
      MaxLength: 90,
      MinLength: 1
    },
    serializedName: "sourceResourceGroupName",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const parentResourcePath: OperationURLParameter = {
  parameterPath: "parentResourcePath",
  mapper: {
    serializedName: "parentResourcePath",
    required: true,
    type: {
      name: "String"
    }
  },
  skipEncoding: true
};

export const resourceType: OperationURLParameter = {
  parameterPath: "resourceType",
  mapper: {
    serializedName: "resourceType",
    required: true,
    type: {
      name: "String"
    }
  },
  skipEncoding: true
};

export const resourceName: OperationURLParameter = {
  parameterPath: "resourceName",
  mapper: {
    serializedName: "resourceName",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const apiVersion1: OperationQueryParameter = {
  parameterPath: "apiVersion",
  mapper: {
    serializedName: "api-version",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const parameters5: OperationParameter = {
  parameterPath: "parameters",
  mapper: GenericResourceMapper
};

export const resourceId: OperationURLParameter = {
  parameterPath: "resourceId",
  mapper: {
    serializedName: "resourceId",
    required: true,
    type: {
      name: "String"
    }
  },
  skipEncoding: true
};

export const parameters6: OperationParameter = {
  parameterPath: "parameters",
  mapper: ResourceGroupMapper
};

export const forceDeletionTypes: OperationQueryParameter = {
  parameterPath: ["options", "forceDeletionTypes"],
  mapper: {
    serializedName: "forceDeletionTypes",
    type: {
      name: "String"
    }
  }
};

export const parameters7: OperationParameter = {
  parameterPath: "parameters",
  mapper: ResourceGroupPatchableMapper
};

export const parameters8: OperationParameter = {
  parameterPath: "parameters",
  mapper: ExportTemplateRequestMapper
};

export const resourceGroupName1: OperationURLParameter = {
  parameterPath: "resourceGroupName",
  mapper: {
    constraints: {
      MaxLength: 90,
      MinLength: 1
    },
    serializedName: "resourceGroupName",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const tagName: OperationURLParameter = {
  parameterPath: "tagName",
  mapper: {
    serializedName: "tagName",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const tagValue: OperationURLParameter = {
  parameterPath: "tagValue",
  mapper: {
    serializedName: "tagValue",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const parameters9: OperationParameter = {
  parameterPath: "parameters",
  mapper: TagsResourceMapper
};

export const parameters10: OperationParameter = {
  parameterPath: "parameters",
  mapper: TagsPatchResourceMapper
};

export const operationId: OperationURLParameter = {
  parameterPath: "operationId",
  mapper: {
    serializedName: "operationId",
    required: true,
    type: {
      name: "String"
    }
  }
};
