import React from 'react';


export const metadata = {
  title: "App Details | App Store Web",
  description: "A Next.js application with Tailwind CSS and DaisyUI.",
};

const AppsDetails = ({params}) => {
    console.log(params, "params");
    return (
        <div>
            <h2>App Details</h2>
        </div>
    );
};

export default AppsDetails;