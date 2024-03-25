import React, { useRef } from "react";
import Input from "./Input";
import Model from "./Model";

const NewProject = ({ onAdd, onCancel }) => {
  const modal = useRef();

  const title = useRef();
  const description = useRef();
  const dueDate = useRef();

  const handleSave = () => {
    const enteredTitle = title.current.value;
    const enteredDescription = description.current.value;
    const enterdDueDate = dueDate.current.value;

    //validate
    if (
      enteredTitle.trim() === "" ||
      enteredDescription.trim() === "" ||
      enterdDueDate.trim() === ""
    ) {
      modal.current.open();
      return;
    }

    onAdd({
      title: enteredTitle,
      description: enteredDescription,
      dueDate: enterdDueDate,
    });
  };

  return (
    <>
      <Model ref={modal} buttonCaption="Close">
        <h2 className="text-xl font-bold text-stone-700 my-4">Invalid Input</h2>
        <p className="text-stone-600 mb-4">
          Oops ... looks like you forgot to enter a value.
        </p>
        <p className="text-stone-600 mb-4">
          Please make sure you provide a valid value for every input field
        </p>
      </Model>
      <div className="w-[35rem] mt-16">
        <menu>
          <li className="flex items-center justify-end gap-4 my-4">
            <button
              onClick={onCancel}
              className="text-stone-800 hover:text-teal-950"
            >
              Cancel
            </button>
            <button
              onClick={handleSave}
              className="px-4 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950"
            >
              Save
            </button>
          </li>
        </menu>
        <div>
          <Input type="text" ref={title} lable="Title" />
          <Input ref={description} textarea={true} lable="Description" />
          <Input type="date" ref={dueDate} lable="Due Date" />
        </div>
      </div>
    </>
  );
};

export default NewProject;
