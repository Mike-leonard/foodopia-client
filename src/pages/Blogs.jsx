import React, { createRef } from 'react';
import Pdf from "react-to-pdf";
const ref = createRef()


const Blogs = () => {
    return (
        <div>
            <div className="flex justify-center items-center gap-6">
                <h3 className="text-3xl"> Welcome to blog page</h3>

                <Pdf targetRef={ref} filename="blogs.pdf">
                    {({ toPdf }) => <button className="btn btn-primary" onClick={toPdf}>Generate Pdf</button>}
                </Pdf>
            </div>
            <div ref={ref}>
                <div tabIndex={0} className="collapse collapse-open border border-base-300 bg-base-100 rounded-box">
                    <div className="collapse-title text-xl font-medium">
                        Tell us the differences between uncontrolled and controlled components.
                    </div>
                    <div className="collapse-content">
                        <p>
                            <code className="text-red-600">Uncontrolled Component:</code> That store and manage their own state internally, and do not rely on the parent component to control their behavior. Uncontrolled components use the ref attribute to access the current value of the input, and the component itself manages any state updates based on user input.
                        </p>
                        <p>
                            <code className="text-red-600">Control Component:</code> That are fully controlled by the parent component. The parent component is responsible for managing and updating the state of the child component. Controlled components use the value attribute to set the current value of the input, and the onChange event to update the state based on user input.
                        </p>
                    </div>
                </div>
                <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
                    <div className="collapse-title text-xl font-medium">
                        How to validate React props using PropTypes
                    </div>
                    <div className="collapse-content">
                        <p>
                            Since JavaScript doesn’t have a built-in type checking solution, many developers use extensions like TypeScript and Flow. However, React has an internal mechanism for props validation called PropTypes. In this article, we’ll learn how to validate props with React PropTypes.
                        </p>

                        <p>
                            Here is an example of how react prop types work <br />
                            <code className="text-red-600">
                                MyComponent.propTypes =  name: PropTypes.string.isRequired,
                            </code> <br />
                            where name should be a string to accept.
                        </p>
                    </div>
                </div>
                <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
                    <div className="collapse-title text-xl font-medium">
                        Tell us the difference between nodejs and express js.
                    </div>
                    <div className="collapse-content">
                        <p>
                            <code className="text-red-600"> Node.js</code> is a JavaScript runtime built on Chrome's V8 JavaScript engine, which allows developers to run JavaScript code outside the browser.
                        </p>
                        <p>
                            <code className="text-red-600"> Express.js</code>  is a web application framework built on top of Node.js.Express.js makes it easy to handle HTTP requests and responses, process form data, and work with databases
                        </p>
                    </div>
                </div>
                <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
                    <div className="collapse-title text-xl font-medium">
                        What is a custom hook, and why will you create a custom hook?
                    </div>
                    <div className="collapse-content">
                        <p>
                            <code className="text-red-600">
                                A custom hook
                            </code> in React is a JavaScript function that starts with the word "use" and allows us to extract and reuse logic from our components. We can use this as repeated logic into a reusable function.
                        </p>
                        <p>
                            Custom hooks can be used to encapsulate and reuse stateful logic, such as fetching data from an API, handling form input, managing authentication, or controlling the scroll position of a component.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blogs;