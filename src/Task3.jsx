/* eslint-disable react-hooks/exhaustive-deps */

import React, { useEffect, useState } from "react";
import { Col, Container, Form, Row } from "react-bootstrap";
export const Task3 = () => {
  const [color, setColor] = useState(' ');
  const [brand, setBrand] = useState(' ');
  const [gearbox, setGearbox] = useState(' ');
  const [Auto, setAuto] = useState({
    brand: '',
    color: '',
    gearbox: '',
    setBrand(brand) { this.brand = brand; },
    getBrand() { return this.brand },
    setColor(color) { this.color = color; },
    getColor() { return this.color },
    setGearbox(gearbox) { this.gearbox = gearbox; },
    getGearbox() { return this.gearbox },
  });
  useEffect(() => {
    (() => {
      setAuto((prev) => {
        Auto?.setBrand(brand); Auto?.setColor(color); Auto?.setGearbox(gearbox);
        return { ...prev, brand: Auto.getBrand(), color: Auto?.getColor(), gearbox: Auto?.getGearbox() }
      });
    })();
  }, [color, brand, gearbox])
  return (
    <>
      <h1>Task 3</h1>
      <h5 style={{ margin: "15px" }}>your (Oject)car</h5>
      <h2 style={{ margin: "15px" }}>{JSON.stringify(Auto)}</h2>
      <Container>
        <Row>
          <Col>
            <Form.Group className="mb-3" style={{ width: "50%", marginLeft: 'auto', marginRight: 'auto' }}>
              <Form.Label className="label" >setBrend:</Form.Label>
              <Form.Control as="textarea" rows={3} value={brand} onChange={(e) => { setBrand(e.target.value) }} />
            </Form.Group>
          </Col>

          <Col>
            <Form.Group className="mb-3" style={{ width: "50%", marginLeft: 'auto', marginRight: 'auto' }}>
              <Form.Label className="label" >setColor:</Form.Label>
              <Form.Control as="textarea" rows={3} value={color} onChange={(e) => { setColor(e.target.value) }} />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group className="mb-3" style={{ width: "50%", marginLeft: 'auto', marginRight: 'auto' }}>
              <Form.Label className="label" >setGearbox:</Form.Label>
              <Form.Control as="textarea" rows={3} value={gearbox} onChange={(e) => { setGearbox(e.target.value) }} />
            </Form.Group>
          </Col>
        </Row>
      </Container>

    </>
  )
}