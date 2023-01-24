import React from 'react'
import Modal from 'components/Modal/Modal'
import AddUserFormCSS from './AddUserModal.module.scss'
import { useFormik } from 'formik'

interface MyFormValues {
  firstName: string
  lastName: string
}

interface IAddUserModalProps {
  classes?: string
  typesUser?: string
}

const validate = (value: MyFormValues) => {
  const errors: MyFormValues = {} as MyFormValues
  if (value.firstName.length < 2) {
    errors.firstName = 'Обязательное поле'
  }

  return errors
}

const AddUserModal: React.FunctionComponent<IAddUserModalProps> = (props) => {
  const { addUserForm } = AddUserFormCSS

  const formik = useFormik({
    initialValues: { firstName: '', lastName: '' },
    validate,
    onSubmit: (values) => {
      console.log(props.typesUser)
      alert(JSON.stringify(values, null, 2))
    }
  })
  return (
    <Modal>
      <form className={addUserForm} onSubmit={formik.handleSubmit}>
        <label>
          Фамилия
          <input
            id='firstName'
            name='firstName'
            placeholder='full Name'
            type='text'
            onChange={formik.handleChange}
            value={formik.values.firstName}
          />
          <span>{formik.errors.firstName}</span>
        </label>
        <label>
          Имя
          <input
            id='lastName'
            name='lastName'
            placeholder='full Name'
            type='text'
            onChange={formik.handleChange}
            value={formik.values.lastName}
          />
          <span>{formik.errors.lastName}</span>
        </label>

        <button type='submit'>Submit</button>
      </form>
    </Modal>
  )
}

export default AddUserModal
