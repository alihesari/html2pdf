import React from "react";

export const handleFormChange = (fieldName, handler) => {
  switch (event.target.type) {
    case "checkbox":
      return handleBooleanChange(fieldName, handler);

    case "text":
    case "password":
      return handleStringChange(fieldName, handler);

    case "number":
      return handleNumberChange(fieldName, handler);
      
    default:
      return handleStringChange(fieldName, handler);
      break;
  }
};

/** Event handler that exposes the target element's value as a boolean. */
export const handleBooleanChange = (fieldName, handler) => {
  return handler(fieldName, event.target.checked);
};

/** Event handler that exposes the target element's value as a string. */
export const handleStringChange = (fieldName, handler) => {
  return handler(fieldName, event.target.value);
};

/** Event handler that exposes the target element's value as a number. */
export const handleNumberChange = (fieldName, handler) => {
  return handleStringChange(value => handler(+value));
};