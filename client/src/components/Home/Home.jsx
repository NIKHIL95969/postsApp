import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import NavBar from './NavBar';
import PostList from './PostList';

function MainContent() {
    return (
        <div className=''>  
            <NavBar />
            <PostList />
        </div>
    );
}

export default MainContent;