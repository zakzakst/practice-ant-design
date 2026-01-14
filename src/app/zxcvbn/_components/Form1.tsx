'use client'

import { useState } from 'react';
import { zxcvbn } from '@zxcvbn-ts/core';

export const Form = () => {
  const [password, setPassword] = useState('');
  const [score, setScore] = useState<number | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    setPassword(value)

    if (value === '') {
      setScore(null)
      return
    }

    // const result = zxcvbn('password123');
    // console.log(result.score);
    const result = zxcvbn(value);
    setScore(result.score)
  }

  return (
    <div>
      <input
        type="password"
        value={password}
        onChange={handleChange}
        placeholder="Enter password"
      />

      {score !== null && (
        <p>
          Strength score: <strong>{score}</strong> / 4
        </p>
      )}
    </div>
  )
}
