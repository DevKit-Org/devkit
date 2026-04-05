"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase/client";
import { Button } from "@/components/ui/button";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Icons } from "@/components/icons";

interface DeleteMessageButtonProps {
  messageId: string;
}

export function DeleteMessageButton({ messageId }: DeleteMessageButtonProps) {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  async function handleDelete() {
    setIsLoading(true);
    const supabase = createClient();
    try {
      await supabase.from("contact_messages").delete().eq("id", messageId);
      router.refresh();
    } catch (error) {
      console.error("Failed to delete message:", error);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button variant="ghost" size="icon" className="hover:bg-slate-800">
          <Icons.trash className="h-4 w-4 text-red-400" />
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent className="border-white/10 bg-slate-900">
        <AlertDialogHeader>
          <AlertDialogTitle className="text-white">
            Delete Message
          </AlertDialogTitle>
          <AlertDialogDescription className="text-gray-400">
            Are you sure you want to delete this message? This action cannot be
            undone.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel className="border-white/10 text-gray-200 hover:bg-slate-800">
            Cancel
          </AlertDialogCancel>
          <AlertDialogAction
            onClick={handleDelete}
            disabled={isLoading}
            className="bg-red-600 hover:bg-red-700 text-white"
          >
            {isLoading ? "Deleting..." : "Delete"}
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
