import * as React from "react"
import Pagination from "@mui/material/Pagination"
import Stack from "@mui/material/Stack"
import {useTheme} from "../../context/ThemeContext" // Assuming you have a theme context

const CustomPagination = ({spacing, count, onChange}) => {
  const {isDarkMode} = useTheme() // Get the theme mode (dark or light)

  return (
    <div>
      <Stack spacing={spacing}>
        <Pagination
          onChange={onChange}
          count={count}
          sx={{
            ".MuiPaginationItem-root": {
              // Styles for each pagination item (button)
              backgroundColor: isDarkMode ? "#2b3743" : "#ffffff", // Set background based on dark mode
              color: isDarkMode ? "#ffffff" : "#374151", // Set text color based on dark mode
              "&:hover": {
                backgroundColor: isDarkMode ? "#3b454f" : "#f3f4f6", // Set hover background color
              },
            },
            ".MuiPaginationItem-ellipsis": {
              // Styling for ellipsis (if available)
              color: isDarkMode ? "#ffffff" : "#374151", // Set color for ellipsis
            },
            ".MuiPaginationItem-page.Mui-selected": {
              // Styling for selected page
              backgroundColor: isDarkMode ? "#3b82f6" : "#3b82f6", // Highlight selected page with blue color
              color: "#fff", // White text color for selected page
              "&:hover": {
                backgroundColor: isDarkMode ? "#3b82f6" : "#3b82f6", // Maintain blue color on hover
              },
            },
          }}
        />
      </Stack>
    </div>
  )
}

export default CustomPagination
