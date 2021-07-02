import * as coreAuth from "@azure/core-auth";
import {
  OperationsImpl,
  DeploymentsImpl,
  ProvidersImpl,
  ProviderResourceTypesImpl,
  ResourcesImpl,
  ResourceGroupsImpl,
  TagsOperationsImpl,
  DeploymentOperationsImpl
} from "./operations";
import {
  Operations,
  Deployments,
  Providers,
  ProviderResourceTypes,
  Resources,
  ResourceGroups,
  TagsOperations,
  DeploymentOperations
} from "./operationsInterfaces";
import { ResourceManagementClientContext } from "./resourceManagementClientContext";
import { ResourceManagementClientOptionalParams } from "./models";

export class ResourceManagementClient extends ResourceManagementClientContext {
  /**
   * Initializes a new instance of the ResourceManagementClient class.
   * @param credentials Subscription credentials which uniquely identify client subscription.
   * @param subscriptionId The Microsoft Azure subscription ID.
   * @param options The parameter options
   */
  constructor(
    credentials: coreAuth.TokenCredential,
    subscriptionId: string,
    options?: ResourceManagementClientOptionalParams
  ) {
    super(credentials, subscriptionId, options);
    this.operations = new OperationsImpl(this);
    this.deployments = new DeploymentsImpl(this);
    this.providers = new ProvidersImpl(this);
    this.providerResourceTypes = new ProviderResourceTypesImpl(this);
    this.resources = new ResourcesImpl(this);
    this.resourceGroups = new ResourceGroupsImpl(this);
    this.tagsOperations = new TagsOperationsImpl(this);
    this.deploymentOperations = new DeploymentOperationsImpl(this);
  }

  operations: Operations;
  deployments: Deployments;
  providers: Providers;
  providerResourceTypes: ProviderResourceTypes;
  resources: Resources;
  resourceGroups: ResourceGroups;
  tagsOperations: TagsOperations;
  deploymentOperations: DeploymentOperations;
}
