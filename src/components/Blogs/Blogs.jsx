import React from 'react';

const Blogs = () => {
    return (
        <div>
            <div className='bg-img md:h-56 flex justify-center items-center'>
                <h2 className='font-bold text-3xl text-center'>Blog</h2>
            </div>
            <div className='px-28 pt-12 grid grid-cols-2 gap-5 justify-center pb-6'>
                {/* context API */}
                <div className='rounded-lg pb-7 px-7 pt-9' style={{ background: 'linear-gradient(90deg, rgba(126, 144, 254, 0.05) 0%, rgba(152, 115, 255, 0.05) 100%)' }}>
                    <h2 className='font-bold text-xl pb-3'>When should you use context API?</h2>
                    <p className='text-[#474747]'>Context API is a feature that allows us to share data across many components in a tree structure. In prop drilling, we have to pass down props manually to every child component that may use the prop. Context API resolves this issue.</p>
                    <p className='text-[#474747]'>We can use context API to provide <strong>user authentication</strong> data to many components.</p>
                    <p className='text-[#474747]'>To build a <strong>multilingual application</strong> we can use context API to vary the languages.</p>
                    <p className='text-[#474747]'>For <strong>Theming</strong> we can use contect API to change the theme of different components.</p>
                </div>
                {/* custom hook */}
                <div className='rounded-lg pb-7 px-7 pt-9' style={{ background: 'linear-gradient(90deg, rgba(126, 144, 254, 0.05) 0%, rgba(152, 115, 255, 0.05) 100%)' }}>
                <h2 className='font-bold text-xl pb-3'>What is custom Hook?</h2>
                    <li className='text-[#474747]'>Custom hook is a function that takes input and returns output.</li>
                     <li className='text-[#474747]'>It starts with "<strong>use</strong>" (e.g., useQuery, useMedia).</li>
                     <li className='text-[#474747]'>It returns normal, non-jsx data.</li>
                     <li className='text-[#474747]'>They can use other hooks such as useState.</li>
                </div>
                {/* useRef */}
                <div className='rounded-lg pb-7 px-7 pt-9' style={{ background: 'linear-gradient(90deg, rgba(126, 144, 254, 0.05) 0%, rgba(152, 115, 255, 0.05) 100%)' }}>
                <h2 className='font-bold text-xl pb-3'>What is useRef? How does it work?</h2>
                <p className='text-[#474747]'>
                The useRef hook is used to persist values between renders. It can be used to store a mutable value that doesn't cause a re-render when updated.<br></br>
                It can be used to directly access DOM element. It return only an Object called <strong>current</strong>. We can initialize it with 0.<br></br>
                The current value can be updated without causing a re-render. It does not change the state of the component.
                </p>
                </div>
                {/* useMemo */}
                <div className='rounded-lg pb-7 px-7 pt-9' style={{ background: 'linear-gradient(90deg, rgba(126, 144, 254, 0.05) 0%, rgba(152, 115, 255, 0.05) 100%)' }}>
                <h2 className='font-bold text-xl pb-3'>What is useMemo? How does it work? </h2>
                <p className='text-[#474747]'>
                    The useMemo hook returns a memoized value. The hook only runs when one of its dependencies update.<br></br>
                    When calling, we pass a function as the first arg and an array of dependencies as the second argument.<br></br>
                    If any dependencies change when the component re-renders, the result of the function is computed. Else, the memoized result will be returned. 
                </p>
                </div>
            </div>
        </div>
    );
};

export default Blogs;