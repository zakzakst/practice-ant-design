'use client'

import { useReactTable, getCoreRowModel, flexRender, ColumnDef } from '@tanstack/react-table'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'

type User = {
  id: number;
  name: string;
  email: string;
}

const data: User[] = [
  {
    id: 1,
    name: '山田太郎',
    email: 'yamada@example.com',
  },
  {
    id: 2,
    name: '佐藤花子',
    email: 'sato@example.com',
  },
  {
    id: 3,
    name: '鈴木次郎',
    email: 'suzuki@example.com',
  },
]

const columns: ColumnDef<User>[] = [
  {
    accessorKey: 'id',
    header: 'ID',
  },
  {
    accessorKey: 'name',
    header: '名前',
  },
  {
    accessorKey: 'email',
    header: 'メールアドレス',
  },
]

export const DataTable = () => {
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  })
  return <div>
    <Table>
      <TableHeader>
        {table.getHeaderGroups().map((headerGroup) => (
          <TableRow key={headerGroup.id}>
            {headerGroup.headers.map((header) => (
              <TableHead key={header.id}>
                {header.isPlaceholder ? null: flexRender(header.column.columnDef.header, header.getContext())}
              </TableHead>
            ))}
          </TableRow>
        ))}
      </TableHeader>
      <TableBody>
        {table.getRowModel().rows.map((row) => (
          <TableRow key={row.id}>
            {row.getVisibleCells().map((cell) => (
              <TableCell key={cell.id}>
                {flexRender(cell.column.columnDef.cell, cell.getContext())}
              </TableCell>
            ))}
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </div>
}