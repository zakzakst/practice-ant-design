'use client'

import { useState } from 'react';
import { zxcvbn } from '@zxcvbn-ts/core';

const strengthLabel = (score: number) => {
  switch (score) {
    case 0:
      return '非常に弱い';
    case 1:
      return '弱い';
    case 2:
      return '普通';
    case 3:
      return '強い';
    case 4:
      return '非常に強い';
    default:
      return '';
  }
};

export const Form = () => {
  const [password, setPassword] = useState('');
  const [score, setScore] = useState<number | null>(null);
  const [warning, setWarning] = useState('');
  const [suggestions, setSuggestions] = useState<string[]>([]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setPassword(value);

    if (value === '') {
      setScore(null);
      setWarning('');
      setSuggestions([]);
      return;
    }

    const result = zxcvbn(value);
    setScore(result.score);
    setWarning(result.feedback.warning ?? '');
    setSuggestions(result.feedback.suggestions ?? []);
  };

  return (
    <div>
      <h1>Password strength check</h1>

      <input
        type="password"
        value={password}
        onChange={handleChange}
        placeholder="Enter password"
      />

      {score !== null && (
        <>
          <p>
            強度：<strong>{strengthLabel(score)}</strong>（{score}/4）
          </p>

          <progress value={score} max={4} />

          {warning && (
            <p style={{ color: 'red' }}>
              ⚠ {warning}
            </p>
          )}

          {suggestions.length > 0 && (
            <ul>
              {suggestions.map((s, i) => (
                <li key={i}>{s}</li>
              ))}
            </ul>
          )}
        </>
      )}
    </div>
  );
}
