import React, { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Link from "next/link";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useUpdateStatusMutation } from "@/components/Redux/services/checkout/checkoutAPi";
import { toast } from "react-toastify";

const AllOrdersTable = ({ data, user, loading, columns }) => {
  const [updateStatus] = useUpdateStatusMutation();
  const [status, setStatus] = useState(null);

  const getButtonClass = (status) => {
    const cleanedStatus = status ? status.trim() : "";
    if (cleanedStatus === "pending payment") {
      return "bg-green-400 text-white";
    } else if (cleanedStatus === "rejected") {
      return "bg-red-400 text-white";
    } else if (cleanedStatus === "completed") {
      return "bg-blue-400 text-white";
    } else {
      return "bg-gray-300 text-black"; // Default color
    }
  };

  const handleStatusChange = async (newStatus, itemId) => {
    try {
      const payload = { body: { status: newStatus }, id: itemId }; // Adjusted for correct structure
      const res = await updateStatus(payload);
      toast.success("Status Updated Successfully!");
    } catch (error) {
      console.error("Error updating status:", error);
    }
  };
  

  if (loading) {
    return <p>Loading data...</p>;
  }

  return (
    <div className="bg-white border rounded-md">
      {data.length > 0 ? (
        <Table>
          <TableHeader className="bg-gray-100">
            <TableRow>
              {columns.map((column, idx) => (
                <TableHead key={idx} className="text-black">
                  {column.label}
                </TableHead>
              ))}
              {user && <TableHead className="text-black">User Info</TableHead>}
            </TableRow>
          </TableHeader>
          <TableBody className="text-gray-500">
            {data.map((item, index) => (
              <TableRow key={index}>
                <TableCell>{item._id}</TableCell>
                <TableCell>{item.user.email}</TableCell>
                <TableCell>{item.OrderPhone}</TableCell>
                <TableCell>{item.price}</TableCell>
                <TableCell>{item.district}</TableCell>
                <TableCell>{item.transactionId}</TableCell>
                <TableCell>
                  <DropdownMenu>
                    <DropdownMenuTrigger
                      className={`py-1 px-3 rounded  border-none ${getButtonClass(
                        item.status
                      )}`}
                    >
                      {item.status}
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                      <DropdownMenuItem
                        onClick={() =>
                          handleStatusChange("pending payment", item._id)
                        }
                      >
                        Pending Payment
                      </DropdownMenuItem>
                      <DropdownMenuItem
                        onClick={() =>
                          handleStatusChange("completed", item._id)
                        }
                      >
                        Completed
                      </DropdownMenuItem>
                      <DropdownMenuItem
                        onClick={() => handleStatusChange("rejected", item._id)}
                      >
                        Rejected
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </TableCell>
                <TableCell>
                  <Link href={`/dashboard/order-details/${item.id}`}>
                    <button className="px-2 py-1 text-gray-500 transition border rounded-md">
                      View Details
                    </button>
                  </Link>
                </TableCell>
                {user && (
                  <TableCell>
                    <Link href={`/${dataKey}/user-info/${item.userId}`}>
                      <span className="text-blue-600">{user.name}</span>
                    </Link>
                  </TableCell>
                )}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      ) : (
        <p className="p-4 text-center">No data available.</p>
      )}
    </div>
  );
};

export default AllOrdersTable;
