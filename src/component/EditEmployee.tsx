import { useState } from "react";
import { IEmployee } from "./Employee.type";
import "./EmployeeForm.style.css";

type Props = {
  data: IEmployee;
  onBackBtnClickHnd: () => void;
  onUpdateClickHnd: (data: IEmployee) => void;
};

const EditEmployee = (props: Props) => {
  const { data, onBackBtnClickHnd, onUpdateClickHnd } = props;

  const [firstName, setFirstName] = useState(data.firstname);
  const [MobileNum, setMobileNum] = useState(data.mobileNum);
  const [email, setEmail] = useState(data.email);
  const[gender,setGender]=useState(data.gender);
  const[designation,setDesignation]=useState(data.designation);
  const[course,setCourse]=useState(data.course);
  const[iamge,setIamge]=useState(data.image);

  const onFirstNameChangeHnd = (e: any) => {
    setFirstName(e.target.value);
  };
  const onMobileChangeHnd = (e: any) => {
    setMobileNum(e.target.value);
  };
  const onEmailChangeHnd = (e: any) => {
    setEmail(e.target.value);
  };
  const onGenderChangeHnd = (e: any) => {
    setGender(e.target.value);
  };
  const onDesignationChangeHnd = (e: any) => {
    setDesignation(e.target.value);
  };
  const onCourseChangeHnd = (e: any) => {
    setCourse(e.target.value);
  };
  const onImageChangeHnd = (e: any) => {
    setIamge(e.target.value);
  };

  const onSubmitBtnClickHnd = (e: any) => {
    e.preventDefault();
    // Can add validation here
    const updatedData: IEmployee = {
      id: data.id,
      firstname: firstName,
      mobileNum: MobileNum,
      email: email,
      designation:designation,
      gender:gender,
      course:course,
      image:iamge
    };
    onUpdateClickHnd(updatedData);
    onBackBtnClickHnd();
  };

  return (
    <div className="form-container">
      <div>Add Employee</div>
      <form onSubmit={onSubmitBtnClickHnd}>
        <div>
          <label>First Name : </label>
          <input
            type="text"
            value={firstName}
            onChange={onFirstNameChangeHnd}
          />
        </div>
        <div>
          <label>MobileNum : </label>
          <input type="text" value={MobileNum} onChange={onMobileChangeHnd} />
        </div>
        <div>
          <label>Email : </label>
          <input type="email" value={email} onChange={onEmailChangeHnd} />
        </div>
        <div>
          <label>Gender : </label>
          <input type="text" value={gender} onChange={onGenderChangeHnd} />
        </div>
        <div>
          <label>Designation: </label>
          <input type="text" value={designation} onChange={onDesignationChangeHnd} />
        </div>
        <div>
          <label>Course : </label>
          <input type="text" value={course} onChange={onCourseChangeHnd} />
        </div>
        <div>
          <label>Iamge : </label>
          <input type="file" value={iamge} onChange={onImageChangeHnd} />
        </div>
        <div>
          <input type="button" value="Back" onClick={onBackBtnClickHnd} />
          <input type="submit" value="Update Employee" />
        </div>
      </form>
    </div>
  );
};

export default EditEmployee;
