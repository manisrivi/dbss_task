import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useNavigate, useParams } from "react-router-dom";

export default function EditUser() {
  // user Validation schema
  const UserSchema = Yup.object().shape({
    name: Yup.string().required("Required"),
    dob: Yup.string().required("Required"),
    gender: Yup.string().required("Required"),
    role: Yup.string().required("Required"),
    skill: Yup.array("").required("Required"),
    otherSkills: Yup.string(),
    address: Yup.string().required("Required"),
    comments: Yup.string().required("Required"),
  });

  // use params use to get from index
  const { index } = useParams();

  // navigate the page
  const navigate = useNavigate("");

  // get from user data form localStorage
  const user_data_list = localStorage.getItem("user");

  // convert the array
  const user_list = JSON.parse(user_data_list);

  return (
    <div>
      <Formik
        initialValues={{
          // fetch the data
          name: user_list[index].name,
          dob: user_list[index].dob,
          gender: user_list[index].gender,
          role: user_list[index].role,
          skill: user_list[index].skill,
          otherSkills: user_list[index].otherSkills,
          address: user_list[index].address,
          comments: user_list[index].comments,
        }}
        validationSchema={UserSchema}
        onSubmit={(values) => {
          // change the data from localStorage
          const users =
            localStorage.getItem("user") &&
            localStorage.getItem("user").length > 0
              ? JSON.parse(localStorage.getItem("user"))
              : [];
          const _user = users.map((user, userInIndex) => {
            if (userInIndex == localStorage.getItem("editIndex")) {
              return values;
            } else {
              return user;
            }
          });
          localStorage.setItem("user", JSON.stringify(_user));
          navigate("/");
        }}
      >
        {({ errors, touched }) => (
          <div className="container mb-5 p-3">
            <div className="row justify-content-center">
              <Form className="col-lg-5 col-md-6 col-sm-10 d-flex flex-column gap-2 rounded-4 shadow-lg p-5">
                <h4 className="text-primary text-center">EDIT USER</h4>
                <div>
                  <h6>
                    Name <span className="text-danger">*</span>
                  </h6>
                  <Field name="name" className="form-control" />
                  {errors.name && touched.name ? (
                    <div className="text-danger">{errors.name}*</div>
                  ) : null}
                </div>
                <div>
                  <h6>
                    D.O.B <span className="text-danger">*</span>
                  </h6>
                  <Field id="date" name="dob" type="date" className="form-control" />
                  {errors.dob && touched.dob ? (
                    <div className="text-danger">{errors.dob}*</div>
                  ) : null}
                </div>

                <div>
                  <h6>
                    Gender <span className="text-danger">*</span>
                  </h6>
                  <div id="my-radio-group"></div>
                  <div
                    role="group"
                    className="d-flex gap-3"
                    aria-labelledby="my-radio-group"
                  >
                    <label>
                      <Field type="radio" name="gender" value="male" />
                      Male
                    </label>
                    <label>
                      <Field type="radio" name="gender" value="female" />
                      Female
                    </label>
                  </div>
                  {errors.gender && touched.gender ? (
                    <div className="text-danger">{errors.gender}*</div>
                  ) : null}
                </div>
                <div>
                  <h6>
                    Role <span className="text-danger">*</span>
                  </h6>
                  <Field
                    name="role"
                    component="select"
                    className="form-control text-center"
                  >
                    <option hidden selected>
                      {" "}
                      -- Select one --
                    </option>
                    <option value="Front end developer">
                      Front end developer
                    </option>
                    <option value="Back end developer">
                      Back end developer
                    </option>
                    <option value="Devops">Devops</option>
                    <option value="Data Engineer">Data Engineer</option>
                  </Field>
                  {errors.role && touched.role ? (
                    <div className="text-danger">{errors.role}*</div>
                  ) : null}
                </div>

                <div>
                  <h6>
                    Skills <span className="text-danger">*</span>
                  </h6>
                  <div id="checkbox-group"></div>
                  <div
                    role="group"
                    aria-labelledby="checkbox-group"
                    className="d-flex flex-wrap gap-3"
                  >
                    <label>
                      <Field type="checkbox" name="skill" value="React.Js" />
                      React.Js
                    </label>
                    <label>
                      <Field type="checkbox" name="skill" value="Angular" />
                      Angular
                    </label>
                    <label>
                      <Field type="checkbox" name="skill" value="Dot net" />
                      Dot net
                    </label>
                    <label>
                      <Field type="checkbox" name="skill" value="Java" />
                      Java
                    </label>
                    <label>
                      <Field type="checkbox" name="skill" value="Node.Js" />
                      Node.Js
                    </label>
                    <label>
                      <Field type="checkbox" name="skill" value="AWS" />
                      Dot net
                    </label>
                    <label>
                      <Field type="checkbox" name="skill" value="Azure" />
                      Azure
                    </label>
                  </div>
                  {errors.skill && touched.skill ? (
                    <div className="text-danger">{errors.skill}*</div>
                  ) : null}
                </div>

                <div>
                  <h6>
                    Other Skills <span className="text-danger"></span>
                  </h6>
                  <Field
                    name="otherSkills"
                    component="textarea"
                    className="form-control"
                  />
                  {errors.otherSkills && touched.otherSkills ? (
                    <div className="text-danger">{errors.otherSkills}*</div>
                  ) : null}
                </div>

                <div>
                  <h6>
                    Address <span className="text-danger">*</span>
                  </h6>
                  <Field
                    name="address"
                    component="textarea"
                    className="form-control"
                  />
                  {errors.address && touched.address ? (
                    <div className="text-danger">{errors.address}*</div>
                  ) : null}
                </div>

                <div>
                  <h6>
                    Comments <span className="text-danger">*</span>
                  </h6>
                  <Field
                    name="comments"
                    component="textarea"
                    className="form-control"
                  />
                  {errors.comments && touched.comments ? (
                    <div className="text-danger">{errors.comments}*</div>
                  ) : null}
                </div>
                <button
                  type="submit"
                  className="form-control btn btn-outline-warning fw-bold"
                >
                  Update
                </button>
              </Form>
            </div>
          </div>
        )}
      </Formik>
    </div>
  );
}
