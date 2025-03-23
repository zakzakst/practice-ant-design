import {
  Position,
  Handle,
  BaseEdge,
  EdgeLabelRenderer,
  getStraightPath,
  // getBezierPath,
  // getSimpleBezierPath,
} from "@xyflow/react";
import type {
  HandleProps,
  NodeProps,
  Node,
  EdgeProps,
  Edge,
} from "@xyflow/react";
import styles from "./styles.module.css";

// Handle
const MyHandle = (props: HandleProps): React.ReactNode => {
  return (
    <Handle
      {...props}
      style={{
        width: 0,
        height: 0,
        minWidth: 0,
        minHeight: 0,
        border: 0,
        visibility: "hidden",
        cursor: "default",
      }}
      // className={styles.handle}
    />
  );
};

// Node
type MyNodeData = {
  type: string;
  name: string;
  // NOTE: MyHandleにして見えなくなったので、flowはなくても大丈夫になった。ただ、処理のアイデアとして残しておきたいので消していない
  flow?: "start" | "end";
};

type MyNodeProps = NodeProps<Node<MyNodeData>>;

const MyNode = (props: MyNodeProps): React.ReactNode => {
  return (
    <>
      {props.data.flow !== "start" && (
        <MyHandle position={Position.Left} type="target" />
      )}
      <div className={styles.container}>
        <p className={styles.type}>{props.data.type}</p>
        <p className={styles.name}>{props.data.name}</p>
      </div>
      {props.data.flow !== "end" && (
        <MyHandle position={Position.Right} type="source" />
      )}
    </>
  );
};

export const myNodeTypes = {
  my: MyNode,
};

export const MyNodes: Node<MyNodeData>[] = [
  {
    id: "1",
    type: "my",
    data: {
      type: "ステップ1",
      name: "朝ごはんを食べるんだよ",
      flow: "start",
    },
    position: { x: 0, y: 0 },
  },
  {
    id: "2",
    type: "my",
    data: {
      type: "ステップ2",
      name: "歯を磨く",
      flow: "end",
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

// Edge
type MyEdgeData = {
  number: string;
  type: string;
};

type MyEdgeProps = EdgeProps<Edge<MyEdgeData>>;

const MyEdge = (props: MyEdgeProps): React.ReactNode => {
  const { id, sourceX, sourceY, targetX, targetY } = props;
  const [edgePath] = getStraightPath({
    sourceX,
    sourceY,
    targetX,
    targetY,
  });
  const centerX = (sourceX + targetX) / 2;
  const centerY = (sourceY + targetY) / 2;

  return (
    <>
      <BaseEdge
        id={id}
        path={edgePath}
        className={styles.edge}
        data-type={props.data?.type}
      />
      <EdgeLabelRenderer>
        <span
          style={{
            ["--centerX" as string]: `${centerX}px`,
            ["--centerY" as string]: `${centerY}px`,
          }}
          className={styles.number}
          data-type={props.data?.type}
        >
          {props.data?.number}
        </span>
      </EdgeLabelRenderer>
    </>
  );
};

export const myEdgeTypes = {
  my: MyEdge,
};

export const MyEdges: Edge<MyEdgeData, "my">[] = [
  {
    id: "e1-2",
    source: "1",
    target: "2",
    type: "my",
    data: {
      number: "1",
      type: "red",
    },
  },
  {
    id: "e1-3",
    source: "1",
    target: "3",
    type: "my",
    data: {
      number: "20",
      type: "blue",
    },
  },
];
