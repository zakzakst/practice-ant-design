- https://zenn.dev/openjny/articles/a9d4f6ec2a05c2

- https://ics.media/entry/240902/
- https://ics.media/entry/251204/

- context の利用勉強する

下記のパターン使える場面結構ありそうだから覚えておく

```ts
type FormValue = {
  name: string;
  email: string;
};

type FormSubmitValue = FormValue & {
  id: string;
};

const onSubmit = (value: FormSubmitValue) => {
  const { id, ...rest } = value;
  // idをPUTのidに使い、restをリクエストボディに設定する
};
```

- checkbox, radio などの未選択状態のさばき方勉強する
  ⇒ 思ったよりエラーでない（今の現場の開発環境だと、エラー出てた印象。。。）
  ⇒ 一旦保留

https://zenn.dev/spacemarket/articles/f0fd5dc2ab54a2
https://zenn.dev/dev_commune/articles/55a4ad785e233e

https://github.com/mswjs/msw/issues/1877
https://qiita.com/t-daiki96/items/9f2da1abb20bc5e1c7db
https://zenn.dev/keitakn/scraps/2ca70305a71847

shadcn/ui（シャドシーエヌ/ユーアイ）
https://ui.shadcn.com/
https://lucide.dev/guide/packages/lucide-react
https://nerdcave.com/tailwind-cheat-sheet
https://shadcnui-templates.com/all-templates

## 次やる

- テストの本やる
  https://github.com/frontend-testing-book/unittest
- API 周りのテストまだ消化しきれていない。自分で作成してみる
- textlint 入れる（ https://ics.media/entry/220404/ ）
- react hook form 直で利用したフォーム作成（セレクトボックスの項目を API 取得する想定も試してみる）
- よく使いそうなコンポーネントの tail wind のやつ見つける（なければ自分で作る）
- next.js への gsap の導入やってみる（参考：https://journey.the-panese.jp/）
  https://journey.the-panese.jp/_next/static/chunks/app/layout-92e641020a39cae8.js

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
- markdownlint（next.js でマークダウンファイル読み込んでブログページ表示、みたいなパターンだったら便利？）
  - https://github.com/noodle-run/noodle/blob/main/.markdownlint.json
  - vscode の拡張機能は lint の対象から外すファイルの指定が上手くできなかったので無効にした
- tailwind のフォント設定を読む
  https://github.com/digital-go-jp/tailwind-theme-plugin/blob/develop/src/index.ts#L199
  https://v2.tailwindcss.com/docs/font-size#providing-a-default-letter-spacing
  https://qiita.com/tanimoto-hikari/items/b245006d6f0f25e57534

## 使わない

https://ant.design/components/overview/
