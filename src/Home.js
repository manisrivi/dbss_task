import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { MdModeEdit } from "react-icons/md";
import { AiFillDelete } from "react-icons/ai";

export default function Home() {
  // Navigate
  const navigate = useNavigate("");

  // get users
  const [users, setUsers] = useState([]);

  const getUsers = () => {
    const user = localStorage.getItem("user");
    setUsers(JSON.parse(user));
  };

  // delete user
  const handleDelete = (index) => {
    const user_list = users.filter((ele, del_index) => {
      if (index !== del_index) {
        return ele;
      }
    });
    setUsers(user_list);
    localStorage.setItem("user", JSON.stringify(user_list));
  };

  // edit user
  const handleEdit = (index) => {
    localStorage.setItem("editIndex", index);
    navigate("/editUser/" + index);
  };

  // useEffect
  useEffect(() => {
    getUsers();
  }, []);

  return (
    <div className="container mt-5">
      <div>
        <button
          className="btn btn-outline-success"
          onClick={() => navigate("/adduser")}
        >
          Add User
        </button>
      </div>

      {users.length > 0 ? (
        <div className="table-responsive mt-3">
          <table className="table">
            <thead className="table-primary">
              <tr>
                <th>SI.NO</th>
                <th>Name</th>
                <th>D.O.B</th>
                <th>Gender</th>
                <th>Role</th>
                <th>Skill</th>
                <th>Other Skills</th>
                <th>Address</th>
                <th>Comments</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {users?.map((ele, index) => {
                return (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{ele.name}</td>
                    <td>{ele.dob}</td>
                    <td>{ele.gender}</td>
                    <td>{ele.role}</td>
                    <td>{`${ele.skill},`}</td>
                    <td>{ele.otherSkills}</td>
                    <td>{ele.address}</td>
                    <td>{ele.comments}</td>
                    <td className="">
                      <button
                        className="btn text-warning"
                        onClick={() => handleEdit(index)}
                      >
                        <MdModeEdit />
                      </button>
                      <button
                        className="btn text-danger"
                        onClick={() => handleDelete(index)}
                      >
                        <AiFillDelete />
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      ) : (
        <div className="text-center">
          <h1 className="text-secondary">No Data</h1>
          <img
            className="w-50"
            src="https://cdn.dribbble.com/users/1753953/screenshots/3818675/animasi-emptystate.gif"
            alt=""
          />
        </div>
      )}
    </div>
  );
}
