import {
  Node,
  Edge,
  // Handle,
  // Position,
  // NodeProps,
} from "@xyflow/react";

// type TestNode = Node<{ id: number }, 'number'>

// export const TestNodeType = ({id}: NodeProps<TestNode>) => {
//   return <div>A special number: {data.number}</div>
// }

export const Nodes: Node[] = [
  { id: "1", position: { x: 0, y: 0 }, data: { label: "1" } },
  { id: "2", position: { x: 0, y: 100 }, data: { label: "2" } },
  { id: "3", position: { x: 200, y: 100 }, data: { label: "3" } },
  { id: "4", position: { x: 200, y: 0 }, data: { label: "4" } },
];

export const Edges: Edge[] = [
  {
    id: "e1-2",
    source: "1",
    target: "2",
    // animated: true,
    style: {
      // color: "#f00",
      // borderColor: "#f00",
      // fill: "#f00",
      // backgroundColor: "#f00",
      stroke: "#f00",
      strokeWidth: "5",
    },
  },
  {
    id: "e1-3",
    source: "1",
    target: "3",
    style: {
      stroke: "#f00",
      strokeWidth: "5",
    },
  },
  {
    id: "e1-4",
    source: "1",
    target: "4",
    style: {
      stroke: "#f00",
      strokeWidth: "5",
    },
  },
];
