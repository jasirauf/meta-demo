import { Button, DatePicker, Input, Select } from "antd";
import React from "react";
import { useNavigate } from "react-router-dom";

const { Option } = Select;

const SearchBarHeader = () => {
  const navigate = useNavigate();

  return (
    <div className="flex items-center justify-between p-4  rounded-[4px] bg-white shadow-md">
      {/* Left Section */}
      <div className="flex items-center gap-4">
        {/* Search Input */}
        <Input
          placeholder="Search"
          className="w-44"
          prefix={<i className="anticon anticon-search" />}
        />

        {/* Category Dropdown */}
        <Select placeholder="Category" className="w-40">
          <Option value="category1">Category 1</Option>
          <Option value="category2">Category 2</Option>
        </Select>

        {/* Language Dropdown */}
        <Select placeholder="Language" className="w-40">
          <Option value="english">English</Option>
          <Option value="spanish">Spanish</Option>
        </Select>

        {/* Multi-select Dropdown */}
        <Select
          placeholder="Options"
          mode="multiple"
          className="w-60"
          defaultValue={["Option 1"]}
          maxTagCount={1}
        >
          <Option value="option1">Option 1</Option>
          <Option value="option2">Option 2</Option>
          <Option value="option3">Option 3</Option>
        </Select>

        <DatePicker placeholder="Last 30 days" className="w-36 mr-2" />
      </div>

      {/* Right Section */}
      <div className="flex items-center gap-4">
        <Button icon={<i className="anticon anticon-setting" />}>
          Namespace
        </Button>

        <Button>Compare</Button>

        {/* Create Template Button */}
        <Button
          className="bg-[#0d8ce0]"
          onClick={() => navigate("/create")}
          type="primary"
        >
          Create Template
        </Button>
      </div>
    </div>
  );
};

export default SearchBarHeader;
