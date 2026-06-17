import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { getInialts } from "@/components/ui/utill";
import { DollarSign} from "lucide-react";


  export function Header() {
     const User = {
          name:'Gabriel Cavala Manuel',
          email:'gabrielcavalamanuel@gmail.com',
          avatarUrl:"https://github.com/Gabriel092005.png"
        }

      return (
          <>
             <div>
              <header className="">
              <div className="flex justify-between bg-black  h-20">
                      <div className="flex gap-1 items-center ">
                        <div>
                              <DollarSign className="text-white"></DollarSign>
                        </div>
                       <div className="flex items-center">
                        <strong className="text-white">AccountSoft</strong>
                      </div>
                      </div>
                   <div className="flex items-center">
                        {User.avatarUrl ? (
                                  <div className="flex justify-center items-center">
                                     <div>
                                        <Avatar>
                                        <AvatarImage src='https://github.com/Gabriel092005.png'/>
                                        </Avatar>
                                     </div>
                                     <div className="flex flex-col ">
                                          <strong className="text-white text-[0.8rem]">{User.name}</strong>
                                          <span className=" text-muted-foreground text-[0.8rem]">{User.email}</span>
                                     </div>
                                  </div>
                        ): (
                            <AvatarFallback>
                                 {getInialts(User.name)}
                            </AvatarFallback>
                        )}
                   </div>
              </div>
              </header>
          </div>
          </>
      )
  }
