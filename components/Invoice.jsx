import { Button } from "@/components/ui/button";

export default function Invoice({ order }) {
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="w-full bg-white p-8 rounded-lg shadow-lg">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-2xl font-bold">Invoice</h1>
          <p className="text-gray-500">Order #{order.id}</p>
        </div>
        <div className="text-right">
          <p className="text-gray-500">{order.date}</p>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-8 mb-8">
        <div>
          <h2 className="text-lg font-semibold mb-2">Billed To</h2>
          <p>{order.name}</p>
          <p>{order.address}</p>
          <p>{order.phone}</p>
          <p>{order.email}</p>
        </div>
        <div className="text-right">
          <h2 className="text-lg font-semibold mb-2">From</h2>
          <p>QCY</p>
          <p>123 QCY Street</p>
          <p>Audio City, 12345</p>
          <p>contact@qcy.com</p>
        </div>
      </div>

      <table className="w-full mb-8">
        <thead>
          <tr className="bg-gray-100">
            <th className="text-left p-2">Description</th>
            <th className="text-right p-2">Quantity</th>
            <th className="text-right p-2">Amount</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="p-2">Product Name</td>
            <td className="text-right p-2">{order.quantity}</td>
            <td className="text-right p-2">${order.amount.toFixed(2)}</td>
          </tr>
        </tbody>
      </table>

      <div className="flex justify-end mb-8">
        <div className="text-right">
          <p className="font-semibold">Total: ${order.amount.toFixed(2)}</p>
        </div>
      </div>

      <div className="flex justify-end">
        <Button onClick={handlePrint}>Print Invoice</Button>
      </div>
    </div>
  );
}
