export type Maybe<T> = T | null;

export type InputMaybe<T> = Maybe<T>;

export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };

export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };

export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };

/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  Mixed: string;
  EMAIL: string;
  JSON: string;
  DateTimeUtc: string;
  Date: string;
  Decimal: string;
};

export type Query = {
  __typename?: 'Query';
  applicantIndividualCompanyPositions?: Maybe<ApplicantIndividualCompanyPositionPaginator>;
  applicantIndividualCompanyRelations?: Maybe<ApplicantIndividualCompanyRelationPaginator>;
};

export type QueryApplicantIndividualCompanyPositionsArgs = {
  filter?: InputMaybe<QueryApplicantIndividualCompanyPositionsFilterFilterConditions>;
  orderBy?: InputMaybe<Array<QueryApplicantIndividualCompanyPositionsOrderByOrderByClause>>;
  first?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
};

export type QueryApplicantIndividualCompanyRelationsArgs = {
  filter?: InputMaybe<QueryApplicantIndividualCompanyRelationsFilterFilterConditions>;
  orderBy?: InputMaybe<Array<QueryApplicantIndividualCompanyRelationsOrderByOrderByClause>>;
  first?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
};

export type QueryApplicantIndividualCompanyPositionsFilterFilterConditions = {
  column?: InputMaybe<QueryApplicantIndividualCompanyPositionsFilterStatic>;
  operator?: InputMaybe<SqlOperator>;
  value?: InputMaybe<Scalars['Mixed']>;
  AND?: InputMaybe<Array<QueryApplicantIndividualCompanyPositionsFilterFilterConditions>>;
  OR?: InputMaybe<Array<QueryApplicantIndividualCompanyPositionsFilterFilterConditions>>;
};

export type ApplicantIndividualCompanyPositionPaginator = {
  __typename?: 'ApplicantIndividualCompanyPositionPaginator';
  paginatorInfo: PaginatorInfo;
  data: Array<ApplicantIndividualCompanyPosition>;
};

export type QueryApplicantIndividualCompanyPositionsOrderByOrderByClause = {
  column: QueryApplicantIndividualCompanyPositionsOrderByColumn;
  order: SortOrder;
};

export type ApplicantIndividualCompanyRelationPaginator = {
  __typename?: 'ApplicantIndividualCompanyRelationPaginator';
  paginatorInfo: PaginatorInfo;
  data: Array<ApplicantIndividualCompanyRelation>;
};

export type QueryApplicantIndividualCompanyRelationsFilterFilterConditions = {
  column?: InputMaybe<QueryApplicantIndividualCompanyRelationsFilterStatic>;
  operator?: InputMaybe<SqlOperator>;
  value?: InputMaybe<Scalars['Mixed']>;
  AND?: InputMaybe<Array<QueryApplicantIndividualCompanyRelationsFilterFilterConditions>>;
  OR?: InputMaybe<Array<QueryApplicantIndividualCompanyRelationsFilterFilterConditions>>;
};

export type QueryApplicantIndividualCompanyRelationsOrderByOrderByClause = {
  column: QueryApplicantIndividualCompanyRelationsOrderByColumn;
  order: SortOrder;
};

export enum QueryApplicantIndividualCompanyPositionsFilterStaticOperator {
  Name = 'name',
  CompanyId = 'company_id',
}

export enum QueryApplicantIndividualCompanyPositionsFilterStaticType {
  Name = 'name',
  CompanyId = 'company_id',
}

export type QueryApplicantIndividualCompanyPositionsFilterStaticInput = {
  name?: InputMaybe<Scalars['String']>;
  company_id?: InputMaybe<Scalars['ID']>;
};

export enum QueryApplicantIndividualCompanyPositionsFilterStatic {
  Name = 'NAME',
  CompanyId = 'COMPANY_ID',
}

export enum SqlOperator {
  Eq = 'EQ',
  Neq = 'NEQ',
  Gt = 'GT',
  Gte = 'GTE',
  Lt = 'LT',
  Lte = 'LTE',
  Like = 'LIKE',
  Ilike = 'ILIKE',
  NotLike = 'NOT_LIKE',
  In = 'IN',
  NotIn = 'NOT_IN',
  Between = 'BETWEEN',
  NotBetween = 'NOT_BETWEEN',
  IsNull = 'IS_NULL',
  IsNotNull = 'IS_NOT_NULL',
}

export type PaginatorInfo = {
  __typename?: 'PaginatorInfo';
  count: Scalars['Int'];
  currentPage: Scalars['Int'];
  firstItem?: Maybe<Scalars['Int']>;
  hasMorePages: Scalars['Boolean'];
  lastItem?: Maybe<Scalars['Int']>;
  lastPage: Scalars['Int'];
  perPage: Scalars['Int'];
  total: Scalars['Int'];
};

export type ApplicantIndividualCompanyPosition = {
  __typename?: 'ApplicantIndividualCompanyPosition';
  id: Scalars['ID'];
  name: Scalars['String'];
  company?: Maybe<Company>;
};

export enum QueryApplicantIndividualCompanyPositionsOrderByColumn {
  Id = 'ID',
  Name = 'NAME',
  CompanyId = 'COMPANY_ID',
}

export enum SortOrder {
  Asc = 'ASC',
  Desc = 'DESC',
}

export type ApplicantIndividualCompanyRelation = {
  __typename?: 'ApplicantIndividualCompanyRelation';
  id: Scalars['ID'];
  name: Scalars['String'];
  company?: Maybe<Company>;
};

export enum QueryApplicantIndividualCompanyRelationsFilterStatic {
  Name = 'NAME',
  CompanyId = 'COMPANY_ID',
}

export enum QueryApplicantIndividualCompanyRelationsOrderByColumn {
  Id = 'ID',
  Name = 'NAME',
  CompanyId = 'COMPANY_ID',
}

export type Company = {
  __typename?: 'Company';
  id: Scalars['ID'];
  name: Scalars['String'];
  url?: Maybe<Scalars['String']>;
  email: Scalars['EMAIL'];
  company_number?: Maybe<Scalars['String']>;
  company_modules?: Maybe<Array<Maybe<CompanyModule>>>;
  contact_name?: Maybe<Scalars['String']>;
  country?: Maybe<Country>;
  zip?: Maybe<Scalars['String']>;
  city?: Maybe<Scalars['String']>;
  address?: Maybe<Scalars['String']>;
  members?: Maybe<Array<Maybe<Members>>>;
  members_count?: Maybe<Scalars['Int']>;
  projects_count?: Maybe<Scalars['Int']>;
  projects?: Maybe<Array<Maybe<Project>>>;
  departments?: Maybe<Array<Maybe<Department>>>;
  positions?: Maybe<Array<Maybe<DepartmentPosition>>>;
  additional_fields_info?: Maybe<Scalars['JSON']>;
  phone?: Maybe<Scalars['String']>;
  reg_address?: Maybe<Scalars['String']>;
  tax_id?: Maybe<Scalars['String']>;
  incorporate_date?: Maybe<Scalars['DateTimeUtc']>;
  employees?: Maybe<Employee>;
  type_of_industry?: Maybe<TypeOfIndustry>;
  license_number?: Maybe<Scalars['String']>;
  exp_date?: Maybe<Scalars['DateTimeUtc']>;
  state?: Maybe<State>;
  state_reason?: Maybe<StateReason>;
  reg_number?: Maybe<Scalars['String']>;
  entity_type?: Maybe<Scalars['String']>;
  additional_fields_basic?: Maybe<Scalars['JSON']>;
  additional_fields_settings?: Maybe<Scalars['JSON']>;
  additional_fields_data?: Maybe<Scalars['JSON']>;
  logo?: Maybe<Files>;
  vv_token?: Maybe<Scalars['String']>;
  member_verify_url?: Maybe<Scalars['String']>;
  backoffice_login_url?: Maybe<Scalars['String']>;
  backoffice_forgot_password_url?: Maybe<Scalars['String']>;
  backoffice_support_url?: Maybe<Scalars['String']>;
  backoffice_support_email?: Maybe<Scalars['EMAIL']>;
  created_at: Scalars['DateTimeUtc'];
  updated_at: Scalars['DateTimeUtc'];
};

export type CompanyModule = {
  __typename?: 'CompanyModule';
  id: Scalars['ID'];
  module?: Maybe<Module>;
  payment_providers?: Maybe<Array<Maybe<CompanyModulePaymentProvider>>>;
  iban_providers?: Maybe<Array<Maybe<CompanyModuleIbanProvider>>>;
  is_active: Scalars['Boolean'];
};

export type Country = {
  __typename?: 'Country';
  id: Scalars['ID'];
  name: Scalars['String'];
  iso: Scalars['String'];
};

export type Members = {
  __typename?: 'Members';
  id: Scalars['ID'];
  first_name?: Maybe<Scalars['String']>;
  last_name?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['EMAIL']>;
  sex?: Maybe<Sex>;
  member_status?: Maybe<MemberStatus>;
  last_login_at?: Maybe<Scalars['DateTimeUtc']>;
  company?: Maybe<Company>;
  country?: Maybe<Country>;
  language?: Maybe<Languages>;
  group?: Maybe<GroupRole>;
  position?: Maybe<DepartmentPosition>;
  department?: Maybe<Department>;
  two_factor_auth_setting_id?: Maybe<Scalars['ID']>;
  two_factor_auth_settings?: Maybe<TwoFactorAuthSettings>;
  additional_fields?: Maybe<Scalars['JSON']>;
  additional_info_fields?: Maybe<Scalars['JSON']>;
  fullname?: Maybe<Scalars['String']>;
  access_groups?: Maybe<Array<Maybe<MemberAccessLimitation>>>;
  is_show_owner_applicants?: Maybe<Scalars['Boolean']>;
  security_pin?: Maybe<Scalars['String']>;
  google2fa_secret?: Maybe<Scalars['String']>;
  backup_codes?: Maybe<Scalars['JSON']>;
  is_sign_transaction?: Maybe<Scalars['Boolean']>;
  ip_addresses?: Maybe<Array<Maybe<ClientIpAddress>>>;
  email_verification?: Maybe<EmailVerification>;
  photo?: Maybe<Files>;
  job_title?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['DateTimeUtc']>;
};

export type Project = {
  __typename?: 'Project';
  id: Scalars['ID'];
  name: Scalars['String'];
  url?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  support_email?: Maybe<Scalars['String']>;
  login_url?: Maybe<Scalars['String']>;
  sms_sender_name?: Maybe<Scalars['String']>;
  client_url?: Maybe<Scalars['String']>;
  forgot_password_url?: Maybe<Scalars['String']>;
  additional_fields_basic?: Maybe<Scalars['JSON']>;
  additional_fields_settings?: Maybe<Scalars['JSON']>;
  project_settings?: Maybe<Array<Maybe<ProjectSettings>>>;
  project_api_settings?: Maybe<Array<Maybe<ProjectApiSetting>>>;
  module?: Maybe<Module>;
  company?: Maybe<Company>;
  avatar?: Maybe<Files>;
  state?: Maybe<State>;
  created_at: Scalars['DateTimeUtc'];
  updated_at: Scalars['DateTimeUtc'];
};

export type Department = {
  __typename?: 'Department';
  id: Scalars['ID'];
  name: Scalars['String'];
  created_at?: Maybe<Scalars['DateTimeUtc']>;
  company?: Maybe<Company>;
  positions?: Maybe<Array<Maybe<DepartmentPosition>>>;
};

export type DepartmentPosition = {
  __typename?: 'DepartmentPosition';
  id: Scalars['ID'];
  name: Scalars['String'];
  is_active?: Maybe<Scalars['Boolean']>;
  company?: Maybe<Company>;
  department?: Maybe<Array<Maybe<Department>>>;
};

export type Employee = {
  __typename?: 'Employee';
  id: Scalars['ID'];
  employees_number: Scalars['String'];
};

export type TypeOfIndustry = {
  __typename?: 'TypeOfIndustry';
  id: Scalars['ID'];
  name: Scalars['String'];
};

export type State = {
  __typename?: 'State';
  id: Scalars['ID'];
  name: Scalars['String'];
};

export type StateReason = {
  __typename?: 'StateReason';
  id: Scalars['ID'];
  name: Scalars['String'];
};

export type Files = {
  __typename?: 'Files';
  id: Scalars['ID'];
  file_name: Scalars['String'];
  mime_type: Scalars['String'];
  size: Scalars['Int'];
  entity_type: FileEntityTypeEnum;
  author_id: Scalars['Int'];
  storage_path: Scalars['String'];
  storage_name: Scalars['String'];
  link: Scalars['String'];
  created_at?: Maybe<Scalars['DateTimeUtc']>;
  updated_at?: Maybe<Scalars['DateTimeUtc']>;
};

export type Module = {
  __typename?: 'Module';
  id: Scalars['ID'];
  name: Scalars['String'];
};

export type CompanyModulePaymentProvider = {
  __typename?: 'CompanyModulePaymentProvider';
  id: Scalars['ID'];
  company_module_id: Scalars['ID'];
  payment_provider: PaymentProvider;
  is_active: Scalars['Boolean'];
};

export type CompanyModuleIbanProvider = {
  __typename?: 'CompanyModuleIbanProvider';
  id: Scalars['ID'];
  company_module_id: Scalars['ID'];
  payment_provider_iban: PaymentProviderIban;
  is_active: Scalars['Boolean'];
};

export enum Sex {
  Male = 'Male',
  Female = 'Female',
}

export type MemberStatus = {
  __typename?: 'MemberStatus';
  id: Scalars['ID'];
  name: Scalars['String'];
};

export type Languages = {
  __typename?: 'Languages';
  id: Scalars['ID'];
  name: Scalars['String'];
  iso: Scalars['String'];
};

export type GroupRole = {
  __typename?: 'GroupRole';
  id: Scalars['ID'];
  name?: Maybe<Scalars['String']>;
  group_type_id?: Maybe<Scalars['ID']>;
  role_id?: Maybe<Scalars['ID']>;
  module_id?: Maybe<Scalars['ID']>;
  description?: Maybe<Scalars['String']>;
  is_active?: Maybe<Scalars['Boolean']>;
  group_type?: Maybe<GroupType>;
  role?: Maybe<Role>;
  providers?: Maybe<Array<Maybe<GroupRoleProvider>>>;
  company?: Maybe<Company>;
  module?: Maybe<Module>;
};

export type TwoFactorAuthSettings = {
  __typename?: 'TwoFactorAuthSettings';
  id: Scalars['ID'];
  name: Scalars['String'];
};

export type MemberAccessLimitation = {
  __typename?: 'MemberAccessLimitation';
  id: Scalars['ID'];
  company?: Maybe<Company>;
  member?: Maybe<Members>;
  module?: Maybe<Module>;
  group?: Maybe<GroupType>;
  group_roles?: Maybe<Array<Maybe<GroupRole>>>;
  project?: Maybe<Project>;
  provider?: Maybe<PaymentProvider>;
  see_own_applicants?: Maybe<Scalars['Boolean']>;
};

export type ClientIpAddress = {
  __typename?: 'ClientIpAddress';
  id: Scalars['ID'];
  ip_address?: Maybe<Scalars['String']>;
  client_type?: Maybe<Scalars['String']>;
  client_id?: Maybe<Scalars['ID']>;
};

export enum EmailVerification {
  NotVerified = 'NOT_VERIFIED',
  Requested = 'REQUESTED',
  Verified = 'VERIFIED',
}

export type ProjectSettings = {
  __typename?: 'ProjectSettings';
  group_type?: Maybe<GroupType>;
  group_role?: Maybe<GroupRole>;
  payment_provider?: Maybe<PaymentProvider>;
  iban_provider?: Maybe<PaymentProviderIban>;
  commission_template?: Maybe<CommissionTemplate>;
  applicant_type: ApplicantType;
};

export type ProjectApiSetting = {
  __typename?: 'ProjectApiSetting';
  id: Scalars['ID'];
  project: Project;
  wallet?: Maybe<Scalars['String']>;
  api_key?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
  is_active?: Maybe<Scalars['Boolean']>;
  provider?: Maybe<ProviderType>;
};

export enum FileEntityTypeEnum {
  Member = 'MEMBER',
  Company = 'COMPANY',
  Document = 'DOCUMENT',
  ApplicantIndividual = 'APPLICANT_INDIVIDUAL',
  ApplicantCompany = 'APPLICANT_COMPANY',
  Applicant = 'APPLICANT',
  Project = 'PROJECT',
  File = 'FILE',
}

export type PaymentProvider = {
  __typename?: 'PaymentProvider';
  id: Scalars['ID'];
  name: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  logo?: Maybe<Files>;
  is_active?: Maybe<Scalars['Boolean']>;
  payment_systems?: Maybe<Array<Maybe<PaymentSystem>>>;
  commission_price_list?: Maybe<CommissionPriceList>;
  company?: Maybe<Company>;
};

export type PaymentProviderIban = {
  __typename?: 'PaymentProviderIban';
  id: Scalars['ID'];
  name: Scalars['String'];
  company?: Maybe<Company>;
  currency?: Maybe<Currencies>;
  is_active?: Maybe<Scalars['Boolean']>;
};

export type GroupType = {
  __typename?: 'GroupType';
  id: Scalars['ID'];
  name: GroupsEntities;
};

export type Role = {
  __typename?: 'Role';
  id: Scalars['ID'];
  name: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  permissions?: Maybe<Array<Maybe<Permissions>>>;
  permission_category_all_member?: Maybe<Array<Maybe<PermissionCategory>>>;
  permissions_tree?: Maybe<Scalars['JSON']>;
  group_type?: Maybe<GroupType>;
  company?: Maybe<Company>;
  groups?: Maybe<Array<Maybe<GroupRole>>>;
  groups_count?: Maybe<Scalars['Int']>;
  is_all_companies?: Maybe<Scalars['Boolean']>;
};

export type GroupRoleProvider = {
  __typename?: 'GroupRoleProvider';
  id: Scalars['ID'];
  group_role_id?: Maybe<Scalars['ID']>;
  payment_provider?: Maybe<PaymentProvider>;
  commission_template?: Maybe<CommissionTemplate>;
  is_default?: Maybe<Scalars['Boolean']>;
};

export type CommissionTemplate = {
  __typename?: 'CommissionTemplate';
  id: Scalars['ID'];
  name: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  is_active?: Maybe<Scalars['Boolean']>;
  country_id?: Maybe<Array<Maybe<Scalars['ID']>>>;
  currency_id?: Maybe<Array<Maybe<Scalars['ID']>>>;
  payment_provider?: Maybe<PaymentProvider>;
  business_activity?: Maybe<Array<Maybe<BusinessActivity>>>;
  owner?: Maybe<Array<Maybe<ApplicantIndividual>>>;
  account?: Maybe<Account>;
  company?: Maybe<Company>;
  regions?: Maybe<Array<Maybe<Region>>>;
  currencies?: Maybe<Array<Maybe<Currencies>>>;
  commission_template_limits?: Maybe<Array<Maybe<CommissionTemplateLimit>>>;
};

export enum ApplicantType {
  ApplicantIndividual = 'ApplicantIndividual',
  ApplicantCompany = 'ApplicantCompany',
}

export type ProviderType = PaymentProvider | PaymentProviderIban;

export type PaymentSystem = {
  __typename?: 'PaymentSystem';
  id: Scalars['ID'];
  name: Scalars['String'];
  is_active?: Maybe<Scalars['Boolean']>;
  regions?: Maybe<Array<Maybe<Region>>>;
  company?: Maybe<Company>;
  currencies?: Maybe<Array<Maybe<Currencies>>>;
  providers?: Maybe<PaymentProvider>;
  banks?: Maybe<Array<Maybe<PaymentBank>>>;
  bank_correspondent?: Maybe<BankCorrespondent>;
  operations?: Maybe<Array<Maybe<OperationType>>>;
  description?: Maybe<Scalars['String']>;
  logo?: Maybe<Files>;
};

export type CommissionPriceList = {
  __typename?: 'CommissionPriceList';
  id: Scalars['ID'];
  name: Scalars['String'];
  provider?: Maybe<PaymentProvider>;
  owner?: Maybe<Array<Maybe<ApplicantIndividual>>>;
  account?: Maybe<Account>;
  payment_system?: Maybe<PaymentSystem>;
  commission_template?: Maybe<CommissionTemplate>;
  fees?: Maybe<Array<Maybe<PriceListFee>>>;
  region?: Maybe<Region>;
  company?: Maybe<Company>;
};

export type Currencies = {
  __typename?: 'Currencies';
  id: Scalars['ID'];
  name: Scalars['String'];
  code: Scalars['String'];
  minor_unit?: Maybe<Scalars['Int']>;
};

export enum GroupsEntities {
  Member = 'Member',
  Company = 'Company',
  Individual = 'Individual',
}

export type Permissions = {
  __typename?: 'Permissions';
  id?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
  display_name?: Maybe<Scalars['String']>;
  guard_name?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  all?: Maybe<Scalars['JSON']>;
};

export type PermissionCategory = {
  __typename?: 'PermissionCategory';
  id?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
  permissionList?: Maybe<Array<Maybe<PermissionList>>>;
};

export type PermissionCategoryPermissionListArgs = {
  permissionType?: InputMaybe<PermissionCategoryPermissionListPermissionTypeWhereConditions>;
};

export type BusinessActivity = {
  __typename?: 'BusinessActivity';
  id: Scalars['ID'];
  name: Scalars['String'];
};

export type ApplicantIndividual = {
  __typename?: 'ApplicantIndividual';
  id: Scalars['ID'];
  first_name?: Maybe<Scalars['String']>;
  last_name?: Maybe<Scalars['String']>;
  middle_name?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['EMAIL']>;
  url?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  email_verification?: Maybe<ApplicantVerificationStatus>;
  phone_verification?: Maybe<ApplicantVerificationStatus>;
  country?: Maybe<Country>;
  language?: Maybe<Languages>;
  citizenship_country?: Maybe<Country>;
  state?: Maybe<Scalars['String']>;
  city?: Maybe<Scalars['String']>;
  address?: Maybe<Scalars['String']>;
  zip?: Maybe<Scalars['String']>;
  nationality?: Maybe<Scalars['String']>;
  birth_country?: Maybe<Country>;
  birth_state?: Maybe<Scalars['String']>;
  birth_city?: Maybe<Scalars['String']>;
  birth_at?: Maybe<Scalars['Date']>;
  sex?: Maybe<Sex>;
  created_at?: Maybe<Scalars['DateTimeUtc']>;
  updated_at?: Maybe<Scalars['DateTimeUtc']>;
  profile_additional_fields?: Maybe<Scalars['JSON']>;
  personal_additional_fields?: Maybe<Scalars['JSON']>;
  contacts_additional_fields?: Maybe<Scalars['JSON']>;
  fullname?: Maybe<Scalars['String']>;
  last_screened_at?: Maybe<Scalars['DateTimeUtc']>;
  address_additional_fields?: Maybe<Scalars['JSON']>;
  status?: Maybe<ApplicantStatus>;
  applicant_state?: Maybe<ApplicantState>;
  state_reason?: Maybe<ApplicantStateReason>;
  risk_level?: Maybe<ApplicantRiskLevel>;
  manager?: Maybe<Members>;
  labels?: Maybe<Array<Maybe<ApplicantIndividualLabel>>>;
  company?: Maybe<Company>;
  notes?: Maybe<Array<Maybe<ApplicantIndividualNotes>>>;
  modules?: Maybe<Array<Maybe<ApplicantIndividualModules>>>;
  applicant_companies?: Maybe<Array<Maybe<ApplicantCompany>>>;
  group?: Maybe<GroupRole>;
  photo?: Maybe<Files>;
  project?: Maybe<Project>;
  two_factor_auth?: Maybe<TwoFactorAuthSettings>;
  security_pin?: Maybe<Scalars['String']>;
  google2fa_secret?: Maybe<Scalars['String']>;
  backup_codes?: Maybe<Scalars['JSON']>;
  ip_addresses?: Maybe<Array<Maybe<ClientIpAddress>>>;
  kyc_level?: Maybe<ApplicantKycLevel>;
  banking_access?: Maybe<Array<Maybe<ApplicantBankingAccess>>>;
};

export type Account = {
  __typename?: 'Account';
  id: Scalars['ID'];
  currency?: Maybe<Currencies>;
  owner?: Maybe<ApplicantIndividual>;
  account_number?: Maybe<Scalars['String']>;
  account_type?: Maybe<AccountType>;
  payment_provider?: Maybe<PaymentProvider>;
  iban_provider?: Maybe<PaymentProviderIban>;
  payment_system?: Maybe<PaymentSystem>;
  payment_bank?: Maybe<PaymentBank>;
  commission_template?: Maybe<CommissionTemplate>;
  group?: Maybe<GroupRole>;
  group_type?: Maybe<GroupType>;
  client?: Maybe<Client>;
  account_state?: Maybe<AccountState>;
  company?: Maybe<Company>;
  member?: Maybe<Members>;
  client_accounts: Array<ClientAccountsDetails>;
  account_name: Scalars['String'];
  is_primary?: Maybe<Scalars['Boolean']>;
  min_limit_balance?: Maybe<Scalars['Decimal']>;
  max_limit_balance?: Maybe<Scalars['Decimal']>;
  created_at?: Maybe<Scalars['DateTimeUtc']>;
  updated_at?: Maybe<Scalars['DateTimeUtc']>;
  activated_at?: Maybe<Scalars['DateTimeUtc']>;
  last_charge_at?: Maybe<Scalars['DateTimeUtc']>;
};

export type Region = {
  __typename?: 'Region';
  id: Scalars['ID'];
  name: Scalars['String'];
  countries?: Maybe<Array<Maybe<Country>>>;
  company?: Maybe<Company>;
};

export type CommissionTemplateLimit = {
  __typename?: 'CommissionTemplateLimit';
  id: Scalars['ID'];
  amount: Scalars['Decimal'];
  currency: Currencies;
  period_count?: Maybe<Scalars['Int']>;
  commission_template_limit_type: CommissionTemplateLimitType;
  commission_template_limit_transfer_direction: CommissionTemplateLimitTransferDirection;
  commission_template_limit_period?: Maybe<CommissionTemplateLimitPeriod>;
  commission_template_limit_action_type: CommissionTemplateLimitActionType;
  commission_template: CommissionTemplate;
  payment_system: PaymentSystem;
  region: Region;
};

export type PaymentBank = {
  __typename?: 'PaymentBank';
  id: Scalars['ID'];
  name: Scalars['String'];
  address?: Maybe<Scalars['String']>;
  bank_code?: Maybe<Scalars['String']>;
  payment_system_code?: Maybe<Scalars['String']>;
  country?: Maybe<Country>;
  bank_correspondent?: Maybe<BankCorrespondent>;
  payment_provider?: Maybe<PaymentProvider>;
  payment_system?: Maybe<PaymentSystem>;
  is_active?: Maybe<Scalars['Boolean']>;
};

export type BankCorrespondent = {
  __typename?: 'BankCorrespondent';
  id: Scalars['ID'];
  name: Scalars['String'];
  address: Scalars['String'];
  bank_code: Scalars['String'];
  bank_account: Scalars['String'];
  currencies?: Maybe<Array<Maybe<Currencies>>>;
  regions?: Maybe<Array<Maybe<Region>>>;
  is_active?: Maybe<Scalars['Boolean']>;
};

export type OperationType = {
  __typename?: 'OperationType';
  id?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
};

export type PriceListFee = {
  __typename?: 'PriceListFee';
  id: Scalars['ID'];
  name: Scalars['String'];
  fee_type?: Maybe<FeeType>;
  operation_type?: Maybe<OperationType>;
  period?: Maybe<FeePeriod>;
  fees?: Maybe<Array<Maybe<PriceListFeeCurrency>>>;
  price_list_id?: Maybe<Scalars['ID']>;
  fee_ranges?: Maybe<Scalars['JSON']>;
  scheduled?: Maybe<PriceListFeeScheduled>;
  created_at?: Maybe<Scalars['DateTimeUtc']>;
  updated_at?: Maybe<Scalars['DateTimeUtc']>;
};

export type PermissionList = {
  __typename?: 'PermissionList';
  id?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
  type?: Maybe<PermissionListType>;
  separator?: Maybe<PermissionSeparatorType>;
  permissions?: Maybe<Array<Maybe<Permissions>>>;
};

export type PermissionCategoryPermissionListPermissionTypeWhereConditions = {
  column?: InputMaybe<PermissionCategoryPermissionListPermissionTypeColumn>;
  operator?: InputMaybe<SqlOperator>;
  value?: InputMaybe<Scalars['Mixed']>;
  AND?: InputMaybe<Array<PermissionCategoryPermissionListPermissionTypeWhereConditions>>;
  OR?: InputMaybe<Array<PermissionCategoryPermissionListPermissionTypeWhereConditions>>;
  HAS?: InputMaybe<PermissionCategoryPermissionListPermissionTypeWhereConditionsRelation>;
};

export type ApplicantVerificationStatus = {
  __typename?: 'ApplicantVerificationStatus';
  id: Scalars['ID'];
  name: Scalars['String'];
};

export type ApplicantStatus = {
  __typename?: 'ApplicantStatus';
  id: Scalars['ID'];
  name: Scalars['String'];
};

export type ApplicantState = {
  __typename?: 'ApplicantState';
  id: Scalars['ID'];
  name: Scalars['String'];
};

export type ApplicantStateReason = {
  __typename?: 'ApplicantStateReason';
  id: Scalars['ID'];
  name: Scalars['String'];
};

export type ApplicantRiskLevel = {
  __typename?: 'ApplicantRiskLevel';
  id: Scalars['ID'];
  name: Scalars['String'];
};

export type ApplicantIndividualLabel = {
  __typename?: 'ApplicantIndividualLabel';
  id: Scalars['ID'];
  name: Scalars['String'];
  hex_color_code: Scalars['String'];
  is_active?: Maybe<Scalars['Boolean']>;
};

export type ApplicantIndividualNotes = {
  __typename?: 'ApplicantIndividualNotes';
  id: Scalars['ID'];
  note: Scalars['String'];
  created_at?: Maybe<Scalars['DateTimeUtc']>;
  author?: Maybe<Members>;
  applicant?: Maybe<ApplicantIndividual>;
};

export type ApplicantIndividualModules = {
  __typename?: 'ApplicantIndividualModules';
  id?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
  is_active?: Maybe<Scalars['Boolean']>;
};

export type ApplicantCompany = {
  __typename?: 'ApplicantCompany';
  id: Scalars['ID'];
  name?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['EMAIL']>;
  url?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  email_verification?: Maybe<ApplicantVerificationStatus>;
  phone_verification?: Maybe<ApplicantVerificationStatus>;
  country?: Maybe<Country>;
  language?: Maybe<Languages>;
  state?: Maybe<Scalars['String']>;
  city?: Maybe<Scalars['String']>;
  address?: Maybe<Scalars['String']>;
  address2?: Maybe<Scalars['String']>;
  office_address?: Maybe<Scalars['String']>;
  zip?: Maybe<Scalars['String']>;
  reg_at?: Maybe<Scalars['Date']>;
  expires_at?: Maybe<Scalars['Date']>;
  tax?: Maybe<Scalars['String']>;
  reg_number?: Maybe<Scalars['String']>;
  license_number?: Maybe<Scalars['String']>;
  company_type?: Maybe<Scalars['String']>;
  company_info_additional_fields?: Maybe<Scalars['JSON']>;
  contacts_additional_fields?: Maybe<Scalars['JSON']>;
  profile_additional_fields?: Maybe<Scalars['JSON']>;
  incorporate_date?: Maybe<Scalars['DateTimeUtc']>;
  basic_info_additional_field?: Maybe<Scalars['JSON']>;
  created_at?: Maybe<Scalars['DateTimeUtc']>;
  contact_email?: Maybe<Scalars['EMAIL']>;
  contact_phone?: Maybe<Scalars['String']>;
  business_type?: Maybe<ApplicantCompanyBusinessType>;
  status?: Maybe<ApplicantStatus>;
  applicant_state?: Maybe<ApplicantState>;
  state_reason?: Maybe<ApplicantStateReason>;
  risk_level?: Maybe<ApplicantRiskLevel>;
  kyc_level?: Maybe<ApplicantRiskLevel>;
  manager?: Maybe<Members>;
  owner?: Maybe<ApplicantIndividual>;
  labels?: Maybe<Array<Maybe<ApplicantCompanyLabel>>>;
  notes?: Maybe<Array<Maybe<ApplicantCompanyNotes>>>;
  modules?: Maybe<Array<Maybe<ApplicantCompanyModules>>>;
  company_position?: Maybe<ApplicantIndividualCompany>;
  owner_relation?: Maybe<ApplicantIndividualCompany>;
  owner_position?: Maybe<ApplicantIndividualCompany>;
  company?: Maybe<Company>;
  group?: Maybe<GroupRole>;
  photo?: Maybe<Files>;
  project?: Maybe<Project>;
};

export type ApplicantKycLevel = {
  __typename?: 'ApplicantKycLevel';
  id: Scalars['ID'];
  name: Scalars['String'];
};

export type ApplicantBankingAccess = {
  __typename?: 'ApplicantBankingAccess';
  id: Scalars['ID'];
  applicant_individual?: Maybe<ApplicantIndividual>;
  applicant_company?: Maybe<ApplicantCompany>;
  member?: Maybe<Members>;
  contact_administrator: Scalars['Boolean'];
  daily_limit: Scalars['Decimal'];
  monthly_limit: Scalars['Decimal'];
  operation_limit: Scalars['Decimal'];
  used_daily_limit: Scalars['Decimal'];
  used_monthly_limit: Scalars['Decimal'];
  role?: Maybe<Role>;
  grant_access?: Maybe<Scalars['Boolean']>;
  create_payments?: Maybe<Scalars['Boolean']>;
  sign_payments?: Maybe<Scalars['Boolean']>;
};

export enum AccountType {
  Private = 'Private',
  Business = 'Business',
}

export type Client = ApplicantIndividual | ApplicantCompany;

export type AccountState = {
  __typename?: 'AccountState';
  id: Scalars['ID'];
  name: Scalars['String'];
  active: Scalars['Boolean'];
};

export type ClientAccountsDetails = {
  __typename?: 'ClientAccountsDetails';
  id: Scalars['ID'];
  current_balance: Scalars['Decimal'];
  reserved_balance: Scalars['Decimal'];
  available_balance: Scalars['Decimal'];
  currency: Currencies;
  min_limit_balance?: Maybe<Scalars['Decimal']>;
  max_limit_balance?: Maybe<Scalars['Decimal']>;
};

export type CommissionTemplateLimitType = {
  __typename?: 'CommissionTemplateLimitType';
  id: Scalars['ID'];
  name: Scalars['String'];
};

export type CommissionTemplateLimitTransferDirection = {
  __typename?: 'CommissionTemplateLimitTransferDirection';
  id: Scalars['ID'];
  name: Scalars['String'];
};

export type CommissionTemplateLimitPeriod = {
  __typename?: 'CommissionTemplateLimitPeriod';
  id: Scalars['ID'];
  name: Scalars['String'];
};

export type CommissionTemplateLimitActionType = {
  __typename?: 'CommissionTemplateLimitActionType';
  id: Scalars['ID'];
  name: Scalars['String'];
};

export type FeeType = {
  __typename?: 'FeeType';
  id: Scalars['ID'];
  name: Scalars['String'];
};

export type FeePeriod = {
  __typename?: 'FeePeriod';
  id?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
};

export type PriceListFeeCurrency = {
  __typename?: 'PriceListFeeCurrency';
  id: Scalars['ID'];
  currency_id: Scalars['ID'];
  price_list_fee_id: Scalars['ID'];
  fee?: Maybe<Array<Maybe<FeeItem>>>;
};

export type PriceListFeeScheduled = {
  __typename?: 'PriceListFeeScheduled';
  starting_date?: Maybe<Scalars['DateTimeUtc']>;
  end_date?: Maybe<Scalars['DateTimeUtc']>;
  recurrent_interval?: Maybe<Scalars['Int']>;
  starting_date_id?: Maybe<Scalars['ID']>;
  end_date_id?: Maybe<Scalars['ID']>;
};

export enum PermissionListType {
  Member = 'Member',
  Individual = 'Individual',
}

export enum PermissionSeparatorType {
  Private = 'Private',
  Business = 'Business',
}

export enum PermissionCategoryPermissionListPermissionTypeColumn {
  Type = 'TYPE',
}

export type PermissionCategoryPermissionListPermissionTypeWhereConditionsRelation = {
  relation: Scalars['String'];
  operator?: InputMaybe<SqlOperator>;
  amount?: InputMaybe<Scalars['Int']>;
  condition?: InputMaybe<PermissionCategoryPermissionListPermissionTypeWhereConditions>;
};

export type ApplicantCompanyBusinessType = {
  __typename?: 'ApplicantCompanyBusinessType';
  id: Scalars['ID'];
  name: Scalars['String'];
};

export type ApplicantCompanyLabel = {
  __typename?: 'ApplicantCompanyLabel';
  id: Scalars['ID'];
  name: Scalars['String'];
  hex_color_code: Scalars['String'];
  is_active?: Maybe<Scalars['Boolean']>;
};

export type ApplicantCompanyNotes = {
  __typename?: 'ApplicantCompanyNotes';
  id: Scalars['ID'];
  note: Scalars['String'];
  created_at?: Maybe<Scalars['DateTimeUtc']>;
  author?: Maybe<Members>;
  applicant?: Maybe<ApplicantCompany>;
};

export type ApplicantCompanyModules = {
  __typename?: 'ApplicantCompanyModules';
  id?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
  is_active?: Maybe<Scalars['Boolean']>;
};

export type ApplicantIndividualCompany = {
  __typename?: 'ApplicantIndividualCompany';
  applicant_id: Scalars['ID'];
  applicant_type: Scalars['String'];
  applicant_company_id: Scalars['ID'];
  applicant_company?: Maybe<ApplicantCompany>;
  applicant_individual_company_relation_id: Scalars['ID'];
  applicant_individual_company_position_id: Scalars['ID'];
  relation_to_company?: Maybe<ApplicantIndividualCompanyRelation>;
  position_in_company?: Maybe<ApplicantIndividualCompanyPosition>;
  percentage_owned?: Maybe<Scalars['Float']>;
  client?: Maybe<Client>;
};

export type FeeItem = {
  __typename?: 'FeeItem';
  mode: Scalars['String'];
  fee?: Maybe<Scalars['Int']>;
  amount_from?: Maybe<Scalars['Int']>;
  amount_to?: Maybe<Scalars['Int']>;
  percent?: Maybe<Scalars['Int']>;
};
