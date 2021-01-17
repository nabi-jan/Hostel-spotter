import React, { useState } from "react";
import axios from "axios";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { currentUser } from "../../../utils/index";
import DataTable from "react-data-table-component";
import {
  fetchCategory,
  deleteCategory,
} from "../../../Redux/actions/categoryAction";
const columns = [
  {
    name: "Name",
    selector: "name",
    sortable: true,
  },
];
const Category = (props) => {
  const { _id } = currentUser();
  useState(() => {
    props.fetchCategory(_id);
  }, []);
  const handleDelete = async (cat) => {
    try {
      await axios.delete("http://localhost:4000/api/category/" + cat._id);
      window.location = "/category";
    } catch (ex) {
      if (ex.response && ex.response.status === 400) {
      }
    }
  };
  return (
    <React.Fragment>
      <div className="container">
        {props.category.data && (
          <>
            <DataTable
              title="categories"
              columns={columns}
              data={props.category.data}
            />
          </>
        )}
      </div>
    </React.Fragment>
  );
};
const mapStateToprops = (state) => ({
  auth: state.auth,
  category: state.category,
});
export default connect(mapStateToprops, { fetchCategory, deleteCategory })(
  Category
);
