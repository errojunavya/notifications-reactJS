const Notification = (props) => {
  //  Write your code here.
  const { name, notification } = props;
  return <p className={name}>{notification}</p>;
};

const element = (
  //  Write your code here.
  <div className="bg-container">
    <h1 className="heading">Notifications</h1>
    <div className="card-container">
      <div className="card notice1">
        <img src="https://assets.ccbp.in/frontend/react-js/primary-icon-img.png" />
        <Notification notification="Information Message" />
      </div>
      <div className="card notice2">
        <img src="https://assets.ccbp.in/frontend/react-js/success-icon-img.png" />
        <Notification notification="Success Message" />
      </div>
      <div className="card notice3">
        <img src="https://assets.ccbp.in/frontend/react-js/warning-icon-img.png" />
        <Notification notification="Warning Message" />
      </div>
      <div className="card notice4">
        <img src="https://assets.ccbp.in/frontend/react-js/danger-icon-img.png" />
        <Notification notification="Error Message" />
      </div>
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
