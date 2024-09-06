import "./TaskCard.css";

const TaskCard = (props) => {
  return (
    <div className="py-2 px-4 border-2 rounded-md my-2">
      <h2 className="text-xl font-bold pb-2">{props.title}</h2>
      {props.ddate ? (
        <p>Due on: {props.ddate}</p>
      ) : (
        <p>Completed on: {props.cdate}</p>
      )}
      <p>Assignee: {props.name}</p>
    </div>
  );
};

export default TaskCard;
