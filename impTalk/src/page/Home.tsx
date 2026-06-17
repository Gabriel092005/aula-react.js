
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Header } from "./header"
import { Transactions } from "./Transactions"
import { formatKwanza } from "@/components/ui/utill"
import { TransactiosTable } from "./TransactionsTable/TransactionsTable"


export function Home(){
     return(
        <div className="flex flex-col gap-3">
             <Header></Header>
             <Transactions/>
              <div className=" flex justify-center items-center gap-10 mt-5">
                  <Card className="w-60">
                    <CardHeader>
                        <CardTitle>Total</CardTitle>
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
                        <CardTitle>Entradas</CardTitle>
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
                        <CardTitle>Saídas</CardTitle>
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
                        <CardTitle>Produtos</CardTitle>
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
              <div className="flex justify-center items-center">
                  <TransactiosTable></TransactiosTable>
              </div>
        </div>
     )
}
