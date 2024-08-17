// Updated placeholder data

const users = [
  {
    id: "410544b2-4001-4271-9855-fec4b6a6442a",
    name: "User",
    email: "user@nextmail.com",
    password: "123456",
  },
  // Add more users here if needed...
];

const parties = [
  {
    id: "d6e15727-9fe1-4961-8c5b-ea44a9bd81aa",
    name: "Evil Rabbit",
    email: "evil@rabbit.com",
    gst_number: "27AABCU9603R1ZM", // GST Number
    image_url: "/customers/evil-rabbit.png",
  },
  {
    id: "3958dc9e-712f-4377-85e9-fec4b6a6442a",
    name: "Delba de Oliveira",
    email: "delba@oliveira.com",
    gst_number: "27AABCU9603R1ZN", // GST Number
    image_url: "/customers/delba-de-oliveira.png",
  },
  // Add more parties here if needed...
];

const items = [
  {
    id: "1e2d60e8-2bfc-11ed-a261-0242ac120002",
    name: "Item A",
    description: "Description for Item A",
    price: 1000.0,
    hsn_code: "123456", // HSN Code for Item A
    gst_rate: 18.0, // GST Rate for Item A
  },
  {
    id: "1e2d60e8-2bfc-11ed-a261-0242ac120003",
    name: "Item B",
    description: "Description for Item B",
    price: 2000.0,
    hsn_code: "654321", // HSN Code for Item B
    gst_rate: 12.0, // GST Rate for Item B
  },
  // Add more items here if needed...
];

const invoices = [
  {
    invoice_number: "INV-0001",
    party_id: "d6e15727-9fe1-4961-8c5b-ea44a9bd81aa", // Party ID corresponding to the party
    amount: 15795.0,
    gst_number: "27AABCU9603R1ZM", // GST Number of the party
    status: "pending", // Invoice status
    date: "2022-12-06", // Invoice date
  },
  {
    invoice_number: "INV-0002",
    party_id: "3958dc9e-712f-4377-85e9-fec4b6a6442a", // Party ID corresponding to the party
    amount: 20348.0,
    gst_number: "27AABCU9603R1ZN", // GST Number of the party
    status: "pending", // Invoice status
    date: "2022-11-14", // Invoice date
  },
  // Add more invoices here if needed...
];

const sales = [
  {
    id: "1e2d60e8-2bfc-11ed-a261-0242ac120004",
    item_id: "1e2d60e8-2bfc-11ed-a261-0242ac120002", // Item ID corresponding to Item A
    quantity: 10, // Quantity of Item A sold
    total: 10000.0, // Total sales amount
    date: "2023-01-15", // Sale date
  },
  // Add more sales here if needed...
];

const purchases = [
  {
    id: "1e2d60e8-2bfc-11ed-a261-0242ac120005",
    item_id: "1e2d60e8-2bfc-11ed-a261-0242ac120003", // Item ID corresponding to Item B
    quantity: 20, // Quantity of Item B purchased
    total: 40000.0, // Total purchase amount
    date: "2023-02-20", // Purchase date
  },
  // Add more purchases here if needed...
];

const employees = [
  {
    id: "1e2d60e8-2bfc-11ed-a261-0242ac120006",
    name: "John Doe",
    position: "Developer", // Employee position
    salary: 60000.0, // Employee salary
  },
  // Add more employees here if needed...
];

const reports = [
  {
    id: "1e2d60e8-2bfc-11ed-a261-0242ac120007",
    title: "Monthly Sales Report",
    content: "Details about the monthly sales.", // Report content
    date: "2023-03-01", // Report date
  },
  // Add more reports here if needed...
];

const revenue = [
  {
    month: "2023-01", // Revenue for January 2023
    revenue: 150000.0, // Revenue amount
  },
  {
    month: "2023-02", // Revenue for February 2023
    revenue: 170000.0, // Revenue amount
  },
  // Add more revenue data here if needed...
];

export {
  users,
  parties,
  items,
  invoices,
  sales,
  purchases,
  employees,
  reports,
  revenue,
};
