import React from 'react';

const Blog = () => {
    return (
			<div className="container">
				<div className='my-5' >
					<h2>What is the purpose of react router?</h2>
					<h4>
						React Router is a standard library for routing in React. It enables
						the navigation among views of various components in a React
						Application, allows changing the browser URL, and keeps the UI in
						sync with the URL.
					</h4>
				</div>
				<div className='my-5'>
					<h2>How does context api works?</h2>
					<h4>
						In a typical React application, data is passed top-down (parent to
						child) via props, but such usage can be cumbersome for certain types
						of props (e.g. locale preference, UI theme) that are required by
						many components within an application. Context provides a way to
						share values like these between components without having to
						explicitly pass a prop through every level of the tree.
					</h4>
				</div>
				<div className='my-5 '>
					<h2>What is useRef in react?</h2>
					<h4>
						The useRef hook is the new addition in React 16.8. Before proceeding
						to this article there is a prerequisite to know about the ref in
						react. The useRef is a hook that allows to directly create a
						reference to the DOM element in the functional component. <br />
						The useRef returns a mutable ref object. This object has a property
						called .current. The value is persisted in the refContainer.current
						property. These values are accessed from the current property of the
						returned object. The .current property could be initialised to the
						passed argument initialValue e.g. useRef(initialValue). The object
						can persist a value for a full lifetime of the component.
					</h4>
				</div>
			</div>
		);
};

export default Blog;