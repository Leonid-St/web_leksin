/* eslint-disable array-callback-return */
import React, { useEffect, useState } from "react";
import Select from 'react-select'
import { Col, Container, Form, Row, Stack } from "react-bootstrap";
import './task2.css'

export const Task2 = () => {
  const [text, setText] = useState('');
  let [words, setWords] = useState('');
  const onChange = (e) => {
    setText(e.target.value);
    setWords((() => {
      let str='';
      e.target.value?.split(' ')
        ?.map((eSpace) => {
          eSpace?.split('.')?.map((eDot) => {eDot?.split(',')?.map((eComma) => 
          {str+=eComma + ' ';})})});return str;})().split(' ').sort((a, b) => a.length - b.length).join(' '))
  }
  useEffect(() => {

  }, [text])
  return (
    <>
      <h1>Task 2</h1>
      <label className="label">Сюда вводить</label>
      <Form.Group className="mb-3 " controlId="exampleForm.ControlTextarea1">
        <Form.Control as="textarea" className="task2 text" rows={3} value={text} onChange={onChange} />
      </Form.Group>
      <label className="label">Отсюда выводить</label>
      <div>
        <textarea className="text" defaultValue={words}></textarea>
      </div>

    </>
  )
}