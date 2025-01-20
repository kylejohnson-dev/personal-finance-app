import Image from "next/image";
import illustrationAuthentication from "../../../public/images/illustration-authentication.svg"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function LoginPage() {
  return (
    <main className="flex h-screen">
      <div className="hidden lg:flex h-full p-10">
        <div className="relative w-[560px] h-[920px] rounded-xl overflow-hidden">
          <Image 
            src={illustrationAuthentication}
            alt="Cartoon of man chasing money."
          />
          <div className="absolute bottom-10 left-10 right-10 space-y-6">
            <h4 className="text-white text-preset-1">Keep track of your money
            and save for your future</h4>
            <p className="text-white text-preset-4">Personal finance app puts you in control of your spending. Track transactions, set budgets, and add to savings pots easily.</p>
          </div>
        </div>
        
      </div>
      <div className="grid place-content-center">
        <Card className="w-[560px]">
          <CardHeader>
            <CardTitle>Login</CardTitle>
          </CardHeader>
          <CardContent>
            <Label>Email</Label>
            <Input 
              type="email"
            />
            <Label>Password</Label>
            <Input 
              type="password"
            />
            <Button className="w-full">Login</Button>
          </CardContent>
        </Card>
      </div>
    </main>
  )
}