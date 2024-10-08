import React, { useEffect } from "react"
import { createRoot } from "react-dom/client"
import { Provider } from "react-redux"
import App from "./App"
import "./index.css"
import store from "./app/store/store"
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import Introduction from "./app/pages/introduction/Introduction"
import Room from "./app/pages/room/Room"
import JoinRoom from "./app/pages/join-room/JoinRoom"

if (!window.RTCPeerConnection || !window.crypto || !window.crypto.getRandomValues) {
  console.error("Your browser does not support WebRTC or secure random number generation.");
}else{
  console.log("Browser is working fine......")
}


const router = createBrowserRouter([
  {
    path: "/",
    element: <Introduction/>
  },
  {
    path: "/room",
    element: <Room/>
  },
  {
    path: "/join-room",
    element: <JoinRoom/>
  },
]);

const container = document.getElementById("root")

if (container) {
  const root = createRoot(container)

  root.render(
      <Provider store={store}>
        <RouterProvider router={router}/>
      </Provider>
  )
} else {
  throw new Error(
    "Root element with ID 'root' was not found in the document. Ensure there is a corresponding HTML element with the ID 'root' in your HTML file.",
  )
}
