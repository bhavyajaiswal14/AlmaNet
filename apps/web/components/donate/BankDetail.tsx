"use client";
import React from 'react';

// Simple Card component (wrapper)
function Card({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}): JSX.Element {
  return (
    <div className={`${className} border rounded-lg shadow-lg overflow-hidden`}>
      {children}
    </div>
  );
}

const BankDetail: React.FC = () => {
  // Developer-entered image URLs
  const imageUrl1 = "https://thumbs.dreamstime.com/b/alumni-donations-concept-icon-fundraising-appeal-abstract-idea-thin-line-illustration-supporting-colleges-universities-making-223497746.jpg";
  const imageUrl2 = "https://www.shutterstock.com/image-vector/students-interacting-each-other-making-600nw-1537715828.jpg";

  return (
    <Card className="max-w-full mx-auto my-8">
      <div className="flex p-10 bg-blue-100 h-screen w-screen">
        {/* Left Section */}
        <div className="w-1/2 flex flex-col justify-center p-8">
          <h1 className="text-5xl font-extrabold mb-8 text-black rounded-md">
            DONATE
          </h1>
          <div className="flex flex-col items-left mb-6 space-y-4">
            <div className="flex flex-col items-start">
              <p className="text-xl mb-2 text-black rounded-md">
                Bank: <span className="font-semibold">SBI000001232</span>
              </p>
              <p className="text-xl mb-2 text-black rounded-md">
                IFSC: <span className="font-semibold">SBI0000012</span>
              </p>
              <p className="text-xl mb-2 text-black rounded-md">
                Branch: <span className="font-semibold">Bhuiyanagar</span>
              </p>
            </div>
            <div className="flex items-center">
              <div className="flex flex-col items-center mr-8">
                <p className="text-xl mb-2 text-black font-semibold">Scan UPI QR Code</p>
                <div className="bg-gray-300 h-32 w-32 rounded-lg flex items-right justify-center">
                  <img
                    src="https://www.heritageit.edu/StaffPicture/Arvind.jpg"
                    alt="UPI QR Code"
                    className="w-full h-full object-contain rounded"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Right Section */}
        <div className="w-1/2 flex flex-col gap-8 p-8">
          {/* Image 1 Section */}
          <div className="flex-1 bg-blue-200 border-2 border-dashed border-orange-400 rounded-md p-4 overflow-hidden">
            <img
              src={imageUrl1}
              alt="Uploaded"
              className="w-full h-full object-contain rounded"
            />
          </div>
          {/* Image 2 Section */}
          <div className="flex-1 bg-blue-200 border-2 border-dashed border-orange-400 rounded-md p-4 overflow-hidden">
            <img
              src={imageUrl2}
              alt="Uploaded"
              className="w-full h-full object-contain rounded"
            />
          </div>
        </div>
      </div>
    </Card>
  );
};

export default BankDetail;