import React from 'react'
import { useEffect, useState } from 'react'
// import axios from 'axios'
import './User.css'
import UserData from './UserData'
import Loading from '../../Loading'

const User = () => {
  const [loading, setLoading] = useState(true)
  const [data, setData] = useState([])

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

  if (loading) {
    return (
      <main>
        <Loading />
      </main>
    )
  }

  return (
    <>
      <UserData data={data} />
    </>
  )
}

export default User