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
 
import { create } from 'zustand';
import { noop } from 'lodash-es';
import { type DatabaseInfo } from '@coze-studio/bot-detail-store';

export interface initialConfigStore {
  onCancel: () => void;
  botId: string;
  spaceId: string;
  maxColumnNum: number;
  onSave?: (params: {
    response: any;
    stateData: DatabaseInfo;
  }) => Promise<void>;
}

// 用来存储静态状态，非初始化场景下，仅只读不可修改
export const useInitialConfigStore = create<initialConfigStore>()(set => ({
  onCancel: noop,
  botId: '',
  spaceId: '',
  maxColumnNum: 10,
}));
