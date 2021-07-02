import * as coreClient from "@azure/core-client";

/** Result of the request to list Microsoft.Resources operations. It contains a list of operations and a URL link to get the next set of results. */
export interface OperationListResult {
  /** List of Microsoft.Resources operations. */
  value?: Operation[];
  /** URL to get the next set of operation list results if there are any. */
  nextLink?: string;
}

/** Microsoft.Resources operation */
export interface Operation {
  /** Operation name: {provider}/{resource}/{operation} */
  name?: string;
  /** The object that represents the operation. */
  display?: OperationDisplay;
}

/** The object that represents the operation. */
export interface OperationDisplay {
  /** Service provider: Microsoft.Resources */
  provider?: string;
  /** Resource on which the operation is performed: Profile, endpoint, etc. */
  resource?: string;
  /** Operation type: Read, write, delete, etc. */
  operation?: string;
  /** Description of the operation. */
  description?: string;
}

/** An error response for a resource management request. */
export interface CloudError {
  /** Common error response for all Azure Resource Manager APIs to return error details for failed operations. (This also follows the OData error response format.) */
  error?: ErrorResponse;
}

/** Common error response for all Azure Resource Manager APIs to return error details for failed operations. (This also follows the OData error response format.) */
export interface ErrorResponse {
  /**
   * The error code.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly code?: string;
  /**
   * The error message.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly message?: string;
  /**
   * The error target.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly target?: string;
  /**
   * The error details.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly details?: ErrorResponse[];
  /**
   * The error additional info.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly additionalInfo?: ErrorAdditionalInfo[];
}

/** The resource management error additional info. */
export interface ErrorAdditionalInfo {
  /**
   * The additional info type.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly type?: string;
  /**
   * The additional info.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly info?: Record<string, unknown>;
}

/** Deployment operation parameters. */
export interface Deployment {
  /** The location to store the deployment data. */
  location?: string;
  /** The deployment properties. */
  properties: DeploymentProperties;
  /** Deployment tags */
  tags?: { [propertyName: string]: string };
}

/** Deployment properties. */
export interface DeploymentProperties {
  /** The template content. You use this element when you want to pass the template syntax directly in the request rather than link to an existing template. It can be a JObject or well-formed JSON string. Use either the templateLink property or the template property, but not both. */
  template?: Record<string, unknown>;
  /** The URI of the template. Use either the templateLink property or the template property, but not both. */
  templateLink?: TemplateLink;
  /** Name and value pairs that define the deployment parameters for the template. You use this element when you want to provide the parameter values directly in the request rather than link to an existing parameter file. Use either the parametersLink property or the parameters property, but not both. It can be a JObject or a well formed JSON string. */
  parameters?: Record<string, unknown>;
  /** The URI of parameters file. You use this element to link to an existing parameters file. Use either the parametersLink property or the parameters property, but not both. */
  parametersLink?: ParametersLink;
  /** The mode that is used to deploy resources. This value can be either Incremental or Complete. In Incremental mode, resources are deployed without deleting existing resources that are not included in the template. In Complete mode, resources are deployed and existing resources in the resource group that are not included in the template are deleted. Be careful when using Complete mode as you may unintentionally delete resources. */
  mode: DeploymentMode;
  /** The debug setting of the deployment. */
  debugSetting?: DebugSetting;
  /** The deployment on error behavior. */
  onErrorDeployment?: OnErrorDeployment;
  /** Specifies whether template expressions are evaluated within the scope of the parent template or nested template. Only applicable to nested templates. If not specified, default value is outer. */
  expressionEvaluationOptions?: ExpressionEvaluationOptions;
}

/** Entity representing the reference to the template. */
export interface TemplateLink {
  /** The URI of the template to deploy. Use either the uri or id property, but not both. */
  uri?: string;
  /** The resource id of a Template Spec. Use either the id or uri property, but not both. */
  id?: string;
  /** The relativePath property can be used to deploy a linked template at a location relative to the parent. If the parent template was linked with a TemplateSpec, this will reference an artifact in the TemplateSpec.  If the parent was linked with a URI, the child deployment will be a combination of the parent and relativePath URIs */
  relativePath?: string;
  /** If included, must match the ContentVersion in the template. */
  contentVersion?: string;
  /** The query string (for example, a SAS token) to be used with the templateLink URI. */
  queryString?: string;
}

/** Entity representing the reference to the deployment parameters. */
export interface ParametersLink {
  /** The URI of the parameters file. */
  uri: string;
  /** If included, must match the ContentVersion in the template. */
  contentVersion?: string;
}

/** The debug setting. */
export interface DebugSetting {
  /** Specifies the type of information to log for debugging. The permitted values are none, requestContent, responseContent, or both requestContent and responseContent separated by a comma. The default is none. When setting this value, carefully consider the type of information you are passing in during deployment. By logging information about the request or response, you could potentially expose sensitive data that is retrieved through the deployment operations. */
  detailLevel?: string;
}

/** Deployment on error behavior. */
export interface OnErrorDeployment {
  /** The deployment on error behavior type. Possible values are LastSuccessful and SpecificDeployment. */
  type?: OnErrorDeploymentType;
  /** The deployment to be used on error case. */
  deploymentName?: string;
}

/** Specifies whether template expressions are evaluated within the scope of the parent template or nested template. */
export interface ExpressionEvaluationOptions {
  /** The scope to be used for evaluation of parameters, variables and functions in a nested template. */
  scope?: ExpressionEvaluationOptionsScopeType;
}

/** Deployment information. */
export interface DeploymentExtended {
  /**
   * The ID of the deployment.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly id?: string;
  /**
   * The name of the deployment.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly name?: string;
  /**
   * The type of the deployment.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly type?: string;
  /** the location of the deployment. */
  location?: string;
  /** Deployment properties. */
  properties?: DeploymentPropertiesExtended;
  /** Deployment tags */
  tags?: { [propertyName: string]: string };
}

/** Deployment properties with additional details. */
export interface DeploymentPropertiesExtended {
  /**
   * Denotes the state of provisioning.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly provisioningState?: ProvisioningState;
  /**
   * The correlation ID of the deployment.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly correlationId?: string;
  /**
   * The timestamp of the template deployment.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly timestamp?: Date;
  /**
   * The duration of the template deployment.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly duration?: string;
  /**
   * Key/value pairs that represent deployment output.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly outputs?: Record<string, unknown>;
  /**
   * The list of resource providers needed for the deployment.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly providers?: Provider[];
  /**
   * The list of deployment dependencies.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly dependencies?: Dependency[];
  /**
   * The URI referencing the template.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly templateLink?: TemplateLink;
  /**
   * Deployment parameters.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly parameters?: Record<string, unknown>;
  /**
   * The URI referencing the parameters.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly parametersLink?: ParametersLink;
  /**
   * The deployment mode. Possible values are Incremental and Complete.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly mode?: DeploymentMode;
  /**
   * The debug setting of the deployment.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly debugSetting?: DebugSetting;
  /**
   * The deployment on error behavior.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly onErrorDeployment?: OnErrorDeploymentExtended;
  /**
   * The hash produced for the template.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly templateHash?: string;
  /**
   * Array of provisioned resources.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly outputResources?: ResourceReference[];
  /**
   * Array of validated resources.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly validatedResources?: ResourceReference[];
  /**
   * The deployment error.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly error?: ErrorResponse;
}

/** Resource provider information. */
export interface Provider {
  /**
   * The provider ID.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly id?: string;
  /** The namespace of the resource provider. */
  namespace?: string;
  /**
   * The registration state of the resource provider.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly registrationState?: string;
  /**
   * The registration policy of the resource provider.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly registrationPolicy?: string;
  /**
   * The collection of provider resource types.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly resourceTypes?: ProviderResourceType[];
  /** The provider authorization consent state. */
  providerAuthorizationConsentState?: ProviderAuthorizationConsentState;
}

/** Resource type managed by the resource provider. */
export interface ProviderResourceType {
  /** The resource type. */
  resourceType?: string;
  /** The collection of locations where this resource type can be created. */
  locations?: string[];
  /** The location mappings that are supported by this resource type. */
  locationMappings?: ProviderExtendedLocation[];
  /** The aliases that are supported by this resource type. */
  aliases?: Alias[];
  /** The API version. */
  apiVersions?: string[];
  /**
   * The default API version.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly defaultApiVersion?: string;
  /**
   * The API profiles for the resource provider.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly apiProfiles?: ApiProfile[];
  /** The additional capabilities offered by this resource type. */
  capabilities?: string;
  /** The properties. */
  properties?: { [propertyName: string]: string };
}

/** The provider extended location. */
export interface ProviderExtendedLocation {
  /** The azure location. */
  location?: string;
  /** The extended location type. */
  type?: string;
  /** The extended locations for the azure location. */
  extendedLocations?: string[];
}

/** The alias type. */
export interface Alias {
  /** The alias name. */
  name?: string;
  /** The paths for an alias. */
  paths?: AliasPath[];
  /** The type of the alias. */
  type?: AliasType;
  /** The default path for an alias. */
  defaultPath?: string;
  /** The default pattern for an alias. */
  defaultPattern?: AliasPattern;
  /**
   * The default alias path metadata. Applies to the default path and to any alias path that doesn't have metadata
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly defaultMetadata?: AliasPathMetadata;
}

/** The type of the paths for alias. */
export interface AliasPath {
  /** The path of an alias. */
  path?: string;
  /** The API versions. */
  apiVersions?: string[];
  /** The pattern for an alias path. */
  pattern?: AliasPattern;
  /**
   * The metadata of the alias path. If missing, fall back to the default metadata of the alias.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly metadata?: AliasPathMetadata;
}

/** The type of the pattern for an alias path. */
export interface AliasPattern {
  /** The alias pattern phrase. */
  phrase?: string;
  /** The alias pattern variable. */
  variable?: string;
  /** The type of alias pattern */
  type?: AliasPatternType;
}

export interface AliasPathMetadata {
  /**
   * The type of the token that the alias path is referring to.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly type?: AliasPathTokenType;
  /**
   * The attributes of the token that the alias path is referring to.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly attributes?: AliasPathAttributes;
}

export interface ApiProfile {
  /**
   * The profile version.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly profileVersion?: string;
  /**
   * The API version.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly apiVersion?: string;
}

/** Deployment dependency information. */
export interface Dependency {
  /** The list of dependencies. */
  dependsOn?: BasicDependency[];
  /** The ID of the dependency. */
  id?: string;
  /** The dependency resource type. */
  resourceType?: string;
  /** The dependency resource name. */
  resourceName?: string;
}

/** Deployment dependency information. */
export interface BasicDependency {
  /** The ID of the dependency. */
  id?: string;
  /** The dependency resource type. */
  resourceType?: string;
  /** The dependency resource name. */
  resourceName?: string;
}

/** Deployment on error behavior with additional details. */
export interface OnErrorDeploymentExtended {
  /**
   * The state of the provisioning for the on error deployment.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly provisioningState?: string;
  /** The deployment on error behavior type. Possible values are LastSuccessful and SpecificDeployment. */
  type?: OnErrorDeploymentType;
  /** The deployment to be used on error case. */
  deploymentName?: string;
}

/** The resource Id model. */
export interface ResourceReference {
  /**
   * The fully qualified resource Id.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly id?: string;
}

/** Information from validate template deployment response. */
export interface DeploymentValidateResult {
  /**
   * The deployment validation error.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly error?: ErrorResponse;
  /** The template deployment properties. */
  properties?: DeploymentPropertiesExtended;
}

/** The deployment export result. */
export interface DeploymentExportResult {
  /** The template content. */
  template?: Record<string, unknown>;
}

/** List of deployments. */
export interface DeploymentListResult {
  /** An array of deployments. */
  value?: DeploymentExtended[];
  /**
   * The URL to use for getting the next set of results.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly nextLink?: string;
}

/** Deployment operation parameters. */
export interface ScopedDeployment {
  /** The location to store the deployment data. */
  location: string;
  /** The deployment properties. */
  properties: DeploymentProperties;
  /** Deployment tags */
  tags?: { [propertyName: string]: string };
}

/** Deployment What-if operation parameters. */
export interface ScopedDeploymentWhatIf {
  /** The location to store the deployment data. */
  location: string;
  /** The deployment properties. */
  properties: DeploymentWhatIfProperties;
}

/** Deployment What-If operation settings. */
export interface DeploymentWhatIfSettings {
  /** The format of the What-If results */
  resultFormat?: WhatIfResultFormat;
}

/** Result of the What-If operation. Contains a list of predicted changes and a URL link to get to the next set of results. */
export interface WhatIfOperationResult {
  /** Status of the What-If operation. */
  status?: string;
  /** Error when What-If operation fails. */
  error?: ErrorResponse;
  /** List of resource changes predicted by What-If operation. */
  changes?: WhatIfChange[];
}

/** Information about a single resource change predicted by What-If operation. */
export interface WhatIfChange {
  /** Resource ID */
  resourceId: string;
  /** Type of change that will be made to the resource when the deployment is executed. */
  changeType: ChangeType;
  /** The explanation about why the resource is unsupported by What-If. */
  unsupportedReason?: string;
  /** The snapshot of the resource before the deployment is executed. */
  before?: Record<string, unknown>;
  /** The predicted snapshot of the resource after the deployment is executed. */
  after?: Record<string, unknown>;
  /** The predicted changes to resource properties. */
  delta?: WhatIfPropertyChange[];
}

/** The predicted change to the resource property. */
export interface WhatIfPropertyChange {
  /** The path of the property. */
  path: string;
  /** The type of property change. */
  propertyChangeType: PropertyChangeType;
  /** The value of the property before the deployment is executed. */
  before?: Record<string, unknown>;
  /** The value of the property after the deployment is executed. */
  after?: Record<string, unknown>;
  /** Nested property changes. */
  children?: WhatIfPropertyChange[];
}

/** Deployment What-if operation parameters. */
export interface DeploymentWhatIf {
  /** The location to store the deployment data. */
  location?: string;
  /** The deployment properties. */
  properties: DeploymentWhatIfProperties;
}

/** List of provider permissions. */
export interface ProviderPermissionListResult {
  /** An array of provider permissions. */
  value?: ProviderPermission[];
  /**
   * The URL to use for getting the next set of results.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly nextLink?: string;
}

/** The provider permission */
export interface ProviderPermission {
  /** The application id. */
  applicationId?: string;
  /** Role definition properties. */
  roleDefinition?: RoleDefinition;
  /** Role definition properties. */
  managedByRoleDefinition?: RoleDefinition;
  /** The provider authorization consent state. */
  providerAuthorizationConsentState?: ProviderAuthorizationConsentState;
}

/** Role definition properties. */
export interface RoleDefinition {
  /** The role definition ID. */
  id?: string;
  /** The role definition name. */
  name?: string;
  /** If this is a service role. */
  isServiceRole?: boolean;
  /** Role definition permissions. */
  permissions?: Permission[];
  /** Role definition assignable scopes. */
  scopes?: string[];
}

/** Role definition permissions. */
export interface Permission {
  /** Allowed actions. */
  actions?: string[];
  /** Denied actions. */
  notActions?: string[];
  /** Allowed Data actions. */
  dataActions?: string[];
  /** Denied Data actions. */
  notDataActions?: string[];
}

/** The provider registration definition. */
export interface ProviderRegistrationRequest {
  /** The provider consent. */
  thirdPartyProviderConsent?: ProviderConsentDefinition;
}

/** The provider consent. */
export interface ProviderConsentDefinition {
  /** A value indicating whether authorization is consented or not. */
  consentToAuthorization?: boolean;
}

/** List of resource providers. */
export interface ProviderListResult {
  /** An array of resource providers. */
  value?: Provider[];
  /**
   * The URL to use for getting the next set of results.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly nextLink?: string;
}

/** List of resource types of a resource provider. */
export interface ProviderResourceTypeListResult {
  /** An array of resource types. */
  value?: ProviderResourceType[];
  /**
   * The URL to use for getting the next set of results.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly nextLink?: string;
}

/** List of resource groups. */
export interface ResourceListResult {
  /** An array of resources. */
  value?: GenericResourceExpanded[];
  /**
   * The URL to use for getting the next set of results.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly nextLink?: string;
}

/** Specified resource. */
export interface Resource {
  /**
   * Resource ID
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly id?: string;
  /**
   * Resource name
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly name?: string;
  /**
   * Resource type
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly type?: string;
  /** Resource location */
  location?: string;
  /** Resource extended location. */
  extendedLocation?: ExtendedLocation;
  /** Resource tags */
  tags?: { [propertyName: string]: string };
}

/** Resource extended location. */
export interface ExtendedLocation {
  /** The extended location type. */
  type?: ExtendedLocationType;
  /** The extended location name. */
  name?: string;
}

/** Plan for the resource. */
export interface Plan {
  /** The plan ID. */
  name?: string;
  /** The publisher ID. */
  publisher?: string;
  /** The offer ID. */
  product?: string;
  /** The promotion code. */
  promotionCode?: string;
  /** The plan's version. */
  version?: string;
}

/** SKU for the resource. */
export interface Sku {
  /** The SKU name. */
  name?: string;
  /** The SKU tier. */
  tier?: string;
  /** The SKU size. */
  size?: string;
  /** The SKU family. */
  family?: string;
  /** The SKU model. */
  model?: string;
  /** The SKU capacity. */
  capacity?: number;
}

/** Identity for the resource. */
export interface Identity {
  /**
   * The principal ID of resource identity.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly principalId?: string;
  /**
   * The tenant ID of resource.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly tenantId?: string;
  /** The identity type. */
  type?: ResourceIdentityType;
  /** The list of user identities associated with the resource. The user identity dictionary key references will be ARM resource ids in the form: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedIdentity/userAssignedIdentities/{identityName}'. */
  userAssignedIdentities?: {
    [propertyName: string]: IdentityUserAssignedIdentitiesValue;
  };
}

export interface IdentityUserAssignedIdentitiesValue {
  /**
   * The principal id of user assigned identity.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly principalId?: string;
  /**
   * The client id of user assigned identity.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly clientId?: string;
}

/** Resource group information. */
export interface ResourceGroup {
  /**
   * The ID of the resource group.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly id?: string;
  /**
   * The name of the resource group.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly name?: string;
  /**
   * The type of the resource group.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly type?: string;
  /** The resource group properties. */
  properties?: ResourceGroupProperties;
  /** The location of the resource group. It cannot be changed after the resource group has been created. It must be one of the supported Azure locations. */
  location: string;
  /** The ID of the resource that manages this resource group. */
  managedBy?: string;
  /** The tags attached to the resource group. */
  tags?: { [propertyName: string]: string };
}

/** The resource group properties. */
export interface ResourceGroupProperties {
  /**
   * The provisioning state.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly provisioningState?: string;
}

/** Resource group information. */
export interface ResourceGroupPatchable {
  /** The name of the resource group. */
  name?: string;
  /** The resource group properties. */
  properties?: ResourceGroupProperties;
  /** The ID of the resource that manages this resource group. */
  managedBy?: string;
  /** The tags attached to the resource group. */
  tags?: { [propertyName: string]: string };
}

/** Export resource group template request parameters. */
export interface ExportTemplateRequest {
  /** The IDs of the resources to filter the export by. To export all resources, supply an array with single entry '*'. */
  resources?: string[];
  /** The export template options. A CSV-formatted list containing zero or more of the following: 'IncludeParameterDefaultValue', 'IncludeComments', 'SkipResourceNameParameterization', 'SkipAllParameterization' */
  options?: string;
}

/** Resource group export result. */
export interface ResourceGroupExportResult {
  /** The template content. */
  template?: Record<string, unknown>;
  /** The template export error. */
  error?: ErrorResponse;
}

/** List of resource groups. */
export interface ResourceGroupListResult {
  /** An array of resource groups. */
  value?: ResourceGroup[];
  /**
   * The URL to use for getting the next set of results.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly nextLink?: string;
}

/** Parameters of move resources. */
export interface ResourcesMoveInfo {
  /** The IDs of the resources. */
  resources?: string[];
  /** The target resource group. */
  targetResourceGroup?: string;
}

/** Tag information. */
export interface TagValue {
  /**
   * The tag value ID.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly id?: string;
  /** The tag value. */
  tagValue?: string;
  /** The tag value count. */
  count?: TagCount;
}

/** Tag count. */
export interface TagCount {
  /** Type of count. */
  type?: string;
  /** Value of count. */
  value?: number;
}

/** Tag details. */
export interface TagDetails {
  /**
   * The tag name ID.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly id?: string;
  /** The tag name. */
  tagName?: string;
  /** The total number of resources that use the resource tag. When a tag is initially created and has no associated resources, the value is 0. */
  count?: TagCount;
  /** The list of tag values. */
  values?: TagValue[];
}

/** List of subscription tags. */
export interface TagsListResult {
  /** An array of tags. */
  value?: TagDetails[];
  /**
   * The URL to use for getting the next set of results.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly nextLink?: string;
}

/** Deployment operation information. */
export interface DeploymentOperation {
  /**
   * Full deployment operation ID.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly id?: string;
  /**
   * Deployment operation ID.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly operationId?: string;
  /** Deployment properties. */
  properties?: DeploymentOperationProperties;
}

/** Deployment operation properties. */
export interface DeploymentOperationProperties {
  /**
   * The name of the current provisioning operation.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly provisioningOperation?: ProvisioningOperation;
  /**
   * The state of the provisioning.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly provisioningState?: string;
  /**
   * The date and time of the operation.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly timestamp?: Date;
  /**
   * The duration of the operation.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly duration?: string;
  /**
   * Deployment operation service request id.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly serviceRequestId?: string;
  /**
   * Operation status code from the resource provider. This property may not be set if a response has not yet been received.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly statusCode?: string;
  /**
   * Operation status message from the resource provider. This property is optional.  It will only be provided if an error was received from the resource provider.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly statusMessage?: StatusMessage;
  /**
   * The target resource.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly targetResource?: TargetResource;
  /**
   * The HTTP request message.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly request?: HttpMessage;
  /**
   * The HTTP response message.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly response?: HttpMessage;
}

/** Operation status message object. */
export interface StatusMessage {
  /** Status of the deployment operation. */
  status?: string;
  /** The error reported by the operation. */
  error?: ErrorResponse;
}

/** Target resource. */
export interface TargetResource {
  /** The ID of the resource. */
  id?: string;
  /** The name of the resource. */
  resourceName?: string;
  /** The type of the resource. */
  resourceType?: string;
}

/** HTTP message. */
export interface HttpMessage {
  /** HTTP message content. */
  content?: Record<string, unknown>;
}

/** List of deployment operations. */
export interface DeploymentOperationsListResult {
  /** An array of deployment operations. */
  value?: DeploymentOperation[];
  /**
   * The URL to use for getting the next set of results.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly nextLink?: string;
}

/** Result of the request to calculate template hash. It contains a string of minified template and its hash. */
export interface TemplateHashResult {
  /** The minified template string. */
  minifiedTemplate?: string;
  /** The template hash. */
  templateHash?: string;
}

/** Wrapper resource for tags API requests and responses. */
export interface TagsResource {
  /**
   * The ID of the tags wrapper resource.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly id?: string;
  /**
   * The name of the tags wrapper resource.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly name?: string;
  /**
   * The type of the tags wrapper resource.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly type?: string;
  /** The set of tags. */
  properties: Tags;
}

/** A dictionary of name and value pairs. */
export interface Tags {
  /** Dictionary of <string> */
  tags?: { [propertyName: string]: string };
}

/** Wrapper resource for tags patch API request only. */
export interface TagsPatchResource {
  /** The operation type for the patch API. */
  operation?: TagsPatchOperation;
  /** The set of tags. */
  properties?: Tags;
}

/** Deployment filter. */
export interface DeploymentExtendedFilter {
  /** The provisioning state. */
  provisioningState?: string;
}

/** Resource filter. */
export interface GenericResourceFilter {
  /** The resource type. */
  resourceType?: string;
  /** The tag name. */
  tagname?: string;
  /** The tag value. */
  tagvalue?: string;
}

/** Resource group filter. */
export interface ResourceGroupFilter {
  /** The tag name. */
  tagName?: string;
  /** The tag value. */
  tagValue?: string;
}

/** Resource provider operation's display properties. */
export interface ResourceProviderOperationDisplayProperties {
  /** Operation description. */
  publisher?: string;
  /** Operation provider. */
  provider?: string;
  /** Operation resource. */
  resource?: string;
  /** Resource provider operation. */
  operation?: string;
  /** Operation description. */
  description?: string;
}

/** Sub-resource. */
export interface SubResource {
  /** Resource ID */
  id?: string;
}

/** Deployment What-if properties. */
export type DeploymentWhatIfProperties = DeploymentProperties & {
  /** Optional What-If operation settings. */
  whatIfSettings?: DeploymentWhatIfSettings;
};

/** Resource information. */
export type GenericResource = Resource & {
  /** The plan of the resource. */
  plan?: Plan;
  /** The resource properties. */
  properties?: Record<string, unknown>;
  /** The kind of the resource. */
  kind?: string;
  /** ID of the resource that manages this resource. */
  managedBy?: string;
  /** The SKU of the resource. */
  sku?: Sku;
  /** The identity of the resource. */
  identity?: Identity;
};

/** Resource information. */
export type GenericResourceExpanded = GenericResource & {
  /**
   * The created time of the resource. This is only present if requested via the $expand query parameter.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly createdTime?: Date;
  /**
   * The changed time of the resource. This is only present if requested via the $expand query parameter.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly changedTime?: Date;
  /**
   * The provisioning state of the resource. This is only present if requested via the $expand query parameter.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly provisioningState?: string;
};

/** Defines headers for Deployments_whatIfAtTenantScope operation. */
export interface DeploymentsWhatIfAtTenantScopeHeaders {
  /** URL to get status of this long-running operation. */
  location?: string;
  /** Number of seconds to wait before polling for status. */
  retryAfter?: string;
}

/** Defines headers for Deployments_whatIfAtManagementGroupScope operation. */
export interface DeploymentsWhatIfAtManagementGroupScopeHeaders {
  /** URL to get status of this long-running operation. */
  location?: string;
  /** Number of seconds to wait before polling for status. */
  retryAfter?: string;
}

/** Defines headers for Deployments_whatIfAtSubscriptionScope operation. */
export interface DeploymentsWhatIfAtSubscriptionScopeHeaders {
  /** URL to get status of this long-running operation. */
  location?: string;
  /** Number of seconds to wait before polling for status. */
  retryAfter?: string;
}

/** Defines headers for Deployments_whatIf operation. */
export interface DeploymentsWhatIfHeaders {
  /** URL to get status of this long-running operation. */
  location?: string;
  /** Number of seconds to wait before polling for status. */
  retryAfter?: string;
}

/** Known values of {@link ExpressionEvaluationOptionsScopeType} that the service accepts. */
export const enum KnownExpressionEvaluationOptionsScopeType {
  NotSpecified = "NotSpecified",
  Outer = "Outer",
  Inner = "Inner"
}

/**
 * Defines values for ExpressionEvaluationOptionsScopeType. \
 * {@link KnownExpressionEvaluationOptionsScopeType} can be used interchangeably with ExpressionEvaluationOptionsScopeType,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **NotSpecified** \
 * **Outer** \
 * **Inner**
 */
export type ExpressionEvaluationOptionsScopeType = string;

/** Known values of {@link ProvisioningState} that the service accepts. */
export const enum KnownProvisioningState {
  NotSpecified = "NotSpecified",
  Accepted = "Accepted",
  Running = "Running",
  Ready = "Ready",
  Creating = "Creating",
  Created = "Created",
  Deleting = "Deleting",
  Deleted = "Deleted",
  Canceled = "Canceled",
  Failed = "Failed",
  Succeeded = "Succeeded",
  Updating = "Updating"
}

/**
 * Defines values for ProvisioningState. \
 * {@link KnownProvisioningState} can be used interchangeably with ProvisioningState,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **NotSpecified** \
 * **Accepted** \
 * **Running** \
 * **Ready** \
 * **Creating** \
 * **Created** \
 * **Deleting** \
 * **Deleted** \
 * **Canceled** \
 * **Failed** \
 * **Succeeded** \
 * **Updating**
 */
export type ProvisioningState = string;

/** Known values of {@link AliasPathTokenType} that the service accepts. */
export const enum KnownAliasPathTokenType {
  /** The token type is not specified. */
  NotSpecified = "NotSpecified",
  /** The token type can be anything. */
  Any = "Any",
  /** The token type is string. */
  String = "String",
  /** The token type is object. */
  Object = "Object",
  /** The token type is array. */
  Array = "Array",
  /** The token type is integer. */
  Integer = "Integer",
  /** The token type is number. */
  Number = "Number",
  /** The token type is boolean. */
  Boolean = "Boolean"
}

/**
 * Defines values for AliasPathTokenType. \
 * {@link KnownAliasPathTokenType} can be used interchangeably with AliasPathTokenType,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **NotSpecified**: The token type is not specified. \
 * **Any**: The token type can be anything. \
 * **String**: The token type is string. \
 * **Object**: The token type is object. \
 * **Array**: The token type is array. \
 * **Integer**: The token type is integer. \
 * **Number**: The token type is number. \
 * **Boolean**: The token type is boolean.
 */
export type AliasPathTokenType = string;

/** Known values of {@link AliasPathAttributes} that the service accepts. */
export const enum KnownAliasPathAttributes {
  /** The token that the alias path is referring to has no attributes. */
  None = "None",
  /** The token that the alias path is referring to is modifiable by policies with 'modify' effect. */
  Modifiable = "Modifiable"
}

/**
 * Defines values for AliasPathAttributes. \
 * {@link KnownAliasPathAttributes} can be used interchangeably with AliasPathAttributes,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **None**: The token that the alias path is referring to has no attributes. \
 * **Modifiable**: The token that the alias path is referring to is modifiable by policies with 'modify' effect.
 */
export type AliasPathAttributes = string;

/** Known values of {@link ProviderAuthorizationConsentState} that the service accepts. */
export const enum KnownProviderAuthorizationConsentState {
  NotSpecified = "NotSpecified",
  Required = "Required",
  NotRequired = "NotRequired",
  Consented = "Consented"
}

/**
 * Defines values for ProviderAuthorizationConsentState. \
 * {@link KnownProviderAuthorizationConsentState} can be used interchangeably with ProviderAuthorizationConsentState,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **NotSpecified** \
 * **Required** \
 * **NotRequired** \
 * **Consented**
 */
export type ProviderAuthorizationConsentState = string;

/** Known values of {@link ExtendedLocationType} that the service accepts. */
export const enum KnownExtendedLocationType {
  EdgeZone = "EdgeZone"
}

/**
 * Defines values for ExtendedLocationType. \
 * {@link KnownExtendedLocationType} can be used interchangeably with ExtendedLocationType,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **EdgeZone**
 */
export type ExtendedLocationType = string;

/** Known values of {@link TagsPatchOperation} that the service accepts. */
export const enum KnownTagsPatchOperation {
  /** The 'replace' option replaces the entire set of existing tags with a new set. */
  Replace = "Replace",
  /** The 'merge' option allows adding tags with new names and updating the values of tags with existing names. */
  Merge = "Merge",
  /** The 'delete' option allows selectively deleting tags based on given names or name/value pairs. */
  Delete = "Delete"
}

/**
 * Defines values for TagsPatchOperation. \
 * {@link KnownTagsPatchOperation} can be used interchangeably with TagsPatchOperation,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Replace**: The 'replace' option replaces the entire set of existing tags with a new set. \
 * **Merge**: The 'merge' option allows adding tags with new names and updating the values of tags with existing names. \
 * **Delete**: The 'delete' option allows selectively deleting tags based on given names or name\/value pairs.
 */
export type TagsPatchOperation = string;
/** Defines values for DeploymentMode. */
export type DeploymentMode = "Incremental" | "Complete";
/** Defines values for OnErrorDeploymentType. */
export type OnErrorDeploymentType = "LastSuccessful" | "SpecificDeployment";
/** Defines values for AliasPatternType. */
export type AliasPatternType = "NotSpecified" | "Extract";
/** Defines values for AliasType. */
export type AliasType = "NotSpecified" | "PlainText" | "Mask";
/** Defines values for WhatIfResultFormat. */
export type WhatIfResultFormat = "ResourceIdOnly" | "FullResourcePayloads";
/** Defines values for ChangeType. */
export type ChangeType =
  | "Create"
  | "Delete"
  | "Ignore"
  | "Deploy"
  | "NoChange"
  | "Modify"
  | "Unsupported";
/** Defines values for PropertyChangeType. */
export type PropertyChangeType =
  | "Create"
  | "Delete"
  | "Modify"
  | "Array"
  | "NoEffect";
/** Defines values for ResourceIdentityType. */
export type ResourceIdentityType =
  | "SystemAssigned"
  | "UserAssigned"
  | "SystemAssigned, UserAssigned"
  | "None";
/** Defines values for ProvisioningOperation. */
export type ProvisioningOperation =
  | "NotSpecified"
  | "Create"
  | "Delete"
  | "Waiting"
  | "AzureAsyncOperationWaiting"
  | "ResourceCacheWaiting"
  | "Action"
  | "Read"
  | "EvaluateDeploymentOutput"
  | "DeploymentCleanup";

/** Optional parameters. */
export interface OperationsListOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the list operation. */
export type OperationsListResponse = OperationListResult;

/** Optional parameters. */
export interface OperationsListNextOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the listNext operation. */
export type OperationsListNextResponse = OperationListResult;

/** Optional parameters. */
export interface OperationsListNextNextOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the listNextNext operation. */
export type OperationsListNextNextResponse = OperationListResult;

/** Optional parameters. */
export interface DeploymentsDeleteAtScopeOptionalParams
  extends coreClient.OperationOptions {
  /** Delay to wait until next poll, in milliseconds. */
  updateIntervalInMs?: number;
  /** A serialized poller which can be used to resume an existing paused Long-Running-Operation. */
  resumeFrom?: string;
}

/** Optional parameters. */
export interface DeploymentsCheckExistenceAtScopeOptionalParams
  extends coreClient.OperationOptions {}

/** Optional parameters. */
export interface DeploymentsCreateOrUpdateAtScopeOptionalParams
  extends coreClient.OperationOptions {
  /** Delay to wait until next poll, in milliseconds. */
  updateIntervalInMs?: number;
  /** A serialized poller which can be used to resume an existing paused Long-Running-Operation. */
  resumeFrom?: string;
}

/** Contains response data for the createOrUpdateAtScope operation. */
export type DeploymentsCreateOrUpdateAtScopeResponse = DeploymentExtended;

/** Optional parameters. */
export interface DeploymentsGetAtScopeOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the getAtScope operation. */
export type DeploymentsGetAtScopeResponse = DeploymentExtended;

/** Optional parameters. */
export interface DeploymentsCancelAtScopeOptionalParams
  extends coreClient.OperationOptions {}

/** Optional parameters. */
export interface DeploymentsValidateAtScopeOptionalParams
  extends coreClient.OperationOptions {
  /** Delay to wait until next poll, in milliseconds. */
  updateIntervalInMs?: number;
  /** A serialized poller which can be used to resume an existing paused Long-Running-Operation. */
  resumeFrom?: string;
}

/** Contains response data for the validateAtScope operation. */
export type DeploymentsValidateAtScopeResponse = DeploymentValidateResult;

/** Optional parameters. */
export interface DeploymentsExportTemplateAtScopeOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the exportTemplateAtScope operation. */
export type DeploymentsExportTemplateAtScopeResponse = DeploymentExportResult;

/** Optional parameters. */
export interface DeploymentsListAtScopeOptionalParams
  extends coreClient.OperationOptions {
  /** The filter to apply on the operation. For example, you can use $filter=provisioningState eq '{state}'. */
  filter?: string;
  /** The number of results to get. If null is passed, returns all deployments. */
  top?: number;
}

/** Contains response data for the listAtScope operation. */
export type DeploymentsListAtScopeResponse = DeploymentListResult;

/** Optional parameters. */
export interface DeploymentsDeleteAtTenantScopeOptionalParams
  extends coreClient.OperationOptions {
  /** Delay to wait until next poll, in milliseconds. */
  updateIntervalInMs?: number;
  /** A serialized poller which can be used to resume an existing paused Long-Running-Operation. */
  resumeFrom?: string;
}

/** Optional parameters. */
export interface DeploymentsCheckExistenceAtTenantScopeOptionalParams
  extends coreClient.OperationOptions {}

/** Optional parameters. */
export interface DeploymentsCreateOrUpdateAtTenantScopeOptionalParams
  extends coreClient.OperationOptions {
  /** Delay to wait until next poll, in milliseconds. */
  updateIntervalInMs?: number;
  /** A serialized poller which can be used to resume an existing paused Long-Running-Operation. */
  resumeFrom?: string;
}

/** Contains response data for the createOrUpdateAtTenantScope operation. */
export type DeploymentsCreateOrUpdateAtTenantScopeResponse = DeploymentExtended;

/** Optional parameters. */
export interface DeploymentsGetAtTenantScopeOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the getAtTenantScope operation. */
export type DeploymentsGetAtTenantScopeResponse = DeploymentExtended;

/** Optional parameters. */
export interface DeploymentsCancelAtTenantScopeOptionalParams
  extends coreClient.OperationOptions {}

/** Optional parameters. */
export interface DeploymentsValidateAtTenantScopeOptionalParams
  extends coreClient.OperationOptions {
  /** Delay to wait until next poll, in milliseconds. */
  updateIntervalInMs?: number;
  /** A serialized poller which can be used to resume an existing paused Long-Running-Operation. */
  resumeFrom?: string;
}

/** Contains response data for the validateAtTenantScope operation. */
export type DeploymentsValidateAtTenantScopeResponse = DeploymentValidateResult;

/** Optional parameters. */
export interface DeploymentsWhatIfAtTenantScopeOptionalParams
  extends coreClient.OperationOptions {
  /** Delay to wait until next poll, in milliseconds. */
  updateIntervalInMs?: number;
  /** A serialized poller which can be used to resume an existing paused Long-Running-Operation. */
  resumeFrom?: string;
}

/** Contains response data for the whatIfAtTenantScope operation. */
export type DeploymentsWhatIfAtTenantScopeResponse = WhatIfOperationResult;

/** Optional parameters. */
export interface DeploymentsExportTemplateAtTenantScopeOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the exportTemplateAtTenantScope operation. */
export type DeploymentsExportTemplateAtTenantScopeResponse = DeploymentExportResult;

/** Optional parameters. */
export interface DeploymentsListAtTenantScopeOptionalParams
  extends coreClient.OperationOptions {
  /** The filter to apply on the operation. For example, you can use $filter=provisioningState eq '{state}'. */
  filter?: string;
  /** The number of results to get. If null is passed, returns all deployments. */
  top?: number;
}

/** Contains response data for the listAtTenantScope operation. */
export type DeploymentsListAtTenantScopeResponse = DeploymentListResult;

/** Optional parameters. */
export interface DeploymentsDeleteAtManagementGroupScopeOptionalParams
  extends coreClient.OperationOptions {
  /** Delay to wait until next poll, in milliseconds. */
  updateIntervalInMs?: number;
  /** A serialized poller which can be used to resume an existing paused Long-Running-Operation. */
  resumeFrom?: string;
}

/** Optional parameters. */
export interface DeploymentsCheckExistenceAtManagementGroupScopeOptionalParams
  extends coreClient.OperationOptions {}

/** Optional parameters. */
export interface DeploymentsCreateOrUpdateAtManagementGroupScopeOptionalParams
  extends coreClient.OperationOptions {
  /** Delay to wait until next poll, in milliseconds. */
  updateIntervalInMs?: number;
  /** A serialized poller which can be used to resume an existing paused Long-Running-Operation. */
  resumeFrom?: string;
}

/** Contains response data for the createOrUpdateAtManagementGroupScope operation. */
export type DeploymentsCreateOrUpdateAtManagementGroupScopeResponse = DeploymentExtended;

/** Optional parameters. */
export interface DeploymentsGetAtManagementGroupScopeOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the getAtManagementGroupScope operation. */
export type DeploymentsGetAtManagementGroupScopeResponse = DeploymentExtended;

/** Optional parameters. */
export interface DeploymentsCancelAtManagementGroupScopeOptionalParams
  extends coreClient.OperationOptions {}

/** Optional parameters. */
export interface DeploymentsValidateAtManagementGroupScopeOptionalParams
  extends coreClient.OperationOptions {
  /** Delay to wait until next poll, in milliseconds. */
  updateIntervalInMs?: number;
  /** A serialized poller which can be used to resume an existing paused Long-Running-Operation. */
  resumeFrom?: string;
}

/** Contains response data for the validateAtManagementGroupScope operation. */
export type DeploymentsValidateAtManagementGroupScopeResponse = DeploymentValidateResult;

/** Optional parameters. */
export interface DeploymentsWhatIfAtManagementGroupScopeOptionalParams
  extends coreClient.OperationOptions {
  /** Delay to wait until next poll, in milliseconds. */
  updateIntervalInMs?: number;
  /** A serialized poller which can be used to resume an existing paused Long-Running-Operation. */
  resumeFrom?: string;
}

/** Contains response data for the whatIfAtManagementGroupScope operation. */
export type DeploymentsWhatIfAtManagementGroupScopeResponse = WhatIfOperationResult;

/** Optional parameters. */
export interface DeploymentsExportTemplateAtManagementGroupScopeOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the exportTemplateAtManagementGroupScope operation. */
export type DeploymentsExportTemplateAtManagementGroupScopeResponse = DeploymentExportResult;

/** Optional parameters. */
export interface DeploymentsListAtManagementGroupScopeOptionalParams
  extends coreClient.OperationOptions {
  /** The filter to apply on the operation. For example, you can use $filter=provisioningState eq '{state}'. */
  filter?: string;
  /** The number of results to get. If null is passed, returns all deployments. */
  top?: number;
}

/** Contains response data for the listAtManagementGroupScope operation. */
export type DeploymentsListAtManagementGroupScopeResponse = DeploymentListResult;

/** Optional parameters. */
export interface DeploymentsDeleteAtSubscriptionScopeOptionalParams
  extends coreClient.OperationOptions {
  /** Delay to wait until next poll, in milliseconds. */
  updateIntervalInMs?: number;
  /** A serialized poller which can be used to resume an existing paused Long-Running-Operation. */
  resumeFrom?: string;
}

/** Optional parameters. */
export interface DeploymentsCheckExistenceAtSubscriptionScopeOptionalParams
  extends coreClient.OperationOptions {}

/** Optional parameters. */
export interface DeploymentsCreateOrUpdateAtSubscriptionScopeOptionalParams
  extends coreClient.OperationOptions {
  /** Delay to wait until next poll, in milliseconds. */
  updateIntervalInMs?: number;
  /** A serialized poller which can be used to resume an existing paused Long-Running-Operation. */
  resumeFrom?: string;
}

/** Contains response data for the createOrUpdateAtSubscriptionScope operation. */
export type DeploymentsCreateOrUpdateAtSubscriptionScopeResponse = DeploymentExtended;

/** Optional parameters. */
export interface DeploymentsGetAtSubscriptionScopeOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the getAtSubscriptionScope operation. */
export type DeploymentsGetAtSubscriptionScopeResponse = DeploymentExtended;

/** Optional parameters. */
export interface DeploymentsCancelAtSubscriptionScopeOptionalParams
  extends coreClient.OperationOptions {}

/** Optional parameters. */
export interface DeploymentsValidateAtSubscriptionScopeOptionalParams
  extends coreClient.OperationOptions {
  /** Delay to wait until next poll, in milliseconds. */
  updateIntervalInMs?: number;
  /** A serialized poller which can be used to resume an existing paused Long-Running-Operation. */
  resumeFrom?: string;
}

/** Contains response data for the validateAtSubscriptionScope operation. */
export type DeploymentsValidateAtSubscriptionScopeResponse = DeploymentValidateResult;

/** Optional parameters. */
export interface DeploymentsWhatIfAtSubscriptionScopeOptionalParams
  extends coreClient.OperationOptions {
  /** Delay to wait until next poll, in milliseconds. */
  updateIntervalInMs?: number;
  /** A serialized poller which can be used to resume an existing paused Long-Running-Operation. */
  resumeFrom?: string;
}

/** Contains response data for the whatIfAtSubscriptionScope operation. */
export type DeploymentsWhatIfAtSubscriptionScopeResponse = WhatIfOperationResult;

/** Optional parameters. */
export interface DeploymentsExportTemplateAtSubscriptionScopeOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the exportTemplateAtSubscriptionScope operation. */
export type DeploymentsExportTemplateAtSubscriptionScopeResponse = DeploymentExportResult;

/** Optional parameters. */
export interface DeploymentsListAtSubscriptionScopeOptionalParams
  extends coreClient.OperationOptions {
  /** The filter to apply on the operation. For example, you can use $filter=provisioningState eq '{state}'. */
  filter?: string;
  /** The number of results to get. If null is passed, returns all deployments. */
  top?: number;
}

/** Contains response data for the listAtSubscriptionScope operation. */
export type DeploymentsListAtSubscriptionScopeResponse = DeploymentListResult;

/** Optional parameters. */
export interface DeploymentsDeleteOptionalParams
  extends coreClient.OperationOptions {
  /** Delay to wait until next poll, in milliseconds. */
  updateIntervalInMs?: number;
  /** A serialized poller which can be used to resume an existing paused Long-Running-Operation. */
  resumeFrom?: string;
}

/** Optional parameters. */
export interface DeploymentsCheckExistenceOptionalParams
  extends coreClient.OperationOptions {}

/** Optional parameters. */
export interface DeploymentsCreateOrUpdateOptionalParams
  extends coreClient.OperationOptions {
  /** Delay to wait until next poll, in milliseconds. */
  updateIntervalInMs?: number;
  /** A serialized poller which can be used to resume an existing paused Long-Running-Operation. */
  resumeFrom?: string;
}

/** Contains response data for the createOrUpdate operation. */
export type DeploymentsCreateOrUpdateResponse = DeploymentExtended;

/** Optional parameters. */
export interface DeploymentsGetOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the get operation. */
export type DeploymentsGetResponse = DeploymentExtended;

/** Optional parameters. */
export interface DeploymentsCancelOptionalParams
  extends coreClient.OperationOptions {}

/** Optional parameters. */
export interface DeploymentsValidateOptionalParams
  extends coreClient.OperationOptions {
  /** Delay to wait until next poll, in milliseconds. */
  updateIntervalInMs?: number;
  /** A serialized poller which can be used to resume an existing paused Long-Running-Operation. */
  resumeFrom?: string;
}

/** Contains response data for the validate operation. */
export type DeploymentsValidateResponse = DeploymentValidateResult;

/** Optional parameters. */
export interface DeploymentsWhatIfOptionalParams
  extends coreClient.OperationOptions {
  /** Delay to wait until next poll, in milliseconds. */
  updateIntervalInMs?: number;
  /** A serialized poller which can be used to resume an existing paused Long-Running-Operation. */
  resumeFrom?: string;
}

/** Contains response data for the whatIf operation. */
export type DeploymentsWhatIfResponse = WhatIfOperationResult;

/** Optional parameters. */
export interface DeploymentsExportTemplateOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the exportTemplate operation. */
export type DeploymentsExportTemplateResponse = DeploymentExportResult;

/** Optional parameters. */
export interface DeploymentsListByResourceGroupOptionalParams
  extends coreClient.OperationOptions {
  /** The filter to apply on the operation. For example, you can use $filter=provisioningState eq '{state}'. */
  filter?: string;
  /** The number of results to get. If null is passed, returns all deployments. */
  top?: number;
}

/** Contains response data for the listByResourceGroup operation. */
export type DeploymentsListByResourceGroupResponse = DeploymentListResult;

/** Optional parameters. */
export interface DeploymentsCalculateTemplateHashOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the calculateTemplateHash operation. */
export type DeploymentsCalculateTemplateHashResponse = TemplateHashResult;

/** Optional parameters. */
export interface DeploymentsListAtScopeNextOptionalParams
  extends coreClient.OperationOptions {
  /** The filter to apply on the operation. For example, you can use $filter=provisioningState eq '{state}'. */
  filter?: string;
  /** The number of results to get. If null is passed, returns all deployments. */
  top?: number;
}

/** Contains response data for the listAtScopeNext operation. */
export type DeploymentsListAtScopeNextResponse = DeploymentListResult;

/** Optional parameters. */
export interface DeploymentsListAtTenantScopeNextOptionalParams
  extends coreClient.OperationOptions {
  /** The filter to apply on the operation. For example, you can use $filter=provisioningState eq '{state}'. */
  filter?: string;
  /** The number of results to get. If null is passed, returns all deployments. */
  top?: number;
}

/** Contains response data for the listAtTenantScopeNext operation. */
export type DeploymentsListAtTenantScopeNextResponse = DeploymentListResult;

/** Optional parameters. */
export interface DeploymentsListAtManagementGroupScopeNextOptionalParams
  extends coreClient.OperationOptions {
  /** The filter to apply on the operation. For example, you can use $filter=provisioningState eq '{state}'. */
  filter?: string;
  /** The number of results to get. If null is passed, returns all deployments. */
  top?: number;
}

/** Contains response data for the listAtManagementGroupScopeNext operation. */
export type DeploymentsListAtManagementGroupScopeNextResponse = DeploymentListResult;

/** Optional parameters. */
export interface DeploymentsListAtSubscriptionScopeNextOptionalParams
  extends coreClient.OperationOptions {
  /** The filter to apply on the operation. For example, you can use $filter=provisioningState eq '{state}'. */
  filter?: string;
  /** The number of results to get. If null is passed, returns all deployments. */
  top?: number;
}

/** Contains response data for the listAtSubscriptionScopeNext operation. */
export type DeploymentsListAtSubscriptionScopeNextResponse = DeploymentListResult;

/** Optional parameters. */
export interface DeploymentsListByResourceGroupNextOptionalParams
  extends coreClient.OperationOptions {
  /** The filter to apply on the operation. For example, you can use $filter=provisioningState eq '{state}'. */
  filter?: string;
  /** The number of results to get. If null is passed, returns all deployments. */
  top?: number;
}

/** Contains response data for the listByResourceGroupNext operation. */
export type DeploymentsListByResourceGroupNextResponse = DeploymentListResult;

/** Optional parameters. */
export interface DeploymentsListAtScopeNextNextOptionalParams
  extends coreClient.OperationOptions {
  /** The filter to apply on the operation. For example, you can use $filter=provisioningState eq '{state}'. */
  filter?: string;
  /** The number of results to get. If null is passed, returns all deployments. */
  top?: number;
}

/** Contains response data for the listAtScopeNextNext operation. */
export type DeploymentsListAtScopeNextNextResponse = DeploymentListResult;

/** Optional parameters. */
export interface DeploymentsListAtTenantScopeNextNextOptionalParams
  extends coreClient.OperationOptions {
  /** The filter to apply on the operation. For example, you can use $filter=provisioningState eq '{state}'. */
  filter?: string;
  /** The number of results to get. If null is passed, returns all deployments. */
  top?: number;
}

/** Contains response data for the listAtTenantScopeNextNext operation. */
export type DeploymentsListAtTenantScopeNextNextResponse = DeploymentListResult;

/** Optional parameters. */
export interface DeploymentsListAtManagementGroupScopeNextNextOptionalParams
  extends coreClient.OperationOptions {
  /** The filter to apply on the operation. For example, you can use $filter=provisioningState eq '{state}'. */
  filter?: string;
  /** The number of results to get. If null is passed, returns all deployments. */
  top?: number;
}

/** Contains response data for the listAtManagementGroupScopeNextNext operation. */
export type DeploymentsListAtManagementGroupScopeNextNextResponse = DeploymentListResult;

/** Optional parameters. */
export interface DeploymentsListAtSubscriptionScopeNextNextOptionalParams
  extends coreClient.OperationOptions {
  /** The filter to apply on the operation. For example, you can use $filter=provisioningState eq '{state}'. */
  filter?: string;
  /** The number of results to get. If null is passed, returns all deployments. */
  top?: number;
}

/** Contains response data for the listAtSubscriptionScopeNextNext operation. */
export type DeploymentsListAtSubscriptionScopeNextNextResponse = DeploymentListResult;

/** Optional parameters. */
export interface DeploymentsListByResourceGroupNextNextOptionalParams
  extends coreClient.OperationOptions {
  /** The filter to apply on the operation. For example, you can use $filter=provisioningState eq '{state}'. */
  filter?: string;
  /** The number of results to get. If null is passed, returns all deployments. */
  top?: number;
}

/** Contains response data for the listByResourceGroupNextNext operation. */
export type DeploymentsListByResourceGroupNextNextResponse = DeploymentListResult;

/** Optional parameters. */
export interface ProvidersUnregisterOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the unregister operation. */
export type ProvidersUnregisterResponse = Provider;

/** Optional parameters. */
export interface ProvidersRegisterAtManagementGroupScopeOptionalParams
  extends coreClient.OperationOptions {}

/** Optional parameters. */
export interface ProvidersProviderPermissionsOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the providerPermissions operation. */
export type ProvidersProviderPermissionsResponse = ProviderPermissionListResult;

/** Optional parameters. */
export interface ProvidersRegisterOptionalParams
  extends coreClient.OperationOptions {
  /** The third party consent for S2S. */
  properties?: ProviderRegistrationRequest;
}

/** Contains response data for the register operation. */
export type ProvidersRegisterResponse = Provider;

/** Optional parameters. */
export interface ProvidersListOptionalParams
  extends coreClient.OperationOptions {
  /** The number of results to return. If null is passed returns all deployments. */
  top?: number;
  /** The properties to include in the results. For example, use &$expand=metadata in the query string to retrieve resource provider metadata. To include property aliases in response, use $expand=resourceTypes/aliases. */
  expand?: string;
}

/** Contains response data for the list operation. */
export type ProvidersListResponse = ProviderListResult;

/** Optional parameters. */
export interface ProvidersListAtTenantScopeOptionalParams
  extends coreClient.OperationOptions {
  /** The number of results to return. If null is passed returns all providers. */
  top?: number;
  /** The properties to include in the results. For example, use &$expand=metadata in the query string to retrieve resource provider metadata. To include property aliases in response, use $expand=resourceTypes/aliases. */
  expand?: string;
}

/** Contains response data for the listAtTenantScope operation. */
export type ProvidersListAtTenantScopeResponse = ProviderListResult;

/** Optional parameters. */
export interface ProvidersGetOptionalParams
  extends coreClient.OperationOptions {
  /** The $expand query parameter. For example, to include property aliases in response, use $expand=resourceTypes/aliases. */
  expand?: string;
}

/** Contains response data for the get operation. */
export type ProvidersGetResponse = Provider;

/** Optional parameters. */
export interface ProvidersGetAtTenantScopeOptionalParams
  extends coreClient.OperationOptions {
  /** The $expand query parameter. For example, to include property aliases in response, use $expand=resourceTypes/aliases. */
  expand?: string;
}

/** Contains response data for the getAtTenantScope operation. */
export type ProvidersGetAtTenantScopeResponse = Provider;

/** Optional parameters. */
export interface ProvidersListNextOptionalParams
  extends coreClient.OperationOptions {
  /** The number of results to return. If null is passed returns all deployments. */
  top?: number;
  /** The properties to include in the results. For example, use &$expand=metadata in the query string to retrieve resource provider metadata. To include property aliases in response, use $expand=resourceTypes/aliases. */
  expand?: string;
}

/** Contains response data for the listNext operation. */
export type ProvidersListNextResponse = ProviderListResult;

/** Optional parameters. */
export interface ProvidersListAtTenantScopeNextOptionalParams
  extends coreClient.OperationOptions {
  /** The number of results to return. If null is passed returns all providers. */
  top?: number;
  /** The properties to include in the results. For example, use &$expand=metadata in the query string to retrieve resource provider metadata. To include property aliases in response, use $expand=resourceTypes/aliases. */
  expand?: string;
}

/** Contains response data for the listAtTenantScopeNext operation. */
export type ProvidersListAtTenantScopeNextResponse = ProviderListResult;

/** Optional parameters. */
export interface ProvidersListNextNextOptionalParams
  extends coreClient.OperationOptions {
  /** The number of results to return. If null is passed returns all deployments. */
  top?: number;
  /** The properties to include in the results. For example, use &$expand=metadata in the query string to retrieve resource provider metadata. To include property aliases in response, use $expand=resourceTypes/aliases. */
  expand?: string;
}

/** Contains response data for the listNextNext operation. */
export type ProvidersListNextNextResponse = ProviderListResult;

/** Optional parameters. */
export interface ProvidersListAtTenantScopeNextNextOptionalParams
  extends coreClient.OperationOptions {
  /** The number of results to return. If null is passed returns all providers. */
  top?: number;
  /** The properties to include in the results. For example, use &$expand=metadata in the query string to retrieve resource provider metadata. To include property aliases in response, use $expand=resourceTypes/aliases. */
  expand?: string;
}

/** Contains response data for the listAtTenantScopeNextNext operation. */
export type ProvidersListAtTenantScopeNextNextResponse = ProviderListResult;

/** Optional parameters. */
export interface ProviderResourceTypesListOptionalParams
  extends coreClient.OperationOptions {
  /** The $expand query parameter. For example, to include property aliases in response, use $expand=resourceTypes/aliases. */
  expand?: string;
}

/** Contains response data for the list operation. */
export type ProviderResourceTypesListResponse = ProviderResourceTypeListResult;

/** Optional parameters. */
export interface ResourcesListByResourceGroupOptionalParams
  extends coreClient.OperationOptions {
  /** The filter to apply on the operation.<br><br>The properties you can use for eq (equals) or ne (not equals) are: location, resourceType, name, resourceGroup, identity, identity/principalId, plan, plan/publisher, plan/product, plan/name, plan/version, and plan/promotionCode.<br><br>For example, to filter by a resource type, use: $filter=resourceType eq 'Microsoft.Network/virtualNetworks'<br><br>You can use substringof(value, property) in the filter. The properties you can use for substring are: name and resourceGroup.<br><br>For example, to get all resources with 'demo' anywhere in the name, use: $filter=substringof('demo', name)<br><br>You can link more than one substringof together by adding and/or operators.<br><br>You can filter by tag names and values. For example, to filter for a tag name and value, use $filter=tagName eq 'tag1' and tagValue eq 'Value1'. When you filter by a tag name and value, the tags for each resource are not returned in the results.<br><br>You can use some properties together when filtering. The combinations you can use are: substringof and/or resourceType, plan and plan/publisher and plan/name, identity and identity/principalId. */
  filter?: string;
  /** The number of results to return. If null is passed, returns all resources. */
  top?: number;
  /** Comma-separated list of additional properties to be included in the response. Valid values include `createdTime`, `changedTime` and `provisioningState`. For example, `$expand=createdTime,changedTime`. */
  expand?: string;
}

/** Contains response data for the listByResourceGroup operation. */
export type ResourcesListByResourceGroupResponse = ResourceListResult;

/** Optional parameters. */
export interface ResourcesMoveResourcesOptionalParams
  extends coreClient.OperationOptions {
  /** Delay to wait until next poll, in milliseconds. */
  updateIntervalInMs?: number;
  /** A serialized poller which can be used to resume an existing paused Long-Running-Operation. */
  resumeFrom?: string;
}

/** Optional parameters. */
export interface ResourcesValidateMoveResourcesOptionalParams
  extends coreClient.OperationOptions {
  /** Delay to wait until next poll, in milliseconds. */
  updateIntervalInMs?: number;
  /** A serialized poller which can be used to resume an existing paused Long-Running-Operation. */
  resumeFrom?: string;
}

/** Optional parameters. */
export interface ResourcesListOptionalParams
  extends coreClient.OperationOptions {
  /** The filter to apply on the operation.<br><br>The properties you can use for eq (equals) or ne (not equals) are: location, resourceType, name, resourceGroup, identity, identity/principalId, plan, plan/publisher, plan/product, plan/name, plan/version, and plan/promotionCode.<br><br>For example, to filter by a resource type, use: $filter=resourceType eq 'Microsoft.Network/virtualNetworks'<br><br>You can use substringof(value, property) in the filter. The properties you can use for substring are: name and resourceGroup.<br><br>For example, to get all resources with 'demo' anywhere in the name, use: $filter=substringof('demo', name)<br><br>You can link more than one substringof together by adding and/or operators.<br><br>You can filter by tag names and values. For example, to filter for a tag name and value, use $filter=tagName eq 'tag1' and tagValue eq 'Value1'. When you filter by a tag name and value, the tags for each resource are not returned in the results.<br><br>You can use some properties together when filtering. The combinations you can use are: substringof and/or resourceType, plan and plan/publisher and plan/name, identity and identity/principalId. */
  filter?: string;
  /** The number of results to return. If null is passed, returns all resource groups. */
  top?: number;
  /** Comma-separated list of additional properties to be included in the response. Valid values include `createdTime`, `changedTime` and `provisioningState`. For example, `$expand=createdTime,changedTime`. */
  expand?: string;
}

/** Contains response data for the list operation. */
export type ResourcesListResponse = ResourceListResult;

/** Optional parameters. */
export interface ResourcesCheckExistenceOptionalParams
  extends coreClient.OperationOptions {}

/** Optional parameters. */
export interface ResourcesDeleteOptionalParams
  extends coreClient.OperationOptions {
  /** Delay to wait until next poll, in milliseconds. */
  updateIntervalInMs?: number;
  /** A serialized poller which can be used to resume an existing paused Long-Running-Operation. */
  resumeFrom?: string;
}

/** Optional parameters. */
export interface ResourcesCreateOrUpdateOptionalParams
  extends coreClient.OperationOptions {
  /** Delay to wait until next poll, in milliseconds. */
  updateIntervalInMs?: number;
  /** A serialized poller which can be used to resume an existing paused Long-Running-Operation. */
  resumeFrom?: string;
}

/** Contains response data for the createOrUpdate operation. */
export type ResourcesCreateOrUpdateResponse = GenericResource;

/** Optional parameters. */
export interface ResourcesUpdateOptionalParams
  extends coreClient.OperationOptions {
  /** Delay to wait until next poll, in milliseconds. */
  updateIntervalInMs?: number;
  /** A serialized poller which can be used to resume an existing paused Long-Running-Operation. */
  resumeFrom?: string;
}

/** Contains response data for the update operation. */
export type ResourcesUpdateResponse = GenericResource;

/** Optional parameters. */
export interface ResourcesGetOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the get operation. */
export type ResourcesGetResponse = GenericResource;

/** Optional parameters. */
export interface ResourcesCheckExistenceByIdOptionalParams
  extends coreClient.OperationOptions {}

/** Optional parameters. */
export interface ResourcesDeleteByIdOptionalParams
  extends coreClient.OperationOptions {
  /** Delay to wait until next poll, in milliseconds. */
  updateIntervalInMs?: number;
  /** A serialized poller which can be used to resume an existing paused Long-Running-Operation. */
  resumeFrom?: string;
}

/** Optional parameters. */
export interface ResourcesCreateOrUpdateByIdOptionalParams
  extends coreClient.OperationOptions {
  /** Delay to wait until next poll, in milliseconds. */
  updateIntervalInMs?: number;
  /** A serialized poller which can be used to resume an existing paused Long-Running-Operation. */
  resumeFrom?: string;
}

/** Contains response data for the createOrUpdateById operation. */
export type ResourcesCreateOrUpdateByIdResponse = GenericResource;

/** Optional parameters. */
export interface ResourcesUpdateByIdOptionalParams
  extends coreClient.OperationOptions {
  /** Delay to wait until next poll, in milliseconds. */
  updateIntervalInMs?: number;
  /** A serialized poller which can be used to resume an existing paused Long-Running-Operation. */
  resumeFrom?: string;
}

/** Contains response data for the updateById operation. */
export type ResourcesUpdateByIdResponse = GenericResource;

/** Optional parameters. */
export interface ResourcesGetByIdOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the getById operation. */
export type ResourcesGetByIdResponse = GenericResource;

/** Optional parameters. */
export interface ResourcesListByResourceGroupNextOptionalParams
  extends coreClient.OperationOptions {
  /** The filter to apply on the operation.<br><br>The properties you can use for eq (equals) or ne (not equals) are: location, resourceType, name, resourceGroup, identity, identity/principalId, plan, plan/publisher, plan/product, plan/name, plan/version, and plan/promotionCode.<br><br>For example, to filter by a resource type, use: $filter=resourceType eq 'Microsoft.Network/virtualNetworks'<br><br>You can use substringof(value, property) in the filter. The properties you can use for substring are: name and resourceGroup.<br><br>For example, to get all resources with 'demo' anywhere in the name, use: $filter=substringof('demo', name)<br><br>You can link more than one substringof together by adding and/or operators.<br><br>You can filter by tag names and values. For example, to filter for a tag name and value, use $filter=tagName eq 'tag1' and tagValue eq 'Value1'. When you filter by a tag name and value, the tags for each resource are not returned in the results.<br><br>You can use some properties together when filtering. The combinations you can use are: substringof and/or resourceType, plan and plan/publisher and plan/name, identity and identity/principalId. */
  filter?: string;
  /** The number of results to return. If null is passed, returns all resources. */
  top?: number;
  /** Comma-separated list of additional properties to be included in the response. Valid values include `createdTime`, `changedTime` and `provisioningState`. For example, `$expand=createdTime,changedTime`. */
  expand?: string;
}

/** Contains response data for the listByResourceGroupNext operation. */
export type ResourcesListByResourceGroupNextResponse = ResourceListResult;

/** Optional parameters. */
export interface ResourcesListNextOptionalParams
  extends coreClient.OperationOptions {
  /** The filter to apply on the operation.<br><br>The properties you can use for eq (equals) or ne (not equals) are: location, resourceType, name, resourceGroup, identity, identity/principalId, plan, plan/publisher, plan/product, plan/name, plan/version, and plan/promotionCode.<br><br>For example, to filter by a resource type, use: $filter=resourceType eq 'Microsoft.Network/virtualNetworks'<br><br>You can use substringof(value, property) in the filter. The properties you can use for substring are: name and resourceGroup.<br><br>For example, to get all resources with 'demo' anywhere in the name, use: $filter=substringof('demo', name)<br><br>You can link more than one substringof together by adding and/or operators.<br><br>You can filter by tag names and values. For example, to filter for a tag name and value, use $filter=tagName eq 'tag1' and tagValue eq 'Value1'. When you filter by a tag name and value, the tags for each resource are not returned in the results.<br><br>You can use some properties together when filtering. The combinations you can use are: substringof and/or resourceType, plan and plan/publisher and plan/name, identity and identity/principalId. */
  filter?: string;
  /** The number of results to return. If null is passed, returns all resource groups. */
  top?: number;
  /** Comma-separated list of additional properties to be included in the response. Valid values include `createdTime`, `changedTime` and `provisioningState`. For example, `$expand=createdTime,changedTime`. */
  expand?: string;
}

/** Contains response data for the listNext operation. */
export type ResourcesListNextResponse = ResourceListResult;

/** Optional parameters. */
export interface ResourcesListByResourceGroupNextNextOptionalParams
  extends coreClient.OperationOptions {
  /** The filter to apply on the operation.<br><br>The properties you can use for eq (equals) or ne (not equals) are: location, resourceType, name, resourceGroup, identity, identity/principalId, plan, plan/publisher, plan/product, plan/name, plan/version, and plan/promotionCode.<br><br>For example, to filter by a resource type, use: $filter=resourceType eq 'Microsoft.Network/virtualNetworks'<br><br>You can use substringof(value, property) in the filter. The properties you can use for substring are: name and resourceGroup.<br><br>For example, to get all resources with 'demo' anywhere in the name, use: $filter=substringof('demo', name)<br><br>You can link more than one substringof together by adding and/or operators.<br><br>You can filter by tag names and values. For example, to filter for a tag name and value, use $filter=tagName eq 'tag1' and tagValue eq 'Value1'. When you filter by a tag name and value, the tags for each resource are not returned in the results.<br><br>You can use some properties together when filtering. The combinations you can use are: substringof and/or resourceType, plan and plan/publisher and plan/name, identity and identity/principalId. */
  filter?: string;
  /** The number of results to return. If null is passed, returns all resources. */
  top?: number;
  /** Comma-separated list of additional properties to be included in the response. Valid values include `createdTime`, `changedTime` and `provisioningState`. For example, `$expand=createdTime,changedTime`. */
  expand?: string;
}

/** Contains response data for the listByResourceGroupNextNext operation. */
export type ResourcesListByResourceGroupNextNextResponse = ResourceListResult;

/** Optional parameters. */
export interface ResourcesListNextNextOptionalParams
  extends coreClient.OperationOptions {
  /** The filter to apply on the operation.<br><br>The properties you can use for eq (equals) or ne (not equals) are: location, resourceType, name, resourceGroup, identity, identity/principalId, plan, plan/publisher, plan/product, plan/name, plan/version, and plan/promotionCode.<br><br>For example, to filter by a resource type, use: $filter=resourceType eq 'Microsoft.Network/virtualNetworks'<br><br>You can use substringof(value, property) in the filter. The properties you can use for substring are: name and resourceGroup.<br><br>For example, to get all resources with 'demo' anywhere in the name, use: $filter=substringof('demo', name)<br><br>You can link more than one substringof together by adding and/or operators.<br><br>You can filter by tag names and values. For example, to filter for a tag name and value, use $filter=tagName eq 'tag1' and tagValue eq 'Value1'. When you filter by a tag name and value, the tags for each resource are not returned in the results.<br><br>You can use some properties together when filtering. The combinations you can use are: substringof and/or resourceType, plan and plan/publisher and plan/name, identity and identity/principalId. */
  filter?: string;
  /** The number of results to return. If null is passed, returns all resource groups. */
  top?: number;
  /** Comma-separated list of additional properties to be included in the response. Valid values include `createdTime`, `changedTime` and `provisioningState`. For example, `$expand=createdTime,changedTime`. */
  expand?: string;
}

/** Contains response data for the listNextNext operation. */
export type ResourcesListNextNextResponse = ResourceListResult;

/** Optional parameters. */
export interface ResourceGroupsCheckExistenceOptionalParams
  extends coreClient.OperationOptions {}

/** Optional parameters. */
export interface ResourceGroupsCreateOrUpdateOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the createOrUpdate operation. */
export type ResourceGroupsCreateOrUpdateResponse = ResourceGroup;

/** Optional parameters. */
export interface ResourceGroupsDeleteOptionalParams
  extends coreClient.OperationOptions {
  /** The resource types you want to force delete. Currently, only the following is supported: forceDeletionTypes=Microsoft.Compute/virtualMachines,Microsoft.Compute/virtualMachineScaleSets */
  forceDeletionTypes?: string;
  /** Delay to wait until next poll, in milliseconds. */
  updateIntervalInMs?: number;
  /** A serialized poller which can be used to resume an existing paused Long-Running-Operation. */
  resumeFrom?: string;
}

/** Optional parameters. */
export interface ResourceGroupsGetOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the get operation. */
export type ResourceGroupsGetResponse = ResourceGroup;

/** Optional parameters. */
export interface ResourceGroupsUpdateOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the update operation. */
export type ResourceGroupsUpdateResponse = ResourceGroup;

/** Optional parameters. */
export interface ResourceGroupsExportTemplateOptionalParams
  extends coreClient.OperationOptions {
  /** Delay to wait until next poll, in milliseconds. */
  updateIntervalInMs?: number;
  /** A serialized poller which can be used to resume an existing paused Long-Running-Operation. */
  resumeFrom?: string;
}

/** Contains response data for the exportTemplate operation. */
export type ResourceGroupsExportTemplateResponse = ResourceGroupExportResult;

/** Optional parameters. */
export interface ResourceGroupsListOptionalParams
  extends coreClient.OperationOptions {
  /** The filter to apply on the operation.<br><br>You can filter by tag names and values. For example, to filter for a tag name and value, use $filter=tagName eq 'tag1' and tagValue eq 'Value1' */
  filter?: string;
  /** The number of results to return. If null is passed, returns all resource groups. */
  top?: number;
}

/** Contains response data for the list operation. */
export type ResourceGroupsListResponse = ResourceGroupListResult;

/** Optional parameters. */
export interface ResourceGroupsListNextOptionalParams
  extends coreClient.OperationOptions {
  /** The filter to apply on the operation.<br><br>You can filter by tag names and values. For example, to filter for a tag name and value, use $filter=tagName eq 'tag1' and tagValue eq 'Value1' */
  filter?: string;
  /** The number of results to return. If null is passed, returns all resource groups. */
  top?: number;
}

/** Contains response data for the listNext operation. */
export type ResourceGroupsListNextResponse = ResourceGroupListResult;

/** Optional parameters. */
export interface ResourceGroupsListNextNextOptionalParams
  extends coreClient.OperationOptions {
  /** The filter to apply on the operation.<br><br>You can filter by tag names and values. For example, to filter for a tag name and value, use $filter=tagName eq 'tag1' and tagValue eq 'Value1' */
  filter?: string;
  /** The number of results to return. If null is passed, returns all resource groups. */
  top?: number;
}

/** Contains response data for the listNextNext operation. */
export type ResourceGroupsListNextNextResponse = ResourceGroupListResult;

/** Optional parameters. */
export interface TagsOperationsDeleteValueOptionalParams
  extends coreClient.OperationOptions {}

/** Optional parameters. */
export interface TagsOperationsCreateOrUpdateValueOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the createOrUpdateValue operation. */
export type TagsOperationsCreateOrUpdateValueResponse = TagValue;

/** Optional parameters. */
export interface TagsOperationsCreateOrUpdateOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the createOrUpdate operation. */
export type TagsOperationsCreateOrUpdateResponse = TagDetails;

/** Optional parameters. */
export interface TagsOperationsDeleteOptionalParams
  extends coreClient.OperationOptions {}

/** Optional parameters. */
export interface TagsOperationsListOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the list operation. */
export type TagsOperationsListResponse = TagsListResult;

/** Optional parameters. */
export interface TagsOperationsCreateOrUpdateAtScopeOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the createOrUpdateAtScope operation. */
export type TagsOperationsCreateOrUpdateAtScopeResponse = TagsResource;

/** Optional parameters. */
export interface TagsOperationsUpdateAtScopeOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the updateAtScope operation. */
export type TagsOperationsUpdateAtScopeResponse = TagsResource;

/** Optional parameters. */
export interface TagsOperationsGetAtScopeOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the getAtScope operation. */
export type TagsOperationsGetAtScopeResponse = TagsResource;

/** Optional parameters. */
export interface TagsOperationsDeleteAtScopeOptionalParams
  extends coreClient.OperationOptions {}

/** Optional parameters. */
export interface TagsOperationsListNextOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the listNext operation. */
export type TagsOperationsListNextResponse = TagsListResult;

/** Optional parameters. */
export interface TagsOperationsListNextNextOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the listNextNext operation. */
export type TagsOperationsListNextNextResponse = TagsListResult;

/** Optional parameters. */
export interface DeploymentOperationsGetAtScopeOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the getAtScope operation. */
export type DeploymentOperationsGetAtScopeResponse = DeploymentOperation;

/** Optional parameters. */
export interface DeploymentOperationsListAtScopeOptionalParams
  extends coreClient.OperationOptions {
  /** The number of results to return. */
  top?: number;
}

/** Contains response data for the listAtScope operation. */
export type DeploymentOperationsListAtScopeResponse = DeploymentOperationsListResult;

/** Optional parameters. */
export interface DeploymentOperationsGetAtTenantScopeOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the getAtTenantScope operation. */
export type DeploymentOperationsGetAtTenantScopeResponse = DeploymentOperation;

/** Optional parameters. */
export interface DeploymentOperationsListAtTenantScopeOptionalParams
  extends coreClient.OperationOptions {
  /** The number of results to return. */
  top?: number;
}

/** Contains response data for the listAtTenantScope operation. */
export type DeploymentOperationsListAtTenantScopeResponse = DeploymentOperationsListResult;

/** Optional parameters. */
export interface DeploymentOperationsGetAtManagementGroupScopeOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the getAtManagementGroupScope operation. */
export type DeploymentOperationsGetAtManagementGroupScopeResponse = DeploymentOperation;

/** Optional parameters. */
export interface DeploymentOperationsListAtManagementGroupScopeOptionalParams
  extends coreClient.OperationOptions {
  /** The number of results to return. */
  top?: number;
}

/** Contains response data for the listAtManagementGroupScope operation. */
export type DeploymentOperationsListAtManagementGroupScopeResponse = DeploymentOperationsListResult;

/** Optional parameters. */
export interface DeploymentOperationsGetAtSubscriptionScopeOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the getAtSubscriptionScope operation. */
export type DeploymentOperationsGetAtSubscriptionScopeResponse = DeploymentOperation;

/** Optional parameters. */
export interface DeploymentOperationsListAtSubscriptionScopeOptionalParams
  extends coreClient.OperationOptions {
  /** The number of results to return. */
  top?: number;
}

/** Contains response data for the listAtSubscriptionScope operation. */
export type DeploymentOperationsListAtSubscriptionScopeResponse = DeploymentOperationsListResult;

/** Optional parameters. */
export interface DeploymentOperationsGetOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the get operation. */
export type DeploymentOperationsGetResponse = DeploymentOperation;

/** Optional parameters. */
export interface DeploymentOperationsListOptionalParams
  extends coreClient.OperationOptions {
  /** The number of results to return. */
  top?: number;
}

/** Contains response data for the list operation. */
export type DeploymentOperationsListResponse = DeploymentOperationsListResult;

/** Optional parameters. */
export interface DeploymentOperationsListAtScopeNextOptionalParams
  extends coreClient.OperationOptions {
  /** The number of results to return. */
  top?: number;
}

/** Contains response data for the listAtScopeNext operation. */
export type DeploymentOperationsListAtScopeNextResponse = DeploymentOperationsListResult;

/** Optional parameters. */
export interface DeploymentOperationsListAtTenantScopeNextOptionalParams
  extends coreClient.OperationOptions {
  /** The number of results to return. */
  top?: number;
}

/** Contains response data for the listAtTenantScopeNext operation. */
export type DeploymentOperationsListAtTenantScopeNextResponse = DeploymentOperationsListResult;

/** Optional parameters. */
export interface DeploymentOperationsListAtManagementGroupScopeNextOptionalParams
  extends coreClient.OperationOptions {
  /** The number of results to return. */
  top?: number;
}

/** Contains response data for the listAtManagementGroupScopeNext operation. */
export type DeploymentOperationsListAtManagementGroupScopeNextResponse = DeploymentOperationsListResult;

/** Optional parameters. */
export interface DeploymentOperationsListAtSubscriptionScopeNextOptionalParams
  extends coreClient.OperationOptions {
  /** The number of results to return. */
  top?: number;
}

/** Contains response data for the listAtSubscriptionScopeNext operation. */
export type DeploymentOperationsListAtSubscriptionScopeNextResponse = DeploymentOperationsListResult;

/** Optional parameters. */
export interface DeploymentOperationsListNextOptionalParams
  extends coreClient.OperationOptions {
  /** The number of results to return. */
  top?: number;
}

/** Contains response data for the listNext operation. */
export type DeploymentOperationsListNextResponse = DeploymentOperationsListResult;

/** Optional parameters. */
export interface DeploymentOperationsListAtScopeNextNextOptionalParams
  extends coreClient.OperationOptions {
  /** The number of results to return. */
  top?: number;
}

/** Contains response data for the listAtScopeNextNext operation. */
export type DeploymentOperationsListAtScopeNextNextResponse = DeploymentOperationsListResult;

/** Optional parameters. */
export interface DeploymentOperationsListAtTenantScopeNextNextOptionalParams
  extends coreClient.OperationOptions {
  /** The number of results to return. */
  top?: number;
}

/** Contains response data for the listAtTenantScopeNextNext operation. */
export type DeploymentOperationsListAtTenantScopeNextNextResponse = DeploymentOperationsListResult;

/** Optional parameters. */
export interface DeploymentOperationsListAtManagementGroupScopeNextNextOptionalParams
  extends coreClient.OperationOptions {
  /** The number of results to return. */
  top?: number;
}

/** Contains response data for the listAtManagementGroupScopeNextNext operation. */
export type DeploymentOperationsListAtManagementGroupScopeNextNextResponse = DeploymentOperationsListResult;

/** Optional parameters. */
export interface DeploymentOperationsListAtSubscriptionScopeNextNextOptionalParams
  extends coreClient.OperationOptions {
  /** The number of results to return. */
  top?: number;
}

/** Contains response data for the listAtSubscriptionScopeNextNext operation. */
export type DeploymentOperationsListAtSubscriptionScopeNextNextResponse = DeploymentOperationsListResult;

/** Optional parameters. */
export interface DeploymentOperationsListNextNextOptionalParams
  extends coreClient.OperationOptions {
  /** The number of results to return. */
  top?: number;
}

/** Contains response data for the listNextNext operation. */
export type DeploymentOperationsListNextNextResponse = DeploymentOperationsListResult;

/** Optional parameters. */
export interface ResourceManagementClientOptionalParams
  extends coreClient.ServiceClientOptions {
  /** server parameter */
  $host?: string;
  /** Api Version */
  apiVersion?: string;
  /** Overrides client endpoint. */
  endpoint?: string;
}
