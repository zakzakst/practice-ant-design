"use client"
import dynamic from 'next/dynamic';
import React from 'react';
import { Worker, Viewer } from '@react-pdf-viewer/core';

const Page = () => {
  return (
    <div>
      <h1>PDF Viewer Example</h1>
        <Worker workerUrl={`https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js`}>
          <Viewer fileUrl={"/pdf/README.pdf"} />
        </Worker>
    </div>
  );
};

export default Page;
