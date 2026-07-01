
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Header } from "./header"
import { Transactions } from "./Transactions"
import { formatKwanza } from "@/components/ui/utill"
import { TransactiosTable } from "./TransactionsTable/TransactionsTable"
import { ArrowDown, ArrowUp, Box, ChevronUp, Wallet } from "lucide-react"


export function Home(){
     return(
        <>
         <Header></Header>
             <div className="flex flex-col gap-3 p-3">
             <Transactions/>
              <div className=" flex justify-center items-center gap-10 mt-5">
                  <Card className="w-60">
                    <CardHeader>
                         <div className="flex justify-between ">
                               <CardTitle>Total</CardTitle>
                                  <div className=" bg-green-50 p-1 rounded-sm">
                                   <Wallet className="text-green-900" size={20} />
                                  </div>
                         </div>
                        <CardDescription>Resumo Geral</CardDescription>
                    </CardHeader>
                       <CardContent className="flex">
                       <div className="flex flex-col">
                            <strong className="tracking-tight text-2xl">{formatKwanza(2000)}</strong>
                            <span className="text-[0.8rem]"><span className="text-green-500">+20%</span> em relação ao mês anterior</span>
                       </div>
                       </CardContent>
                  </Card>
                     <Card className="w-60">
                   <CardHeader>
                         <div className="flex justify-between ">
                               <CardTitle>Entradas</CardTitle>
                                  <div className=" bg-green-50 p-1 rounded-sm">
                                   <ArrowUp className="text-green-900" size={20} />
                                  </div>
                         </div>
                        <CardDescription>Resumo Geral</CardDescription>
                    </CardHeader>
                       <CardContent className="flex">
                       <div className="flex flex-col">
                            <strong className="tracking-tight text-2xl">{formatKwanza(2000)}</strong>
                            <span className="text-[0.8rem]"><span className="text-green-500">+20%</span> em relação ao mês anterior</span>
                       </div>
                       </CardContent>
                  </Card>
                     <Card className="w-60">
                  <CardHeader>
                         <div className="flex justify-between ">
                               <CardTitle>Saídas</CardTitle>
                                  <div className=" bg-red-50 p-1 rounded-sm">
                                   <ArrowDown className="text-red-500" size={20} />
                                  </div>
                         </div>
                        <CardDescription>Resumo Geral</CardDescription>
                    </CardHeader>
                       <CardContent className="flex">
                       <div className="flex flex-col">
                                   <strong className="tracking-tight text-2xl">{formatKwanza(2000)}</strong>
                            <span className="text-[0.8rem]"><span className="text-red-500">+20%</span> em relação ao mês anterior</span>
                       </div>
                       </CardContent>
                  </Card>
                     <Card className="w-60">
                    <CardHeader>
                         <div className="flex justify-between ">
                               <CardTitle>Produtos</CardTitle>
                                  <div className=" bg-yellow-50 p-1 rounded-sm">
                                   <Box className="text-yellow-900" size={20} />
                                  </div>
                         </div>
                        <CardDescription>Resumo Geral</CardDescription>
                    </CardHeader>
                       <CardContent className="flex">
                       <div className="flex flex-col">
                            <strong className="tracking-tight text-2xl">200</strong>
                            <span className="text-[0.8rem]"><span className="text-green-500">+20%</span> em relação ao mês anterior</span>
                       </div>
                       </CardContent>
                  </Card>
              </div>
              <TransactiosTable></TransactiosTable>
        </div>
        </>
     )
}
