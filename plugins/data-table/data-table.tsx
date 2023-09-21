'use-client';

import Grid from '@mui/material/Grid';

import type { TableOptions } from '@tanstack/react-table';
import {
  getCoreRowModel,
  getFilteredRowModel,
  getSortedRowModel,
  useReactTable, flexRender,
} from '@tanstack/react-table';
import React from 'react';
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableFooter, TableHead,
  TablePagination,
  TableRow,
  CircularProgress,
} from '@mui/material';
import TablePaginationActions from '@mui/material/TablePagination/TablePaginationActions';

export type DataTableProps<TData> = Omit<TableOptions<TData>, 'getCoreRowModel' | 'getSortedRowModel' | 'getFilteredRowModel'> & {
  rowsPerPageOptions?: number[];
  totalCount: number
  onPageChange?: (page: number) => void
  onRowsPerPageChange?: (pageSize: number) => void
  onBefore?: () => void
  onAfter?: () => void
  loading?: boolean
  actions?: React.ReactNode
}
& ({ manualPagination: false }
| {
  page: number
  rowsPerPage: number
  manualPagination: true
});

function DataTable<TData>(props: DataTableProps<TData>) {
  const {
    rowsPerPageOptions = [5, 10, 25, 50],
    totalCount,
    onPageChange,
    onRowsPerPageChange,
    manualPagination,
    onBefore,
    onAfter,
    loading = false,
    actions,
  } = props;
  const table = useReactTable<TData>({
    ...props,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
  });
  // eslint-disable-next-line react/destructuring-assignment
  const rowsPerPage = manualPagination ? props.rowsPerPage : table.getState().pagination.pageSize;
  // eslint-disable-next-line react/destructuring-assignment
  const page = manualPagination ? props.page : table.getState().pagination.pageIndex;
  const { flatRows } = table.getRowModel();
  const leafColumns = table.getAllLeafColumns();
  const maxColumnSpan = leafColumns.length;
  const headerGroups = table.getHeaderGroups();
  const footerGroups = table.getFooterGroups();
  const hasFooter = footerGroups.some((group) => group
    .headers.some((head) => !!head.column.columnDef.footer));
  return (
    <TableContainer component={Paper} sx={{ position: 'relative' }}>
      <Table aria-label="custom pagination table">
        <TableHead>
          <TableRow>
            <TableCell colSpan={maxColumnSpan}>
              <Grid container spacing={2}>
                <Grid item xs>
                  {loading && (
                    <CircularProgress size={12} />
                  )}
                </Grid>
                <Grid item>
                  {actions}
                </Grid>
              </Grid>
            </TableCell>
          </TableRow>
          {headerGroups.map((headerGroup) => (
            <TableRow key={headerGroup.id}>
              {headerGroup.headers.map((column) => (
                <TableCell key={column.id} colSpan={column.colSpan} rowSpan={column.rowSpan}>
                  {column.isPlaceholder
                    ? ' '
                    : flexRender(column.column.columnDef.header, column.getContext())}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableHead>
        <TableBody>
          {(flatRows).map((row) => (
            <TableRow key={row.id}>
              {row.getAllCells().map((cell) => (
                <TableCell key={cell.id}>
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
        <TableFooter>
          {hasFooter && footerGroups.map((footerGroup) => (
            <TableRow key={footerGroup.id}>
              {footerGroup.headers.map((column) => (
                <TableCell key={column.id}>
                  {column.isPlaceholder
                    ? ' '
                    : flexRender(column.column.columnDef.footer, column.getContext())}
                </TableCell>
              ))}
            </TableRow>
          ))}
          <TableRow>
            <TablePagination
              rowsPerPageOptions={rowsPerPageOptions}
              colSpan={maxColumnSpan}
              count={totalCount}
              rowsPerPage={rowsPerPage}
              page={page}
              SelectProps={{
                inputProps: {
                  'aria-label': 'rows per page',
                },
                native: true,
              }}
              onPageChange={(event, newPage) => {
                onPageChange?.(newPage);
                if (page > newPage) {
                  onBefore?.();
                }
                if (page < newPage) {
                  onAfter?.();
                }
                if (!manualPagination) {
                  table.setPageIndex(newPage);
                }
              }}
              onRowsPerPageChange={(event) => {
                onRowsPerPageChange?.(Number(event.target.value));
                if (!manualPagination) {
                  table.setPageSize(Number(event.target.value));
                }
              }}
              ActionsComponent={TablePaginationActions}
            />
          </TableRow>
        </TableFooter>
      </Table>
    </TableContainer>
  );
}

export default DataTable;
