import ProductForm from "@/components/ProductForm";

export default function AddProductPage() {

  return (
    <div className="container mx-auto py-8 common-in-x">
      <h1 className="text-2xl font-semibold mb-4">Add Product</h1>
      <ProductForm  />
    </div>
  );
}
