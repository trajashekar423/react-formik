import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS

const UserDetailsForm = () => {
  // Validation schema using Yup
  const validationSchema = Yup.object({
    firstName: Yup.string()
      .required('First Name is required')
      .min(2, 'First Name must be at least 2 characters'),
    lastName: Yup.string()
      .required('Last Name is required')
      .min(2, 'Last Name must be at least 2 characters'),
    email: Yup.string()
      .email('Invalid email address')
      .required('Email is required'),
    phone: Yup.string()
      .matches(/^\d{10}$/, 'Phone number must be 10 digits')
      .required('Phone number is required'),
    address: Yup.string().required('Address is required'),
  });

  // Initial form values
  const initialValues = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
  };

  // Form submission handler
  const handleSubmit = (values, { resetForm }) => {
    console.log('Form data', values);
    alert('Form submitted successfully!');
    resetForm();
  };

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">User Details Form</h1>
      <div className="row justify-content-center">
        <div className="col-md-6">
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            {({ isSubmitting }) => (
              <Form className="border p-4 rounded shadow-sm bg-light">
                <div className="mb-3">
                  <label htmlFor="firstName" className="form-label">
                    First Name:
                  </label>
                  <Field
                    type="text"
                    id="firstName"
                    name="firstName"
                    className="form-control"
                  />
                  <ErrorMessage
                    name="firstName"
                    component="div"
                    className="text-danger"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="lastName" className="form-label">
                    Last Name:
                  </label>
                  <Field
                    type="text"
                    id="lastName"
                    name="lastName"
                    className="form-control"
                  />
                  <ErrorMessage
                    name="lastName"
                    component="div"
                    className="text-danger"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">
                    Email:
                  </label>
                  <Field
                    type="email"
                    id="email"
                    name="email"
                    className="form-control"
                  />
                  <ErrorMessage
                    name="email"
                    component="div"
                    className="text-danger"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="phone" className="form-label">
                    Phone:
                  </label>
                  <Field
                    type="text"
                    id="phone"
                    name="phone"
                    className="form-control"
                  />
                  <ErrorMessage
                    name="phone"
                    component="div"
                    className="text-danger"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="address" className="form-label">
                    Address:
                  </label>
                  <Field
                    as="textarea"
                    id="address"
                    name="address"
                    className="form-control"
                  />
                  <ErrorMessage
                    name="address"
                    component="div"
                    className="text-danger"
                  />
                </div>
                <div className="text-center">
                  <button
                    type="submit"
                    className="btn btn-primary w-100"
                    disabled={isSubmitting}
                  >
                    Submit
                  </button>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default UserDetailsForm;
