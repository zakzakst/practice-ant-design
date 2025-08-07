import { NextResponse } from 'next/server'

export async function GET() {
  const users = [
    { id: 1, name: '山田太郎', email: 'yamada@example.com' },
    { id: 2, name: '佐藤花子', email: 'sato@example.com' },
    { id: 3, name: '鈴木次郎', email: 'suzuki@example.com' },
    { id: 4, name: '田中一郎', email: 'tanaka@example.com' },
    { id: 5, name: '伊藤三郎', email: 'ito@example.com' },
  ]

  return NextResponse.json(users)
}