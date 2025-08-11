import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";

const editors = [
  { id: 1, name: "John Doe", email: "john.doe@example.com" },
  { id: 2, name: "Jane Smith", email: "jane.smith@example.com" },
];

export default function ManageEditor() {
  return (
    <div className="w-full">
      <h1 className="text-2xl font-semibold mb-4">Manage Editors</h1>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {editors.map((editor) => (
            <TableRow key={editor.id}>
              <TableCell>{editor.name}</TableCell>
              <TableCell>{editor.email}</TableCell>
              <TableCell>
                <Button variant="destructive" size="sm">
                  Remove
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
