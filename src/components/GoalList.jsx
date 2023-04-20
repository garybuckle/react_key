import React from "react";
import GoalItem from "./GoalItem";
function GoalList(props) {
  return (
    <ul>
      <GoalItem title="Learn React and other Frameworks" />
      <GoalItem title="Design and Code Applications" />
      <GoalItem title="Solve Issues with  Applications" />
    </ul>
  );
}

export default GoalList;
