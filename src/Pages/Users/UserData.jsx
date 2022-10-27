import React from "react";
import Pagination from './Pagination'

const UserData = ({ data, postPerPage, setCurrentPage, currentPage,  }) => {
  return (
    <section className="section-user">
      <article className="user-info-wrapper">
        {data.map((users, i) => {
          console.log(users);
          return (
            <div className="user-info" key={i}>
              <div className="user-image">
                <img src={users.picture.medium} alt="" />
              </div>
              <h3 className="heading-alt"> User {i + 1}</h3>
              <h3 className="text">
                Name: {users.name.first} {users.name.last}{" "}
              </h3>
              <h3 className="text">Gender: {users.gender} </h3>
              <h3 className="text">Cell: {users.cell}</h3>
            </div>
          );
        })}
        <Pagination
        totalPost={data.length}
        postPerPage={postPerPage}
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
      />
      </article>
    </section>
  );
};

export default UserData;
