import React, { createContext, useContext, useState } from "react";

const TemplateContext = createContext();

export const TemplateProvider = ({ children }) => {
  const [templates, setTemplates] = useState([
    {
      name: "template_2",
      category: "Authentication",
      language: "English",
      status: "Active - Quality pending",
      messagesSent: "0",
      messagesOpened: "0",
      topBlockReason: "--",
      lastEdited: "May 27, 2024",
    },
    {
      name: "template_3",
      category: "Authentication",
      language: "English",
      status: "Rejected  - Quality pending",
      messagesSent: "0",
      messagesOpened: "0",
      topBlockReason: "--",
      lastEdited: "May 27, 2024",
    },
    {
      name: "template_2",
      category: "Authentication",
      language: "English",
      status: "Active - Quality pending",
      messagesSent: "0",
      messagesOpened: "0",
      topBlockReason: "--",
      lastEdited: "May 27, 2024",
    },
    {
      name: "template_2",
      category: "Authentication",
      language: "English",
      status: "Active - Quality pending",
      messagesSent: "0",
      messagesOpened: "0",
      topBlockReason: "--",
      lastEdited: "May 27, 2024",
    },
    {
      name: "template_2",
      category: "Authentication",
      language: "English",
      status: "Active - Quality pending",
      messagesSent: "0",
      messagesOpened: "0",
      topBlockReason: "--",
      lastEdited: "May 27, 2024",
    },
  ]);

  const addTemplate = (template) => {
    setTemplates((prevTemplates) => [...prevTemplates, template]);
  };

  return (
    <TemplateContext.Provider value={{ templates, addTemplate }}>
      {children}
    </TemplateContext.Provider>
  );
};

export const useTemplates = () => useContext(TemplateContext);
