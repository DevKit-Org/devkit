import { createClient } from "@/lib/supabase/server";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { DeleteMessageButton } from "@/components/admin/delete-message-button";
import type { ContactMessage } from "@/lib/types";

export default async function AdminMessagesPage() {
  const supabase = await createClient();

  const { data: messages } = await supabase
    .from("contact_messages")
    .select("*")
    .order("created_at", { ascending: false });

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold tracking-tight text-white">
          Messages
        </h2>
        <p className="text-gray-400">View contact messages from users</p>
      </div>

      <div className="rounded-lg border border-white/10 bg-slate-900">
        <Table>
          <TableHeader>
            <TableRow className="border-white/10 hover:bg-slate-800">
              <TableHead className="text-gray-400">Name</TableHead>
              <TableHead className="text-gray-400">Email</TableHead>
              <TableHead className="max-w-md text-gray-400">Message</TableHead>
              <TableHead className="text-gray-400">Date</TableHead>
              <TableHead className="w-[80px] text-gray-400">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {((messages as ContactMessage[]) || []).map((message) => (
              <TableRow
                key={message.id}
                className="border-white/10 hover:bg-slate-800"
              >
                <TableCell className="font-medium text-white">
                  {message.name || "—"}
                </TableCell>
                <TableCell>
                  <a
                    href={`mailto:${message.email}`}
                    className="text-blue-400 hover:text-blue-300 underline"
                  >
                    {message.email}
                  </a>
                </TableCell>
                <TableCell className="max-w-md">
                  <p className="line-clamp-2 text-gray-400">
                    {message.message}
                  </p>
                </TableCell>
                <TableCell className="text-gray-400 whitespace-nowrap">
                  {new Date(message.created_at).toLocaleDateString()}
                </TableCell>
                <TableCell>
                  <DeleteMessageButton messageId={message.id} />
                </TableCell>
              </TableRow>
            ))}
            {(!messages || messages.length === 0) && (
              <TableRow className="border-white/10">
                <TableCell
                  colSpan={5}
                  className="text-center py-8 text-gray-400"
                >
                  No messages yet.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
