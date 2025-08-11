"use client";

import { useParams } from 'next/navigation';
import Invoice from "@/components/Invoice";
import { recentSales } from "@/components/uiData/salesData";

export default function InvoicePage() {
  const params = useParams();
  const { orderId } = params;

  const order = recentSales.find((o) => o.id.toString() === orderId);

  if (!order) {
    return <div>Order not found</div>;
  }

  return (
    <div className="container mx-auto py-8">
      <Invoice order={order} />
    </div>
  );
}
