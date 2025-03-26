export const Task = ({ task, onclick }: any) => {
  return (
    <div className="w-[300px] h-[20px] flex flex-row justify-between border-2 solid border-black px-64">
      <p>{task}</p>
      <button onClick={onclick}>Clear</button>
    </div>
  );
};
