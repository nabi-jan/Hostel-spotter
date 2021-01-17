import React, { useState } from "react";
import { connect } from "react-redux";
import DataTable from "react-data-table-component";
import { fetchHostelOwners } from "../../../Redux/actions/userAction";
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
const HostelOwner = (props) => {
  useState(() => {
    props.fetchHostelOwners();
  }, [props]);
  return (
    <React.Fragment>
      <div class="container">
        {/* <h2>Hostel Owners</h2> */}
        {props.users.data && (
          <>
            <DataTable
              title="Hostel Owners"
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
export default connect(mapStateToprops, { fetchHostelOwners })(HostelOwner);
