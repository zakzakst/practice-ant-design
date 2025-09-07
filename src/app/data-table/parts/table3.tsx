"use client";

import {
  useReactTable,
  getCoreRowModel,
  getSortedRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  flexRender,
  ColumnDef,
} from "@tanstack/react-table";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";

type User = {
  id: number;
  name: string;
  email: string;
};

const data: User[] = [
  { id: 1, name: "山田太郎", email: "yamada@example.com" },
  { id: 2, name: "佐藤花子", email: "sato@example.com" },
  { id: 3, name: "鈴木次郎", email: "suzuki@example.com" },
  { id: 4, name: "田中一郎", email: "tanaka@example.com" },
  { id: 5, name: "伊藤三郎", email: "ito@example.com" },
  { id: 6, name: "高橋幸子", email: "takahashi@example.com" },
];

export const DataTable = () => {
  const [filter, setFilter] = useState("");
  const columns: ColumnDef<User>[] = [
    {
      accessorKey: "id",
      header: ({ column }) => (
        <button onClick={column.getToggleSortingHandler()} className="hover:underline">
          ID {column.getIsSorted() === "asc" ? "↑" : column.getIsSorted() === "desc" ? "↓" : ""}
        </button>
      ),
    },
    {
      accessorKey: "name",
      header: ({ column }) => (
        <button onClick={column.getToggleSortingHandler()} className="hover:underline">
          名前 {column.getIsSorted() === "asc" ? "↑" : column.getIsSorted() === "desc" ? "↓" : ""}
        </button>
      ),
    },
    {
      accessorKey: "email",
      header: "メール",
      cell: (info) => {
        const email = info.getValue() as string;
        return (
          <a href={`mailto:${email}`} className="text-blue-600 underline">
            {email}
          </a>
        );
      },
    },
  ];
  const table = useReactTable({
    data,
    columns,
    state: {
      globalFilter: filter,
    },
    onGlobalFilterChange: setFilter,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
  });

  return (
    <div>
      <div>
        <Input
          placeholder="名前またはメールで検索"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        />
      </div>
      <Table>
        <TableHeader>
          {table.getHeaderGroups().map((headerGroup) => (
            <TableRow key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <TableHead key={header.id}>
                  {header.isPlaceholder
                    ? null
                    : flexRender(header.column.columnDef.header, header.getContext())}
                </TableHead>
              ))}
            </TableRow>
          ))}
        </TableHeader>
        <TableBody>
          {table.getRowModel().rows.length ? (
            table.getRowModel().rows.map((row) => (
              <TableRow key={row.id}>
                {row.getVisibleCells().map((cell) => (
                  <TableCell key={cell.id}>
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </TableCell>
                ))}
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={columns.length} className="text-center">
                該当するデータがありません
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
      <div className="flex items-center justify-between pt-4">
        <div className="space-x-2">
          <Button onClick={() => table.previousPage()} disabled={!table.getCanPreviousPage()}>
            前へ
          </Button>
          <Button onClick={() => table.nextPage()} disabled={!table.getCanNextPage()}>
            次へ
          </Button>
        </div>
        <span>
          ページ {table.getState().pagination.pageIndex + 1} / {table.getPageCount()}
        </span>
      </div>
    </div>
  );
};
