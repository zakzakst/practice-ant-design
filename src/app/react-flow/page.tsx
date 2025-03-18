import {
  ReactFlow,
  Controls,
  Background,
  // BackgroundVariant,
} from "@xyflow/react";
import "@xyflow/react/dist/style.css";
import { Nodes, Edges } from "./data";

const Page = () => {
  return (
    <div>
      <p>react flow</p>
      <div style={{ width: "50vw", height: "50vh" }}>
        <ReactFlow
          nodes={Nodes}
          edges={Edges}
          // nodeTypes={}
          fitView
        >
          {/* <Background color="#ccc" variant={BackgroundVariant.Lines} /> */}
          <Background color="#ccc" />
          <Controls />
        </ReactFlow>
      </div>
      <p>react flow</p>
    </div>
  );
};

export default Page;
