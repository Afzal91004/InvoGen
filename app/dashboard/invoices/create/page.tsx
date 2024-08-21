import Form from "@/app/ui/invoices/create-form";
import Breadcrumbs from "@/app/ui/invoices/breadcrumbs";
import { fetchParties } from "@/app/lib/data";
import { parties } from "@/app/lib/placeholder-data";

export default async function Page() {
  const customers = await fetchParties();

  return (
    <main>
      <Breadcrumbs
        breadcrumbs={[
          { label: "Invoices", href: "/dashboard/invoices" },
          {
            label: "Create Invoice",
            href: "/dashboard/invoices/create",
            active: true,
          },
        ]}
      />
      {/* <Form parties={parties} /> */}
      <Form />
    </main>
  );
}
