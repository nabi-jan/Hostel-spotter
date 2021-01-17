import React, { useState } from "react";
import { connect } from "react-redux";
import { fetchUsers } from "../../../Redux/actions/userAction";
import DataTable from "react-data-table-component";
const columns = [
  {
    name: "Firstname",
    selector: "firstname",
    sortable: true,
  },
  {
    name: "Lastname",
    selector: "lastname",
    sortable: true,
    right: true,
  },
  {
    name: "Email",
    selector: "email",
    sortable: true,
    right: true,
  },
  {
    name: "Phone Number",
    selector: "phone_number",
    sortable: true,
    right: true,
  },
];
const Users = (props) => {
  useState(() => {
    props.fetchUsers();
  }, []);
  return (
    <React.Fragment>
      <div class="container">
        {props.users.data && (
          <>
            <DataTable
              title="Users"
              columns={columns}
              data={props.users.data}
            />
          </>
        )}
      </div>
    </React.Fragment>
  );
};
const mapStateToprops = (state) => ({
  users: state.users,
});
export default connect(mapStateToprops, { fetchUsers })(Users);
