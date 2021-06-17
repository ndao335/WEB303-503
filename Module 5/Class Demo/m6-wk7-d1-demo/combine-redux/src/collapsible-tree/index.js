import React from "react";
//import { render } from "react-dom";
import Tree from "./Tree";
import data from "./data";

function CollapsibleTree(){
  return <Tree data={data} width={600} height={500} />;
};

export default CollapsibleTree;
