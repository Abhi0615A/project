import { useState } from "react";
import "./EmployeeForm.style.css";
import { IEmployee } from "./Employee.type";

type Props = {
  onBackBtnClickHnd: () => void;
  onSubmitClickHnd: (data: IEmployee) => void;
};

const AddEmployee = (props: Props) => {
  const [firstName, setFirstName] = useState("");
  const [MobileNum, setMobileNum] = useState(Number);
  const[email,setEmail]=useState("");
  const [gender, setGender] = useState("");
  const[Designation,setDesignation]=useState("");
  const[course,setCourse]=useState("");
  const[Image,setImage]=useState("");

  const { onBackBtnClickHnd, onSubmitClickHnd } = props;

  const onFirstNameChangeHnd = (e: any) => {
    setFirstName(e.target.value);
  };
  const onMobileNumChangeHnd = (e: any) => {
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
    setImage(e.target.value);
  };

  const onSubmitBtnClickHnd = (e: any) => {
    e.preventDefault();
    // Can add validation here
    const data: IEmployee = {
      id: new Date().toJSON().toString(),
      firstname: firstName,
      mobileNum: MobileNum,
      email: email,
      designation:Designation,
      course:course,
      gender:gender,
      image:Image,
    
    };
    onSubmitClickHnd(data);
    onBackBtnClickHnd();
  };
  return (
    <div className="form-container">
      <div>Add Employee</div>
      <form onSubmit={onSubmitBtnClickHnd}>
        <div>
          <label>Name : </label>
          <input
            type="text"
            value={firstName}
            onChange={onFirstNameChangeHnd}
          />
        </div>
        <div>
          <label>Mobile.Num: </label>
          <input type="tel" value={MobileNum} onChange={onMobileNumChangeHnd} />
        </div>
        <div>
          <label>Email : </label>
          <input type="text" value={email} onChange={onEmailChangeHnd} />
        </div>
        <div>
          <label>Designation : </label>
          <input type="text" value={Designation} onChange={onDesignationChangeHnd} />
        </div>
        <div>
          <label>Gender : </label>
          <input type="text" value={gender} onChange={onGenderChangeHnd} />
        </div>
        <div>
          <label>Course : </label>
          <input type="text" value={course} onChange={onCourseChangeHnd} />
        </div>
        <div>
          <label>Image : </label>
          <input type="file" value={Image} onChange={onImageChangeHnd} />
        </div>
        <div>
          <input type="button" value="Back" onClick={onBackBtnClickHnd} />
          <input type="submit" value="Add Employee" />
        </div>
      </form>
    </div>
  );
};

export default AddEmployee;
