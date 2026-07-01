import { Edit2, Trash2 } from "lucide-react";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { formatKwanza } from "@/components/ui/utill";

export function TransactiosTable() {
  return (
    <Table className="mt-4">
      <TableHeader>
        <TableRow>
          <TableHead>Nome</TableHead>
          <TableHead>Categoria</TableHead>
          <TableHead>Descrição</TableHead>
          <TableHead>Quantidade</TableHead>          
          <TableHead className="text-right">Preço</TableHead>
          <TableHead className="text-center w-[100px]">Acção</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell className="p-5 font-medium">Arroz</TableCell>
          <TableCell>Mercearia</TableCell>
          <TableCell className="text-zinc-500">Lorem ipsum dolor sit</TableCell>
          <TableCell className="text-zinc-500">5</TableCell>
          <TableCell className="text-right font-semibold">{formatKwanza(3400)}</TableCell>
          <TableCell>
            <div className="flex items-right justify-right gap-1">
              <Button variant="ghost" size="icon" className="h-8 w-8 text-zinc-500 hover:text-zinc-900">
                <Edit2 size={14} />
              </Button>
              <Button variant="ghost" size="icon" className="h-8 w-8 text-zinc-500 hover:text-red-600">
                <Trash2 size={14} />
              </Button>
            </div>
          </TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
}
