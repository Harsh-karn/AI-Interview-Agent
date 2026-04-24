"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { signOut as firebaseSignOut } from "firebase/auth";

import { auth } from "@/firebase/client";
import { signOut } from "@/lib/actions/auth.action";

const SignOutPage = () => {
  const router = useRouter();

  useEffect(() => {
    const handleSignOut = async () => {
      try {
        await firebaseSignOut(auth);
        await signOut();
      } catch (error) {
        console.error("Sign out error:", error);
      } finally {
        router.push("/sign-in");
      }
    };

    handleSignOut();
  }, [router]);

  return (
    <div className="flex items-center justify-center min-h-screen">
      <p className="text-lg gradient-text animate-pulse-glow">
        Signing out...
      </p>
    </div>
  );
};

export default SignOutPage;
