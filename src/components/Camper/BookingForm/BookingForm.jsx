import { Field, Form, Formik } from "formik";
import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./BookingForm.datepicker.css";
import css from "./BookingForm.module.css";
import Button from "../../Button/Button";

const initialValues = {
  name: "",
  email: "",
  bookingDate: [null, null],
  comment: "",
};

const submitHandler = (values) => {
  console.log(values);
};

const BookingForm = () => {
  const [dateRange, setDateRange] = useState([null, null]);
  const [startDate, endDate] = dateRange;

  return (
    <div className={css.bookingBlock}>
      <div className={css.bookHeader}>
        <h3>Book your campervan now</h3>
        <p>Stay connected! We are always ready to help you.</p>
      </div>
      <Formik initialValues={initialValues} onSubmit={submitHandler}>
        {({ setFieldValue }) => (
          <Form className={css.formContainer}>
            <label className={css.label}>
              <Field
                className={css.input}
                type="text"
                name="name"
                placeholder="Name*"
                required
              />
            </label>
            <label className={css.label}>
              <Field
                className={css.input}
                type="email"
                name="email"
                placeholder="Email*"
                required
              />
            </label>
            <label className={css.label}>
              <DatePicker
                selectsRange
                startDate={startDate}
                endDate={endDate}
                onChange={(update) => {
                  setDateRange(update);
                  setFieldValue("bookingDate", update);
                }}
                placeholderText="Booking date*"
                className={css.input}
                dateFormat="dd/MM/yyyy"
              />
            </label>
            <label className={css.label}>
              <Field
                className={css.input}
                as="textarea"
                name="comment"
                placeholder="Comment"
              />
            </label>
            <Button type="submit">Send</Button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default BookingForm;
