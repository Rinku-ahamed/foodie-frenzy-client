import React from "react";
import ReactToPdf from "react-to-pdf";
const ref = React.createRef();
const Blog = () => {
  return (
    <section className="container mx-auto px-6 md:px-10 my-10">
      <div className="text-center mb-4">
        <ReactToPdf targetRef={ref} filename="blog-page.pdf">
          {({ toPdf }) => (
            <button
              onClick={toPdf}
              className="bg-red-600 px-6 py-2 rounded-md text-white me-4 font-bold"
            >
              Generate pdf
            </button>
          )}
        </ReactToPdf>
      </div>
      <div ref={ref}>
        <article className="bg-indigo-100 px-6 py-3 mb-10 rounded-md shadow-lg">
          <h2 className="text-2xl font-semibold mb-2">
            Tell us the differences between uncontrolled and controlled
            components.
          </h2>
          <p>
            In this article we going to discussion about what actually
            difference between uncontrolled and controlled. In React, A
            controlled component is bound to a value, and its changes will be
            handled in code by using event-based callbacks. These components
            rely on props passed down from the parent component to update their
            state and behavior.Uncontrolled components act more like traditional
            HTML form elements. The data for each input element is stored in the
            DOM, not in the component. Instead of writing an event handler for
            all of your state updates, you use a ref to retrieve values from the
            DOM.
          </p>
        </article>
        <article className="bg-indigo-100 px-6 py-3 mb-10 rounded-md shadow-lg">
          <h2 className="text-2xl font-semibold mb-2">
            How to validate React props using PropTypes
          </h2>
          <p>
            In this article we going to discussion about React props using
            PropTypes, Props and PropTypes are important mechanisms for passing
            read-only attributes between React components. The props are usually
            required to use correctly in the component.App.propTypes is used for
            props validation in react component. When some of the props are
            passed with an invalid type, you will get the warnings on JavaScript
            console.As your app grows, you can catch a lot of bugs with
            typechecking. For some applications, you can use JavaScript
            extensions like Flow or TypeScript to typechecks your whole
            application. But even if you don’t use those, React has some
            built-in typechecking abilities.
          </p>
        </article>
        <article className="bg-indigo-100 px-6 py-3 mb-10 rounded-md shadow-lg">
          <h2 className="text-2xl font-semibold mb-2">
            What is the difference between nodejs and express js?
          </h2>
          <p>
            In this article we going to discussion about difference between
            nodejs and express js, Express is a minimal and flexible node.js web
            application framework, providing a robust set of features for
            building single and multi-page, and hybrid web applications. The
            ExpressJS development services framework provides several
            exceptional features that make developing web apps easy and fast. On
            the other hand,Node JS is a fast JavaScript runtime environment that
            we use to build server-side applications, but it does not know how
            to perform serving files, handling requests, and handling HTTP
            methods, so this is where express js comes in. We often use Node.js
            for building back-end services like APIs like Web App or Mobile App.
          </p>
        </article>
        <article className="bg-indigo-100 px-6 py-3 mb-10 rounded-md shadow-lg">
          <h2 className="text-2xl font-semibold mb-2">
            What is a custom hook, and why will you create a custom hook?
          </h2>
          <p>
            In this article we going to discussion about Custom React JS hooks
            offer reusability as when a custom hook is created, it can be reused
            easily, which makes the code cleaner and reduces the time to write
            the code. When we want to share logic between two JavaScript
            functions, we extract it to a third function. Both components and
            Hooks are functions, so this works for them too!.If hooks are so
            similar to regular functions, you might wonder why we even have the
            “hook” concept. The reason we need this concept is because hooks are
            special. They are functions that also have state that is persisted
            under the hood by React across calls.
          </p>
        </article>
      </div>
    </section>
  );
};

export default Blog;
