import { Select } from "antd";
import React from "react";
import { useTemplates } from "../context/TemplateContext";
import TemplateTable from "./TemplateTable";
import SearchBarHeader from "./Templates/SearchBarHeader";

const columns = [
  {
    Header: "Template Name",
    accessor: "name",
  },
  {
    Header: "Category",
    accessor: "category",
  },
  {
    Header: "Language",
    accessor: "language",
  },
  {
    Header: "Status",
    accessor: "status",
  },
  {
    Header: "Messages Sent",
    accessor: "messagesSent",
  },
  {
    Header: "Messages Opened",
    accessor: "messagesOpened",
  },
  {
    Header: "Top Block Reason",
    accessor: "topBlockReason",
  },
  {
    Header: "Last Edited",
    accessor: "lastEdited",
  },
];

function TemplateList() {
  const { Option } = Select;

  const { templates } = useTemplates();
  return (
    <div
      className="flex h-screen w-screen"
      style={{
        background:
          "        linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(217,217,228,1) 0%, rgba(255,0,221,0.12230829831932777) 95%) ",
      }}
    >
      <div>
        <div className="flex w-full justify-end">
          <div className=" flex justify-between   py-4 w-full items-end px-6 mt-4">
            <span className="font-bold">Message templates</span>
            <Select placeholder="Direct7" className="w-40">
              <Option value="category1">Direct7</Option>
              <Option value="category2">Aufait</Option>
            </Select>
          </div>
        </div>
        <div className=" flex flex-col px-4">
          <SearchBarHeader />

          <div className="mt-4">
            <TemplateTable columns={columns} data={templates} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default TemplateList;
