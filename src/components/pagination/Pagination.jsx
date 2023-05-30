import * as React from "react";
import Pagination from "@mui/material/Pagination";
import PaginationItem from "@mui/material/PaginationItem";
import Stack from "@mui/material/Stack";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import classes from "./pagination.module.css";

export default function Paginate(props) {
  return (
    <div className={classes.pagination}>
      <Stack spacing={2} sx={{ marginTop: 3 }}>
        {/* <Pagination
          variant="outlined"
          shape="rounded"
          count={props.pagesCounter}
          page={props.changepage}
          onChange={props.onChange}
          renderItem={(item) => (
            <PaginationItem
              slots={{ previous: ArrowBackIcon, next: ArrowForwardIcon }}
              {...item}
            />
          )}
        /> */}

        <Pagination
          variant="outlined"
          shape="rounded"
          count={props.pagination?.totalPages||"1"}
          page={props.pagination.page}
          // defaultPage={props.changepage}
          onChange={props.onChange}
          renderItem={(item) => (
            <PaginationItem
              slots={{ previous: ArrowBackIcon, next: ArrowForwardIcon }}
              {...item}
            />
          )}
          // renderItem={(item) => {
          //   if (item.type === "previous") {
          //     return (
          //       <PaginationItem
          //         icon={<ArrowBackIcon />}
          //         {...item}
          //       />
          //     );
          //   }
          //   if (item.type === "next") {
          //     return (
          //       <PaginationItem
          //         icon={<ArrowForwardIcon />}
          //         {...item}
          //       />
          //     );
          //   }
          //   return (
          //     <PaginationItem
          //       component="div"
          //       {...item}
          //     />
          //   );}}
        />
      </Stack>
    </div>
  );
}
