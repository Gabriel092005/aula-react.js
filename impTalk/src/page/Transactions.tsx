import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Plus } from "lucide-react";



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
                               <Button className="p-1">
                                 <Plus/>
                                    Nova Transação
                                </Button>
                          </div>
                      </div>
                  </header>
              </div>
               <div className=" flex items-center gap-7 ">
                  <Card>
                    
                  </Card>

               </div>
          </div>
     )
}
