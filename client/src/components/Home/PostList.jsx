import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

function PostList() {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [page, setPage] = useState(1);

    const auth = useSelector((state) => state.auth.user);
    const navigate = useNavigate()

    useEffect(() => {
        fetchPosts();
        if(!auth) navigate("/login")
    }, []);

    const fetchPosts = async () => {
        setLoading(true);
        
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/posts');
            if (!response.ok) {
              throw new Error('Failed to fetch posts');
          }
            const data = await response.json();
            setPosts(prevPosts => [...prevPosts, ...data]);
            setPage(prevPage => prevPage + 1);
        } catch (error) {
            console.error('Error fetching posts:', error);
        }
        setLoading(false);
    };

    const handleScroll = () => {
      if (
          window.innerHeight + document.documentElement.scrollTop >= 
          document.documentElement.offsetHeight - 20 && 
          !loading
      ) {
          fetchPosts();
      }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [loading]);

    return (
            <div className="max-w-8xl mx-auto">
                <div className="py-4 lg:px-8 mx-4 lg:mx-8 ">
                    <div className="w-full grid grid-col-4 sm:grid-col-8 md:grid-col-12 lg:grid-col-12">
                    
                    <div className="col-span-4  sm:col-span-8 md:col-span-8 lg:col-span-12 ">
                        <div className="flex flex-col gap-4 lg:flex-row justify-evenly flex-wrap">
                        {posts.map(post => (
                            <div key={post.id  + Math.floor(Math.random()+1)} className="post min-h-96 w-auto sm:max-w-96 flex flex-row  justify-center" >
                            
                            <div class="flex flex-col bg-white border shadow-sm rounded-xl dark:bg-slate-900 dark:border-gray-700 dark:shadow-slate-700/[.7]">
                                <img class="w-full h-auto rounded-t-xl" src="https://images.unsplash.com/photo-1680868543815-b8666dba60f7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2532&q=80" alt="Image Description" />
                                    <div class="p-4 md:p-5">
                                        <h3 class="text-lg font-bold text-gray-800 dark:text-white">
                                        Post {post.id}
                                        </h3>
                                        <p class="mt-1 text-gray-500 dark:text-gray-400">
                                        {post.body}
                                        </p>
                                        <p class="mt-5 text-xs text-gray-500 dark:text-gray-500">
                                        Last updated 5 mins ago
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                        {loading && <div>Loading...</div>}

                        </div>
                    </div>
                
                    </div>
                </div>
            </div>
    );
}

export default PostList;