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
 
import { EntityData } from '@flowgram-adapter/free-layout-editor';
import { type WorkflowNodeEntity } from '@flowgram-adapter/free-layout-editor';

import { type NodeTestRunResult } from './typings';

export class WorkflowNodeTestRunData extends EntityData<NodeTestRunResult | null> {
  static readonly type = 'WorkflowNodeTestRunData';
  entity: WorkflowNodeEntity;

  get result(): NodeTestRunResult | null {
    return this.data;
  }

  set result(result: NodeTestRunResult | null) {
    this.update(result);
  }

  getDefaultData(): NodeTestRunResult | null {
    return null;
  }
}
