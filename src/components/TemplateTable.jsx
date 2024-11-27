import React from "react";

// Define the table columns and the data
const columns = [
  { header: "Template Name", accessor: "name" },
  { header: "Category", accessor: "category" },
  { header: "Language", accessor: "language" },
  { header: "Status", accessor: "status" },
  { header: "Messages Sent", accessor: "messagesSent" },
  { header: "Messages Opened", accessor: "messagesOpened" },
  { header: "Top Block Reason", accessor: "topBlockReason" },
  { header: "Last Edited", accessor: "lastEdited" },
];

const getStatusBadgeColor = (status) => {
  switch (status) {
    case "Active - Quality pending":
      return " p-1 rounded-full text-[10px] bg-green-200 text-green-800";
    case "Rejected":
      return "p-1 rounded-full text-[10px]  bg-red-200 text-red-800";
    default:
      return "p-1 rounded-full text-[10px] bg-gray-200 text-gray-800";
  }
};

function TemplateTable({ data }) {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white shadow rounded-lg">
        <thead className="bg-gray-50">
          <tr className="h-[50px]">
            {columns.map((col, index) => (
              <th
                key={index}
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b border-gray-200"
              >
                {col.header}
                <span className=" ml-1">&#9662;</span>
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="bg-white">
          {data.map((row, index) => (
            <tr key={index} className=" border border-b h-">
              {columns.map((col, colIndex) => (
                <td
                  key={colIndex}
                  className={`px-6 py-6 whitespace-nowrap text-sm font-medium text-gray-900  cursor-pointer `}
                >
                  <span
                    className={`  whitespace-nowrap text-sm font-medium text-gray-900 border-gray-200 cursor-pointer ${
                      col.accessor === "status"
                        ? getStatusBadgeColor(row[col.accessor])
                        : ""
                    }`}
                  >
                    {row[col.accessor]}
                  </span>
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TemplateTable;
