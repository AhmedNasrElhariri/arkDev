import React from "react";
import { useHistory } from "react-router-dom";
import DataTable from "react-data-table-component";

const customStyles = {
  rows: {
    style: {
      minHeight: "72px",
      borderLeft: "10px solid blue",
    },
  },
  headCells: {
    style: {
      paddingLeft: "8px",
      paddingRight: "8px",
      fontWeight: "bold",
      fontSize: "30px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
  },
  cells: {
    style: {
      paddingLeft: "8px",
      paddingRight: "8px",
      backgroundColor: "gray",
      color: "#ffffff",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
  },
};

const ListRepos = ({ repos }) => {
  const columns = [
    {
      name: "Repo Name",
      selector: "name",
    },
    {
      name: "Repo Des",
      selector: "description",
    },
    {
      name: "Number Of Stars",
      selector: "stargazers_count",
    },
    {
      name: "Number of Issues",
      selector: "open_issues_count",
    },
    {
      name: "Owner username",
      selector: "html_url",
    },
    {
      name: "Avatar of the owner",
      cell: (row) => (
        <div data-tag="allowRowEvents">
          <img
            style={{
              width: "50px",
              height: "50px",
            }}
            src={row.owner.avatar_url}
          />
        </div>
      ),
    },
  ];
  const history = useHistory();
  return (
    <>
      <DataTable
        data={repos}
        columns={columns}
        pagination={true}
        paginationTotalRows={repos.length}
        paginationPerPage={5}
        paginationRowsPerPageOptions={[5, 10, 15, 20, 25, 30]}
        customStyles={customStyles}
        onRowClicked={(row) => {
          history.push(`/repo/${row.id}?repoId=${row.id}`, row);
        }}
      />
    </>
  );
};

export default ListRepos;
