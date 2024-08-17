import "./App.css";
import { useState, useRef, useEffect } from "react";
import axios from "axios";
function App() {
  const [Image, setImage] = useState("");

  const handlerImage = (e) => {
    setImage(e.target.files[0]);
  };
  const nameref = useRef("");
  const mobref = useRef("");
  const submitForm = async (e) => {
    e.preventDefault();
    if (!nameref.current) {
      alert("Please enter your name");
      nameref.current.focus();
      return;
    }
    if (!mobref.current) {
      alert("Please enter your number");
      mobref.current.focus();
      return;
    }
    if (!Image) {
      alert("Please submit your image");
      return;
    }

    console.log(nameref.current?.value, mobref.current?.value, Image);

    // try {
    //   const formdata = new FormData();
    //   formdata.append("name", user.name);
    //   formdata.append("mobile", user.mobile);
    //   formdata.append("image", user.image);
    //   const res = await axios.post("http://localhost:8080/form", formdata);
    //   console.log(res.data);
    // } catch (err) {
    //   console.error("form not submitted ", err);
    // }
  };

  return (
    <>
      <section className="flex justify-center items-center h-screen bg-gray-100">
        <div className="bg-white p-8 rounded shadow-md w-full max-w-md m-5">
          <h2 className="text-2xl font-bold mb-6 text-center">Sign Up</h2>
          <form>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="username"
              >
                Name
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="username"
                ref={nameref}
                placeholder="Username"
                required
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="email"
              >
                Mobile
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="email"
                ref={mobref}
                type="text"
                placeholder="mobile"
                maxLength={10}
                required
              />
            </div>
            <div className="mb-6">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="password"
              >
                Image
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                id="img"
                type="file"
                name="image"
                onChange={handlerImage}
                required
              />
            </div>
            <div className="flex items-center justify-between">
              <button
                onClick={submitForm}
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="button"
              >
                Sign Up
              </button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}

export default App;
