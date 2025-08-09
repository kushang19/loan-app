import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";

const CustomButton = ({
  type = "button",
  children,
  onClick,
  bgColor = "bg-blue-600",
  textColor = "text-white",
  border = "",
  padding = "px-4 py-2",
  margin = "",
  rounded = "rounded-md",
  width = "",
  height = "",
  className = "",
  disabled = false,
  icon = null,
  fullWidth = false,
  hover = "",
  title,
  ...rest
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={clsx(
        `flex items-center justify-center gap-2`,
        bgColor,
        textColor,
        border,
        padding,
        margin,
        rounded,
        width,
        height,
        hover,
        {
          "w-full": fullWidth,
          "opacity-50 cursor-not-allowed": disabled,
        },
        className
      )}
      {...rest}
    >
      {icon && <span className="flex items-center">{icon}</span>}
      {title}
    </button>
  );
};

CustomButton.propTypes = {
  type: PropTypes.oneOf(["button", "submit", "reset"]),
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
  bgColor: PropTypes.string,
  textColor: PropTypes.string,
  border: PropTypes.string,
  padding: PropTypes.string,
  margin: PropTypes.string,
  rounded: PropTypes.string,
  width: PropTypes.string,
  height: PropTypes.string,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  icon: PropTypes.node,
  fullWidth: PropTypes.bool,
  hover: PropTypes.string,
  title: PropTypes.string,
};

export default CustomButton;
