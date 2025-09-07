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
import { useEffect, useState } from "react";

type User = {
  id: number;
  name: string;
  email: string;
};

export const DataTable = () => {
  const [data, setData] = useState<User[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [filter, setFilter] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      console.log("test");
      try {
        const res = await fetch("/api/users");
        if (!res.ok) throw new Error("データ取得に失敗しました");
        const users: User[] = await res.json();
        setData(users);
      } catch (e) {
        setError((e as Error).message);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);

  const columns: ColumnDef<User>[] = [
    {
      accessorKey: "id",
      header: ({ column }) => (
        <button onClick={column.getToggleSortingHandler()}>
          ID {column.getIsSorted() === "asc" ? "↑" : column.getIsSorted() === "desc" ? "↓" : ""}
        </button>
      ),
    },
    {
      accessorKey: "name",
      header: ({ column }) => (
        <button onClick={column.getToggleSortingHandler()}>
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
    initialState: {
      pagination: {
        pageSize: 3,
      },
    },
    onGlobalFilterChange: setFilter,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
  });

  return (
    <div className="space-y-4 p-4">
      <h1 className="text-xl font-bold">ユーザーテーブル（API連携）</h1>

      {isLoading && <p>読み込み中...</p>}
      {error && <p className="text-red-500">{error}</p>}

      {!isLoading && !error && (
        <>
          <Input
            placeholder="名前やメールで検索..."
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            className="w-64"
          />

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

          <div className="flex justify-between pt-4">
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
        </>
      )}
    </div>
  );
};
