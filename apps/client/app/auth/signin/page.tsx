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

const SignIn = () => {
  return (
    <div className="w-full h-screen flex justify-center items-center bg-gray-100 dark:bg-gray-900">
      {/* Background Styling */}
      <div
        className="absolute top-0 z-[-2] h-screen w-screen dark:bg-[#000000] dark:bg-[radial-gradient(#ffffff33_1px,#00091d_1px)] 
        dark:bg-[size:20px_20px] bg-[#ffffff] bg-[radial-gradient(#00000033_1px,#ffffff_1px)] bg-[size:20px_20px]"
        aria-hidden="true"
      />

      {/* Card Component */}
      <Card className="w-[370px] h-[450px] p-6">
        <CardHeader>
          <CardTitle className="text-xl font-semibold">Sign In</CardTitle>
          <CardDescription className="text-sm text-gray-500">Access your account with your credentials.</CardDescription>
        </CardHeader>
        <CardContent>
          <form className="space-y-4">
            {/* Email Input */}
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="Enter your email"
                className="focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            {/* Password Input */}
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                name="password"
                type="password"
                placeholder="Enter your password"
                className="focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
          </form>
        </CardContent>
        <CardFooter className="flex flex-col items-center space-y-4">
          {/* Sign In Button */}
          <Button className="w-full">Sign In</Button>

          {/* Sign Up Link */}
          <div className="text-sm">
            Don't have an account?{" "}
            <a href="/auth/signup" className="text-blue-600 hover:underline">
              Sign Up
            </a>
          </div>
        </CardFooter>
      </Card>
    </div>
  )
}

export default SignIn
