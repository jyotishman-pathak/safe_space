import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

const SignIn = () => {
  return (
    <div className="w-full h-screen flex justify-center items-center">
      {/* Background Styling */}
      <div
        className='absolute top-0 z-[-2] h-screen w-screen dark:bg-[#000000] dark:bg-[radial-gradient(#ffffff33_1px,#00091d_1px)] 
        dark:bg-[size:20px_20px] bg-[#ffffff] bg-[radial-gradient(#00000033_1px,#ffffff_1px)] bg-[size:20px_20px]'
        aria-hidden='true'
      />

      {/* Card Component */}
      <Card className="w-[370px] h-[450px]">
        <CardHeader>
          <CardTitle>Safe Space</CardTitle>
          <CardDescription>A place where you can be safe</CardDescription>
        </CardHeader>
        <CardContent>
          <form>
            <div className="grid w-full items-center gap-4">
              
              {/* Name Input */}
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="name">Name</Label>
                <Input id="name" name="name" placeholder="Enter your project name" />
              </div>
              
              {/* Email Input */}
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="email">Email</Label>
                <Input id="email" name="email" type="email" placeholder="Enter your email" />
              </div>
              
              {/* Password Input */}
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="password">Password</Label>
                <Input id="password" name="password" type="password" placeholder="Enter your password" />
              </div>

            </div>
          </form>
        </CardContent>
        <CardFooter className="flex flex-col items-center">
          {/* Sign Up Button */}
          <Button className="w-full">Sign Up</Button>

          {/* Sign In Link */}
          <div className="mt-4 text-sm">
            Already a user? <a href="/auth/signin" className="text-blue-600 hover:underline">Sign In</a>
          </div>
        </CardFooter>
      </Card>
    </div>
  )
}

export default SignIn
