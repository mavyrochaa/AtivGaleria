import Carousel from "./components/Carousel";
import BlogCarousel from "./components/BlogCarousel";

export default function Home() {
    return (
        <main className="min-h-screen bg-gray-50 py-8">

            <Carousel />

            <section className="text-center px-4 mt-12">
                <h1 className="text-3xl font-semibold text-gray-900">
                    Blog
                </h1>

                <p className="text-sm text-gray-500 mt-3">
                    Fique por dentro das últimas novidades do nosso blog.
                </p>

                <div className="w-40 h-px bg-gray-200 mx-auto mt-8"></div>
            </section>

            <BlogCarousel />

        </main>
    );
}
