import React, { useEffect, useState } from "react";
import Select from 'react-select'
import { Col, Container, Row, Stack } from "react-bootstrap";
import './task1.css'
export const Task1 = () => {
  const [data, setDate] = useState('');
  const [mouth, setMouth] = useState();
  const [yaer, setYaer] = useState();
  const [day, setDay] = useState();
  const days = (() => {
    let ar = [];
    for (let i = 0; i <= 31; i++) {
      ar.push(i);
    } return ar.map((e, index) => { return { value: index.toString(), label: e > 10 ? e.toString() : '0' + e } });
  })()
  const mouths = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12'].map((e, index) => ({ label: e, value: index }));
  const yaers = (() => {
    let ar = [];
    for (let i = 0; i <= 2023; i++) {
      ar.push(i);
    } return ar.map((e, index) => { return { value: index.toString(), label: e.toString() } });
  })();
  useEffect(() => {
    if ((day !== undefined) && (mouth !== undefined) && (yaer !== undefined)) {
      setDate(`${yaer.label}-${mouth.label}-${day.label}`);
    }
  }, [mouth, yaer, day]);
  return (
    <>
      <div className='task1'>
        <h1>Task 1</h1>
        <input className="data" type="date" value={data}></input>
        <Container className="d-flex flex-column min-vh-70 justify-content-center align-items-center">
          <Stack gap={3} direction="horizontal" className="justify-content-center pt-3">
            <Select
              className='select'
              options={days}
              onChange={setDay}
            />
            <Select
              className='select'
              options={mouths}
              onChange={setMouth}
            />
            <Select
              className='select'
              options={yaers}
              onChange={setYaer}
            />
          </Stack>
        </Container>
        <Row>
          <Col>
          <h5>{day?day.label:''}</h5>
          </Col>
          <Col>
          <h5>{mouth?mouth.label:''}</h5>
          </Col>
          <Col>
          <h5>{yaer?yaer.label:''}</h5>
          </Col>
        </Row>
      </div>

    </>
  )
}