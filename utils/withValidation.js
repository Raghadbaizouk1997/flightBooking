import React from "react";

const withValidation = (Component, validationConfig) => {
  return class WithValidation extends React.Component {
    state = {
      values: {},
      errors: [],
    };

    handleChange = (fieldName, value) => {
      this.setState((prevState) => ({
        values: {
          ...prevState.values,
          [fieldName]: value,
        },
        errors: prevState.errors.filter(
          (error) => error.fieldName !== fieldName
        ),
      }));
    };


    validate = () => {
      const { values } = this.state;
      const errors = [];

      for (const fieldName in validationConfig) {
        const validationRules = validationConfig[fieldName];

        if (Array.isArray(validationRules)) {
          for (const rule of validationRules) {
            const { validationRule, error } = rule;
            const value = values[fieldName];

            if (!validationRule(value)) {
              errors.push({ fieldName, error });
            }
          }
        } else {
          const { validationRule, error } = validationRules;
          const value = values[fieldName];

          if (!validationRule(value)) {
            errors.push({ fieldName, error });
          }
        }
      }

      this.setState({ errors });

      return errors.length === 0;
    };

    render() {
      const { values, errors } = this.state;

      return (
        <Component
          {...this.props}
          values={values}
          errors={errors}
          handleChange={this.handleChange}
          validate={this.validate}
        />
      );
    }
  };
};

export default withValidation;
