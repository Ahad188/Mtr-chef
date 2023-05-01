import React from "react";

const Blog = () => {
  return (
    <div>
      <h2 className="text-center mt-3 text-gray-600 text-3xl mb-3">Some Question And ans here!!</h2>

      <div className="container mx-auto  mb-48">
        {/*  */}
        <div className="collapse mb-5">
          <input type="checkbox" />
          <div className="collapse-title text-3xl font-medium border border-base-200 bg-base-100 rounded-box ">
           <h2> Differences between uncontrolled and controlled components ?</h2>
          </div>
          <div className="collapse-content">
            <p className="text-xl">
              
              uncontrolled components are simpler to use and can work well for simple use cases
              where state management is not a concern, while controlled components offer more
              control and flexibility, at the cost of additional complexity.
            </p>
          </div>
        </div>
        {/*  */}
        <div className="collapse mb-5">
          <input type="checkbox" />
          <div className="collapse-title text-3xl font-medium border border-base-200 bg-base-100 rounded-box ">
           <h2> Tell us the difference between nodejs and express js??</h2>
          </div>
          <div className="collapse-content">
            <p className="text-xl">
              {" "}
              Node.js provides a JavaScript runtime environment for building server-side
              applications, while Express.js is a web application framework built on top of Node.js
              that provides tools and features for building web applications.
            </p>
          </div>
        </div>

         
        {/*  */}
        <div className="collapse mb-5">
          <input type="checkbox" />
          <div className="collapse-title text-3xl font-medium border border-base-200 bg-base-100 rounded-box ">
           <h2>  How to validate React props using PropTypes?</h2>
          </div>
          <div className="collapse-content">
            <p className="text-xl">
              {" "}
              A custom hook is a reusable function in React that uses one or more of the built-in
              React hooks, as well as other custom hooks, to provide functionality to components.
              The purpose of creating a custom hook is to extract stateful logic from a component
              and reuse it in other parts of an application. Custom hooks allow for code
              reusability, abstraction of implementation details, and testability. To create a
              custom hook, you define a function that encapsulates the stateful logic, use built-in
              React hooks to implement it, add any additional parameters that the hook might need,
              return any values or functions that components can use, and then use the custom hook
              in your components by calling it and destructuring the values that it returns.
            </p>
          </div>
        </div>

        
        {/*  */}
        <div className="collapse mb-5">
          <input type="checkbox" />
          <div className="collapse-title text-3xl font-medium border border-base-200 bg-base-100 rounded-box ">
           <h2>   How to validate React props using PropTypes?</h2>
          </div>
          <div className="collapse-content">
            <p className="text-xl">
              {" "}
              Props and PropTypes are important mechanisms for passing read-only attributes between
              React components. We can use React props, short for properties, to send data from one
              component to another. If a component receives the wrong type of props, it can cause
              bugs and unexpected errors in your app. However, React has an internal mechanism for
              props validation called PropTypes.
            </p>
          </div>
        </div>



        {/* <div
          tabIndex={3}
          className=" w-[650px] mx-auto m-10 collapse collapse-plus border border-base-300 bg-base-100 rounded-box"
        >
          <div className="collapse-title text-3xl font-medium ">
            How to validate React props using PropTypes?
          </div>
          <div className="collapse-content">
            <p className="text-2xl">
              {" "}
              Props and PropTypes are important mechanisms for passing read-only attributes between
              React components. We can use React props, short for properties, to send data from one
              component to another. If a component receives the wrong type of props, it can cause
              bugs and unexpected errors in your app. However, React has an internal mechanism for
              props validation called PropTypes.
            </p>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default Blog;
