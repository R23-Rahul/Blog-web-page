import { Head } from "./comp/Head";
import { Foot } from "./comp/Foot";
import { Blog } from "./comp/Blog";
import { useContext, useEffect } from "react";
import { AppContext } from "./AppContext";
import "./App.css"

export default function App() {

  const {fetchBlogPosts}=useContext(AppContext);
  useEffect(()=>{
    fetchBlogPosts();
  },[]);
  return (
  <div className="w-full h-full flex flex-col gap-y-1 justify-center items-center">

<Head/>
<Blog/>
<Foot/>

  </div>);

}
