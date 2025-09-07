"use client";

import { ChangeEvent, useState } from "react";
import Breadcrumb from "@/app/tools/_components/Breadcrumb";
import Select from "@/app/tools/_components/Select";
import ListInput, { ListInputItem } from "@/app/tools/_components/ListInput";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import copyToClipboard from "@/lib/copyToClipboard";
import { downloadMdFile, downloadJsonFile } from "@/lib/downloadFile";

const breadcrumbItems = [
  { id: "tools", label: "ツール", href: "/tools" },
  { id: "meeting", label: "ミーティング", href: "/tools/meeting" },
];

const meetingTypes = [
  { id: "information-sharing", label: "情報共有" },
  { id: "alignment", label: "すり合わせ" },
  { id: "brainstorming", label: "アイデア出し" },
  { id: "decision-making", label: "意思決定" },
  { id: "feedback", label: "フィードバック" },
  { id: "review", label: "振り返り" },
];

const ProceedTemplateInformationSharing = `### 目的
参加者に必要な情報を伝え、共通認識を持たせる

### 進行
1. 目的とアジェンダの説明
2. 情報の提供（要点を絞る）
3. 質疑応答・確認
4. まとめ & 次のアクション

### 進行のポイント
- 要点を明確にし、ダラダラ話さない
- 視覚資料を活用
- 重要なポイントを3つ程度にまとめる

### アウトプット
参加者の理解度向上、共通認識の形成`;

const ProceedTemplateAlignment = `### 目的
認識のズレを解消し、共通理解を得る

### 進行
1. 目的と論点の確認
2. 各自の認識を共有
3. 認識の違いを整理・調整
4. 決定事項・未決事項の整理

### 進行のポイント
- 事前に論点を整理しておく
- 議論が発散しすぎないよう進行
- 「この点について同じ認識でOKか？」と確認しながら進める

### アウトプット
認識の統一、合意形成、今後の対応方針`;

const ProceedTemplateBrainstorming = `### 目的
新しい発想や解決策を生み出す

### 進行
1. テーマ・目的の共有
2. アイデア発散（ブレインストーミング）
3. アイデアの整理・分類
4. 有望なアイデアの選定・深掘り

### 進行のポイント
- まずは批判せずに自由に出す
- 似たアイデアをまとめて整理
- 発散（拡げる）→ 収束（絞る）の流れを意識

### アウトプット
アイデアのリスト、コンセプト案、次のステップ`;

const ProceedTemplateDecisionMaking = `### 目的
何をするかを決定し、実行に移す

### 進行
1. 目的・判断基準の確認
2. 選択肢の提示・比較
3. 意見交換・評価
4. 結論の確定 & 役割分担

### 進行のポイント
- 判断基準を明確にする
- 参加者の合意を得るプロセスを大切に
- 「何を・誰が・いつまでに」を明確にする

### アウトプット
決定事項、実行計画、担当者と期限`;

const ProceedTemplateFeedback = `### 目的
何かに対する評価・改善点を共有し、成長や改善につなげる

### 進行
1. フィードバックの目的説明
2. 評価・指摘（具体的に）
3. 改善のための提案
4. 双方向の意見交換・質疑応答

### 進行のポイント
- 具体的な例を挙げて伝える
- ポジティブな点も含める（サンドイッチ法など）
- 相手が受け入れやすい形で伝える

### アウトプット
改善点の整理、今後のアクション、成長の方向性`;

const ProceedTemplateReview = `### 目的
取り組みを評価し、今後の改善点を明確にする

### 進行
1. 目的の確認（何を振り返るのか？）
2. 成果・結果の整理
3. うまくいった点・課題の洗い出し
4. 改善策・今後のアクション決定

### 進行のポイント
- ポジティブな面と改善点の両方を振り返る
- KPT（Keep, Problem, Try）や 5 Whys などのフレームワークを活用
- 「次に活かすこと」を明確にする

### アウトプット
取り組みの評価、改善策、次回へのアクション`;

const proceedTemplates = [
  { id: "information-sharing", template: ProceedTemplateInformationSharing },
  { id: "alignment", template: ProceedTemplateAlignment },
  { id: "brainstorming", template: ProceedTemplateBrainstorming },
  { id: "decision-making", template: ProceedTemplateDecisionMaking },
  { id: "feedback", template: ProceedTemplateFeedback },
  { id: "review", template: ProceedTemplateReview },
];

const getMeetingText = (
  title: string,
  purpose: string,
  meetingType: string,
  goals: string[],
  agendas: string[],
  proceed: string,
  notes: string,
) => {
  const text = `# ${title}

## 背景・目的
${purpose}

## 種類
${meetingTypes.find((t) => t.id === meetingType)?.label}

## ゴール
${goals.map((g) => `- ${g}`).join("\n")}

## 議題
${agendas.map((a) => `- ${a}`).join("\n")}

## 進め方
${proceed}

## 共有事項・資料
${notes}`;

  return text;
};

const Page = () => {
  const [title, setTitle] = useState("");
  const [purpose, setPurpose] = useState("");
  const [meetingType, setMeetingType] = useState("");
  const [goals, setGoals] = useState<ListInputItem[]>([]);
  const [agendas, setAgendas] = useState<ListInputItem[]>([]);
  const [proceed, setProceed] = useState("");
  const [notes, setNotes] = useState("");

  const onFileUpload = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files ? e.target.files[0] : null;
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (e) => {
      if (!e.target?.result) return;
      const data = JSON.parse(e.target.result as string);
      setTitle(data.title);
      setPurpose(data.purpose);
      setMeetingType(data.meetingType);
      setGoals(data.goals);
      setAgendas(data.agendas);
      setProceed(data.proceed);
      setNotes(data.notes);
    };
    reader.readAsText(file);
  };

  const onCopyToClipboard = () => {
    const text = getMeetingText(title, purpose, meetingType, goals, agendas, proceed, notes);
    copyToClipboard(text);
  };

  const onDownloadMdFile = () => {
    const text = getMeetingText(title, purpose, meetingType, goals, agendas, proceed, notes);
    downloadMdFile(text, "meeting");
  };

  const onDownloadJsonFile = () => {
    const data = {
      title,
      purpose,
      meetingType,
      goals: goals,
      agendas: agendas,
      proceed,
      notes,
    };
    downloadJsonFile(data, "meeting");
  };

  const setProceedByTemplate = () => {
    const template = proceedTemplates.find((t) => t.id === meetingType)?.template;
    if (!template) return;
    setProceed(template);
  };

  return (
    <div className="container mx-auto p-4">
      <Breadcrumb items={breadcrumbItems} />

      <div className="mt-4 grid grid-cols-1 gap-6">
        <div className="grid grid-cols-[200px_1fr] gap-4">
          <div className="grid justify-end">データ読み込み</div>
          <div>
            <Input
              type="file"
              accept="application/json"
              className="w-60"
              onChange={(e) => onFileUpload(e)}
            />
          </div>
        </div>
        <div className="grid grid-cols-[200px_1fr] gap-4">
          <div className="grid justify-end">
            <p>タイトル</p>
          </div>
          <div>
            <Input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="例：コーディング規約についてのアイデア出し"
            />
          </div>
        </div>
        <div className="grid grid-cols-[200px_1fr] gap-4">
          <div className="grid justify-end">
            <p>背景・目的</p>
          </div>
          <div>
            <Textarea
              value={purpose}
              onChange={(e) => setPurpose(e.target.value)}
              placeholder="例：コーディング規約の統一により、コードの可読性と保守性を向上させる"
            />
          </div>
        </div>
        <div className="grid grid-cols-[200px_1fr] gap-4">
          <div className="grid justify-end">
            <p>種類</p>
          </div>
          <div>
            <Select
              placeholder="選択してください"
              items={meetingTypes}
              value={meetingType}
              onChange={(value) => setMeetingType(value)}
            />
          </div>
        </div>
        <div className="grid grid-cols-[200px_1fr] gap-4">
          <div className="grid justify-end">
            <p>ゴール</p>
          </div>
          <div>
            <ListInput items={goals} onChange={setGoals} />
          </div>
        </div>
        <div className="grid grid-cols-[200px_1fr] gap-4">
          <div className="grid justify-end">
            <p>議題</p>
          </div>
          <div>
            <ListInput items={agendas} onChange={setAgendas} />
          </div>
        </div>
        <div className="grid grid-cols-[200px_1fr] gap-4">
          <div className="grid justify-end">
            <p>進め方</p>
          </div>
          <div>
            <Textarea
              value={proceed}
              onChange={(e) => setProceed(e.target.value)}
              className="h-40"
            />
            <div className="mt-2">
              <Button onClick={setProceedByTemplate} disabled={!meetingType}>
                テンプレートから内容を入力する
              </Button>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-[200px_1fr] gap-4">
          <div className="grid justify-end">
            <p>共有事項・資料</p>
          </div>
          <div>
            <Textarea value={notes} onChange={(e) => setNotes(e.target.value)} />
          </div>
        </div>
        <div className="grid grid-cols-[200px_1fr] gap-4">
          <div></div>
          <div className="flex flex-wrap gap-2">
            <Button onClick={onCopyToClipboard}>クリップボードにコピー</Button>
            <Button onClick={onDownloadMdFile}>マークダウンファイルをダウンロード</Button>
            <Button onClick={onDownloadJsonFile}>JSONファイルをダウンロード</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
