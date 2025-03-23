"use client";
import {
  ReactFlow,
  Controls,
  // Background,
  // BackgroundVariant,
} from "@xyflow/react";
import "@xyflow/react/dist/style.css";
// import { Nodes, Edges, NodeTypes } from "./data";
// import { Nodes, Edges, CustomNode, CustomEdge } from "./data2";
import { MyNodes, MyEdges, myNodeTypes } from "./MyData";

// const nodeTypes = {
//   custom: CustomNode, // keyにNodeType名, valueにカスタムノードコンポーネント
// };

// const edgeTypes = {
//   custom: CustomEdge, // keyにEdgeType名, valueにカスタムエッジコンポーネント
// };

// const Page = () => {
//   return (
//     <div>
//       <p>react flow</p>
//       <div style={{ width: "50vw", height: "50vh" }}>
//         <ReactFlow nodes={Nodes} edges={Edges} nodeTypes={NodeTypes} fitView>
//           {/* <Background color="#ccc" variant={BackgroundVariant.Lines} /> */}
//           <Background color="#ccc" />
//           <Controls />
//         </ReactFlow>
//       </div>
//       <p>react flow</p>
//     </div>
//   );
// };

// const Page = () => {
//   return (
//     <div>
//       <p>react flow</p>
//       <div style={{ width: "50vw", height: "50vh" }}>
//         <ReactFlow
//           nodeTypes={nodeTypes}
//           edgeTypes={edgeTypes}
//           nodes={Nodes}
//           edges={Edges}
//         />
//       </div>
//       <p>react flow</p>
//     </div>
//   );
// };

const Page = () => {
  return (
    <div>
      <p>react flow</p>
      <div style={{ width: "50vw", height: "50vh" }}>
        <ReactFlow
          nodeTypes={myNodeTypes}
          // edgeTypes={edgeTypes}
          nodes={MyNodes}
          edges={MyEdges}
          fitView
        >
          <Controls />
        </ReactFlow>
      </div>
      <p>react flow</p>
    </div>
  );
};

export default Page;
