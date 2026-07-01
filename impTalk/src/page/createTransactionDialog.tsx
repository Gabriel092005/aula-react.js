import { Button } from "@/components/ui/button";
import {DialogContent, DialogDescription, DialogTitle} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";


 export function CreateNewTransactionsDialog(){
      return (
          <DialogContent>
               <DialogTitle>
                       Transações
               </DialogTitle>
               <DialogDescription>
                      Cadastre todas as transações para um melhor controle financeiro.
               </DialogDescription>
                <div className=" flex flex-col gap-1 ">
                   <form action=""className=" flex flex-col gap-4">
                         <Input placeholder="Produto"></Input>
                         <Input placeholder="Categoria"></Input>
                         <Input placeholder="Descrição"></Input>
                         <Input placeholder="Quantidade" type="number"></Input>
                         <Input placeholder="Preço"></Input>
                    

                         <Select >
                                     <SelectTrigger  className="flex flex-1 w-full">
                                          <SelectValue placeholder='Selecione a transação...'></SelectValue>
                                     </SelectTrigger>
                                     <SelectContent>
                                         <SelectItem value="Income">Entrada</SelectItem>
                                         <SelectItem value="Outcome">Saída</SelectItem>
                                    </SelectContent>
                         </Select>
                         <Button>Criar Transação</Button>
                   </form>
                </div>
          </DialogContent>
      )
 }
