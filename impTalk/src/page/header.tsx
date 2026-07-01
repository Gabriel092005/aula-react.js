import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { ModeToggle } from "@/components/ui/mode-toggle";
import { Separator } from "@/components/ui/separator";
import { getInialts } from "@/components/ui/utill";
import { Bell, BellDot, ChevronDown, DollarSign, LogOutIcon, Mail, Pencil, Settings, User2} from "lucide-react";


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
              <div className="flex justify-between items-center bg-black  h-20">
                      <div className="flex gap-1 items-center ">
                        <div>
                              <DollarSign className="text-white"></DollarSign>
                        </div>
                       <div className="flex items-center">
                        <strong className="text-white">AccountSoft</strong>
                      </div>
                      </div>
                       <div>
                          <ModeToggle></ModeToggle>
                      </div>
                  <DropdownMenu>

                      <DropdownMenuTrigger>
                      <div className="flex items-center">
                        {User.avatarUrl ? (
                                  <div className="flex justify-center items-center">
                                     <div>
                                        <Avatar>
                                        <AvatarImage src='https://github.com/Gabriel092005.png'/>
                                        </Avatar>
                                     </div>
                                     <div className="flex flex-col ">
                                          <strong className="text-white text-[0.7rem]">{User.name}</strong>
                                          <span className=" text-muted-foreground text-[0.6rem]">{User.email}</span>
                                     </div>
                                  </div>
                        ): (
                            <AvatarFallback>
                                 {getInialts(User.name)}
                            </AvatarFallback>
                        )}
                        <ChevronDown size={14} className="text-white"></ChevronDown>
                   </div>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent className="flex flex-col items-start">
                         <div className="border-b-1 border-solid border-gray-300">
                         <DropdownMenuItem className="flex p-2">
                                   <div className="flex justify-center items-center">
                                     <div>
                                        <Avatar>
                                        <AvatarImage src='https://github.com/Gabriel092005.png'/>
                                        </Avatar>
                                     </div>
                                     <div className="flex flex-col ">
                                          <strong className="text-[0.7rem]">{User.name}</strong>
                                          <span className=" text-muted-foreground text-[0.6rem]">{User.email}</span>
                                     </div>
                                  </div>
                         </DropdownMenuItem>
                         </div>
                            <DropdownMenuItem className="flex">
                         <User2 className="ml-[7px]"></User2>
                                     Meu perfil
                         </DropdownMenuItem>
                            <DropdownMenuItem className="flex ">
                         <BellDot className="ml-[7px] text-yellow-500"></BellDot>
                                     Notificações
                         </DropdownMenuItem>
                        <div className="w-full border-b-1 border-solid border-gray300">
                         <DropdownMenuItem className="flex ">
                         <Separator orientation="horizontal"></Separator>
                                <Settings size={12}></Settings>
                                Configurações
                         </DropdownMenuItem>
                         </div>
                            <DropdownMenuItem className="flex">
                         <LogOutIcon className="ml-[7px] text-red-600"></LogOutIcon>
                                     Terminar secção
                         </DropdownMenuItem>

                      </DropdownMenuContent>
                  </DropdownMenu>

              </div>

              </header>
          </div>
          </>
      )
  }
