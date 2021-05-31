import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import "./ProductList.css";
import UserListItem from '../UserListItem';



const UserList = ({users}) => 
users.map(user =>
    <UserListItem key={`user-${user.id}`} user ={user} />
    );

export default UserList;