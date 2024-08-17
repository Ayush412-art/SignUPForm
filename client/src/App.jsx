
import './App.css'
import {useState ,useRef, useEffect} from 'react';
import axios from 'axios'
function App() {
  
  const [user , setuser] = useState(
{
  name : "",
  mobile : "",
  image : ""
}
  )
 const [Image , setImage] = useState("")

} 

const handlerMobile = (e) => {
 
  setMobile(e.target.value)
  setuser({...user , 'mobile' : e.target.value})


}
const handlerImage = (e) =>{
  setImage(e.target.filename)
  setuser({...user , 'image' : (e.target.files[0])})
}
const nameref = useRef("")
const mobref = useRef("")
const submitForm = async(e) =>{
  

    e.preventDefault()
    const {name , mobile, image} = user;
    if(!name){
      alert("Please enter your name")
      nameref.current.focus();
      return
    }
      else if(!mobile) {
        alert("Please enter your number")
        mobref.current.focus();
        return
      }
       else if(!image){ alert("Please submit your image")
        return
       }
        else{
          try{

            const formdata = new FormData()
            formdata.append("name" , user.name)
            formdata.append("mobile" , user.mobile)
            formdata.append('image' , user.image)
            const res = await axios.post("http://localhost:8080/form" , formdata)
            console.log(res.data);
          }
      
          catch(err){
            console.error("form not submitted " , err )
          }
    }
  }
useEffect(()=>{
console.log(nameref.current,mobref.current);

},[nameref.current,mobref.current])

  return (
    <>
    <section className="flex justify-center items-center h-screen bg-gray-100">
    
      <div className="bg-white p-8 rounded shadow-md w-full max-w-md m-5">
        <h2 className="text-2xl font-bold mb-6 text-center">Sign Up</h2>
        <form>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
              Name
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="username"
              ref={nameref}
              placeholder="Username"
              value={input}
              onChange={handlerinput}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
              Mobile
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              ref={mobref}
              type="text"
              placeholder="mobile"
              value={Mobile}
             maxLength={10}
              onChange={handlerMobile}
              required
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
              Image
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="img"
              type="file"
              value={Image}
              name='image'
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
  )

export default App
