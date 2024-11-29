import React, { createContext, useContext, useState } from "react";

const CategoryMenuProviderContext = createContext();

export const CategoryMenuProvider = ({ children }) => {
  const [menu, setMenu] = useState("human-resources");

  const [motherBaseProps, setMotherBaseProps] = useState({
    color: "orange",
    slug: "default-slug",
    displayTitle: "R&D",
  });

  const handleMenuChange = (arg) => {
    setMenu(arg);
    switch (arg) {
      case "human-resources":
        setMotherBaseProps({
          color: "#00C000",
          slug: "human-resources-slug",
          displayTitle: "Human Resources",
        });
        break;
      case "reasearch-and-devlopment":
        setMotherBaseProps({
          color: "orange",
          slug: "research-and-development-slug",
          displayTitle: "R&D",
        });
        break;
      case "external-operations":
        setMotherBaseProps({
          color: "red",
          slug: "external-ops-slug",
          displayTitle: "External Ops.",
        });
        break;
      default:
        setMotherBaseProps({
          color: "orange",
          slug: "default-slug",
          displayTitle: "R&D",
        });
        break;
    }
  };

  const configs = [
    {
      displayName: "Human Resources",
      slug: "human-resources",
      iconName: "FaRegUser",
      fontFamily: "redensek",
    },
    {
      displayName: "R&D",
      slug: "reasearch-and-devlopment",
      iconName: "FaWrench",
    },
    {
      displayName: "External OPS",
      slug: "external-operations",
      iconName: "FaBoxes",
    },
  ];

  return (
    <CategoryMenuProviderContext.Provider
      value={{ configs, motherBaseProps, menu, setMenu, handleMenuChange }}
    >
      {children}
    </CategoryMenuProviderContext.Provider>
  );
};

export const useCategoryMenu = () => useContext(CategoryMenuProviderContext);
