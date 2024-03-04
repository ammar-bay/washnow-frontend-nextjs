import React, { PropsWithChildren, RefAttributes, HTMLAttributes } from "react";

import { TInputType } from "@customTypes/global";
import classes from "./styles.module.scss";

interface IProps
  extends PropsWithChildren,
    RefAttributes<any>,
    HTMLAttributes<HTMLElement> {
  type: TInputType;
  options?: Array<{
    value: string | number;
    label?: string | JSX.Element;
    isDisabled?: boolean;
    recommended?: boolean;
    id?: string;
  }>;
  disabled?: boolean;
  value?: string | number | boolean | string[];
  rows?: number;
  handleChange?: (e: React.FormEvent<HTMLInputElement>) => void;
  placeholder?: string;
  highlightSelectedValue?: boolean;
  maxLength?: number;
  size?: "lg" | "md";
  startIcon?: string;
  endIcon?: string | null;
  checked?: boolean;
  error?: boolean;
  autofocus?: boolean;
  underlined?: boolean;
  recommendedText?: string;
  autoComplete?: string;
  name?: string;
  ref?: React.Ref<any>;
}
/**
 * Input component returns the input UI custom Component corresponding to the INPUT_TYPE provided
 *
 * @param {key of TInputType} type - always required  - should always be provided using the the object TInputType in Types/global
 * @param {string | number | object} value - always required (state handled externally and its value should be passed here)
 * @param {function} onChange - always required - as state for all UI Input components is handled externally
 * @param {boolean}  disabled  - optional
 * @param {number} rows - only needed in case of MultiLineText type
 * @param {string} size - only needed in case of tab selector
 * @param {boolean} error - Error state of the input , used for styling in case of error
 * @param {boolean} underlined - Underlined input
 * @param {Array} options - required only in TabSelector | TextSelector | DropDownSelector.
 * @param {string} startIcon - file path of the icon to be used as startIcon using background property of input.
 * @param {string} endIcon - file path of the icon to be used as endIcon using background property of input.
     EXAMPLE Array Options FOR TabSelector and DropDownSelector: [{value: 1, label: 1},{value: 2, label: 2}]
     EXAMPLE Array  Options FOR TextSelector: [{value: 1},{value: 2}]
 */
/** */

//TODO: should separate each type into its own component with standardized styling
const Input: React.FC<IProps> = ({
  type,
  className = "",
  options = [],
  rows = 4,
  value,
  checked,
  placeholder = "",
  disabled = false,
  children,
  maxLength,
  onChange,
  highlightSelectedValue,
  size = "lg",
  startIcon,
  endIcon,
  error = false,
  autofocus = false,
  underlined = false,
  style,
  recommendedText,
  ref,
  ...other
}) => {
  const inputBuilderProps =
    getInputBuilderProps[type as keyof typeof getInputBuilderProps];
  const { elementType, props, optionType, optionProps } = inputBuilderProps;

  return React.createElement(
    elementType,
    {
      ...props,
      className: `${classes[type]} ${error ? classes.error : ""} ${
        underlined ? classes.underlined : ""
      } ${type === "tabSelector" ? classes[`${size}-tab`] : ""} ${className}`,
      value: value,
      checked,
      placeholder,
      rows,
      onChange,
      maxLength,
      disabled,
      style: {
        ...style,
        backgroundImage: `${startIcon ? `url("${startIcon}")` : "none"} , ${
          endIcon ? `url("${endIcon}")` : "none"
        }`,
        backgroundPosition: "2%,98%",
        backgroundRepeat: "no-repeat,no-repeat",
        paddingRight: endIcon ? "3rem" : "",
        paddingLeft: startIcon ? "3rem" : "",
      },
      //TODO : fix autofocus
      autoFocus: autofocus,
      ref,
      ...other,
    },
    options.length
      ? options?.map(
          ({ value: val, label, isDisabled, recommended, id }, i) => {
            return React.createElement(
              optionType as string,
              {
                ...optionProps,
                key: i,
                id,
                value: val,
                className: `${
                  classes[value === val ? `${type}Selected` : ""]
                } ${
                  highlightSelectedValue && value === val
                    ? classes.highlightSelectedValue
                    : ""
                } ${isDisabled ? classes.disabledOption : ""}`,
                disabled: disabled || isDisabled,
                onChange,
                style: {
                  background: recommended
                    ? `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="90%" height="30"><text x="85%" y="25" style="font: 16px Arial; fill: grey; margin-right:10%;">${recommendedText}</text></svg>')no-repeat;`
                    : "",
                },
                onClick: onChange,
              },
              label
            );
          }
        )
      : children
  );
};

const getInputBuilderProps: { [key in TInputType]: any } = {
  textField: {
    elementType: "input",
    props: { type: "text" },
  },
  email: {
    elementType: "input",
    props: { type: "email" },
  },
  password: {
    elementType: "input",
    props: { type: "password" },
  },
  checkbox: {
    elementType: "input",
    props: { type: "checkbox" },
  },
  switch: {
    // TODO: implement toggle switch later on for now use tab switch
    elementType: "input",
    props: { type: "switch" },
  },
  multiLineText: {
    elementType: "textarea",
  },
  dropDownSelector: {
    elementType: "select",
    optionType: "option",
  },
  tabSelector: {
    elementType: "div",
    optionType: "button",
  },
  textSelector: {
    elementType: "div",
    props: { disabled: true },
    optionType: "input",
    optionProps: { disabled: true, type: "text" },
  },
};

export default Input;
