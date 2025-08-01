/*
 * Copyright 2024 CloudWeGo Authors
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

package wrap

import (
	"context"

	"github.com/cloudwego/eino-ext/components/embedding/ollama"

	contract "github.com/coze-dev/coze-studio/backend/infra/contract/embedding"
)

func NewOllamaEmbedder(ctx context.Context, config *ollama.EmbeddingConfig, dimensions int64, batchSize int) (contract.Embedder, error) {
	emb, err := ollama.NewEmbedder(ctx, config)
	if err != nil {
		return nil, err
	}
	return &denseOnlyWrap{dims: dimensions, batchSize: batchSize, Embedder: emb}, nil
}
