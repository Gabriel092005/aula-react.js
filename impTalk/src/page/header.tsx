import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { DollarSign, Heart } from "lucide-react";


  export function Header() {
      return (
          <>
             <div>
              <header className="">
                  <div className="flex gap-1 items-center  bg-black  h-20">
                       <div className="flex items-center">
                        <strong className="text-white">AccountSoft</strong>
                        <div>
                              <DollarSign className="text-white"></DollarSign>
                        </div>
                      </div>
                  </div>
                   <div className="flex items-center">
                       <Avatar>
                           <AvatarImage  src="https://github.com/Gabriel092005/avatar"></AvatarImage>
                       </Avatar>
                   </div>
              </header>
          </div>
          </>
      )
  }
