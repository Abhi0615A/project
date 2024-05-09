import { IEmployee } from "./Employee.type";
import "./EmployeeModal.style.css";

type Props = {
  onClose: () => void;
  data: IEmployee;
};

const EmployeeModal = (props: Props) => {
  const { onClose, data } = props;
  return (
    <div id="myModal" className="modal">
      <div className="modal-content">
        <span className="close" onClick={onClose}>
          &times;
        </span>
        <div>
          <h3>Employee Data</h3>
          <div>
            <div>
              <label>Name : {data.firstname}</label>
            </div>
            <div>
              <label>MobileNum : {data.mobileNum}</label>
            </div>
            <div>
              <label>Email : {data.email}</label>
            </div>
            <div>
              <label>Gender : {data.gender}</label>
            </div>
            <div>
              <label>Designation : {data.designation}</label>
            </div>
            <div>
              <label>Course : {data.course}</label>
            </div>
            <div>
              <label>Image :i<img src= {data.image}/></label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmployeeModal;
