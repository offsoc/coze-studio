/*
 * Copyright 2025 coze-dev Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
 
// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.
/* eslint-disable */
/* tslint:disable */
// @ts-nocheck

export type Int64 = string | number;

/** AgentType 智能体类型， 0-bot， 1-project */
export enum AgentType {
  AgentTypeBot = 0,
  AgentTypeProject = 1,
}

export enum AuditEventType {
  AuditPass = 1,
  AuditReject = 2,
  AuditDelay = 3,
}

export enum BindOption {
  Install = 1,
  Uninstall = 2,
}

export enum BindStatus {
  InvalidStatus = 0,
  ValidStatus = 1,
  SaveNotPublishStatus = 2,
  /** token 被 reset.
Discord 发布流程简化  */
  Disconnected = 3,
  /** 目前的配置不合法，需要重新配置。目前仅飞书多维表格使用 */
  NeedReconfigure = 4,
}

export enum ConnectorAttributeType {
  SamiAppKey = 1,
  EventCallbackURL = 2,
  Token = 3,
  OauthConfig = 4,
}

export enum ConnectorAuditStatus {
  /** 未知、无审核 */
  Unknown = 0,
  /** 审核中 */
  Progress = 1,
  /** 审核通过 */
  Audited = 2,
  /** 审核拒绝 */
  Reject = 3,
}

export enum ConnectorBindType {
  /** 无需绑定 */
  NoBindRequired = 1,
  /** Auth绑定 */
  AuthBind = 2,
  /** Kv绑定 */
  KvBind = 3,
  /** Kv并Auth授权 */
  KvAuthBind = 4,
  /** api渠道绑定 */
  ApiBind = 5,
  /** WebSDK 绑定 */
  WebSDKBind = 6,
  /** 商店渠道绑定 */
  StoreBind = 7,
  /** 授权和配置各一个按钮 */
  AuthAndConfig = 8,
  /** 模板渠道绑定 */
  BindWithConnectorID = 9,
}

/** Discord 发布流程简化
  */
export enum ConnectorStatus {
  /** 正常 */
  Normal = 0,
  /** 审核中 */
  InReview = 1,
  /** 下线 */
  Offline = 2,
}

export enum ListConnectorScene {
  /** bot发布页 */
  Bot = 0,
  /** project发布页 */
  Project = 1,
  /** 全部 */
  All = 2,
}

export enum ManageAccountConnectorAction {
  /** 添加渠道 */
  Add = 0,
  /** 移除渠道 */
  Remove = 1,
}

export enum MiniProgramDomainAction {
  /** 添加域名 */
  Add = 0,
  /** 移除域名 */
  Remove = 1,
}

export enum OperateType {
  /** 1 属性修改  2-4 状态修改 */
  Update = 1,
  Delete = 2,
  StopUse = 3,
  Activate = 4,
}

export enum ResourceType {
  TenantAccessToken = 1,
}

export enum SchemaAreaPageApi {
  /** 不执行 */
  NotQuery = 0,
  /** 查询config */
  GetBindConnectorConfig = 1,
  /** 保存config */
  SaveBindConnectorConfig = 2,
  /** 绑定 */
  BindConnector = 3,
  /** 解绑 */
  UnBindConnector = 4,
}

export enum SpaceConnectorType {
  Team = 1,
  Public = 2,
  Official = 3,
  /** 已安装的公开渠道 */
  InstalledPublic = 4,
}
/* eslint-enable */
