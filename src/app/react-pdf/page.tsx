'use client';
// https://school.learning-next.app/blog/react/react-pdf
// https://www.npmjs.com/package/react-pdf

import { useState } from 'react';
import { Document, Page as PdfPage } from 'react-pdf';

const Page = () => {
  const [numPages, setNumPages] = useState<number>();
  const [pageNumber, setPageNumber] = useState<number>(1);

  const onDocumentLoadSuccess = ({ numPages }: { numPages: number }): void => {
    setNumPages(numPages);
  }

  return (
    <div>
      {/* <Document file="" onLoadSuccess={onDocumentLoadSuccess}>
        {Array.from(new Array(numPages), (el, index) => (
          <PdfPage key={index} pageNumber={index + 1} />
        ))}
      </Document> */}
      <Document file="/pdf/README.pdf" onLoadSuccess={onDocumentLoadSuccess}>
        <PdfPage pageNumber={pageNumber} />
      </Document>
      <p>
        Page {pageNumber} of {numPages}
      </p>
    </div>
  );
  // return <div>test</div>
}

export default Page;
