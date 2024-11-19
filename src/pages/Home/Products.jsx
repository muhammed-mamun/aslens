    import React from "react";

    function Products() {
    const products = [
        {
        title: "Web App",
        description: "Explore our web app to practice and improve sign language skills.",
        image: "web.png", // Replace with the path to your image
        buttonText: "Try Now",
        },
        {
        title: "Mobile App",
        description: "Access sign language recognition on the go with our mobile app.",
        image: "mobile-app.png", // Replace with the path to your image
        buttonText: "Install",
        },
        {
        title: "Embedded System",
        description: "Discover our hardware solution for real-time sign language recognition.",
        image: "embedded.png", // Replace with the path to your image
        buttonText: "Learn More",
        },
    ];

    return (
        <section className="py-4 lg:py-8  rounded-2xl mt-4 lg:mt-20">
        <div className="max-w-7xl mx-auto px-4 ">
            <h2 className="text-3xl font-bold text-center text-blue-800 mb-8">Our Products</h2>
            <div className="grid grid-cols-1  lg:grid-cols-3 gap-8">
            {products.map((product, index) => (
                <div
                key={index}
                className="card lg:w-96 p-4 border-2 border-zinc-500 shadow-md hover:shadow-xl transition-shadow duration-300 rounded-lg"
                >
                <figure>
                    <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-48 object-cover rounded-t-lg bg-center"
                    />
                </figure>
                <div className="card-body p-6">
                    <h3 className="card-title font-bold text-xl text-center  text-zinc-300">{product.title}</h3>
                    <p className="text-zinc-300 my-4">{product.description}</p>
                    <button className="btn btn-primary bg-blue-700 hover:bg-blue-500">{product.buttonText}</button>
                </div>
                </div>
            ))}
            </div>
        </div>
        </section>
    );
    }

    export default Products;
