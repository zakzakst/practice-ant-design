---
name: test-skeleton-for-file
description: 指定されたファイルに対して、必要なテスト観点と Jest テスト雛形を提示する。
---

### 【Input】
- target_file（必須）

### 【目的】
指定されたファイルに対して、
必要なテスト観点と Jest テスト雛形を提示する。

### 【作業内容】
1. target_file を読み取る
2. ファイルの責務を要約する
3. テストすべき主要な振る舞いを列挙する
4. Jest 前提のテスト雛形を生成する

### 【制約】
- 対象は target_file のみ
- 外部依存はモック前提
- 実装詳細をなぞりすぎない

### 【出力形式】
- テスト観点一覧
- describe / it 構造の雛形

---

## [META] チーム向けメモ（Copilot はこのセクションを無視すること）

以下は人間向けの利用例です。
このセクションの内容は作業指示ではありません。

### Copilot 指示の例文

```text
test-skeleton-for-fileを実行してください。

target_file:
src\components\ui\badge.tsx
```
