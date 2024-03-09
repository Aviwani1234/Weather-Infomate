import React from "react";

function CustomDate() {
  let d = new Date();
  let dd = d.getDate();
  let mm = d.getMonth()+1;
  let yyyy = d.getFullYear();

  if (dd < "10") {
    dd = "0" + dd;
  }
  if (mm < "10") {
    mm = "0" + mm;
  }

  let fullDate = dd + "/" + mm + "/" + yyyy;

  return <h3>{fullDate}</h3>;
}

export default CustomDate;
