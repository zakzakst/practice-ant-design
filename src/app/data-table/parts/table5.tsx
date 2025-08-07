'use client'

import {
  ColumnDef,
  getCoreRowModel,
  useReactTable,
  getPaginationRowModel,
  flexRender,
} from '@tanstack/react-table'
import { useState } from 'react'
import useSWR from 'swr'
import { Button } from '@/components/ui/button'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'

type User = {
  id: number
  firstName: string
  lastName: string
  email: string
}

const columns: ColumnDef<User>[] = [
  { accessorKey: 'id', header: 'ID' },
  { accessorKey: 'firstName', header: 'First Name' },
  { accessorKey: 'lastName', header: 'Last Name' },
  { accessorKey: 'email', header: 'Email' },
]

const fetcher = (url: string) => fetch(url).then((res) => res.json())

export const DataTable = () => {
  const [pagination, setPagination] = useState({
    pageIndex: 0,
    pageSize: 10,
  })

  const {data, isLoading, error} = useSWR(
    `https://dummyjson.com/users?limit=${pagination.pageSize}&skip=${
      pagination.pageIndex * pagination.pageSize
    }`,
    fetcher
  )

  const table = useReactTable({
    data: data?.users ?? [],
    columns,
    pageCount: Math.ceil((data?.total ?? 0) / pagination.pageSize),
    state: { pagination },
    manualPagination: true,
    onPaginationChange: setPagination,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
  })

  if (isLoading) return <div>読み込み中...</div>
  if (error) return <div>エラーが発生しました。</div>

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
    <div className="flex items-center justify-between pt-4">
      <div className="flex items-center gap-2">
        <Button
          onClick={() => table.previousPage()}
          disabled={!table.getCanPreviousPage()}
        >
          前へ
        </Button>
        <Button
          onClick={() => table.nextPage()}
          disabled={!table.getCanNextPage()}
        >
          次へ
        </Button>
      </div>

      <div>
        ページ {table.getState().pagination.pageIndex + 1} / {table.getPageCount()}
      </div>

      <div className="flex items-center gap-2">
        <span>表示件数：</span>
        <select
          value={table.getState().pagination.pageSize}
          onChange={(e) => {
            table.setPageSize(Number(e.target.value))
          }}
          className="rounded border px-2 py-1"
        >
          {[5, 10, 20].map((size) => (
            <option key={size} value={size}>
              {size}件
            </option>
          ))}
        </select>
      </div>
    </div>
  </div>
}
