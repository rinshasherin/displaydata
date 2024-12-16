import React, { useEffect, useState } from 'react'
import { getUser } from './api'

function Dashboard() {

    const [user, setUser] = useState([])

    useEffect(() => {
        getData()
    }, [])

    const getData = async () => {
        const res = await getUser()
        console.log(res)
        if (res.status == 200) {
            setUser(res.data)
        }
    }

    return (
        <>
            <div className='container mt-5'>
                {
                    user?.length > 0 ?
                        <table className='table table-bordered'>
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>Name</th>
                                    <th>Email</th>
                                    <th>Place</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    user?.map((item) => (
                                        <tr>
                                            <td>{item?.id}</td>
                                            <td>{item?.name}</td>
                                            <td>{item?.email}</td>
                                            <td>{item?.address?.street}</td>
                                        </tr>
                                    ))
                                }

                            </tbody>
                        </table>

                        :

                        <h2 className="text-center text-danger">No Datas Available!!</h2>
                }

            </div>
        </>
    )
}

export default Dashboard