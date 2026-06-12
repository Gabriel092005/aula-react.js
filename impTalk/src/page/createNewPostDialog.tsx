import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

 export function CreateNewPostDialog(){
      return (
         <div>
                <div className="flex flex-col gap-1">
                  <div className="flex flex-col gap-1 mt-9 ">
                      <Textarea placeholder="Escreva aqui o teu pensamento.."></Textarea>
                </div>
                 <div>
                      <Button>Publicar</Button>
                 </div>
               </div>
         </div>
      )
 }
