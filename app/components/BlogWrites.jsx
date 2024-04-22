import React from 'react'

const BlogWrites = ({ content }) => {
    return (
        <section className="auther-wrapper bg-light_brown-400 bg-rose">
            <div className="container-fluid px-[30px]">
                <div className="py-[55px] mdscreen2:py-80 flex">
                    {
                        content.writeContent.map((res,index) => (
                            <div key={index} className="flex flex-col gap-[20px] justify-center items-center m-0 p-0 mdscreen:max-w-[500px] mdscreen:m-auto">
                                <div className="content text-center">
                                    <p>
                                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer metus eros, fringilla in pulvinar vel."
                                    </p>
                                </div>
                                <div className="title title-relative title-black">
                                    <h5>
                                        - Author
                                    </h5>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </section>
    )
}

export default BlogWrites