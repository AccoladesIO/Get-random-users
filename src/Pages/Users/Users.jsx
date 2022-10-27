import React from 'react'
import { useEffect, useState } from 'react'
// import axios from 'axios'
import './User.css'
import UserData from './UserData'
import Loading from '../../Loading'


const User = () => {
  const [loading, setLoading] = useState(true)
  const [data, setData] = useState([])
  const [currentPage, setCurrentPage] = useState(1)
  const [postPerPage, setPostPerPage] = useState(8)

  const url = 'https://randomuser.me/api/?results=80&nat=us';

  const fetchData = async () => {
    // enable loading state while fetching data
    setLoading(true)

    // waiting for response from Api Call
    const response = await fetch(url);
    const result = await response.json();
    console.log(result.results.length);

    // disable loading state once data is fetched
    setLoading(false)
    setData(result.results)
  }

  useEffect(() => {
    fetchData()
  }, [])

  // get first and last post index

  // if the currentPage is 1 and we have 8 post per page then the last index of the post has to 8
  const lastPostIndex = currentPage * postPerPage;

  // well explanatory enough?
  const firstPostIndex = lastPostIndex - postPerPage;

  // 
  const currentPost = data.slice(firstPostIndex, lastPostIndex)
  console.log(currentPost)

  // display loading component when data is been fetched
  if (loading) {
    return (
      <main>
        <Loading />
      </main>
    )
  }

  // 
  return (
    <>
      <UserData
        data={currentPost}
        totalPost={data.length}
        postPerPage={postPerPage}
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
      />
      
    </>
  )
}

export default User