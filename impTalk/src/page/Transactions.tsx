import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Dialog, DialogTrigger } from "@/components/ui/dialog";
import { Plus } from "lucide-react";
import { CreateNewTransactionsDialog } from "./createTransactionDialog";



export function Transactions(){
     return (
          <div className=" flex flex-col  justify-center items-center">
              <div className="flex flex-col  w-full">
                  <header className="flex flex-col mt-4 ">
                      <div className="flex justify-between w-full ">
                          <div>
                                <h1 className="font-bold tracking-tighter text-3xl ">Transações</h1>
                                 <span className="text-[1rem]">Histórico de todas as transações em tempo real.</span>
                          </div>
                          <div >
                              <Dialog>
                                <DialogTrigger asChild>
                                      <Button className="p-1">
                                        <Plus/>
                                         Nova Transação
                                       </Button>
                                </DialogTrigger>
                                <CreateNewTransactionsDialog></CreateNewTransactionsDialog>
                              </Dialog>
                          </div>
                      </div>
                  </header>
              </div>

          </div>
     )
}
