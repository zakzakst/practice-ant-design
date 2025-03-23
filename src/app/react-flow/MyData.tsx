import { Position, Handle } from "@xyflow/react";
import type { NodeProps, Node, Edge } from "@xyflow/react";
import styles from "./styles.module.css";

export type MyNodeData = {
  type: string;
  name: string;
};

type MyNodeProps = NodeProps<Node<MyNodeData>>;

export const MyNode = (props: MyNodeProps): React.ReactNode => {
  return (
    <>
      <Handle position={Position.Left} type="target" />
      <div className={styles.container}>
        <p className={styles.type}>{props.data.type}</p>
        <p className={styles.name}>{props.data.name}</p>
      </div>
      <Handle position={Position.Right} type="source" />
    </>
  );
};

export const MyNodes: Node<MyNodeData, "my">[] = [
  {
    id: "1",
    type: "my",
    data: {
      type: "ステップ1",
      name: "朝ごはんを食べるんだよ",
    },
    position: { x: 0, y: 0 },
  },
  {
    id: "2",
    type: "my",
    data: {
      type: "ステップ2",
      name: "歯を磨く",
    },
    position: { x: 200, y: 0 },
  },
  {
    id: "3",
    type: "my",
    data: {
      type: "ステップ3",
      name: "着替える",
    },
    position: { x: 200, y: 100 },
  },
];

export const myNodeTypes = {
  my: MyNode,
};

export const MyEdges: Edge[] = [
  {
    id: "e1-2",
    source: "1",
    target: "2",
    style: {
      stroke: "#f00",
      strokeWidth: "5",
    },
  },
  {
    id: "e1-3",
    source: "1",
    target: "3",
    style: {
      stroke: "#00f",
      strokeWidth: "5",
    },
  },
];
