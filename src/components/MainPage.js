import React, { useEffect } from "react";
import "../App.css";
import StylePage from "./Style";
import iconInfo from '../assets/iconInfo.svg'
import UserIcon from '../assets/userIcon.svg'
const items = [
  { number: "1", title: "🇦🇷 Argentina" },
  { number: "2", title: "🤩 YASS" },
  { number: "3", title: "👩🏼‍💻 Tech Girl" },
  { number: "4", title: "💋 Lipstick & Code" },
  { number: "5", title: "💃🏼 Latina" },
];

const initialDnDState = {
  draggedFrom: null,
  draggedTo: null,
  isDragging: false,
  originalOrder: [],
  updatedOrder: [],
};
const MainPage = () => {
  const [list, setList] = React.useState(items);
  const [dragAndDrop, setDragAndDrop] = React.useState(initialDnDState);

  const onDragStart = (event) => {
    const initialPosition = Number(event.currentTarget.dataset.position);
    setDragAndDrop({
      ...dragAndDrop,
      draggedFrom: initialPosition,
      isDragging: true,
      originalOrder: list,
    });
    event.dataTransfer.setData("text/html", "");
  };
  const onDragOver = (event) => {
    event.preventDefault();
    let newList = dragAndDrop.originalOrder;
    const draggedFrom = dragAndDrop.draggedFrom;
    const draggedTo = Number(event.currentTarget.dataset.position);
    const itemDragged = newList[draggedFrom];
    const remainingItems = newList.filter(
      (item, index) => index !== draggedFrom
    );
    newList = [
      ...remainingItems.slice(0, draggedTo),
      itemDragged,
      ...remainingItems.slice(draggedTo),
    ];
    if (draggedTo !== dragAndDrop.draggedTo) {
      setDragAndDrop({
        ...dragAndDrop,
        updatedOrder: newList,
        draggedTo: draggedTo,
      });
    }
  };

  const onDrop = (event) => {
    setList(dragAndDrop.updatedOrder);
    setDragAndDrop({
      ...dragAndDrop,
      draggedFrom: null,
      draggedTo: null,
      isDragging: false,
    });
  };

  const onDragLeave = () => {
    setDragAndDrop({
      ...dragAndDrop,
      draggedTo: null,
    });
  };

  useEffect(() => {
    console.log("Dragged From: ", dragAndDrop && dragAndDrop.draggedFrom);
    console.log("Dropping Into: ", dragAndDrop && dragAndDrop.draggedTo);
  }, [dragAndDrop]);

  useEffect(() => {
    console.log("List updated!");
  }, [list]);
  return (
    <StylePage >
      <section>
        <ul>
          {list.map((item, index) => {
            return (
              <li
                key={index}
                data-position={index}
                draggable
                onDragStart={onDragStart}
                onDragOver={onDragOver}
                onDrop={onDrop}
                onDragLeave={onDragLeave}
                className={
                  dragAndDrop && dragAndDrop.draggedTo === Number(index)
                    ? "dropArea"
                    : ""
                }
              >
                <div className="listCard">
                <h5>{item.number}</h5>
                  <h5>Отдел маркетинга</h5>
                  <img src={iconInfo} alt="img" />
                  <img src={UserIcon} alt="img" />
                </div>
              </li>
            );
          })}
        </ul>
      </section>
    </StylePage>
  );
};

export default MainPage;
