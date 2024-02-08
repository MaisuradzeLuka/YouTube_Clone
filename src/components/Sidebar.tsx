import { Stack } from "@mui/material";

import { categories } from "../utils/constants";

interface ICategories {
  name: string;
  icon: JSX.Element;
  id: string;
}

interface ISidebar {
  selectedCategory: string;
  setSelectedCategory: React.Dispatch<React.SetStateAction<string>>;
}

const Sidebar = ({ selectedCategory, setSelectedCategory }: ISidebar) => {
  return (
    <Stack
      direction="row"
      sx={{
        overflow: "auto",
        height: { sx: "auto", md: "95%" },
        flexDirection: { md: "column" },
      }}
    >
      {categories.map((category: ICategories) => (
        <button
          key={category.id}
          className="category-btn"
          style={{
            background: category.name === selectedCategory ? "#fc1503" : "",
            color: "#fff",
          }}
          onClick={() => setSelectedCategory(category.name)}
        >
          <span
            style={{
              color: category.name === selectedCategory ? "#fff" : "#fc1503",
              marginRight: "15px",
            }}
          >
            {category.icon}
          </span>
          <span
            style={{
              opacity: category.name === selectedCategory ? "1" : "0.8",
            }}
          >
            {category.name}
          </span>
        </button>
      ))}
    </Stack>
  );
};

export default Sidebar;
