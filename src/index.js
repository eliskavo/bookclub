import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './Pages/App';
import reportWebVitals from './reportWebVitals';
import {Members} from './Pages/Members';
import {RecentBookDetail} from './Pages/RecentBookDetail';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { BooksList } from './Pages/BooksList';
import { MemberDetail } from './Pages/MemberDetail';
import { JoinBukKlab } from './Pages/JoinBukKlab';


const router = createBrowserRouter([
  { path: "/", element: <App /> },
  { path: "/bookslist", element: <BooksList /> },
  { path: "/recentbook", element: <RecentBookDetail /> },
  { path: "/members", element: <Members /> },
  { path: "/members/:id", element: <MemberDetail /> },
  { path: "/join", element: <JoinBukKlab /> },
  
]);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
