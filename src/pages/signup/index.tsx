import { useState } from "react";
import axios from "axios";
import { Button, Card, Form } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";

function index() {
  axios.defaults.baseURL = "http://45.138.158.252:3000";

  const [formData, setFormData] = useState({
    username: "",
    phone: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleFormSubmit = async () => {
    try {
      await axios.post("/auth/register", formData);
      // const response = await axios.post("/auth/register", formData);
      // console.log(response);
      navigate("/signin");
    } catch (error) {
      console.error("Error creating user:", error);
    }
  };

  return (
    <div className="d-flex align-items-center justify-center bg-slate-500 w-screen h-screen">
      <Card className="w-96 h-96 p-12">
        <Form>
          <Form.Group className="mb-3">
            <Form.Label>User Name:</Form.Label>
            <Form.Control
              type="text"
              name="username"
              value={formData.username}
              onChange={handleInputChange}
              autoFocus
              className="bg-secondary-subtle"
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Phone:</Form.Label>
            <Form.Control
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              className="bg-secondary-subtle"
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Password:</Form.Label>
            <Form.Control
              type="password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              className="bg-secondary-subtle"
            />
          </Form.Group>

          <Button
            className="w-full"
            variant="primary"
            onClick={handleFormSubmit}
          >
            Sign Up
          </Button>
        </Form>
        <Link className="mt-3 text-center" to={"/signin"}>
          Sign In
        </Link>
      </Card>
    </div>
  );
}

export default index;
