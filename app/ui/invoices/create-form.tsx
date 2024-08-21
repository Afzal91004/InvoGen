"use client";

import { useState } from "react";
import { PartyField } from "@/app/lib/definitions";
import Link from "next/link";
import {
  CheckIcon,
  ClockIcon,
  CurrencyRupeeIcon,
  UserCircleIcon,
  ArrowLeftIcon,
} from "@heroicons/react/24/outline";
import { Button } from "@/app/ui/button";

// Placeholder item data with HSN codes
// const items = [
//   { name: "Clothing", hsnCode: "6109" },
//   { name: "Electronics", hsnCode: "8528" },
//   { name: "Furniture", hsnCode: "9403" },
//   // Add more items as needed
// ];
export default function Form() {
  const [itemNo, setItemNo] = useState(1);
  return (
    <div className=" h-full bg-gray-50 w-full text-base border border-teal-700  rounded">
      <div className="flex border-b border-b-teal-700">
        <div className="basis-2/3 m-px border-r border-r-teal-700">
          <div className="border-b border-b-teal-700 py-2 px-4">Bill to</div>
          <div className="h-24 py-2 flex items-center justify-center text-center m-4 text-center border border-dashed border-teal-700 rounded-md">
            <button>+ Add Party</button>
          </div>
        </div>
        <div className="flex basis-1/3 m-px p-4 ">
          <div className="w-4/12 ">
            <div className="text-xs ">Sales Invoice No.:</div>
            <input type="number" className="w-full" />
          </div>
          <div className="w-4/12">
            <div className="text-xs">Sales Date:</div>
            <input type="date" className="w-full text-sm" name="" id="" />
          </div>
        </div>
      </div>
      <table className="w-full p-2 ">
        <thead className="text-left ">
          <tr className="border-b border-b-teal-700">
            <th className="w-1/12 p-2 border-r border-r-teal-700">No</th>
            <th className="w-4/12 p-2 border-r border-r-teal-700">
              Items/ Services
            </th>
            <th className="w-1/12 p-2 border-r border-r-teal-700">HSN/ SAC</th>
            <th className="w-1/12 p-2 border-r border-r-teal-700">QTY</th>
            <th className="w-1/12 p-2 border-r border-r-teal-700">Rate</th>
            <th className="w-1/12 p-2 border-r border-r-teal-700">Discount</th>
            <th className="w-1/12 p-2 border-r border-r-teal-700">Tax</th>
            <th className="w-2/12 p-2">Amount(₹)</th>
          </tr>
        </thead>
        <tbody>
          {itemNo > 0 && (
            <tr className="border-b border-b-teal-700">
              <td className="w-1/12 p-2 border-r border-r-teal-700">
                {itemNo}
              </td>
              <td className="w-5/12 p-2 border-r border-r-teal-700">
                Items/ Services abc
              </td>
              <td className="w-2/12 p-2 border-r border-r-teal-700">
                HSN/ SAC 4 digit code
              </td>
              <td className="w-1/12 p-2 border-r border-r-teal-700">
                QTY any no.
              </td>
              <td className="w-1/12 p-2 border-r border-r-teal-700">
                Rate no. in rupee
              </td>
              <td className="w-1/12 p-2 border-r border-r-teal-700">
                Discount in %
              </td>
              <td className="w-1/12 p-2 border-r border-r-teal-700">
                Tax in %
              </td>
              <td className="w-2/12 p-2">Amount in (₹)</td>
            </tr>
          )}
          <tr className="text-center border-b border-b-teal-700">
            <td className="text-center py-5" colSpan={8}>
              <button className="py-5 px-44 border border-dashed border-teal-700 rounded-md focus:outline-none">
                + Add Item
              </button>
            </td>
          </tr>
          <tr>
            <td className="text-right " colSpan={5}>
              SubTotal
            </td>
            <td className="">₹0</td>
            <td className="">₹0</td>
          </tr>
        </tbody>
      </table>
      <div className="flex w-full ">
        <div className="w-1/2">
          <div>
            <div>Add Notes</div>
            <div>Terms & Condition</div>
            <ol>
              <li>Goods once sold will not be taken back or exchanged.</li>
              <li>
                All disputes are subject to 'use City Name' jurisdiction only
              </li>
            </ol>
          </div>

          <div>
            Bank Details
            <div>
              <span>Account Number:</span> 1342241243421
            </div>
            <div>
              <span>IFSC Code:</span> KKBK0KMCB02
            </div>
            <div>
              <span>Bank & Branch Name:</span> Kokan Mercantile Co-operative
              Bank,Kokan Mercantile Co-operative Bank IMPS
            </div>
            <div>
              <span>Account Holder's Name:</span> K.A. Engineering Works
            </div>
          </div>
        </div>
        <div className="w-1/2">
          <table className="w-full ">
            <tbody className="w-full">
              <tr className="w-full">
                <td>+ Additional Charges</td>
                <td className="text-right">₹0</td>
              </tr>
              <tr>
                <td>Taxable Amount</td>
                <td className="text-right">₹0</td>
              </tr>
              <tr>
                <td>Add Discount</td>
                <td className="text-right">- ₹0</td>
              </tr>
              <tr className="w-full">
                <td>
                  <input type="checkbox" name="" id="" /> Auto Round-Off
                </td>
                <td className="text-right ">
                  <select name="" id="">
                    <option value="option1">+ Add</option>
                    <option value="option2">- Reduce</option>
                  </select>
                  <span>₹{`number`}</span>
                </td>
              </tr>
              <tr>
                <td>Total Amount</td>
                <td className="text-right">Display Total Amount</td>
              </tr>
              <tr>
                <td colSpan={2} className="text-right">
                  <input type="checkbox" name="" id="" />
                  Mark as fully paid
                </td>
              </tr>
              <tr>
                <td>Amount Received</td>
                <td className="text-right">₹ something</td>
              </tr>
              <tr>
                <td>Balance Amount</td>
                <td className="text-right">₹ something</td>
              </tr>
              <tr>
                <td className="text-right" colSpan={2}>
                  Authorised Signatory for userCompanyName
                </td>
              </tr>
              <tr>
                <td colSpan={2} rowSpan={3} className="text-right">
                  Sign
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
// export default function Form({ parties }: { parties: PartyField[] }) {
//   const [gstType, setGstType] = useState<string>("");
//   const [selectedItem, setSelectedItem] = useState<string>("");
//   const [hsnCode, setHsnCode] = useState<string>("");
//   const [gstRate, setGstRate] = useState<number>(0);
//   const [gstAmount, setGstAmount] = useState<number>(0);
//   const [invoiceAmount, setInvoiceAmount] = useState<number>(0);

//   const handleItemChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
//     const selectedItem = items.find((item) => item.name === e.target.value);
//     setSelectedItem(e.target.value);
//     setHsnCode(selectedItem?.hsnCode || "");
//   };

//   const handleGstRateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const rate = parseFloat(e.target.value);
//     setGstRate(rate);
//     calculateGstAmount(invoiceAmount, rate);
//   };

//   const calculateGstAmount = (amount: number, rate: number) => {
//     const gstAmount = (amount * rate) / 100;
//     setGstAmount(gstAmount);
//   };

//   const handleInvoiceAmountChange = (
//     e: React.ChangeEvent<HTMLInputElement>
//   ) => {
//     const amount = parseFloat(e.target.value);
//     setInvoiceAmount(amount);
//     calculateGstAmount(amount, gstRate);
//   };

// return (
// <form>
// <div className="rounded-md w-full bg-gray-50 p-4 md:p-6">

// {
/* Party Name */
/* <div className="mb-4">
          <label htmlFor="party" className="mb-2 block text-sm font-medium">
            Choose party
          </label>
          <div className="relative">
            <select
              id="party"
              name="partyId"
              className="peer block w-full cursor-pointer rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
              defaultValue=""
            >
              <option value="" disabled>
                Select a party
              </option>
              {parties.map((party) => (
                <option key={party.id} value={party.id}>
                  {party.name}
                </option>
              ))}
            </select>
            <UserCircleIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500" />
          </div>
        </div>

        GST Number 
        <div className="mb-4">
          <label htmlFor="gstNumber" className="mb-2 block text-sm font-medium">
            GST Number
          </label>
          <input
            id="gstNumber"
            name="gstNumber"
            type="text"
            placeholder="GST Number"
            className="block w-full rounded-md border border-gray-200 py-2 pl-4 text-sm outline-2 placeholder:text-gray-500"
          />
        </div>

       Interstate or Intrastate 
        <fieldset className="mb-4">
          <legend className="mb-2 block text-sm font-medium">
            Transaction Type
          </legend>
          <div className="flex gap-4">
            <div className="flex items-center">
              <input
                id="intrastate"
                name="gstType"
                type="radio"
                value="intrastate"
                checked={gstType === "intrastate"}
                onChange={(e) => setGstType(e.target.value)}
                className="h-4 w-4 cursor-pointer border-gray-300 bg-gray-100 text-gray-600 focus:ring-2"
              />
              <label
                htmlFor="intrastate"
                className="ml-2 cursor-pointer text-sm font-medium text-gray-600"
              >
                Intrastate (CGST + SGST)
              </label>
            </div>
            <div className="flex items-center">
              <input
                id="interstate"
                name="gstType"
                type="radio"
                value="interstate"
                checked={gstType === "interstate"}
                onChange={(e) => setGstType(e.target.value)}
                className="h-4 w-4 cursor-pointer border-gray-300 bg-gray-100 text-gray-600 focus:ring-2"
              />
              <label
                htmlFor="interstate"
                className="ml-2 cursor-pointer text-sm font-medium text-gray-600"
              >
                Interstate (IGST)
              </label>
            </div>
          </div>
        </fieldset>

         Item Name and HSN Code 
        <div className="mb-4">
          <label htmlFor="item" className="mb-2 block text-sm font-medium">
            Item Name
          </label>
          <div className="relative">
            <select
              id="item"
              name="itemName"
              className="peer block w-full cursor-pointer rounded-md border border-gray-200 py-2 pl-4 text-sm outline-2 placeholder:text-gray-500"
              value={selectedItem}
              onChange={handleItemChange}
            >
              <option value="" disabled>
                Select an item
              </option>
              {items.map((item) => (
                <option key={item.hsnCode} value={item.name}>
                  {item.name}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className="mb-4">
          <label htmlFor="hsnCode" className="mb-2 block text-sm font-medium">
            HSN Code
          </label>
          <input
            id="hsnCode"
            name="hsnCode"
            type="text"
            value={hsnCode}
            readOnly
            className="block w-full rounded-md border border-gray-200 py-2 pl-4 text-sm outline-2 placeholder:text-gray-500"
          />
        </div>

         Invoice Amount 
        <div className="mb-4">
          <label htmlFor="amount" className="mb-2 block text-sm font-medium">
            Invoice Amount
          </label>
          <div className="relative mt-2 rounded-md">
            <div className="relative">
              <input
                id="amount"
                name="amount"
                type="number"
                step="0.01"
                placeholder="Enter amount"
                value={invoiceAmount}
                onChange={handleInvoiceAmountChange}
                className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
              />
              <CurrencyRupeeIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
            </div>
          </div>
        </div>

        GST Rate and Amount 
        <div className="mb-4">
          <label htmlFor="gstRate" className="mb-2 block text-sm font-medium">
            GST Rate (%)
          </label>
          <input
            id="gstRate"
            name="gstRate"
            type="number"
            step="0.01"
            placeholder="Enter GST Rate"
            value={gstRate}
            onChange={handleGstRateChange}
            className="block w-full rounded-md border border-gray-200 py-2 pl-4 text-sm outline-2 placeholder:text-gray-500"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="gstAmount" className="mb-2 block text-sm font-medium">
            GST Amount
          </label>
          <input
            id="gstAmount"
            name="gstAmount"
            type="number"
            value={gstAmount}
            readOnly
            className="block w-full rounded-md border border-gray-200 py-2 pl-4 text-sm outline-2 placeholder:text-gray-500"
          />
        </div>

        GST Breakdown 
        {gstType === "intrastate" && (
          <fieldset className="mb-4">
            <legend className="mb-2 block text-sm font-medium">
              GST Breakdown
            </legend>
            <div className="grid gap-4 md:grid-cols-2">
              <div>
                <label
                  htmlFor="cgst"
                  className="mb-2 block text-sm font-medium"
                >
                  CGST Amount
                </label>
                <input
                  id="cgst"
                  name="cgst"
                  type="number"
                  readOnly
                  value={gstAmount / 2}
                  className="block w-full rounded-md border border-gray-200 py-2 pl-4 text-sm outline-2 placeholder:text-gray-500"
                />
              </div>
              <div>
                <label
                  htmlFor="sgst"
                  className="mb-2 block text-sm font-medium"
                >
                  SGST Amount
                </label>
                <input
                  id="sgst"
                  name="sgst"
                  type="number"
                  readOnly
                  value={gstAmount / 2}
                  className="block w-full rounded-md border border-gray-200 py-2 pl-4 text-sm outline-2 placeholder:text-gray-500"
                />
              </div>
            </div>
          </fieldset>
        )}

        {gstType === "interstate" && (
          <div className="mb-4">
            <label htmlFor="igst" className="mb-2 block text-sm font-medium">
              IGST Amount
            </label>
            <input
              id="igst"
              name="igst"
              type="number"
              readOnly
              value={gstAmount}
              className="block w-full rounded-md border border-gray-200 py-2 pl-4 text-sm outline-2 placeholder:text-gray-500"
            />
          </div>
        )}

        Add More Item Button
        <Button
          className="mb-4"
          onClick={() => {
            setSelectedItem("");
            setHsnCode("");
            setInvoiceAmount(0);
            setGstAmount(0);
          }}
        >
          Add More Item
        </Button>

         Save Button
        <Button type="submit">Save</Button> */
//     }
//     </div>
//     </form>
//   );
// }
