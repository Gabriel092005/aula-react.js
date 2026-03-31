import { useForm } from "react-hook-form"
import { Button } from "../components/ui/button"
import { Input } from "../components/ui/input"
import { Header } from "./header"
import z from "zod"
import { useState } from "react"

  export function Users() {
      
   
        
        const registerBodySchema = z.object({
            name:z.string().min(1).max(50),
            age:z.coerce.number(),
            description:z.string().optional()
        })
        type UsersTypes = z.infer< typeof registerBodySchema>
        const [user , setUser ] = useState<UsersTypes[]>()

   async function  handleRegisterUsers(data:UsersTypes) {
      console.log(data)
     setUser((prev) => (prev ? [...prev, data] : [data]));
     reset()
   }
  const { register , control, reset, handleSubmit } = useForm<UsersTypes>()

    return (
       <div>
         <Header></Header>
           <div>
              <strong>SOCIAL WEB</strong>
           </div>
           {user?.map((user)=>{
              return (
                 <>
                   <li>{user.name}</li>
                   <li>{user.age}</li>
                   <li>{user.description}</li>
                 </>
              )
           })}
           <form onSubmit={handleSubmit(handleRegisterUsers)} action="">
                 <Input  {...register('name')} placeholder="Digite seu nome"></Input>
                 <Input {...register('age')} placeholder="idade"></Input>
                 <Input {...register('description')} placeholder="Descricao (opcional) "></Input>
                 <Button type="submit">Registar</Button>
           </form>
       </div>
    )
    
  }