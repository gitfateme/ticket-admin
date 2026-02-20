import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

// Import your hook and service
import { useApiService } from "@/hooks/useApiServiceHandler";
import { login } from "@/lib/services/user.service"; // Adjust path if needed

export default function Login() {
  const navigate = useNavigate();

  // 1. Setup local state for the form inputs
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");

  // 2. Initialize your custom API hook
  const { execute: performLogin, loading } = useApiService(login);

  // 3. Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault(); // Prevent page reload

    console.log("here");
    // Call your hook's execute function
    await performLogin(
      { phone, password }, // This is the 'body' passed to your login service
      {
        onSuccess: (response) => {
          console.log("Login Success:", response);

          // Assuming your backend sends back tokens in response.data or response
          const accessToken =
            response?.data?.accessToken || response?.accessToken;
          const refreshToken =
            response?.data?.refreshToken || response?.refreshToken;

          if (accessToken) {
            // Save tokens (usually in localStorage or cookies)
            localStorage.setItem("accessToken", accessToken);
            localStorage.setItem("refreshToken", refreshToken);

            // Redirect user to dashboard/home
            navigate("/dashboard");
          }
        },
        onError: (error) => {
          // Your hook already handles global errors (like showing a toast),
          // but you can add specific logic here if needed.
          console.error("Login failed:", error);
        },
      },
    );
  };

  return (
    <Card className="w-full max-w-sm" dir="rtl">
      <CardHeader>
        <CardTitle>ورود به حساب کاربری</CardTitle>
        <CardDescription>
          شماره همراه و رمز عبور خود را وارد کنید
        </CardDescription>
      </CardHeader>

      {/* 4. Wrap everything inside the form element and attach onSubmit */}
      <form onSubmit={handleSubmit}>
        <CardContent>
          <div className="flex flex-col gap-6">
            <div className="grid gap-2">
              <Label htmlFor="phone">شماره همراه</Label>
              <Input
                id="phone"
                type="text" // Changed from email to text since it's a phone number
                placeholder="09123456789"
                value={phone}
                onChange={(e) => setPhone(e.target.value)} // Bind state
                required
                disabled={loading} // Disable input while loading
              />
            </div>
            <div className="grid gap-2">
              <div className="flex items-center">
                <Label htmlFor="password">رمز عبور</Label>
              </div>
              <Input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)} // Bind state
                required
                disabled={loading} // Disable input while loading
              />
            </div>
          </div>
        </CardContent>
        <CardFooter className="flex-col gap-2">
          {/* Button type="submit" triggers the form's onSubmit */}
          <Button type="submit" className="w-full" disabled={loading}>
            {loading ? "در حال ورود..." : "ورود"}
          </Button>
        </CardFooter>
      </form>
    </Card>
  );
}
