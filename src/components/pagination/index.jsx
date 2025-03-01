import * as React from "react"
import Pagination from "@mui/material/Pagination"
import Stack from "@mui/material/Stack"

const CustomPagination = ({spacing, count, onChange}) => {
  return (
    <div>
      <Stack spacing={spacing}>
        <Pagination onChange={onChange} count={count} />
      </Stack>
    </div>
  )
}

export default CustomPagination
