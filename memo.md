shadcn/ui（シャドシーエヌ/ユーアイ）
https://ui.shadcn.com/
https://lucide.dev/guide/packages/lucide-react
https://nerdcave.com/tailwind-cheat-sheet
https://shadcnui-templates.com/all-templates

## 次やる

- react hook form 直で利用したフォーム作成（セレクトボックスの項目を API 取得する想定も試してみる）
- よく使いそうなコンポーネントの tail wind のやつ見つける（なければ自分で作る）

## メモ

- npm run build の時にエラーが出たので対応
  https://github.com/shadcn-ui/ui/issues/6450
- SSG 設定
  https://zenn.dev/aldagram_tech/articles/4c89e772ceddcb

## shadcn/ui にないが、よく使いそうなコンポーネント（UI 特化のライブラリのため補足用として参考にする）

- 文字：https://preline.co/docs/typography.html
- コンテンツ：（イメージ： https://bulma.io/documentation/elements/content/）
- ボックス：（イメージ： https://bulma.io/documentation/elements/box/）
- タブ（一応あったが、よくあるスタイルではなかった）：（イメージ： https://bulma.io/documentation/elements/tag/）
- パネル：（イメージ： https://bulma.io/documentation/components/panel/）

## リポジトリ構築で参考にしたい

- index.ts 作って import の記述シンプルにする
  - https://github.com/digital-go-jp/design-system-example-components/blob/main/src/components/Accordion/index.ts
- formatter 聞いてみる（バイオーム）
  - https://biomejs.dev/ja/
  - https://github.com/digital-go-jp/design-system-example-components/blob/main/biome.json
- colors.js と tailwind.config.js で値の管理を一元化
  - https://github.com/reactjs/react.dev
- サイト設定
  - https://github.com/dillionverma/llm.report/blob/main/config/site.ts
- typedoc 聞いてみる
- markdownlint（next.js でマークダウンファイル読み込んでブログページ表示、みたいなパターンだったら便利？）
  - https://github.com/noodle-run/noodle/blob/main/.markdownlint.json
- バックエンドとの連携で setup とか作る？
  - https://github.com/triggerdotdev/trigger.dev/blob/main/package.json#L39
- https://github.com/topics

### 済

- markuplint
  - https://zenn.dev/chot/articles/bcc178c481a9c2
- typecheck
  - https://github.com/noodle-run/noodle/blob/main/package.json#L32C6-L32C15
- 未使用ファイルの検出
  - https://zenn.dev/roboin/articles/3dfc5eba5433ba
  - https://github.com/openstatusHQ/openstatus/blob/main/knip.ts

## 使わない

https://ant.design/components/overview/
