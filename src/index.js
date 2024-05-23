import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {Members} from './Members';
import {RecentBookDetail} from './RecentBookDetail';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { BooksList } from './BooksList';
import { MemberDetail } from './MemberDetail';


const router = createBrowserRouter([
  { path: "/", element: <App /> },
  { path: "/bookslist", element: <BooksList /> },
  { path: "/recentbook", element: <RecentBookDetail /> },
  { path: "/members", element: <Members /> },
  { path: "/members:id", element: <MemberDetail /> },
  
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
