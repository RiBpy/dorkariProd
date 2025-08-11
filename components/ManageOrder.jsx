'use client';


import { useState, Fragment } from "react";
import Link from "next/link";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { recentSales } from "./uiData/salesData";

export default function ManageOrder() {
  const [editingOrderId, setEditingOrderId] = useState(null);

  const handleEditClick = (orderId) => {
    setEditingOrderId(orderId === editingOrderId ? null : orderId);
  };

  return (
    <div className="w-full">
      <h1 className="text-2xl font-semibold mb-4">Manage Orders</h1>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Customer</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>Amount</TableHead>
            <TableHead>Date</TableHead>
            <TableHead>Quantity</TableHead>
            <TableHead>Address</TableHead>
            <TableHead>Phone</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {recentSales.map((order) => (
            <Fragment key={order.id}>
              <TableRow>
                <TableCell>{order.name}</TableCell>
                <TableCell>{order.email}</TableCell>
                <TableCell>${order.amount.toFixed(2)}</TableCell>
                <TableCell>{order.date}</TableCell>
                <TableCell>{order.quantity}</TableCell>
                <TableCell>{order.address}</TableCell>
                <TableCell>{order.phone}</TableCell>
                <TableCell>
                  <Button
                    variant="outline"
                    size="sm"
                    className="mr-2"
                    onClick={() => handleEditClick(order.id)}
                  >
                    {editingOrderId === order.id ? "Close" : "Edit"}
                  </Button>
                  <Button variant="destructive" size="sm" className="mr-2">
                    Cancel
                  </Button>
                  <Link href={`/invoice/${order.id}`} passHref>
                    <Button variant="outline" size="sm">
                      View Invoice
                    </Button>
                  </Link>
                </TableCell>
              </TableRow>
              {editingOrderId === order.id && (
                <TableRow>
                  <TableCell colSpan={8}>
                    <div className="p-4 bg-gray-50">
                      <h3 className="text-lg font-semibold mb-2">Edit Order</h3>
                      <div className="grid grid-cols-2 gap-4">
                        <Input defaultValue={order.name} placeholder="Name" />
                        <Input defaultValue={order.email} placeholder="Email" />
                        <Input
                          defaultValue={order.amount}
                          placeholder="Amount"
                          type="number"
                        />
                        <Input
                          defaultValue={order.quantity}
                          placeholder="Quantity"
                          type="number"
                        />
                        <Input
                          defaultValue={order.address}
                          placeholder="Address"
                          className="col-span-2"
                        />
                        <Input defaultValue={order.phone} placeholder="Phone" />
                      </div>
                      <div className="flex justify-end mt-4">
                        <Button size="sm">Save Changes</Button>
                      </div>
                    </div>
                  </TableCell>
                </TableRow>
              )}
            </Fragment>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
