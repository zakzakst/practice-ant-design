"use client";
import { useState, useRef } from "react";

export const Media = () => {
  const [audioUrl, setAudioUrl] = useState<string | null>(null);
  const [audioBlob, setAudioBlob] = useState<Blob | null>(null);
  const [isRecording, setIsRecording] = useState(false);
  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const chunksRef = useRef<BlobPart[]>([]);

  const startRecording = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });

      const mediaRecorder = new MediaRecorder(stream);
      mediaRecorderRef.current = mediaRecorder;
      chunksRef.current = [];

      mediaRecorder.ondataavailable = (e) => {
        chunksRef.current.push(e.data);
      };

      mediaRecorder.onstop = () => {
        const blob = new Blob(chunksRef.current, { type: "audio/webm" });
        const url = URL.createObjectURL(blob);
        setAudioBlob(blob);
        setAudioUrl(url);
      };

      mediaRecorder.start();
      setIsRecording(true);
    } catch (e) {
      console.error("マイクの利用が許可されませんでした", e);
    }
  };

  const stopRecording = () => {
    mediaRecorderRef.current?.stop();
    setIsRecording(false);
  };

  const downloadRecording = () => {
    if (!audioBlob) return;
    const url = URL.createObjectURL(audioBlob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "recording.webm";
    a.click();
    // メモリ開放
    URL.revokeObjectURL(url);
  };

  return (
    <div className="max-w-md rounded-md border p-4">
      <h2 className="mb-2 text-lg font-bold">🎤 録音テスト</h2>
      <div className="mb-4 flex gap-2">
        <button
          onClick={startRecording}
          disabled={isRecording}
          className="rounded bg-blue-500 px-4 py-2 text-white disabled:opacity-50"
        >
          録音開始
        </button>
        <button
          onClick={stopRecording}
          disabled={!isRecording}
          className="rounded bg-red-500 px-4 py-2 text-white disabled:opacity-50"
        >
          録音停止
        </button>
      </div>

      {audioUrl && (
        <div>
          <p>録音結果:</p>
          <audio controls src={audioUrl} className="mt-2 w-full" />
          <button
            onClick={downloadRecording}
            className="mt-2 rounded bg-green-500 px-4 py-2 text-white"
          >
            ダウンロード
          </button>
        </div>
      )}
    </div>
  );
};
