import { Heart } from "lucide-react";


  export function Header() {
      return (
          <>
             <div>
              <header className="">
                  <div className="flex gap-1 items-center justify-center bg-blue-400  h-20">
                       <div className="flex items-center gap-1">
                        <strong className="text-white">SOCIALWEB</strong>
                        <div>
                              <Heart className="text-red-500"></Heart>
                        </div>
                      </div>
                  </div>
              </header>
          </div>
          </>
      )
  }
