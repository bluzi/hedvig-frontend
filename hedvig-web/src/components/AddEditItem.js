import React from "react";
import { Link } from "react-router-dom";
import { Placeholder } from "./Styles";

const AddEditItem = () => (
  <Placeholder>
    Add / Edit Item
    <Link to="/claim">Claim</Link>
  </Placeholder>
);

export default AddEditItem;
