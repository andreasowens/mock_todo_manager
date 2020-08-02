import React from "react";

// function Contact() {
//   return (
//     <React.Fragment>
//       <h1 style={textStyle}>Contact</h1>
//       <p style={textStyle}>
//         Contact page for version 1.0 of 'Task Manager'. Enjoy these contacts.
//       </p>
//       <button style={contactStyle}>Andrew</button>
//       <button style={contactStyle}>Bernard</button>
//       <button style={contactStyle}>Claire</button>
//       <button style={contactStyle}>Drew</button>
//       <button style={contactStyle}>Elie</button>
//     </React.Fragment>
//   );
// }

const contactList = () => (
  <ul>
    <h1 style={textStyle}>Contact</h1>
    <p style={textStyle}>Contact page for version 1.0 of 'ToDo Manager'.</p>
    {names.map((item) => (
      <li key={item.id} style={contactStyle}>
        <div>
          {item.firstname} {item.lastname} {"|"} {item.email} {"|"} {item.year}
        </div>
      </li>
    ))}
  </ul>
);

const contactStyle = {
  background: "#EF8585",
  color: "#fff",
  border: "none",
  borderBottom: "1px #ccc dotted",
  padding: "5px 15px",
  cursor: "pointer",
  float: "center",
};

const textStyle = {
  color: "#fff",
};

const names = [
  {
    id: "a",
    firstname: "Andrew",
    lastname: "Johnson",
    email: "ajohnson@us.gov",
    year: 2002,
  },
  {
    id: "b",
    firstname: "George",
    lastname: "Washington",
    email: "gwashington@us.gov",
    year: 2005,
  },
  {
    id: "c",
    firstname: "Abraham",
    lastname: "Lincoln",
    email: "alincoln@us.gov",
    year: 2006,
  },
];

export default contactList;
// export default Contact;
