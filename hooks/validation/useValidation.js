import { useState } from 'react';

const useValidation = (initialState, validationRules) => {
  const [values, setValues] = useState(initialState);
  const [errors, setErrors] = useState({});

  const handleChange = (fieldName, value) => {
    setValues((prevValues) => ({ ...prevValues, [fieldName]: value }));
    setErrors((prevErrors) => ({ ...prevErrors, [fieldName]: null }));
  };

  const validate = () => {
    const newErrors = {};

    for (const fieldName in validationRules) {
      const validationFn = validationRules[fieldName];
      const value = values[fieldName];

      if (!validationFn(value)) {
        newErrors[fieldName] = `Invalid ${fieldName}`;
      }
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  return { values, errors, handleChange, validate };
};

export default useValidation;