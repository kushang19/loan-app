// import React from 'react';
// import PropTypes from 'prop-types';

// const CustomForm = ({
//   customClass = '', onSubmit, children,
// }) => (
//   <form className={customClass} onSubmit={onSubmit}>
//     {children}
//   </form>
// );

// CustomForm.propTypes = {
//   customClass: PropTypes.string,
//   onSubmit: PropTypes.func.isRequired,
//   children: PropTypes.node.isRequired,
// };

// CustomForm.defaultProps = {
//   customClass: '',
// };

// export default CustomForm;

import React from "react";

// import { useForm } from "react-hook-form";

const CustomForm = ({ customClass = "", errors, onSubmit, children }) => {
  return (
    <form className={customClass} onSubmit={onSubmit}>
      {children}
    </form>
  );
};

export default CustomForm;