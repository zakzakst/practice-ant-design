"use client";

import { useState } from "react";
import Breadcrumb from "@/app/tools/_components/Breadcrumb";
import Select from "@/app/tools/_components/Select";
import ListInput, { ListInputItem } from "@/app/tools/_components/ListInput";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

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
];

const Page = () => {
  const [goals, setGoals] = useState<ListInputItem[]>([]);
  const [agendas, setAgendas] = useState<ListInputItem[]>([]);

  return (
    <div className="container mx-auto p-4">
      <Breadcrumb items={breadcrumbItems} />

      <div className="grid grid-cols-1 mt-4 gap-6">
        <div className="grid grid-cols-[200px_1fr] gap-4">
          <div className="grid justify-end">
            <p>タイトル</p>
          </div>
          <div>
            <Input
              type="text"
              placeholder="例：コーディング規約についてのアイデア出し"
            />
          </div>
        </div>
        <div className="grid grid-cols-[200px_1fr] gap-4">
          <div className="grid justify-end">
            <p>背景・目的</p>
          </div>
          <div>
            <Textarea placeholder="例：コーディング規約の統一により、コードの可読性と保守性を向上させる" />
          </div>
        </div>
        <div className="grid grid-cols-[200px_1fr] gap-4">
          <div className="grid justify-end">
            <p>種類</p>
          </div>
          <div>
            <Select placeholder="選択してください" items={meetingTypes} />
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
            <Textarea />
            {/* TODO: 「テンプレートから内容を入力する」ボタン */}
          </div>
        </div>
        <div className="grid grid-cols-[200px_1fr] gap-4">
          <div className="grid justify-end">
            <p>共有事項・資料</p>
          </div>
          <div>
            <Textarea />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
