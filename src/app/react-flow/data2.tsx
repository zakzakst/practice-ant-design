// https://zenn.dev/moneyforward/articles/d7528327f63ed4
import type { FC } from "react";
import { Position, Handle, BaseEdge, getSmoothStepPath } from "@xyflow/react";
import type { NodeProps, Node, EdgeProps, Edge, HandleProps } from "@xyflow/react";

// Node
export const CustomHandle: FC<HandleProps> = (props) => {
  return (
    <Handle
      {...props}
      style={{
        width: 1,
        height: 1,
        minWidth: 1,
        minHeight: 1,
        border: 0,
        visibility: "hidden",
        cursor: "default",
      }}
    />
  );
};

export type NodeData = {
  title: string;
  content: string;
};

export const Nodes: Node<NodeData, "custom">[] = [
  {
    id: "1",
    type: "custom", // 追加
    data: {
      title: "ステップ1",
      content: "朝ごはんを食べる",
    },
    position: { x: 0, y: 0 },
  },
  {
    id: "2",
    type: "custom",
    data: {
      title: "ステップ2",
      content: "歯を磨く",
    },
    position: { x: 100, y: 125 },
  },
  {
    id: "3",
    type: "custom",
    data: {
      title: "ステップ3",
      content: "着替える",
    },
    position: { x: 200, y: 250 },
  },
];

type CustomNodeProps = NodeProps<Node<NodeData>>;

export const CustomNode: FC<CustomNodeProps> = (props) => {
  return (
    <>
      <CustomHandle position={Position.Top} type="target" />
      <div style={{ border: "1px solid #ddd", borderRadius: 8, padding: 8 }}>
        <h3>{props.data.title}</h3>
        <p>{props.data.content}</p>
      </div>
      <CustomHandle position={Position.Bottom} type="source" />
    </>
  );
};

// Edge
export type EdgeData = {
  inputLabel: string;
  outputLabel: string;
};

export const Edges: Edge<EdgeData, "custom">[] = [
  {
    id: "e1-2",
    source: "1",
    target: "2",
    type: "custom", // 追加
    data: {
      inputLabel: "ステップ1を出発",
      outputLabel: "ステップ2に到着",
    },
  },
  {
    id: "e2-3",
    source: "2",
    target: "3",
    type: "custom",
    data: {
      inputLabel: "ステップ2を出発",
      outputLabel: "ステップ3に到着",
    },
  },
];

type CustomEdgeProps = EdgeProps<Edge<EdgeData>>;

export const CustomEdge: FC<CustomEdgeProps> = (props) => {
  const { id, sourceX, sourceY, targetX, targetY } = props;
  const [edgePath] = getSmoothStepPath({
    sourceX,
    sourceY,
    targetX,
    targetY,
  });

  return <BaseEdge id={id} path={edgePath} />;
};

// type CustomEdgeProps = EdgeProps<Edge<EdgeData>>;
// const CustomEdge: FC<CustomEdgeProps> = (props) => {
//   const { id, sourceX, sourceY, targetX, targetY } = props;
//   const [edgePath] = getSmoothStepPath({
//     sourceX,
//     sourceY,
//     targetX,
//     targetY,
//   });

//   return (
//     <>
//       <BaseEdge id={id} path={edgePath} />
//       <EdgeLabelRenderer>
//         <span
//           style={{
//             fontSize: 8,
//             backgroundColor: "#fff",
//             position: "absolute",
//             transform: `translate(-50%, -50%) translate(${sourceX}px,${
//               sourceY + 10
//             }px)`,
//           }}
//         >
//           {props.data?.inputLabel}
//         </span>
//         <span
//           style={{
//             fontSize: 8,
//             backgroundColor: "#fff",
//             position: "absolute",
//             transform: `translate(-50%, -50%) translate(${targetX}px,${
//               targetY - 10
//             }px)`,
//           }}
//         >
//           {props.data?.outputLabel}
//         </span>
//       </EdgeLabelRenderer>
//     </>
//   );
// };
