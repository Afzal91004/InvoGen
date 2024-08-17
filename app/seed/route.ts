import bcrypt from "bcrypt";
import { db } from "@vercel/postgres";
import {
  users,
  parties,
  invoices,
  items,
  sales,
  purchases,
  employees,
  reports,
  revenue,
} from "../lib/placeholder-data";

const client = await db.connect();

async function seedUsers() {
  await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
  await client.sql`
    CREATE TABLE IF NOT EXISTS users (
      id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
      name VARCHAR(255) NOT NULL,
      email TEXT NOT NULL UNIQUE,
      password TEXT NOT NULL
    );
  `;

  const insertedUsers = await Promise.all(
    users.map(async (user) => {
      const hashedPassword = await bcrypt.hash(user.password, 10);
      return client.sql`
        INSERT INTO users (id, name, email, password)
        VALUES (${user.id}, ${user.name}, ${user.email}, ${hashedPassword})
        ON CONFLICT (id) DO NOTHING;
      `;
    })
  );

  return insertedUsers.length;
}

async function seedParties() {
  await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;

  await client.sql`
    CREATE TABLE IF NOT EXISTS parties (
      id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
      name VARCHAR(255) NOT NULL,
      email VARCHAR(255) NOT NULL,
      gst_number VARCHAR(15) UNIQUE,
      image_url VARCHAR(255) NOT NULL
    );
  `;

  const insertedParties = await Promise.all(
    parties.map(
      (party) => client.sql`
        INSERT INTO parties (id, name, email, gst_number, image_url)
        VALUES (${party.id}, ${party.name}, ${party.email}, ${party.gst_number}, ${party.image_url})
        ON CONFLICT (id) DO NOTHING;
      `
    )
  );

  return insertedParties.length;
}

async function seedItems() {
  await client.sql`
    CREATE TABLE IF NOT EXISTS items (
      id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
      name VARCHAR(255) NOT NULL,
      description TEXT,
      price DECIMAL(10, 2) NOT NULL,
      hsn_code VARCHAR(10),
      gst_rate DECIMAL(5, 2)
    );
  `;

  const insertedItems = await Promise.all(
    items.map(
      (item) => client.sql`
        INSERT INTO items (id, name, description, price, hsn_code, gst_rate)
        VALUES (${item.id}, ${item.name}, ${item.description}, ${item.price}, ${item.hsn_code}, ${item.gst_rate})
        ON CONFLICT (id) DO NOTHING;
      `
    )
  );

  return insertedItems.length;
}

async function seedInvoices() {
  await client.sql`
    CREATE TABLE IF NOT EXISTS invoices (
      id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
      invoice_number VARCHAR(20) UNIQUE NOT NULL,
      party_id UUID NOT NULL,
      amount DECIMAL(10, 2) NOT NULL,
      gst_number VARCHAR(15),
      status VARCHAR(255) NOT NULL,
      date DATE NOT NULL
    );
  `;

  const insertedInvoices = await Promise.all(
    invoices.map(
      (invoice) => client.sql`
        INSERT INTO invoices (invoice_number, party_id, amount, gst_number, status, date)
        VALUES (${invoice.invoice_number}, ${invoice.party_id}, ${invoice.amount}, ${invoice.gst_number}, ${invoice.status}, ${invoice.date})
        ON CONFLICT (id) DO NOTHING;
      `
    )
  );

  return insertedInvoices.length;
}

async function seedSales() {
  await client.sql`
    CREATE TABLE IF NOT EXISTS sales (
      id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
      item_id UUID NOT NULL,
      quantity INT NOT NULL,
      total DECIMAL(10, 2) NOT NULL,
      date DATE NOT NULL
    );
  `;

  const insertedSales = await Promise.all(
    sales.map(
      (sale) => client.sql`
        INSERT INTO sales (id, item_id, quantity, total, date)
        VALUES (${sale.id}, ${sale.item_id}, ${sale.quantity}, ${sale.total}, ${sale.date})
        ON CONFLICT (id) DO NOTHING;
      `
    )
  );

  return insertedSales.length;
}

async function seedPurchases() {
  await client.sql`
    CREATE TABLE IF NOT EXISTS purchases (
      id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
      item_id UUID NOT NULL,
      quantity INT NOT NULL,
      total DECIMAL(10, 2) NOT NULL,
      date DATE NOT NULL
    );
  `;

  const insertedPurchases = await Promise.all(
    purchases.map(
      (purchase) => client.sql`
        INSERT INTO purchases (id, item_id, quantity, total, date)
        VALUES (${purchase.id}, ${purchase.item_id}, ${purchase.quantity}, ${purchase.total}, ${purchase.date})
        ON CONFLICT (id) DO NOTHING;
      `
    )
  );

  return insertedPurchases.length;
}

async function seedEmployees() {
  await client.sql`
    CREATE TABLE IF NOT EXISTS employees (
      id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
      name VARCHAR(255) NOT NULL,
      position VARCHAR(255) NOT NULL,
      salary DECIMAL(10, 2) NOT NULL
    );
  `;

  const insertedEmployees = await Promise.all(
    employees.map(
      (employee) => client.sql`
        INSERT INTO employees (id, name, position, salary)
        VALUES (${employee.id}, ${employee.name}, ${employee.position}, ${employee.salary})
        ON CONFLICT (id) DO NOTHING;
      `
    )
  );

  return insertedEmployees.length;
}

async function seedReports() {
  await client.sql`
    CREATE TABLE IF NOT EXISTS reports (
      id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
      title VARCHAR(255) NOT NULL,
      content TEXT NOT NULL,
      date DATE NOT NULL
    );
  `;

  const insertedReports = await Promise.all(
    reports.map(
      (report) => client.sql`
        INSERT INTO reports (id, title, content, date)
        VALUES (${report.id}, ${report.title}, ${report.content}, ${report.date})
        ON CONFLICT (id) DO NOTHING;
      `
    )
  );

  return insertedReports.length;
}

async function seedRevenue() {
  await client.sql`
    CREATE TABLE IF NOT EXISTS revenue (
      month VARCHAR(7) NOT NULL UNIQUE,
      revenue DECIMAL(10, 2) NOT NULL
    );
  `;

  const insertedRevenue = await Promise.all(
    revenue.map(
      (rev) => client.sql`
        INSERT INTO revenue (month, revenue)
        VALUES (${rev.month}, ${rev.revenue})
        ON CONFLICT (month) DO NOTHING;
      `
    )
  );

  return insertedRevenue.length;
}

export async function GET() {
  try {
    await client.sql`BEGIN`;
    const userCount = await seedUsers();
    const partyCount = await seedParties();
    const itemCount = await seedItems();
    const invoiceCount = await seedInvoices();
    const saleCount = await seedSales();
    const purchaseCount = await seedPurchases();
    const employeeCount = await seedEmployees();
    const reportCount = await seedReports();
    const revenueCount = await seedRevenue();
    await client.sql`COMMIT`;

    return Response.json({
      message: "Database seeded successfully",
      inserted: {
        users: userCount,
        parties: partyCount,
        items: itemCount,
        invoices: invoiceCount,
        sales: saleCount,
        purchases: purchaseCount,
        employees: employeeCount,
        reports: reportCount,
        revenue: revenueCount,
      },
    });
  } catch (error) {
    await client.sql`ROLLBACK`;
    console.error("Database seeding error:", error);
    return Response.json({ error: "Failed to seed database" }, { status: 500 });
  } finally {
    client.release(); // Close the database connection
  }
}
