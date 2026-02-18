// src/layouts/AuthLayout.tsx
import { Outlet } from "react-router-dom";

export default function AuthLayout() {
  return (
    <div className="min-h-screen w-full flex items-center justify-center ">
      <div>
        <Outlet />
      </div>
    </div>
  );
}
