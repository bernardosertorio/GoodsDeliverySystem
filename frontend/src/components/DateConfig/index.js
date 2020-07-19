import React, { useRef, useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import ReactDatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import { useField } from '@unform/core'



export default function DateConfig({ name }) {
  const ref = useRef(null)
  const { fieldName, registerField, defaultValue, error } = useField(name)
  const [selected, setSelected] = useState(defaultValue)

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: ref.current,
      path: 'props.selected',
      clearValue: pickerRef => {
        pickerRef.clear()
      }
    })
  }, [fieldName, registerField])

  useEffect(() => {
    const datePickers = document.getElementsByClassName(
      'react-datepicker__input-container'
    )
    Array.from(datePickers).forEach(el =>
      el.childNodes[0].setAttribute('readOnly', true)
    )
  }, [])

  return (
    <>
      <ReactDatePicker
        name={fieldName}
        selected={selected}
        placeholderText="Delivery Date"
        onChange={date => setSelected(date)}
        ref={ref}
      >
        {' '}
      </ReactDatePicker>
      {error && <span>{error}</span>}
    </>
  )
}

DateConfig.propTypes = {
  name: PropTypes.string.isRequired,
};
