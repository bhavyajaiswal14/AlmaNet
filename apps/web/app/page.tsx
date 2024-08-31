'use client';

import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter(); 

  return (
    <div className="bg-[#253318] text-white min-h-screen flex flex-col items-center justify-center">
      <div className="text-center mt-16">
        <h1 className="text-8xl font-bold mb-6 sketch-effect">
          AlmaNet
        </h1>
        <p className="text-xl mb-6">Welcome 👋</p>
        <p className="text-lg mb-8">Let us know more about yourself</p>

        <div className="flex flex-col md:flex-row items-center justify-center mb-8">
          
          {/* Alumni Section */}
          <div className="flex flex-col items-center mb-8 md:mb-0 md:mr-20">
            <div className="relative">
              <div className="rounded-full p-2 bg-gradient-to-r from-green-400 via-yellow-500 to-pink-500">
                <div className="w-64 h-64 rounded-full overflow-hidden bg-[#FAFF0C]">
                  <Image 
                    src="/Images/Alumni.png"
                    alt="Alumni?"
                    width={300}
                    height={300}
                    objectFit="cover"
                  />
                </div>
              </div>
            </div>
            <button 
              className="bg-[#8f9104] hover:bg-[#262b02] text-white py-2 px-6 rounded-full mt-4"
              onClick={() => window.location.href = 'https://premium-mayfly-62.accounts.dev/sign-in?redirect_url=http%3A%2F%2Flocalhost%3A3000%2Fsignup%2Falumni'}
            >
              Alumni?
            </button>
          </div>

          {/* Student Section */}
          <div className="flex flex-col items-center md:ml-20">
            <div className="relative">
              <div className="rounded-full p-2 bg-gradient-to-r from-green-400 via-yellow-500 to-pink-500">
                <div className="w-64 h-64 rounded-full overflow-hidden bg-[#FAFF0C]">
                  <Image 
                    src="/Images/Student.png"
                    width={300}                
                    height={300}               
                    objectFit="cover"         
                    alt="Student"            
                  />
                </div>
              </div>
            </div>
            <button 
              className="bg-[#8f9104] hover:bg-[#262b02] text-white py-2 px-6 rounded-full mt-4"
              onClick={() => window.location.href = 'https://premium-mayfly-62.accounts.dev/sign-in?redirect_url=http%3A%2F%2Flocalhost%3A3000%2Fsignup%2Fstudent'}
            >
              Student?
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}
