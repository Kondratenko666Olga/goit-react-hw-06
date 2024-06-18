import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';
import styles from './ContactForm.module.css';

const validationSchema = Yup.object({
    name: Yup.string()
        .min(3, 'Must be at least 3 characters')
        .max(50, 'Must be 50 characters or less')
        .required('Required'),
    number: Yup.string()
        .min(3, 'Must be at least 3 characters')
        .max(50, 'Must be 50 characters or less')
        .required('Required'),
});

const ContactForm = ({ onAdd }) => {
    return (
        <Formik
            initialValues={{ name: '', number: '' }}
            validationSchema={validationSchema}
            onSubmit={(values, { resetForm }) => {
                onAdd({ id: nanoid(), ...values });
                resetForm();
            }}
        >
            <Form className={styles.form}>
                <label htmlFor="name">Name</label>
                <Field name="name" type="text" />
                <ErrorMessage name="name" component="div" className={styles.error} />

                <label htmlFor="number">Number</label>
                <Field name="number" type="text" />
                <ErrorMessage name="number" component="div" className={styles.error} />

                <button type="submit">Add Contact</button>
            </Form>
        </Formik>
    );
};

ContactForm.propTypes = {
    onAdd: PropTypes.func.isRequired,
};

export default ContactForm;
