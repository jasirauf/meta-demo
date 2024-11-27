import { Button } from "antd";
import React, { useState } from "react";
import { FaCheckCircle, FaExternalLinkAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useTemplates } from "../context/TemplateContext";

function CreateTemplateForm() {
  const [template, setTemplate] = useState({
    name: "",
    category: "Marketing",
    header: "",
    body: "",
    footer: "",
    type: "Custom",
    message: "",
    imageUrl: "",
    buttonText: "",
    buttonUrl: "",
  });

  const [currentStep, setCurrentStep] = useState(1);

  const { addTemplate } = useTemplates();
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setTemplate((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = () => {
    // e.preventDefault();
    addTemplate(template);
    navigate("/");
  };

  const handleRadioChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const [selectedOption, setSelectedOption] = useState("custom");

  const typeOptions = [
    {
      id: "custom",
      label: "Custom",
      description:
        "Send promotions or announcements to increase awareness and engagement.",
    },
    {
      id: "catalog",
      label: "Catalog",
      description:
        "Send messages about your entire catalog or multiple products from it.",
    },
    {
      id: "flows",
      label: "Flows",
      description:
        "Send a form to capture customer interests, appointment requests, or run surveys.",
    },
    {
      id: "orderDetails",
      label: "Order Details",
      description: "Send messages through which customers can pay you.",
    },
  ];

  const categoryOptions = ["Marketing", "Utility", "Authentication"];

  return (
    <div>
      <div className="container flex-col mt-5 m-auto px-4 py-2    flex justify-center items-center w-screen ">
        <div className="flex   justify-between ">
          <div className=" p-5 overflow-auto">
            <div className="items-start my-4">
              <h1 className="font-bold text-[28px]">Create Template</h1>

              <div className="flex gap-4 mt-4">
                <button
                  className={`font-semibold p-2 ${
                    currentStep === 1 &&
                    " text-blue-500 border bg-gray-200  rounded-md "
                  }`}
                >
                  Set up your template
                </button>
                <button
                  className={`font-semibold p-2 ${
                    currentStep === 2 &&
                    " text-blue-500 border bg-gray-200  rounded-md "
                  }`}
                >
                  Edit template
                </button>
                <button
                  className={`font-semibold p-2 ${
                    currentStep === 3 &&
                    " text-blue-500 border bg-gray-200  rounded-md "
                  }`}
                >
                  Submit Review
                </button>
              </div>
            </div>

            {currentStep === 1 && (
              <div className="bg-white p-4 rounded-lg">
                <h2 className="text-lg font-semibold">Set up your template</h2>
                <p className="text-gray-500  text-sm">
                  Choose the category that best describes your message template.
                  Then select the type of message you want to send.
                </p>
                <div className="flex  justify-between w-full my-4">
                  {categoryOptions.map((option) => (
                    <button
                      key={option}
                      type="button"
                      className={`px-3 py-2 w-1/3  flex justify-center items-center border ${
                        template.category === option
                          ? "bg-gray-300 text-gray-900"
                          : "bg-white text-gray-800"
                      }`}
                      onClick={(e) => {
                        setTemplate((prev) => ({
                          ...prev,
                          category: option,
                        }));
                      }}
                    >
                      {template.category === option && (
                        <FaCheckCircle className="inline mr-2" />
                      )}
                      {option}
                    </button>
                  ))}
                </div>
                <div className="mt-4">
                  <div className="flex flex-wrap flex-col gap-4">
                    {typeOptions.map((option) => (
                      <label
                        key={option.id}
                        className={` ${
                          selectedOption === option.id && "bg-blue-200"
                        } flex  items-center space-x-2 p-2 rounded-md cursor-pointer`}
                      >
                        <input
                          type="radio"
                          name="type"
                          value={option.id}
                          onChange={handleRadioChange}
                          checked={selectedOption === option.id}
                          className={`form-radio flex flex-col h-4 w-4 text-blue-600 ${
                            selectedOption === option.id
                          } && bg-blue-100`}
                        />

                        <div className="flex flex-col">
                          <span className="text-sm font-medium text-gray-700">
                            {option.label}
                          </span>
                          <p className="text-xs text-gray-500">
                            {option.description}
                          </p>
                        </div>
                      </label>
                    ))}
                  </div>
                </div>
              </div>
            )}
            {currentStep === 2 && (
              <div className="h-[500px]">
                <form onSubmit={handleSubmit}>
                  <div className="mt-4">
                    <label className="block text-sm font-medium text-gray-700">
                      Name
                    </label>
                    <textarea
                      name="name"
                      value={template.name}
                      onChange={handleInputChange}
                      className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
                      placeholder="Type your message here..."
                    ></textarea>
                  </div>
                  <div className="mt-4">
                    <label className="block text-sm font-medium text-gray-700">
                      Header
                    </label>
                    <textarea
                      name="header"
                      value={template.header}
                      onChange={handleInputChange}
                      className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
                      placeholder="Type your message here..."
                    ></textarea>
                  </div>
                  <div className="mt-4">
                    <label className="block text-sm font-medium text-gray-700">
                      Body
                    </label>
                    <textarea
                      name="body"
                      value={template.body}
                      onChange={handleInputChange}
                      className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
                      placeholder="Type your message here..."
                    ></textarea>
                  </div>
                  <div className="mt-4">
                    <label className="block text-sm font-medium text-gray-700">
                      Footer
                    </label>
                    <textarea
                      name="footer"
                      value={template.footer}
                      onChange={handleInputChange}
                      className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
                      placeholder="Type your message here..."
                    ></textarea>
                  </div>
                  <div className="mt-4">
                    <label className="block text-sm font-medium text-gray-700">
                      Button Text
                    </label>
                    <input
                      type="text"
                      name="buttonText"
                      value={template.buttonText}
                      onChange={handleInputChange}
                      className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
                      placeholder="Button text"
                    />
                  </div>
                  <div className="mt-4">
                    <label className="block text-sm font-medium text-gray-700">
                      Button URL
                    </label>
                    <input
                      type="text"
                      name="buttonUrl"
                      value={template.buttonUrl}
                      onChange={handleInputChange}
                      className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
                      placeholder="Button URL"
                    />
                  </div>
                  {/* <button
                  type="submit"
                  className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                >
                  Submit Template
                </button> */}
                </form>
              </div>
            )}
          </div>

          <div className=" max-w-[350px] min-w-[350px] p-5 bg-white rounded-md">
            {currentStep === 1 && (
              <div className=" rounded-lg shadow-md  bg-yellow-50 mt-4">
                <h3 className="font-semibold">Template Preview</h3>

                <div className="mb-4 p-2">
                  <img
                    src="https://i.ibb.co/CHTtjQq/istockphoto-174429248-612x612.jpg"
                    alt="Fresh Groceries"
                    className="rounded-lg"
                  />
                </div>
                <p className="text-lg p-4  mb-2">
                  Hey there! Check out our fresh groceries now!
                </p>
                <p className="mb-4 p-4">
                  Use code <span className="font-bold">HEALTH</span> to get an
                  additional 10% off on your entire purchase.
                </p>
                <div className="text-center flex flex-col items-center">
                  <button className="text-blue-500 p-2 w-full border-t border-b font-bold inline-flex items-center justify-center">
                    Shop now
                  </button>
                  <button className="text-blue-500 p-2 w-full border-t border-b font-bold inline-flex items-center justify-center">
                    Copy code
                  </button>
                </div>
              </div>
            )}
            {currentStep === 2 && (
              <div className=" border border-gray-300 rounded-lg">
                <h3 className="font-semibold p-4">Template Preview</h3>
                <div className="bg-orange-50 p-3">
                  <div class="flex mb-2 single-message rounded-tr-lg text-black rounded-bl-lg rounded-br-lg  px-4 py-2 flex-col w-fit bg-white rounded-sl ml-2  ">
                    <div class="rounded py-2 px-3  w-full border-red ">
                      <p class="text-sm text-teal font-semibold">
                        {template.header}
                      </p>
                      <p class="text-sm mt-1">{template.body}</p>
                      <div className=" flex justify-between  w-full">
                        <p class=" text-xs text-grey-dark mt-1">
                          {template.footer}
                        </p>
                        <p class=" text-xs text-grey-dark mt-1">12:45 pm</p>
                      </div>
                    </div>
                    <div className=" border-t-teal-500 border-t text-center w-full p-2 flex justify-center items-center">
                      {template.buttonText && template.buttonUrl && (
                        <a
                          href={template.buttonUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-500 font-semibold w-full hover:text-blue-700 flex justify-center items-center "
                        >
                          <FaExternalLinkAlt className="mr-2" />{" "}
                          {template.buttonText}
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            )}
            {currentStep === 1 && (
              <div className=" mt-2">
                <h6 className="font-medium text-[16px]">dsjsd</h6>
                <p className=" text-sm text-gray-400"> sjsadasdjk</p>
                <h6 className="font-medium text-[16px]">dsjsd</h6>
                <p className=" text-sm text-gray-400"> sjsadasdjk</p>
              </div>
            )}
          </div>
        </div>
        <div className="bg-white  h-fit  mt-5 rounded-md  w-full  p-4 flex justify-between items-center">
          <Button onClick={() => navigate("/")}>Discard</Button>
          <Button
            className="bg-[#0d8ce0]"
            onClick={() => {
              if (currentStep === 2) {
                handleSubmit();
              } else {
                setCurrentStep(currentStep + 1);
              }
            }}
            type="primary"
          >
            {currentStep === 2 ? "Save" : "Next"}
          </Button>
        </div>
      </div>
    </div>
  );
}

export default CreateTemplateForm;
