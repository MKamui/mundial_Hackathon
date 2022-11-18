import React from "react";
import Pagination from "react-bootstrap/Pagination";

export default function PaginationT({
  page,
  setPage,
  teamsPerPage,
  input,
  setInput,
}) {
  function nextPage() {
    setInput(input + 1);
    setPage(page + 1);
  }

  function previousPage() {
    setInput(input - 1);
    setPage(page - 1);
  }

  return (
    <Pagination style={{ justifyContent: "center" }}>
      <Pagination.Prev
        disabled={page === 1 || page < 1}
        onClick={previousPage}
      />
      <Pagination.Item>{page}</Pagination.Item>
      <Pagination.Next
        disabled={page > teamsPerPage || page === teamsPerPage}
        onClick={nextPage}
      />
    </Pagination>
  );
}
