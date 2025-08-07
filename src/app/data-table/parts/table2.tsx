'use client'

import { useReactTable, getCoreRowModel, flexRender, ColumnDef } from '@tanstack/react-table'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'

type User = {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
}

const data: User[] = [
  { id: 1, firstName: '太郎', lastName: '山田', email: 'yamada@example.com' },
  { id: 2, firstName: '花子', lastName: '佐藤', email: 'sato@example.com' },
  { id: 3, firstName: '次郎', lastName: '鈴木', email: 'suzuki@example.com' },
]

const columns: ColumnDef<User>[] = [
  {
    header: 'ID',
    accessorKey: 'id',
  },
  {
    header: '氏名',
    accessorFn: (row) => `${row.lastName} ${row.firstName}`,
    id: 'fullName',
    cell: (info) => <strong>{info.getValue() as string}</strong>
  },
  {
    header: 'メール',
    accessorKey: 'email',
    cell: (info) => {
      const email = info.getValue() as string
      return (
        <a href={`mailto:${email}`} className='text-blue-600 underline'>{email}</a>
      )
    }
  }
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
                {header.isPlaceholder
                  ? null
                  : flexRender(
                    header.column.columnDef.header,
                    header.getContext(),
                  )
                }
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
                {flexRender(
                  cell.column.columnDef.cell,
                  cell.getContext(),
                )}
              </TableCell>
            ))}
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </div>
}