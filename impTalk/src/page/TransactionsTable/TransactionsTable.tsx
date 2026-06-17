import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { formatKwanza } from "@/components/ui/utill";
import { Pencil, Trash, Trash2 } from "lucide-react";



export function TransactiosTable(){
      return(
        <Table className="mt-4">
            <TableHeader>
                  <TableRow>
                     <TableHead>Nome</TableHead>
                     <TableHead>Catégoria</TableHead>
                     <TableHead>Descrição</TableHead>
                     <TableHead>Preço</TableHead>
                     <TableHead>Acção</TableHead>
                  </TableRow>
            </TableHeader>
            <TableBody className="">
                  <TableRow>
                      <TableCell className="p-5">Arroz</TableCell>
                      <TableCell>Merciaria</TableCell>
                      <TableCell>Lorem ipsum dolor sit</TableCell>
                      <TableCell>{formatKwanza(3400)}</TableCell>
                        <div className="flex items-center justify-center">
                            <div></div>
                        </div>
                  </TableRow>
            </TableBody>
        </Table>
      )
}
