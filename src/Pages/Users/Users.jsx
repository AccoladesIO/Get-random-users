import React from 'react'
import { useEffect, useState } from 'react'
// import axios from 'axios'
import './User.css'
import UserData from './UserData'
import Loading from '../../Loading'
import Pagination from './Pagination'

const User = () => {
  const [loading, setLoading] = useState(true)
  const [data, setData] = useState([])
  const [currentPage, setCurrentPage] = useState(1)
  const [postPerPage, setPostPerPage] = useState(8)

  const url = 'https://randomuser.me/api/?results=80';

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

  // just give me data in 8 sets abeg
  const currentPost = data.slice(firstPostIndex - lastPostIndex)

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
      />
      <Pagination
        totalPost={data.length}
        postPerPage={postPerPage}
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
      />
    </>
  )
}

export default User